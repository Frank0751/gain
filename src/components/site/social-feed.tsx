"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Twitter, Instagram, Facebook, Linkedin, ExternalLink } from "lucide-react";


import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SOCIAL_POSTS, ORG } from "@/lib/data";

const platformIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  X: Twitter,
  Instagram,
  Facebook,
  LinkedIn: Linkedin,
};

export function SocialFeed() {
  return (
    <section className="bg-background py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            Follow Our Journey
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-lg">
            Stay connected with our latest campaigns, events, and impact stories across our social media platforms.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          {SOCIAL_POSTS.map((post, i) => {
            const Icon = platformIcons[post.platform] ?? Twitter;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <a href={post.link} target="_blank" rel="noopener noreferrer">
                  <Card className="card-lift h-full border-border/60 transition-colors hover:border-primary/40">
                    <CardContent className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="flex size-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                            <Icon className="size-5" />
                          </div>
                          <div>
                            <p className="font-semibold text-foreground">{post.handle}</p>
                            <p className="text-xs text-muted-foreground">{post.date}</p>
                          </div>
                        </div>
                        <Badge variant="secondary" className="border-0 bg-primary/10 text-primary">
                          {post.platform}
                        </Badge>
                      </div>
                      <p className="text-sm leading-relaxed text-muted-foreground">
                        {post.content}
                      </p>
                      <div className="flex items-center gap-1.5 text-xs font-medium text-primary">
                        Read on {post.platform}
                        <ExternalLink className="size-3" />
                      </div>
                    </CardContent>
                  </Card>
                </a>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <a
            href={ORG.socials.x}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2 text-sm font-medium text-foreground transition-all hover:-translate-y-0.5 hover:border-primary hover:bg-primary hover:text-primary-foreground"
          >
            <Twitter className="size-4" />
            Follow on X
          </a>
          <a
            href={ORG.socials.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2 text-sm font-medium text-foreground transition-all hover:-translate-y-0.5 hover:border-primary hover:bg-primary hover:text-primary-foreground"
          >
            <Instagram className="size-4" />
            Follow on Instagram
          </a>
          <a
            href={ORG.socials.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2 text-sm font-medium text-foreground transition-all hover:-translate-y-0.5 hover:border-primary hover:bg-primary hover:text-primary-foreground"
          >
            <Facebook className="size-4" />
            Follow on Facebook
          </a>
          <a
            href={ORG.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2 text-sm font-medium text-foreground transition-all hover:-translate-y-0.5 hover:border-primary hover:bg-primary hover:text-primary-foreground"
          >
            <Linkedin className="size-4" />
            Connect on LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
