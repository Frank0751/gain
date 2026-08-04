"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle2, Heart, ArrowRight, Share2 } from "lucide-react";

import { Navbar } from "@/components/site/navbar";
import { Footer } from "@/components/site/footer";
import { ScrollToTop } from "@/components/site/scroll-to-top";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ORG } from "@/lib/data";
import { useToast } from "@/hooks/use-toast";

const SHARE_TEXT = "I just donated to Green Awareness International (GAIN) to support a greener Ghana. Join me in making a difference!";

export default function ThankYouPage() {
  const { toast } = useToast();

  const onShare = async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: "Support GAIN",
          text: SHARE_TEXT,
          url: window.location.origin,
        });
      } else {
        await navigator.clipboard.writeText(`${SHARE_TEXT} ${window.location.origin}`);
        toast({ title: "Copied", description: "Share message copied to clipboard." });
      }
    } catch {
      // User cancelled
    }
  };

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
              Thank You for Your Support!
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mx-auto mt-5 max-w-md text-base leading-relaxed text-muted-foreground sm:text-lg"
            >
              Your generosity will help us plant more trees, educate more students, and clean more communities across Ghana. Together, we are building a greener future.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row"
            >
              <Button asChild size="lg">
                <Link href="/">
                  Back to Home
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/impact">See Your Impact</Link>
              </Button>
              <Button size="lg" variant="ghost" onClick={onShare}>
                <Share2 className="size-4" />
                Share
              </Button>
            </motion.div>

            {/* Impact reminder cards */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3"
            >
              <Card className="border-primary/20">
                <CardContent className="text-center">
                  <p className="font-display text-3xl font-extrabold text-primary">5</p>
                  <p className="mt-1 text-xs text-muted-foreground">Trees Planted</p>
                </CardContent>
              </Card>
              <Card className="border-primary/20">
                <CardContent className="text-center">
                  <p className="font-display text-3xl font-extrabold text-primary">10</p>
                  <p className="mt-1 text-xs text-muted-foreground">Students Educated</p>
                </CardContent>
              </Card>
              <Card className="border-primary/20">
                <CardContent className="text-center">
                  <p className="font-display text-3xl font-extrabold text-primary">10kg</p>
                  <p className="mt-1 text-xs text-muted-foreground">Waste Collected</p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-12"
            >
              <Card className="border-accent/30 bg-accent/5">
                <CardContent>
                  <div className="flex items-center gap-3">
                    <Heart className="size-5 shrink-0 text-accent-foreground" />
                    <p className="text-sm text-foreground">
                      Want to do more? <Link href="/volunteer" className="font-semibold text-primary hover:underline">Volunteer with us</Link> or <Link href="/blog" className="font-semibold text-primary hover:underline">read our blog</Link> to stay updated.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-8 text-xs text-muted-foreground"
            >
              A receipt has been sent to your email. For questions about your donation, contact us at <a href={`mailto:${ORG.email}`} className="text-primary hover:underline">{ORG.email}</a>
            </motion.p>
          </div>
        </section>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
