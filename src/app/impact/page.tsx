"use client";

import * as React from "react";
import Link from "next/link";
import { motion, useInView, useMotionValue, animate } from "framer-motion";
import { ArrowRight, Heart } from "lucide-react";

import { Navbar } from "@/components/site/navbar";
import { Footer } from "@/components/site/footer";
import { ScrollToTop } from "@/components/site/scroll-to-top";
import { PageHero } from "@/components/site/page-hero";
import { SectionHeading } from "@/components/site/section-heading";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { STATS, IMPACT_STORIES, PARTNERS, CAMPAIGNS } from "@/lib/data";

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = React.useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const count = useMotionValue(0);
  const [display, setDisplay] = React.useState("0");

  React.useEffect(() => {
    if (inView) {
      const controls = animate(count, value, {
        duration: 2,
        ease: "easeOut",
        onUpdate: (latest) => {
          setDisplay(Math.round(latest).toLocaleString());
        },
      });
      return () => controls.stop();
    }
  }, [inView, value, count]);

  return (
    <span ref={ref}>
      {display}{suffix}
    </span>
  );
}

export default function ImpactPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main id="main-content" className="flex-1">
        <PageHero
          title="Our Impact"
          subtitle="Real change, measured in trees, lives, and communities. Every number represents a story of transformation."
          image="/images/gain/gain-media-4.jpg"
          breadcrumbs={[{ label: "Home", href: "/" }, { label: "Impact" }]}
        />

        {/* Stats */}
        <section className="bg-background py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              title="Change you can count"
              subtitle="These numbers reflect the collective effort of our volunteers, partners, and the communities we serve."
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
                        <Counter value={stat.value} suffix={stat.suffix} />
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

        {/* Impact stories */}
        <section className="bg-secondary/30 py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              title="Stories from the field"
              subtitle="Real campaigns, real communities, real change on the ground across Ghana."
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
          </div>
        </section>

        {/* Areas of focus */}
        <section className="bg-background py-20 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              title="Areas of Focus"
              subtitle="The environmental challenges we are tackling across Ghana, one community at a time."
            />
            <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  title: "Deforestation",
                  description: "Restoring degraded land through community tree-planting drives and reforestation campaigns.",
                  stat: "5,000+ trees planted",
                },
                {
                  title: "Plastic Pollution",
                  description: "Removing plastic waste from beaches, rivers, and communities through regular clean-up campaigns.",
                  stat: "1,200+ kg waste removed",
                },
                {
                  title: "Water Pollution",
                  description: "Advocating against illegal mining (galamsey) that poisons Ghana's rivers and water bodies.",
                  stat: "10+ advocacy campaigns",
                },
                {
                  title: "Youth Unemployment",
                  description: "Equipping young people with green skills and entrepreneurship training for sustainable livelihoods.",
                  stat: "350+ youth trained",
                },
              ].map((area, i) => (
                <motion.div
                  key={area.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <Card className="card-lift h-full border-border/60">
                    <CardContent>
                      <h3 className="font-display text-lg font-bold text-primary">
                        {area.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {area.description}
                      </p>
                      <p className="mt-4 text-sm font-semibold text-accent-foreground">
                        {area.stat}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Campaign progress */}
        <section className="bg-secondary/30 py-20 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              title="Campaign Progress"
              subtitle="See how our active campaigns are progressing. Your support moves these numbers forward."
            />
            <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
              {CAMPAIGNS.map((campaign, i) => {
                const percentage = Math.min(Math.round((campaign.raised / campaign.goal) * 100), 100);
                return (
                  <motion.div
                    key={campaign.title}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                  >
                    <Card className="card-lift h-full overflow-hidden border-border/60 p-0">
                      <div className="relative aspect-[16/10] overflow-hidden">
                        <img
                          src={campaign.image}
                          alt={campaign.title}
                          className="absolute inset-0 h-full w-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                      </div>
                      <CardContent className="space-y-3 pt-5">
                        <h3 className="font-display text-lg font-bold text-foreground">
                          {campaign.title}
                        </h3>
                        <div className="space-y-2">
                          <div className="flex items-center justify-between text-sm">
                            <span className="font-semibold text-foreground">
                              {campaign.raised.toLocaleString()} {campaign.unit}
                            </span>
                            <span className="text-muted-foreground">
                              Goal: {campaign.goal.toLocaleString()}
                            </span>
                          </div>
                          <div className="h-2.5 w-full overflow-hidden rounded-full bg-secondary">
                            <div
                              className="h-full rounded-full bg-gradient-to-r from-primary to-accent"
                              style={{ width: `${percentage}%` }}
                            />
                          </div>
                          <p className="text-xs font-semibold text-primary">{percentage}% complete</p>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Partners */}
        <section className="bg-background py-20 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              title="Our Partners"
              subtitle="We work alongside trusted institutions across Ghana to maximize our environmental impact."
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

        {/* CTA */}
        <section className="bg-background py-16">
          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
            <h2 className="font-display text-2xl font-bold text-foreground sm:text-3xl">
              Help us grow these numbers.
            </h2>
            <p className="mt-4 text-muted-foreground">
              Every donation plants more trees, educates more students, and cleans more communities.
            </p>
            <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button asChild size="lg">
                <Link href="/donate">
                  <Heart className="size-4" />
                  Donate Now
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/gallery">
                  View Our Gallery
                  <ArrowRight className="size-4" />
                </Link>
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
