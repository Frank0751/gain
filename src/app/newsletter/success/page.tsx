"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle2, Mail, ArrowRight, Bell } from "lucide-react";

import { Navbar } from "@/components/site/navbar";
import { Footer } from "@/components/site/footer";
import { ScrollToTop } from "@/components/site/scroll-to-top";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const WHAT_TO_EXPECT = [
  { title: "Campaign Updates", description: "Be the first to know about new campaigns, tree-planting drives, and clean-up events." },
  { title: "Impact Stories", description: "Read real stories from the communities and young people we work with across Ghana." },
  { title: "Event Invitations", description: "Get invited to our events and volunteer opportunities before they go public." },
  { title: "Educational Content", description: "Receive tips, guides, and resources on how to live more sustainably." },
];

export default function NewsletterSuccessPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main id="main-content" className="flex-1">
        <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden bg-secondary/30 py-20">
          <div className="pointer-events-none absolute -left-32 top-10 size-72 rounded-full bg-primary/5 blur-3xl" />
          <div className="pointer-events-none absolute -right-32 bottom-10 size-72 rounded-full bg-accent/5 blur-3xl" />

          <div className="relative mx-auto max-w-2xl px-4 text-center sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, type: "spring" }}
              className="mx-auto mb-6 flex size-20 items-center justify-center rounded-full bg-primary/10"
            >
              <CheckCircle2 className="size-12 text-primary" />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-4xl font-extrabold text-foreground sm:text-5xl"
            >
              You are Subscribed!
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mx-auto mt-5 max-w-md text-base leading-relaxed text-muted-foreground sm:text-lg"
            >
              Thank you for joining the GAIN community. Watch your inbox for campaign updates, event invitations, and impact stories from across Ghana.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm text-primary"
            >
              <Mail className="size-4" />
              Check your email for a confirmation message
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row"
            >
              <Button asChild size="lg">
                <Link href="/">
                  Back to Home
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/blog">Read Our Blog</Link>
              </Button>
            </motion.div>

            {/* What to expect */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-12"
            >
              <div className="mb-6 flex items-center justify-center gap-2">
                <Bell className="size-5 text-accent-foreground" />
                <h2 className="font-display text-xl font-bold text-foreground">
                  What to Expect
                </h2>
              </div>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {WHAT_TO_EXPECT.map((item, i) => (
                  <Card key={i} className="border-primary/20 text-left">
                    <CardContent>
                      <h3 className="font-display text-base font-bold text-primary">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-sm text-muted-foreground">
                        {item.description}
                      </p>
                    </CardContent>
                  </Card>
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
