"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Search } from "lucide-react";

import { Navbar } from "@/components/site/navbar";
import { Footer } from "@/components/site/footer";
import { ScrollToTop } from "@/components/site/scroll-to-top";
import { PageHero } from "@/components/site/page-hero";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQS_EXTENDED, ORG } from "@/lib/data";

const CATEGORIES = ["All", "General", "Volunteering", "Donations", "Partnerships", "Education", "Events"];

export default function FaqPage() {
  const [search, setSearch] = React.useState("");
  const [category, setCategory] = React.useState("All");

  const filtered = React.useMemo(() => {
    return FAQS_EXTENDED.filter((faq) => {
      const matchesCategory = category === "All" || faq.category === category;
      const matchesSearch =
        !search ||
        faq.question.toLowerCase().includes(search.toLowerCase()) ||
        faq.answer.toLowerCase().includes(search.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [search, category]);

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main id="main-content" className="flex-1">
        <PageHero
          title="Frequently Asked Questions"
          subtitle="Find quick answers to common questions about GAIN, volunteering, donations, partnerships, and our programmes."
          image="/images/gain/gain-media-2.jpg"
          breadcrumbs={[{ label: "Home", href: "/" }, { label: "FAQ" }]}
        />

        {/* Search and filter */}
        <section className="bg-background py-12 md:py-16">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 size-5 -translate-y-1/2 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search questions..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="h-14 pl-12 text-base"
              />
            </div>
            <div className="mt-6 flex flex-wrap justify-center gap-2">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setCategory(cat)}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                    category === cat
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-foreground/70 hover:bg-primary/10 hover:text-primary"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ accordion */}
        <section className="bg-background pb-20 md:pb-28">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            {filtered.length > 0 ? (
              <Accordion type="single" collapsible className="space-y-3">
                {filtered.map((faq, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.4, delay: i * 0.03 }}
                  >
                    <Card className="border-border/60">
                      <AccordionItem value={`item-${i}`} className="border-0">
                        <AccordionTrigger className="px-5 text-left font-display text-base font-semibold hover:no-underline">
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="px-5 text-sm leading-relaxed text-muted-foreground">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    </Card>
                  </motion.div>
                ))}
              </Accordion>
            ) : (
              <div className="py-20 text-center">
                <p className="text-muted-foreground">
                  No questions found. Try a different search or category.
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Still have questions CTA */}
        <section className="bg-secondary/30 py-16">
          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
            <h2 className="font-display text-2xl font-bold text-foreground sm:text-3xl">
              Still have questions?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Our team is happy to help. Reach out and we will get back to you within 1 to 2 business days.
            </p>
            <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button asChild size="lg">
                <Link href="/contact">
                  Contact Us
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href={`mailto:${ORG.email}`}>Email Us Directly</a>
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
