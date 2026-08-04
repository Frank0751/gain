"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { Navbar } from "@/components/site/navbar";
import { Footer } from "@/components/site/footer";
import { ScrollToTop } from "@/components/site/scroll-to-top";
import { PageHero } from "@/components/site/page-hero";
import { Card, CardContent } from "@/components/ui/card";
import { BLOG_POSTS, NAV_LINKS } from "@/lib/data";

const PAGE_GROUPS = [
  {
    title: "Main Pages",
    pages: [
      { label: "Home", href: "/", description: "Homepage with mission, campaigns, and impact overview" },
      { label: "About Us", href: "/about", description: "Our story, mission, vision, values, and team" },
      { label: "Our Programmes", href: "/programmes", description: "Skills Development, Public Education, and Environmental Action" },
      { label: "Our Impact", href: "/impact", description: "Impact statistics, stories, and campaign progress" },
      { label: "Gallery", href: "/gallery", description: "Photos from our campaigns and community drives" },
    ],
  },
  {
    title: "Get Involved",
    pages: [
      { label: "Volunteer", href: "/volunteer", description: "Join GAIN as a volunteer and help drive change" },
      { label: "Donate", href: "/donate", description: "Support our mission with one-time or monthly donations" },
      { label: "Partner With Us", href: "/partner", description: "Partner with GAIN as a corporate, school, or NGO partner" },
      { label: "Events", href: "/events", description: "Upcoming and past events including tree planting and clean-ups" },
      { label: "Contact", href: "/contact", description: "Get in touch with GAIN for enquiries" },
    ],
  },
  {
    title: "Resources and Information",
    pages: [
      { label: "Blog", href: "/blog", description: "Articles, updates, and educational content" },
      { label: "Resources", href: "/resources", description: "Free educational materials, guides, and toolkits" },
      { label: "Annual Impact Report", href: "/impact-report", description: "Comprehensive annual report with metrics and financials" },
      { label: "FAQ", href: "/faq", description: "Frequently asked questions about GAIN" },
    ],
  },
  {
    title: "Legal",
    pages: [
      { label: "Privacy Policy", href: "/privacy", description: "How we collect, use, and protect your information" },
      { label: "Terms of Service", href: "/terms", description: "Terms and conditions for using our website" },
    ],
  },
];

export default function SitemapPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main id="main-content" className="flex-1">
        <PageHero
          title="Sitemap"
          subtitle="Find any page on the GAIN website. Browse all our pages organized by category."
          image="/images/gain/gain-media-5.jpg"
          breadcrumbs={[{ label: "Home", href: "/" }, { label: "Sitemap" }]}
        />

        <section className="bg-background py-20 md:py-28">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="space-y-12">
              {PAGE_GROUPS.map((group, gIdx) => (
                <motion.div
                  key={group.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: gIdx * 0.1 }}
                >
                  <h2 className="font-display text-2xl font-bold text-foreground sm:text-3xl">
                    {group.title}
                  </h2>
                  <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                    {group.pages.map((page) => (
                      <Link
                        key={page.href}
                        href={page.href}
                        className="group flex items-start gap-3 rounded-lg border border-border bg-card p-4 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-md"
                      >
                        <div className="flex-1">
                          <h3 className="font-display text-base font-bold text-primary group-hover:text-primary">
                            {page.label}
                          </h3>
                          <p className="mt-1 text-sm text-muted-foreground">
                            {page.description}
                          </p>
                          <p className="mt-2 text-xs font-mono text-muted-foreground/70">
                            {page.href}
                          </p>
                        </div>
                        <ArrowRight className="mt-1 size-4 shrink-0 text-muted-foreground transition-colors group-hover:text-primary" />
                      </Link>
                    ))}
                  </div>
                </motion.div>
              ))}

              {/* Blog posts */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="font-display text-2xl font-bold text-foreground sm:text-3xl">
                  Blog Posts
                </h2>
                <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {BLOG_POSTS.map((post) => (
                    <Link
                      key={post.slug}
                      href={`/blog/${post.slug}`}
                      className="group flex items-start gap-3 rounded-lg border border-border bg-card p-4 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-md"
                    >
                      <div className="flex-1">
                        <h3 className="font-display text-base font-bold text-primary">
                          {post.title}
                        </h3>
                        <p className="mt-1 text-sm text-muted-foreground">
                          {post.category}
                        </p>
                      </div>
                      <ArrowRight className="mt-1 size-4 shrink-0 text-muted-foreground transition-colors group-hover:text-primary" />
                    </Link>
                  ))}
                </div>
              </motion.div>

              {/* Blog categories */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="font-display text-2xl font-bold text-foreground sm:text-3xl">
                  Blog Categories
                </h2>
                <div className="mt-6 flex flex-wrap gap-3">
                  {["Environment", "Advocacy", "Youth", "Action"].map((cat) => (
                    <Link
                      key={cat}
                      href={`/blog/category/${cat.toLowerCase()}`}
                      className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium transition-all hover:-translate-y-0.5 hover:border-primary hover:bg-primary hover:text-primary-foreground"
                    >
                      {cat}
                      <ArrowRight className="size-3.5" />
                    </Link>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
