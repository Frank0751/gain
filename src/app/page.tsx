"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Heart, ArrowRight, ArrowDown, CheckCircle2, Twitter, Facebook, Instagram, Linkedin } from "lucide-react";

import { Navbar } from "@/components/site/navbar";
import { Footer } from "@/components/site/footer";
import { ScrollToTop } from "@/components/site/scroll-to-top";
import { SectionHeading } from "@/components/site/section-heading";
import { CampaignProgress } from "@/components/site/campaign-progress";
import { Testimonials } from "@/components/site/testimonials";
import { SocialFeed } from "@/components/site/social-feed";
import { AnimatedCounter } from "@/components/site/animated-counter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ORG, STATS, PROGRAMMES, IMPACT_STORIES, CAMPAIGNS, PARTNERS } from "@/lib/data";

const storyPoints = [
  "Founded in 2023, GAIN is a youth-led nonprofit born from a simple conviction: young people hold the key to a sustainable future.",
  "From tree-planting drives in rural communities to beach clean-ups along Ghana's coastline, we translate awareness into action.",
  "Our three pillars, Skills Development, Public Education, and Environmental Action, equip, inspire, and mobilize thousands.",
];

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main id="main-content" className="flex-1">
        {/* Hero */}
        <section className="relative flex min-h-[100svh] items-center overflow-hidden pt-16">
          <div className="absolute inset-0 z-0">
            <img
              src="/images/gain/gain-banner.jpg"
              alt="Green Awareness International banner"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-primary/80 via-primary/55 to-primary/75" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/20" />
          </div>

          <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-32 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center text-center">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="mb-6 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
              >
                <div className="relative size-16 overflow-hidden rounded-full ring-4 ring-white/30 sm:size-20">
                  <img
                    src="/gain-logo.jpg"
                    alt="GAIN logo"
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                </div>
                <div className="text-center sm:text-left">
                  <h1 className="font-display text-4xl font-extrabold leading-tight text-white sm:text-5xl md:text-6xl">
                    GAIN
                  </h1>
                  <p className="text-sm font-medium text-white/80 sm:text-base">
                    Green Awareness International
                  </p>
                </div>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.25 }}
                className="max-w-4xl font-display text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl"
              >
                Leading the front for a sustainable and green Ghana.
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                className="mt-6 max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg"
              >
                {ORG.mission}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.55 }}
                className="mt-9 flex flex-col items-center gap-3 sm:flex-row sm:justify-center"
              >
                <Button
                  asChild
                  size="lg"
                  className="bg-accent text-accent-foreground shadow-lg shadow-accent/30 hover:bg-accent/90"
                >
                  <Link href="/donate">
                    <Heart className="size-4" />
                    Donate Now
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-white/40 bg-white/10 text-white backdrop-blur-md hover:bg-white/20 hover:text-white"
                >
                  <Link href="/about">
                    Learn More
                    <ArrowDown className="size-4" />
                  </Link>
                </Button>
              </motion.div>

              {/* Social media icons */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.7 }}
                className="mt-8 flex items-center justify-center gap-3"
              >
                <span className="text-sm font-medium text-white/70">Follow us:</span>
                <div className="flex gap-2">
                  <a
                    href={ORG.socials.x}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Follow GAIN on X (Twitter)"
                    className="inline-flex size-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-md transition-all hover:-translate-y-0.5 hover:border-white/40 hover:bg-white/20"
                  >
                    <Twitter className="size-4" />
                  </a>
                  <a
                    href={ORG.socials.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Follow GAIN on Facebook"
                    className="inline-flex size-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-md transition-all hover:-translate-y-0.5 hover:border-white/40 hover:bg-white/20"
                  >
                    <Facebook className="size-4" />
                  </a>
                  <a
                    href={ORG.socials.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Follow GAIN on Instagram"
                    className="inline-flex size-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-md transition-all hover:-translate-y-0.5 hover:border-white/40 hover:bg-white/20"
                  >
                    <Instagram className="size-4" />
                  </a>
                  <a
                    href={ORG.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Connect with GAIN on LinkedIn"
                    className="inline-flex size-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-md transition-all hover:-translate-y-0.5 hover:border-white/40 hover:bg-white/20"
                  >
                    <Linkedin className="size-4" />
                  </a>
                </div>
              </motion.div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: [0, 8, 0] }}
            transition={{
              opacity: { delay: 1.2, duration: 0.6 },
              y: { repeat: Infinity, duration: 1.8, ease: "easeInOut" },
            }}
            className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 text-white/70"
          >
            <ArrowDown className="size-6" />
          </motion.div>
        </section>

        {/* Intro */}
        <section className="bg-background py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-xl">
                  <img
                    src="/images/gain/gain-media-6.jpg"
                    alt="Community members walking on a tree-lined path in Ghana"
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="space-y-5"
              >
                <h2 className="font-display text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
                  Turning awareness into lasting action.
                </h2>
                <div className="space-y-3">
                  {storyPoints.map((point) => (
                    <div key={point} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-primary" />
                      <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                        {point}
                      </p>
                    </div>
                  ))}
                </div>
                <Button asChild variant="outline" className="mt-2">
                  <Link href="/about">
                    Read Our Full Story
                    <ArrowRight className="size-4" />
                  </Link>
                </Button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Mission highlight banner */}
        <section className="relative overflow-hidden bg-primary py-16 md:py-20">
          <div className="pointer-events-none absolute -right-20 -top-20 size-64 rounded-full bg-accent/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-20 -left-20 size-64 rounded-full bg-white/5 blur-3xl" />
          <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-3">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5 }}
                className="text-center md:col-span-1"
              >
                <p className="font-display text-5xl font-extrabold text-accent sm:text-6xl">
                  Est.
                </p>
                <p className="font-display text-5xl font-extrabold text-white sm:text-6xl">
                  {ORG.founded}
                </p>
                <p className="mt-2 text-sm text-white/80">{ORG.location}</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="md:col-span-2"
              >
                <p className="text-lg font-medium leading-relaxed text-white/90 sm:text-xl">
                  &ldquo;{ORG.bio}&rdquo;
                </p>
                <div className="mt-4 flex flex-wrap gap-3">
                  <Button asChild size="sm" className="bg-accent text-accent-foreground hover:bg-accent/90">
                    <Link href="/about">Learn About Us</Link>
                  </Button>
                  <Button asChild size="sm" variant="outline" className="border-white/40 bg-white/10 text-white backdrop-blur-md hover:bg-white/20 hover:text-white">
                    <Link href="/impact-report">View Impact Report</Link>
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="bg-secondary/30 py-20 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              title="Real change, measured in trees, lives, and communities"
              subtitle="Every number represents a story of a young person educated, a tree planted, or a community transformed."
            />
            <div className="mt-12 grid grid-cols-2 gap-6 lg:grid-cols-4">
              {STATS.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <Card className="h-full border-primary/15 text-center">
                    <CardContent>
                      <p className="font-display text-4xl font-extrabold text-primary sm:text-5xl">
                        <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                      </p>
                      <p className="mt-2 font-display text-base font-semibold text-foreground">
                        {stat.label}
                      </p>
                      <p className="mt-1 text-sm text-muted-foreground">
                        {stat.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Programmes preview */}
        <section className="bg-background py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              title="Our Programmes"
              subtitle="Three interconnected programmes that equip, educate, and mobilize young Ghanaians for environmental change."
            />
            <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {PROGRAMMES.map((programme, i) => (
                <motion.div
                  key={programme.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <Card className="card-lift group h-full overflow-hidden border-border/60 p-0">
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <img
                        src={programme.image}
                        alt={programme.title}
                        className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-primary/20 to-transparent" />
                      <h3 className="absolute bottom-4 left-4 right-4 font-display text-xl font-bold text-white">
                        {programme.title}
                      </h3>
                    </div>
                    <CardContent className="space-y-3 pt-5">
                      <p className="text-sm font-medium text-accent-foreground">
                        {programme.tagline}
                      </p>
                      <p className="text-sm leading-relaxed text-muted-foreground">
                        {programme.description}
                      </p>
                      <Button asChild variant="link" className="h-auto p-0 text-primary">
                        <Link href="/programmes">
                          Learn More
                          <ArrowRight className="size-4" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Active campaigns with progress bars */}
        <section className="bg-secondary/30 py-20 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              title="Active Campaigns"
              subtitle="Track our progress in real time. Your support directly moves these numbers forward."
            />
            <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
              {CAMPAIGNS.map((campaign, i) => (
                <motion.div
                  key={campaign.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <Card className="card-lift group h-full overflow-hidden border-border/60 p-0">
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <img
                        src={campaign.image}
                        alt={campaign.title}
                        className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                      <Badge className="absolute left-3 top-3 border-0 bg-accent text-accent-foreground shadow">
                        Deadline: {campaign.deadline}
                      </Badge>
                    </div>
                    <CardContent className="space-y-4 pt-5">
                      <h3 className="font-display text-lg font-bold text-foreground">
                        {campaign.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-muted-foreground">
                        {campaign.description}
                      </p>
                      <CampaignProgress
                        raised={campaign.raised}
                        goal={campaign.goal}
                        unit={campaign.unit}
                      />
                      <Button asChild className="w-full" size="sm">
                        <Link href="/donate">
                          <Heart className="size-4" />
                          Support This Campaign
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Partners */}
        <section className="bg-background py-20 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              title="Our Partners"
              subtitle="We work alongside trusted institutions and community organizations across Ghana to maximize our impact."
            />
            <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {PARTNERS.map((partner, i) => (
                <motion.div
                  key={partner.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                >
                  <Card className="h-full border-border/60 transition-colors hover:border-primary/40">
                    <CardContent>
                      <h3 className="font-display text-base font-bold text-primary">
                        {partner.name}
                      </h3>
                      <p className="mt-1 text-sm text-muted-foreground">
                        {partner.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Impact stories preview */}
        <section className="bg-secondary/30 py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              title="Stories from the field"
              subtitle="Real campaigns, real communities, real change on the ground."
            />
            <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {IMPACT_STORIES.map((story, i) => (
                <motion.div
                  key={story.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <Card className="card-lift group h-full overflow-hidden border-border/60 p-0">
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <img
                        src={story.image}
                        alt={story.title}
                        className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <Badge className="absolute left-3 top-3 border-0 bg-accent text-accent-foreground shadow">
                        {story.category}
                      </Badge>
                    </div>
                    <CardContent className="space-y-2 pt-5">
                      <p className="text-xs text-muted-foreground">{story.date}</p>
                      <h3 className="font-display text-lg font-bold leading-snug text-foreground">
                        {story.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-muted-foreground">
                        {story.excerpt}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
            <div className="mt-10 text-center">
              <Button asChild variant="outline">
                <Link href="/impact">
                  See More Impact
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <Testimonials />

        {/* Social feed */}
        <SocialFeed />

        {/* CTA banner */}
        <section className="relative overflow-hidden py-20 md:py-24">
          <div className="absolute inset-0 z-0">
            <img
              src="/images/gain/gain-media-4.jpg"
              alt="Volunteers cleaning up a shoreline"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/70" />
          </div>
          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
              className="mx-auto max-w-3xl text-center"
            >
              <h2 className="font-display text-3xl font-extrabold leading-tight text-white sm:text-4xl md:text-5xl">
                Be part of a greener Ghana.
                <span className="block text-accent">Your action starts today.</span>
              </h2>
              <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg">
                Whether you donate, volunteer, or simply spread the word, every action adds up to a healthier planet for the next generation.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Button
                  asChild
                  size="lg"
                  className="bg-accent text-accent-foreground shadow-lg shadow-accent/30 hover:bg-accent/90"
                >
                  <Link href="/donate">
                    <Heart className="size-4" />
                    Donate Now
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-white/40 bg-white/10 text-white backdrop-blur-md hover:bg-white/20 hover:text-white"
                >
                  <Link href="/volunteer">
                    Become a Volunteer
                    <ArrowRight className="size-4" />
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
