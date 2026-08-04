"use client";

import * as React from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import ReactMarkdown from "react-markdown";
import { ArrowLeft, Clock, Calendar, ArrowRight, Printer } from "lucide-react";

import { Navbar } from "@/components/site/navbar";
import { Footer } from "@/components/site/footer";
import { ScrollToTop } from "@/components/site/scroll-to-top";
import { ReadingProgress } from "@/components/site/reading-progress";
import { BlogPostJsonLd } from "@/components/site/json-ld";
import { SocialShare } from "@/components/site/social-share";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { BLOG_POSTS, ORG } from "@/lib/data";
import { useToast } from "@/hooks/use-toast";

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

export default function BlogPostPage() {
  const params = useParams();
  const slug = params.slug as string;
  const { toast } = useToast();

  const post = BLOG_POSTS.find((p) => p.slug === slug);
  const relatedPosts = BLOG_POSTS.filter((p) => p.slug !== slug).slice(0, 3);

  if (!post) {
    return (
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex flex-1 items-center justify-center px-4">
          <div className="text-center">
            <h1 className="font-display text-4xl font-extrabold text-foreground">
              Post Not Found
            </h1>
            <p className="mt-4 text-muted-foreground">
              The blog post you are looking for does not exist.
            </p>
            <Button asChild className="mt-6">
              <Link href="/blog">
                <ArrowLeft className="size-4" />
                Back to Blog
              </Link>
            </Button>
          </div>
        </main>
        <Footer />
        <ScrollToTop />
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <ReadingProgress />
      <BlogPostJsonLd post={post} />
      <main id="main-content" className="flex-1">
        {/* Hero with image */}
        <section className="relative flex min-h-[50vh] items-end overflow-hidden pt-16">
          <div className="absolute inset-0 z-0">
            <img
              src={post.image}
              alt={post.title}
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/70 to-primary/40" />
          </div>
          <div className="relative z-10 mx-auto w-full max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
            <Link
              href="/blog"
              className="mb-4 inline-flex items-center gap-2 text-sm font-medium text-white/80 transition-colors hover:text-white"
            >
              <ArrowLeft className="size-4" />
              Back to Blog
            </Link>
            <Badge className="border-0 bg-accent text-accent-foreground">
              {post.category}
            </Badge>
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mt-4 font-display text-3xl font-extrabold leading-tight text-white sm:text-4xl md:text-5xl"
            >
              {post.title}
            </motion.h1>
            <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-white/80">
              <span>By {post.author}</span>
              <span className="flex items-center gap-1.5">
                <Calendar className="size-4" />
                {formatDate(post.date)}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="size-4" />
                {post.readTime}
              </span>
            </div>
          </div>
        </section>

        {/* Article content */}
        <article className="bg-background py-16 md:py-24">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <p className="text-xl font-medium leading-relaxed text-foreground">
                {post.excerpt}
              </p>
              <div className="blog-content">
                <ReactMarkdown
                  components={{
                    h2: ({ children }) => (
                      <h2 className="mt-8 font-display text-2xl font-bold text-foreground">{children}</h2>
                    ),
                    h3: ({ children }) => (
                      <h3 className="mt-6 font-display text-xl font-bold text-foreground">{children}</h3>
                    ),
                    p: ({ children }) => (
                      <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">{children}</p>
                    ),
                    ul: ({ children }) => (
                      <ul className="mt-4 space-y-2 text-base text-muted-foreground sm:text-lg">{children}</ul>
                    ),
                    ol: ({ children }) => (
                      <ol className="mt-4 list-decimal space-y-2 pl-6 text-base text-muted-foreground sm:text-lg">{children}</ol>
                    ),
                    li: ({ children }) => {
                      return <li className="leading-relaxed">{children}</li>;
                    },
                    strong: ({ children }) => (
                      <strong className="font-semibold text-foreground">{children}</strong>
                    ),
                    hr: () => (
                      <hr className="my-8 border-border" />
                    ),
                    blockquote: ({ children }) => (
                      <blockquote className="mt-4 border-l-4 border-accent bg-secondary/40 px-4 py-2 italic text-foreground">
                        {children}
                      </blockquote>
                    ),
                    a: ({ href, children }) => (
                      <a href={href} className="text-primary underline hover:text-primary/80" target="_blank" rel="noopener noreferrer">
                        {children}
                      </a>
                    ),
                    code: ({ children }) => (
                      <code className="rounded bg-secondary px-1.5 py-0.5 font-mono text-sm text-foreground">{children}</code>
                    ),
                  }}
                >
                  {post.content}
                </ReactMarkdown>
              </div>
            </motion.div>

            {/* Share */}
            <div className="mt-12 flex flex-col gap-4 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
              <SocialShare title={post.title} excerpt={post.excerpt} slug={post.slug} />
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm" onClick={() => window.print()}>
                  <Printer className="size-4" />
                  Print
                </Button>
                <Button asChild variant="link" className="text-primary">
                  <Link href="/contact">
                    Get Involved
                    <ArrowRight className="size-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </article>

        {/* Related posts */}
        <section className="bg-secondary/30 py-16 md:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="font-display text-2xl font-bold text-foreground sm:text-3xl">
              Related Articles
            </h2>
            <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
              {relatedPosts.map((related, i) => (
                <motion.div
                  key={related.slug}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <Link href={`/blog/${related.slug}`}>
                    <Card className="card-lift group h-full overflow-hidden border-border/60 p-0">
                      <div className="relative aspect-[16/10] overflow-hidden">
                        <img
                          src={related.image}
                          alt={related.title}
                          className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <Badge className="absolute left-3 top-3 border-0 bg-accent text-accent-foreground shadow">
                          {related.category}
                        </Badge>
                      </div>
                      <CardContent className="space-y-2 pt-4">
                        <p className="text-xs text-muted-foreground">{formatDate(related.date)}</p>
                        <h3 className="font-display text-base font-bold leading-snug text-foreground">
                          {related.title}
                        </h3>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
