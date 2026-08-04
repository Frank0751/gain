"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";

import { Navbar } from "@/components/site/navbar";
import { Footer } from "@/components/site/footer";
import { ScrollToTop } from "@/components/site/scroll-to-top";
import { PageHero } from "@/components/site/page-hero";
import { Button } from "@/components/ui/button";
import { PROGRAMMES } from "@/lib/data";

export default function ProgrammesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main id="main-content" className="flex-1">
        <PageHero
          title="Our Programmes"
          subtitle="Three interconnected programmes that equip, educate, and mobilize young Ghanaians for environmental change."
          image="/images/gain/gain-media-2.jpg"
          breadcrumbs={[{ label: "Home", href: "/" }, { label: "Programmes" }]}
        />

        <section className="bg-background py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="space-y-20">
              {PROGRAMMES.map((programme, i) => (
                <motion.div
                  key={programme.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6 }}
                  className={`grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16 ${
                    i % 2 === 1 ? "lg:[&>div:first-child]:order-2" : ""
                  }`}
                >
                  <div className="relative">
                    <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-xl">
                      <img
                        src={programme.image}
                        alt={programme.title}
                        className="absolute inset-0 h-full w-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
                    </div>
                  </div>

                  <div className="space-y-5">
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-wider text-primary">
                        Programme 0{i + 1}
                      </p>
                      <h2 className="mt-2 font-display text-3xl font-extrabold text-foreground sm:text-4xl">
                        {programme.title}
                      </h2>
                      <p className="mt-2 text-lg font-medium text-accent-foreground">
                        {programme.tagline}
                      </p>
                    </div>
                    <p className="text-base leading-relaxed text-muted-foreground">
                      {programme.description}
                    </p>
                    <ul className="space-y-3">
                      {programme.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3">
                          <Check className="mt-0.5 size-5 shrink-0 text-primary" />
                          <span className="text-sm text-foreground sm:text-base">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-20 rounded-2xl bg-secondary/40 p-8 text-center md:p-12">
              <h2 className="font-display text-2xl font-bold text-foreground sm:text-3xl">
                Want to support or partner on a programme?
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
                Your contribution directly funds our skills workshops, education drives, and environmental action campaigns.
              </p>
              <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Button asChild size="lg">
                  <Link href="/donate">
                    Support Our Work
                    <ArrowRight className="size-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="/contact">Get Involved</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
