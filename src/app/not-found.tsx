"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Home, ArrowLeft, Leaf, Search } from "lucide-react";

import { Navbar } from "@/components/site/navbar";
import { Footer } from "@/components/site/footer";
import { ScrollToTop } from "@/components/site/scroll-to-top";
import { Button } from "@/components/ui/button";

const QUICK_LINKS = [
  { label: "About Us", href: "/about", description: "Learn about our mission" },
  { label: "Programmes", href: "/programmes", description: "Our environmental initiatives" },
  { label: "Donate", href: "/donate", description: "Support our cause" },
  { label: "Volunteer", href: "/volunteer", description: "Join our team" },
  { label: "Blog", href: "/blog", description: "Read our latest stories" },
  { label: "Contact", href: "/contact", description: "Get in touch" },
];

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main id="main-content" className="flex-1">
        <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden bg-secondary/30 py-20">
          <div className="pointer-events-none absolute -left-32 top-10 size-72 rounded-full bg-primary/5 blur-3xl" />
          <div className="pointer-events-none absolute -right-32 bottom-10 size-72 rounded-full bg-accent/5 blur-3xl" />

          <div className="relative mx-auto max-w-2xl px-4 text-center sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary"
            >
              <Leaf className="size-4" />
              Page Not Found
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-7xl font-extrabold text-primary sm:text-8xl md:text-9xl"
            >
              404
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-4 font-display text-2xl font-bold text-foreground sm:text-3xl"
            >
              This page seems to have blown away
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mx-auto mt-4 max-w-md text-base leading-relaxed text-muted-foreground"
            >
              The page you are looking for might have been moved, deleted, or never existed. Let us help you find your way back.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row"
            >
              <Button asChild size="lg">
                <Link href="/">
                  <Home className="size-4" />
                  Back to Home
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/contact">
                  <Search className="size-4" />
                  Contact Us
                </Link>
              </Button>
            </motion.div>

            {/* Quick links */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-16"
            >
              <p className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                Quick Links
              </p>
              <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
                {QUICK_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="group rounded-lg border border-border bg-background p-4 text-left transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-md"
                  >
                    <p className="font-display text-sm font-bold text-primary group-hover:text-primary">
                      {link.label}
                    </p>
                    <p className="mt-1 text-xs text-muted-foreground">
                      {link.description}
                    </p>
                  </Link>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
