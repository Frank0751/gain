"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Download, ArrowRight, TrendingUp, Calendar } from "lucide-react";

import { Navbar } from "@/components/site/navbar";
import { Footer } from "@/components/site/footer";
import { ScrollToTop } from "@/components/site/scroll-to-top";
import { PageHero } from "@/components/site/page-hero";
import { SectionHeading } from "@/components/site/section-heading";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { IMPACT_REPORT_DATA } from "@/lib/data";
import { useToast } from "@/hooks/use-toast";

export default function ImpactReportPage() {
  const { toast } = useToast();
  const report = IMPACT_REPORT_DATA;

  const handleDownload = () => {
    toast({
      title: "Download started",
      description: "The Annual Impact Report 2024 PDF is downloading.",
    });
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main id="main-content" className="flex-1">
        <PageHero
          title={report.title}
          subtitle={report.summary}
          image="/images/gain/gain-media-4.jpg"
          breadcrumbs={[{ label: "Home", href: "/" }, { label: "Impact Report" }]}
        />

        {/* Highlights */}
        <section className="bg-background py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              title={`${report.year} Year in Numbers`}
              subtitle="The measurable impact we achieved together with our volunteers, partners, and communities."
            />
            <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {report.highlights.map((highlight, i) => (
                <motion.div
                  key={highlight.label}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                >
                  <Card className="card-lift h-full border-primary/15">
                    <CardContent>
                      <p className="font-display text-4xl font-extrabold text-primary sm:text-5xl">
                        {highlight.metric}
                      </p>
                      <p className="mt-2 font-display text-base font-semibold text-foreground">
                        {highlight.label}
                      </p>
                      <p className="mt-1 text-sm text-muted-foreground">
                        {highlight.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Financial breakdown */}
        <section className="bg-secondary/30 py-20 md:py-24">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              title="How We Used Your Donations"
              subtitle="Transparency is core to our values. Here is how every cedi was allocated in 2024."
            />
            <div className="mt-12 space-y-4">
              {report.financials.map((item, i) => (
                <motion.div
                  key={item.category}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="flex size-8 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                        {item.percentage}%
                      </div>
                      <span className="font-display text-base font-semibold text-foreground">
                        {item.category}
                      </span>
                    </div>
                    <TrendingUp className="size-4 text-primary/60" />
                  </div>
                  <div className="mt-2 h-3 w-full overflow-hidden rounded-full bg-secondary">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${item.percentage}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.3 + i * 0.1, ease: "easeOut" }}
                      className="h-full rounded-full bg-gradient-to-r from-primary to-accent"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Quarterly milestones */}
        <section className="bg-background py-20 md:py-24">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              title="Quarterly Milestones"
              subtitle="A timeline of our key achievements and growth throughout the year."
            />
            <div className="relative mt-12">
              <div
                aria-hidden="true"
                className="absolute left-4 top-0 h-full w-px bg-border md:left-1/2"
              />
              <ol className="space-y-8">
                {report.milestones.map((milestone, i) => (
                  <motion.li
                    key={milestone.quarter}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className={`relative flex flex-col gap-4 md:flex-row md:items-center ${
                      i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                  >
                    <span className="absolute left-4 top-1 z-10 inline-flex size-4 -translate-x-1/2 items-center justify-center rounded-full bg-primary ring-4 ring-background md:left-1/2" />
                    <div className="md:w-1/2" />
                    <div className="pl-10 md:w-1/2 md:px-6">
                      <Card className="border-border/60">
                        <CardContent>
                          <div className="flex items-center gap-2">
                            <Calendar className="size-4 text-primary" />
                            <p className="text-xs font-semibold uppercase tracking-wider text-accent-foreground">
                              {milestone.quarter}
                            </p>
                          </div>
                          <h4 className="mt-1 font-display text-base font-bold text-foreground">
                            {milestone.title}
                          </h4>
                          <p className="mt-2 text-sm text-muted-foreground">
                            {milestone.description}
                          </p>
                        </CardContent>
                      </Card>
                    </div>
                  </motion.li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* Download CTA */}
        <section className="bg-primary py-16">
          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
            <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">
              Download the Full Report
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-white/85">
              Get the complete {report.title} PDF with detailed financials, campaign stories, and community testimonials.
            </p>
            <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button
                size="lg"
                onClick={handleDownload}
                className="bg-accent text-accent-foreground shadow-lg shadow-accent/30 hover:bg-accent/90"
              >
                <Download className="size-4" />
                Download PDF (8.7 MB)
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/40 bg-white/10 text-white backdrop-blur-md hover:bg-white/20 hover:text-white"
              >
                <Link href="/donate">
                  Support Our Work
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
