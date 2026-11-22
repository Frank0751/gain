"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Target, Eye } from "lucide-react";

import { Navbar } from "@/components/site/navbar";
import { Footer } from "@/components/site/footer";
import { ScrollToTop } from "@/components/site/scroll-to-top";
import { PageHero } from "@/components/site/page-hero";
import { SectionHeading } from "@/components/site/section-heading";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ORG, VALUES, TEAM } from "@/lib/data";

const storyPoints = [
  "Founded in 2023, GAIN is a youth-led nonprofit born from a simple conviction: young people hold the key to a sustainable future.",
  "From tree-planting drives in rural communities to beach clean-ups along Ghana's coastline, we translate awareness into action.",
  "Our three pillars, Skills Development, Public Education, and Environmental Action, equip, inspire, and mobilize thousands.",
];

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main id="main-content" className="flex-1">
        <PageHero
          title="About GAIN"
          subtitle="A youth-led movement working to make Ghana's environment cleaner, greener, and more sustainable for all."
          image="/images/gain/gain-media-6.jpg"
          breadcrumbs={[{ label: "Home", href: "/" }, { label: "About" }]}
        />

        {/* Story */}
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
                <div className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-xl">
                  <img
                    src="/images/gain/gain-media-2.jpg"
                    alt="Children holding environmental awareness signs"
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
                <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
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
                <blockquote className="border-l-4 border-accent bg-secondary/40 px-4 py-3 text-sm italic text-foreground sm:text-base">
                  {ORG.bio}
                </blockquote>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Mission and Vision */}
        <section className="bg-secondary/30 py-20 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              title="Our Mission and Vision"
            />
            <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5 }}
              >
                <Card className="h-full border-primary/20">
                  <CardContent className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Target className="size-6 text-primary" />
                      <h3 className="font-display text-xl font-bold text-foreground">
                        Our Mission
                      </h3>
                    </div>
                    <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                      {ORG.mission}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <Card className="h-full border-accent/30">
                  <CardContent className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Eye className="size-6 text-accent-foreground" />
                      <h3 className="font-display text-xl font-bold text-foreground">
                        Our Vision
                      </h3>
                    </div>
                    <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                      {ORG.vision}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="bg-background py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              title="Values that drive us"
              subtitle="Six principles that anchor every campaign, every workshop, and every seedling we plant."
            />
            <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {VALUES.map((value, i) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                >
                  <Card className="card-lift h-full border-border/60">
                    <CardContent>
                      <h3 className="font-display text-lg font-semibold text-primary">
                        {value.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {value.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="bg-secondary/30 py-20 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              title="The people behind GAIN"
              subtitle="A dedicated team of leaders, volunteers, and partners driving change across Ghana."
            />
            <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {TEAM.map((member, i) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <Card className="card-lift h-full overflow-hidden border-border/60 p-0">
                    <div className="relative aspect-square overflow-hidden">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="absolute inset-0 h-full w-full object-cover"
                      />
                    </div>
                    <CardContent className="space-y-2 pt-5">
                      <h3 className="font-display text-lg font-bold text-foreground">
                        {member.name}
                      </h3>
                      <p className="text-sm font-medium text-primary">
                        {member.role}
                      </p>
                      <p className="text-sm leading-relaxed text-muted-foreground">
                        {member.bio}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="bg-background py-20 md:py-24">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="font-display text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
                Our Journey
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-lg">
                From a small group of passionate youth to a movement across Ghana, here is how GAIN has grown.
              </p>
            </div>

            <div className="relative mt-12">
              <div
                aria-hidden="true"
                className="absolute left-4 top-0 h-full w-px bg-border md:left-1/2"
              />
              <ol className="space-y-8">
                {[
                  {
                    year: "2023",
                    title: "GAIN is Founded",
                    description: "Green Awareness International is established by Edmond Amankwaah and a group of young environmental advocates in Ghana.",
                  },
                  {
                    year: "Early 2024",
                    title: "First Tree-Planting Drive",
                    description: "GAIN launches its first community tree-planting campaign, planting 500 trees in the Eastern Region of Ghana.",
                  },
                  {
                    year: "Mid 2024",
                    title: "Schools Education Programme",
                    description: "We begin visiting schools across Greater Accra, reaching over 2,000 students with environmental education sessions.",
                  },
                  {
                    year: "Late 2024",
                    title: "Beach Clean-Up Campaigns",
                    description: "GAIN launches regular beach clean-up campaigns along the Accra coastline, removing hundreds of kilos of plastic waste.",
                  },
                  {
                    year: "2025",
                    title: "Skills Development Programme",
                    description: "We launch our green skills workshop series, training young people in sustainable agriculture, recycling crafts, and green entrepreneurship.",
                  },
                  {
                    year: "Today",
                    title: "Growing Movement",
                    description: "With 350+ volunteers, 45+ campaigns, and 12,000+ people reached, GAIN continues to expand its impact across Ghana.",
                  },
                ].map((item, i) => (
                  <motion.li
                    key={item.year}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.5, delay: i * 0.08 }}
                    className={`relative flex flex-col gap-4 md:flex-row md:items-center ${
                      i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                  >
                    <span className="absolute left-4 top-1 z-10 inline-flex size-4 -translate-x-1/2 items-center justify-center rounded-full bg-primary ring-4 ring-background md:left-1/2" />
                    <div className="md:w-1/2" />
                    <div className="pl-10 md:w-1/2 md:px-6">
                      <Card className="border-border/60">
                        <CardContent>
                          <p className="text-xs font-semibold uppercase tracking-wider text-accent-foreground">
                            {item.year}
                          </p>
                          <h4 className="mt-1 font-display text-base font-bold text-foreground">
                            {item.title}
                          </h4>
                          <p className="mt-2 text-sm text-muted-foreground">
                            {item.description}
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

        {/* CTA */}
        <section className="bg-background py-16">
          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
            <h2 className="font-display text-2xl font-bold text-foreground sm:text-3xl">
              Want to be part of the movement?
            </h2>
            <p className="mt-4 text-muted-foreground">
              Reach out to volunteer, partner, or learn more about our work.
            </p>
            <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button asChild size="lg">
                <Link href="/contact">
                  Contact Us
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/donate">Support Our Work</Link>
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
