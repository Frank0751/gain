"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, Moon, Sun, Heart, Leaf, Search, ChevronDown } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { SearchCommandPalette } from "@/components/site/search-command-palette";
import { NAV_GROUPS, NAV_LINKS, ORG } from "@/lib/data";
import { cn } from "@/lib/utils";

export function Navbar() {
  const { theme, setTheme } = useTheme();
  const pathname = usePathname();
  const [mounted, setMounted] = React.useState(false);
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [searchOpen, setSearchOpen] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  React.useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setSearchOpen(true);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  const isGroupActive = (group: (typeof NAV_GROUPS)[number]) => {
    if (isActive(group.href)) return true;
    if (group.children) {
      return group.children.some((child) => isActive(child.href));
    }
    return false;
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed inset-x-0 top-0 z-50 glass border-b border-border/60 shadow-sm"
    >
      <nav
        className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8"
        aria-label="Primary navigation"
      >
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2.5 group"
          aria-label={`${ORG.name} home`}
        >
          <div className="relative size-10 overflow-hidden rounded-full ring-2 ring-primary/30 transition-transform group-hover:scale-105">
            <img
              src="/gain-logo.jpg"
              alt="GAIN logo"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-display text-xl font-extrabold tracking-tight text-primary">
              GAIN
            </span>
            <span className="hidden text-[10px] font-medium uppercase tracking-wider text-muted-foreground sm:block">
              Green Awareness International
            </span>
          </div>
        </Link>

        {/* Desktop nav with dropdowns */}
        <div className="hidden items-center gap-1 lg:flex">
          {NAV_GROUPS.map((group) => {
            if (!group.children) {
              return (
                <Link
                  key={group.label}
                  href={group.href}
                  className={cn(
                    "animated-underline rounded-md px-3 py-2 text-sm font-medium transition-colors",
                    isActive(group.href)
                      ? "text-primary"
                      : "text-foreground/70 hover:text-primary"
                  )}
                >
                  {group.label}
                </Link>
              );
            }

            return (
              <DropdownMenu key={group.label}>
                <DropdownMenuTrigger asChild>
                  <button
                    className={cn(
                      "flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium transition-colors",
                      isGroupActive(group)
                        ? "text-primary"
                        : "text-foreground/70 hover:text-primary"
                    )}
                  >
                    {group.label}
                    <ChevronDown className="size-3.5 opacity-60" />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  align="center"
                  className="w-64"
                  sideOffset={8}
                >
                  {group.children.map((child) => (
                    <DropdownMenuItem key={child.href} asChild>
                      <Link
                        href={child.href}
                        className={cn(
                          "flex flex-col items-start gap-0.5",
                          isActive(child.href) && "bg-primary/5"
                        )}
                      >
                        <span className="text-sm font-semibold text-foreground">
                          {child.label}
                        </span>
                        <span className="text-xs text-muted-foreground">
                          {child.description}
                        </span>
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            );
          })}
        </div>

        {/* Right actions */}
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            aria-label="Search"
            onClick={() => setSearchOpen(true)}
            className="text-foreground/80 hover:text-primary"
          >
            <Search className="size-5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            aria-label="Toggle theme"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="text-foreground/80 hover:text-primary"
          >
            {mounted ? (
              theme === "dark" ? (
                <Sun className="size-5" />
              ) : (
                <Moon className="size-5" />
              )
            ) : (
              <Sun className="size-5 opacity-0" />
            )}
          </Button>

          <Button
            asChild
            className="hidden bg-accent text-accent-foreground shadow-sm hover:bg-accent/90 sm:inline-flex"
          >
            <Link href="/donate">
              <Heart className="size-4" />
              Donate
            </Link>
          </Button>

          {/* Mobile menu */}
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden"
                aria-label="Open menu"
              >
                <Menu className="size-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80 max-w-[85vw] overflow-y-auto">
              <div className="flex items-center gap-2.5 border-b pb-4">
                <div className="relative size-10 overflow-hidden rounded-full ring-2 ring-primary/30">
                  <img
                    src="/gain-logo.jpg"
                    alt="GAIN logo"
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                </div>
                <div className="flex flex-col leading-none">
                  <span className="font-display text-lg font-extrabold text-primary">
                    GAIN
                  </span>
                  <span className="text-[10px] uppercase tracking-wider text-muted-foreground">
                    Green Awareness International
                  </span>
                </div>
              </div>

              <nav className="mt-4 flex flex-col gap-1" aria-label="Mobile navigation">
                {NAV_GROUPS.map((group, i) => (
                  <motion.div
                    key={group.label}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * i }}
                  >
                    {group.children ? (
                      <div className="space-y-1">
                        <p className="px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                          {group.label}
                        </p>
                        {group.children.map((child) => (
                          <SheetClose asChild key={child.href}>
                            <Link
                              href={child.href}
                              className={cn(
                                "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors hover:bg-accent/20 hover:text-primary",
                                isActive(child.href)
                                  ? "bg-primary/10 text-primary"
                                  : "text-foreground/80"
                              )}
                            >
                              <Leaf className="size-4 text-primary/60" />
                              {child.label}
                            </Link>
                          </SheetClose>
                        ))}
                      </div>
                    ) : (
                      <SheetClose asChild>
                        <Link
                          href={group.href}
                          className={cn(
                            "flex items-center gap-3 rounded-lg px-3 py-3 text-sm font-medium transition-colors hover:bg-accent/20 hover:text-primary",
                            isActive(group.href)
                              ? "bg-primary/10 text-primary"
                              : "text-foreground/80"
                          )}
                        >
                          <Leaf className="size-4 text-primary/60" />
                          {group.label}
                        </Link>
                      </SheetClose>
                    )}
                  </motion.div>
                ))}
              </nav>

              <div className="mt-auto border-t pt-4">
                <SheetClose asChild>
                  <Button
                    asChild
                    className="w-full bg-accent text-accent-foreground hover:bg-accent/90"
                  >
                    <Link href="/donate">
                      <Heart className="size-4" />
                      Donate Now
                    </Link>
                  </Button>
                </SheetClose>
                <p className="mt-3 text-center text-xs text-muted-foreground">
                  {ORG.email}
                </p>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>

      <AnimatePresence />
      <SearchCommandPalette open={searchOpen} onOpenChange={setSearchOpen} />
    </motion.header>
  );
}
