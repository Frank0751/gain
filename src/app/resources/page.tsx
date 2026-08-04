"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Download, FileText, Search, Filter } from "lucide-react";

import { Navbar } from "@/components/site/navbar";
import { Footer } from "@/components/site/footer";
import { ScrollToTop } from "@/components/site/scroll-to-top";
import { PageHero } from "@/components/site/page-hero";
import { SectionHeading } from "@/components/site/section-heading";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { RESOURCES } from "@/lib/data";
import { useToast } from "@/hooks/use-toast";

const CATEGORIES = ["All", "Environmental Action", "Education", "Sustainability", "Youth Skills", "Reports", "Advocacy", "Volunteering"];

export default function ResourcesPage() {
  const { toast } = useToast();
  const [search, setSearch] = React.useState("");
  const [category, setCategory] = React.useState("All");

  const filtered = React.useMemo(() => {
    return RESOURCES.filter((resource) => {
      const matchesCategory = category === "All" || resource.category === category;
      const matchesSearch =
        !search ||
        resource.title.toLowerCase().includes(search.toLowerCase()) ||
        resource.description.toLowerCase().includes(search.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [search, category]);

  const handleDownload = (title: string) => {
    toast({
      title: "Download started",
      description: `"${title}" download has been initiated.`,
    });
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main id="main-content" className="flex-1">
        <PageHero
          title="Resources and Downloads"
          subtitle="Free educational materials, guides, and toolkits to help you drive environmental change in your community."
          image="/images/gain/gain-media-2.jpg"
          breadcrumbs={[{ label: "Home", href: "/" }, { label: "Resources" }]}
        />

        {/* Search and filter */}
        <section className="bg-background py-12 md:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
              <div className="relative w-full max-w-md">
                <Search className="absolute left-3 top-1/2 size-5 -translate-y-1/2 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search resources..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="pl-10"
                />
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Filter className="size-4" />
                {filtered.length} of {RESOURCES.length} resources
              </div>
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

        {/* Resources grid */}
        <section className="bg-background pb-20 md:pb-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {filtered.length > 0 ? (
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {filtered.map((resource, i) => (
                  <motion.div
                    key={resource.title}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.5, delay: i * 0.08 }}
                  >
                    <Card className="card-lift flex h-full flex-col border-border/60">
                      <CardContent className="flex flex-1 flex-col space-y-4">
                        <div className="flex items-start justify-between gap-3">
                          <div className="flex size-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                            <FileText className="size-6" />
                          </div>
                          <Badge variant="secondary" className="border-0 bg-primary/10 text-primary">
                            {resource.category}
                          </Badge>
                        </div>
                        <div className="flex-1 space-y-2">
                          <h3 className="font-display text-lg font-bold leading-snug text-foreground">
                            {resource.title}
                          </h3>
                          <p className="text-sm leading-relaxed text-muted-foreground">
                            {resource.description}
                          </p>
                        </div>
                        <div className="flex items-center justify-between gap-3 border-t border-border pt-3">
                          <div className="text-xs text-muted-foreground">
                            <p>{resource.type}</p>
                            <p>{resource.pages} pages | {resource.size}</p>
                          </div>
                          <Button
                            size="sm"
                            onClick={() => handleDownload(resource.title)}
                          >
                            <Download className="size-4" />
                            Download
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="py-20 text-center">
                <p className="text-muted-foreground">
                  No resources found. Try a different search or category.
                </p>
              </div>
            )}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-secondary/30 py-16">
          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
            <h2 className="font-display text-2xl font-bold text-foreground sm:text-3xl">
              Need a custom resource?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              If you need materials tailored to your school, organization, or community, we can help. Reach out to discuss your needs.
            </p>
            <div className="mt-6">
              <Button asChild size="lg">
                <Link href="/contact">Contact Us</Link>
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
