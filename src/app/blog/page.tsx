"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Clock, Search, ArrowRight } from "lucide-react";

import { Navbar } from "@/components/site/navbar";
import { Footer } from "@/components/site/footer";
import { ScrollToTop } from "@/components/site/scroll-to-top";
import { PageHero } from "@/components/site/page-hero";
import { SectionHeading } from "@/components/site/section-heading";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { BLOG_POSTS } from "@/lib/data";

function formatDate(d: string) {
  try {
    return new Date(d).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  } catch {
    return d;
  }
}

const CATEGORIES = ["All", "Environment", "Advocacy", "Youth", "Action"];

export default function BlogPage() {
  const [search, setSearch] = React.useState("");
  const [category, setCategory] = React.useState("All");

  const filtered = React.useMemo(() => {
    return BLOG_POSTS.filter((post) => {
      const matchesCategory = category === "All" || post.category === category;
      const matchesSearch =
        !search ||
        post.title.toLowerCase().includes(search.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(search.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [search, category]);

  const [featured, ...rest] = filtered;

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main id="main-content" className="flex-1">
        <PageHero
          title="Blog"
          subtitle="Articles, updates, and educational content on environmental action in Ghana."
          image="/images/gain/gain-media-2.jpg"
          breadcrumbs={[{ label: "Home", href: "/" }, { label: "Blog" }]}
        />

        <section className="bg-background py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading title="From Our Blog" />

            {/* Search and filter */}
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
              <div className="relative w-full max-w-md">
                <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search articles..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="pl-10"
                />
              </div>
              <div className="flex flex-wrap gap-2">
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

            {/* Featured post */}
            {featured && (
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6 }}
                className="mt-12"
              >
                <Link href={`/blog/${featured.slug}`}>
                  <Card className="card-lift group h-full overflow-hidden border-border/60 p-0">
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                      <div className="relative aspect-[16/10] overflow-hidden lg:aspect-auto">
                        <img
                          src={featured.image}
                          alt={featured.title}
                          className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                      <CardContent className="space-y-4 p-6 md:p-8">
                        <div className="flex items-center gap-3">
                          <Link href={`/blog/category/${featured.category.toLowerCase()}`}>
                            <Badge className="border-0 bg-accent text-accent-foreground hover:bg-accent/80">
                              {featured.category}
                            </Badge>
                          </Link>
                          <span className="flex items-center gap-1 text-xs text-muted-foreground">
                            <Clock className="size-3.5" />
                            {featured.readTime}
                          </span>
                        </div>
                        <h3 className="font-display text-2xl font-bold leading-snug text-foreground">
                          {featured.title}
                        </h3>
                        <p className="text-sm leading-relaxed text-muted-foreground">
                          {featured.excerpt}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          By {featured.author} | {formatDate(featured.date)}
                        </p>
                        <Button variant="link" className="h-auto p-0 text-primary">
                          Read More
                          <ArrowRight className="size-4" />
                        </Button>
                      </CardContent>
                    </div>
                  </Card>
                </Link>
              </motion.div>
            )}

            {/* Rest of posts */}
            <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {rest.map((post, i) => (
                <motion.div
                  key={post.slug}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <Link href={`/blog/${post.slug}`}>
                    <Card className="card-lift group h-full overflow-hidden border-border/60 p-0">
                      <div className="relative aspect-[16/10] overflow-hidden">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <Badge className="absolute left-3 top-3 border-0 bg-accent text-accent-foreground shadow">
                          {post.category}
                        </Badge>
                      </div>
                      <CardContent className="space-y-2 pt-5">
                        <div className="flex items-center gap-3 text-xs text-muted-foreground">
                          <span>{formatDate(post.date)}</span>
                          <span className="flex items-center gap-1">
                            <Clock className="size-3.5" />
                            {post.readTime}
                          </span>
                        </div>
                        <h3 className="font-display text-lg font-bold leading-snug text-foreground">
                          {post.title}
                        </h3>
                        <p className="text-sm leading-relaxed text-muted-foreground">
                          {post.excerpt}
                        </p>
                        <Button variant="link" className="h-auto p-0 text-primary">
                          Read More
                          <ArrowRight className="size-4" />
                        </Button>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </div>

            {filtered.length === 0 && (
              <div className="mt-12 text-center">
                <p className="text-muted-foreground">No articles found. Try a different search or category.</p>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
