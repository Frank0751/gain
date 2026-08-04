"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Check, Shield, FileText, ArrowRight, Download } from "lucide-react";

import { Navbar } from "@/components/site/navbar";
import { Footer } from "@/components/site/footer";
import { ScrollToTop } from "@/components/site/scroll-to-top";
import { PageHero } from "@/components/site/page-hero";
import { SectionHeading } from "@/components/site/section-heading";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { TRANSPARENCY_DATA } from "@/lib/data";
import { useToast } from "@/hooks/use-toast";

export default function TransparencyPage() {
  const { toast } = useToast();
  const data = TRANSPARENCY_DATA;

  const handleDownload = (name: string) => {
    toast({
      title: "Download started",
      description: `"${name}" document download has been initiated.`,
    });
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main id="main-content" className="flex-1">
        <PageHero
          title="Financial Transparency"
          subtitle={data.summary}
          image="/images/gain/gain-media-1.jpg"
          breadcrumbs={[{ label: "Home", href: "/" }, { label: "Transparency" }]}
        />

        {/* Registration status */}
        <section className="bg-background py-20 md:py-28">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <Card className="border-primary/20">
              <CardContent>
                <div className="flex items-start gap-4">
                  <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Shield className="size-6" />
                  </div>
                  <div className="space-y-2">
                    <h2 className="font-display text-xl font-bold text-foreground">
                      Registration Status
                    </h2>
                    <div className="grid grid-cols-1 gap-2 text-sm sm:grid-cols-2">
                      <div>
                        <span className="font-semibold text-foreground">Entity: </span>
                        <span className="text-muted-foreground">{data.registration.entity}</span>
                      </div>
                      <div>
                        <span className="font-semibold text-foreground">Type: </span>
                        <span className="text-muted-foreground">{data.registration.type}</span>
                      </div>
                      <div>
                        <span className="font-semibold text-foreground">Country: </span>
                        <span className="text-muted-foreground">{data.registration.country}</span>
                      </div>
                      <div>
                        <span className="font-semibold text-foreground">Status: </span>
                        <Badge variant="secondary" className="border-0 bg-primary/10 text-primary">
                          {data.registration.status}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Funding sources */}
        <section className="bg-secondary/30 py-20 md:py-24">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              title="Our Funding Sources"
              subtitle="We are funded by a diverse mix of individual donors, corporate partners, grants, and in-kind support."
            />
            <div className="mt-12 space-y-4">
              {data.funding.map((source, i) => (
                <motion.div
                  key={source.source}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="flex size-10 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                        {source.percentage}%
                      </div>
                      <div>
                        <p className="font-display text-base font-semibold text-foreground">
                          {source.source}
                        </p>
                        <p className="text-xs text-muted-foreground">{source.description}</p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-2 h-2.5 w-full overflow-hidden rounded-full bg-secondary">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${source.percentage}%` }}
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

        {/* Spending breakdown */}
        <section className="bg-background py-20 md:py-24">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              title="How We Spend"
              subtitle="Every cedi is allocated carefully to maximize environmental impact while maintaining sustainable operations."
            />
            <div className="mt-12 space-y-4">
              {data.spending.map((item, i) => (
                <motion.div
                  key={item.category}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="flex size-10 items-center justify-center rounded-full bg-accent/10 text-sm font-bold text-accent-foreground">
                        {item.percentage}%
                      </div>
                      <div>
                        <p className="font-display text-base font-semibold text-foreground">
                          {item.category}
                        </p>
                        <p className="text-xs text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-2 h-2.5 w-full overflow-hidden rounded-full bg-secondary">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${item.percentage}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.3 + i * 0.1, ease: "easeOut" }}
                      className="h-full rounded-full bg-gradient-to-r from-accent to-primary"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Commitments */}
        <section className="bg-secondary/30 py-20 md:py-24">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              title="Our Commitments"
              subtitle="We hold ourselves to the highest standards of accountability and transparency."
            />
            <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {data.commitments.map((commitment, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                >
                  <Card className="h-full border-border/60">
                    <CardContent className="flex items-start gap-3">
                      <Check className="mt-0.5 size-5 shrink-0 text-primary" />
                      <p className="text-sm leading-relaxed text-foreground">{commitment}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Policies */}
        <section className="bg-background py-20 md:py-24">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              title="Our Policies"
              subtitle="We maintain comprehensive policies to ensure ethical, legal, and responsible operations."
            />
            <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {data.policies.map((policy, i) => (
                <motion.div
                  key={policy.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                >
                  <Card className="card-lift h-full border-border/60">
                    <CardContent className="space-y-3">
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                          <FileText className="size-5" />
                        </div>
                        <Button
                          variant="ghost"
                          size="icon"
                          aria-label={`Download ${policy.name}`}
                          onClick={() => handleDownload(policy.name)}
                        >
                          <Download className="size-4" />
                        </Button>
                      </div>
                      <div>
                        <h3 className="font-display text-base font-bold text-foreground">
                          {policy.name}
                        </h3>
                        <p className="mt-1 text-sm text-muted-foreground">
                          {policy.description}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-primary py-16">
          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
            <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">
              Questions About Our Finances?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-white/85">
              We welcome questions about how we operate. Reach out and we will be happy to provide more information.
            </p>
            <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                <Link href="/contact">
                  Contact Us
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/40 bg-white/10 text-white backdrop-blur-md hover:bg-white/20 hover:text-white">
                <Link href="/impact-report">View Impact Report</Link>
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
