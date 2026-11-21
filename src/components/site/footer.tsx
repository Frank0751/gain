"use client";

import * as React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import {
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Mail,
  Phone,
  MapPin,
  Send,
  Leaf,
  ArrowUpRight,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { ORG, NAV_LINKS, PROGRAMMES } from "@/lib/data";

const socialItems = [
  { name: "X (Twitter)", href: ORG.socials.x, icon: Twitter },
  { name: "Facebook", href: ORG.socials.facebook, icon: Facebook },
  { name: "Instagram", href: ORG.socials.instagram, icon: Instagram },
  { name: "LinkedIn", href: ORG.socials.linkedin, icon: Linkedin },
];

export function Footer() {
  const { toast } = useToast();
  const router = useRouter();
  const [email, setEmail] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  const onSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }
    setLoading(true);
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (data.success) {
        toast({
          title: "Subscribed!",
          description: "Redirecting to confirmation page...",
        });
        setEmail("");
        router.push("/newsletter/success");
      } else {
        toast({
          title: "Could not subscribe",
          description: data.message ?? "Please try again later.",
          variant: "destructive",
        });
      }
    } catch {
      toast({
        title: "Network error",
        description: "Please check your connection and try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <footer className="mt-auto border-t border-border/60 bg-secondary/40 dark:bg-card/40">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* About column */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="relative size-11 overflow-hidden rounded-full ring-2 ring-primary/30">
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
            </Link>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {ORG.bio}
            </p>
            <div className="flex flex-wrap gap-2">
              {socialItems.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.name}
                  className="inline-flex size-9 items-center justify-center rounded-full border border-border bg-background text-foreground/70 transition-all hover:-translate-y-0.5 hover:border-primary hover:bg-primary hover:text-primary-foreground"
                >
                  <s.icon className="size-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div className="space-y-4">
            <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-foreground">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="group inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    <ArrowUpRight className="size-3.5 opacity-0 transition-opacity group-hover:opacity-100" />
                    {l.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/careers"
                  className="group inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  <ArrowUpRight className="size-3.5 opacity-0 transition-opacity group-hover:opacity-100" />
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="/transparency"
                  className="group inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  <ArrowUpRight className="size-3.5 opacity-0 transition-opacity group-hover:opacity-100" />
                  Transparency
                </Link>
              </li>
            </ul>
          </div>

          {/* Programmes */}
          <div className="space-y-4">
            <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-foreground">
              Programmes
            </h3>
            <ul className="space-y-2.5">
              {PROGRAMMES.map((p) => (
                <li key={p.title}>
                  <Link
                    href="/programmes"
                    className="group inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    <Leaf className="size-3.5 text-primary/60" />
                    {p.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/donate"
                  className="group inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  <Leaf className="size-3.5 text-primary/60" />
                  Support Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact + newsletter */}
          <div className="space-y-4">
            <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-foreground">
              Stay Updated
            </h3>
            <form onSubmit={onSubscribe} className="space-y-2">
              <div className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  aria-label="Email for newsletter"
                  className="bg-background"
                />
                <Button
                  type="submit"
                  size="icon"
                  disabled={loading}
                  aria-label="Subscribe to newsletter"
                  className="bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  <Send className="size-4" />
                </Button>
              </div>
              <p className="text-xs text-muted-foreground">
                Get the latest on campaigns, events and impact.
              </p>
            </form>
            <ul className="space-y-2 pt-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <Mail className="mt-0.5 size-4 shrink-0 text-primary/70" />
                <a
                  href={`mailto:${ORG.email}`}
                  className="hover:text-primary transition-colors"
                >
                  {ORG.email}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="mt-0.5 size-4 shrink-0 text-primary/70" />
                <a
                  href={`tel:${ORG.phone}`}
                  className="hover:text-primary transition-colors"
                >
                  {ORG.phone}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 size-4 shrink-0 text-primary/70" />
                {ORG.location}
              </li>
            </ul>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border/60 pt-6 text-sm text-muted-foreground sm:flex-row"
        >
          <p>
            &copy; {new Date().getFullYear()} {ORG.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-primary transition-colors">
              Terms of Service
            </Link>
            <Link href="/faq" className="hover:text-primary transition-colors">
              FAQ
            </Link>
            <Link href="/sitemap-page" className="hover:text-primary transition-colors">
              Sitemap
            </Link>
          </div>
          <p className="flex flex-wrap items-center justify-center gap-x-1.5 text-center">
            Built with
            <Leaf className="size-3.5 text-primary" />
            for a greener Ghana by
            <a
              href="https://koombei.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-foreground transition-colors hover:text-primary"
            >
              KoomBei (koombei.com)
            </a>
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
