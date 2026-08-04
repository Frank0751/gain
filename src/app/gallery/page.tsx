"use client";

import * as React from "react";
import { motion } from "framer-motion";

import { Navbar } from "@/components/site/navbar";
import { Footer } from "@/components/site/footer";
import { ScrollToTop } from "@/components/site/scroll-to-top";
import { PageHero } from "@/components/site/page-hero";
import { SectionHeading } from "@/components/site/section-heading";
import { Card } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { GALLERY_IMAGES } from "@/lib/data";

const CATEGORIES = ["All", "Campaign", "Education", "Clean-Up", "Community", "Environment"];

export default function GalleryPage() {
  const [filter, setFilter] = React.useState("All");
  const [lightbox, setLightbox] = React.useState<string | null>(null);

  const filtered = React.useMemo(() => {
    if (filter === "All") return GALLERY_IMAGES;
    return GALLERY_IMAGES.filter((img) => img.category === filter);
  }, [filter]);

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main id="main-content" className="flex-1">
        <PageHero
          title="Gallery"
          subtitle="Moments of change captured across our campaigns, clean-ups, and community drives."
          image="/images/gain/gain-media-1.jpg"
          breadcrumbs={[{ label: "Home", href: "/" }, { label: "Gallery" }]}
        />

        <section className="bg-background py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              title="Moments of Change"
              subtitle="Photographs from our environmental campaigns, education drives, and community action across Ghana."
            />

            {/* Filter tabs */}
            <div className="mt-8 flex flex-wrap justify-center gap-2">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                    filter === cat
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-foreground/70 hover:bg-primary/10 hover:text-primary"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Gallery grid */}
            <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((img, i) => (
                <motion.div
                  key={img.src}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                >
                  <Card
                    className="group cursor-pointer overflow-hidden border-border/60 p-0"
                    onClick={() => setLightbox(img.src)}
                  >
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <img
                        src={img.src}
                        alt={img.alt}
                        className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/20" />
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Lightbox */}
      <Dialog open={!!lightbox} onOpenChange={(open) => !open && setLightbox(null)}>
        <DialogContent className="max-w-4xl border-border/60 p-0">
          <DialogHeader>
            <DialogTitle className="sr-only">Image preview</DialogTitle>
          </DialogHeader>
          {lightbox && (
            <div className="relative aspect-video w-full overflow-hidden rounded-lg">
              <img
                src={lightbox}
                alt={GALLERY_IMAGES.find((g) => g.src === lightbox)?.alt ?? ""}
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          )}
        </DialogContent>
      </Dialog>

      <Footer />
      <ScrollToTop />
    </div>
  );
}
