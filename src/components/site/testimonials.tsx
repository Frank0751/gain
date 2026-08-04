"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { TESTIMONIALS } from "@/lib/data";

export function Testimonials() {
  const [active, setActive] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const current = TESTIMONIALS[active];

  return (
    <section className="bg-secondary/30 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <Quote className="mx-auto size-10 text-accent" />
          <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            Voices of Change
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-lg">
            Hear from the students, volunteers, and community members whose lives have been transformed by GAIN's work.
          </p>
        </div>

        <motion.div
          key={active}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto mt-12 max-w-4xl"
        >
          <Card className="overflow-hidden border-border/60 shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-3">
              <div className="relative aspect-square md:aspect-auto">
                <img
                  src={current.image}
                  alt={current.name}
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent md:bg-gradient-to-r" />
              </div>
              <CardContent className="flex flex-col justify-center md:col-span-2 p-6 md:p-10">
                <blockquote className="text-lg font-medium leading-relaxed text-foreground sm:text-xl">
                  &ldquo;{current.quote}&rdquo;
                </blockquote>
                <div className="mt-6">
                  <p className="font-display text-lg font-bold text-primary">
                    {current.name}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {current.role}
                  </p>
                </div>
              </CardContent>
            </div>
          </Card>
        </motion.div>

        {/* Dots */}
        <div className="mt-8 flex justify-center gap-2">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              aria-label={`View testimonial ${i + 1}`}
              className={`h-2.5 rounded-full transition-all ${
                i === active
                  ? "w-8 bg-primary"
                  : "w-2.5 bg-muted-foreground/30 hover:bg-muted-foreground/50"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
