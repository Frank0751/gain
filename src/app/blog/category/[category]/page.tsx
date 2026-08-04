"use client";

import * as React from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { Clock, ArrowRight, ArrowLeft } from "lucide-react";

import { Navbar } from "@/components/site/navbar";
import { Footer } from "@/components/site/footer";
import { ScrollToTop } from "@/components/site/scroll-to-top";
import { PageHero } from "@/components/site/page-hero";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BLOG_POSTS } from "@/lib/data";

const CATEGORIES = ["All", "Environment", "Advocacy", "Youth", "Action"];

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

function titleCase(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export default function BlogCategoryPage() {
  const params = useParams();
  const category = decodeURIComponent(params.category as string);

  const posts = React.useMemo(() => {
    if (!category || category.toLowerCase() === "all") return BLOG_POSTS;
    return BLOG_POSTS.filter((p) => p.category.toLowerCase() === category.toLowerCase());
  }, [category]);

  const displayName = category ? titleCase(category) : "All";

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main id="main-content" className="flex-1">
        <PageHero
          title={`${displayName} Articles`}
          subtitle={`Browse all blog posts in the ${displayName.toLowerCase()} category.`}
          image="/images/gain/gain-media-2.jpg"
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Blog", href: "/blog" },
            { label: displayName },
          ]}
        />

        <section className="bg-background py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* Category filter */}
            <div className="flex flex-wrap justify-center gap-2">
              {CATEGORIES.map((cat) => {
                const isActive = cat.toLowerCase() === category?.toLowerCase();
                return (
                  <Link
                    key={cat}
                    href={cat === "All" ? "/blog" : `/blog/category/${cat.toLowerCase()}`}
                    className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                      isActive
                        ? "bg-primary text-primary-foreground"
                        : "bg-secondary text-foreground/70 hover:bg-primary/10 hover:text-primary"
                    }`}
                  >
                    {cat}
                  </Link>
                );
              })}
            </div>

            {/* Back to blog */}
            <div className="mt-6 text-center">
              <Link
                href="/blog"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
              >
                <ArrowLeft className="size-4" />
                Back to All Articles
              </Link>
            </div>

            {/* Posts grid */}
            {posts.length > 0 ? (
              <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {posts.map((post, i) => (
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
            ) : (
              <div className="mt-12 py-20 text-center">
                <p className="text-muted-foreground">
                  No articles found in this category.
                </p>
                <Button asChild className="mt-4">
                  <Link href="/blog">View All Articles</Link>
                </Button>
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
