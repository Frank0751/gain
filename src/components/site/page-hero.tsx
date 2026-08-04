"use client";

import * as React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  image: string;
  breadcrumbs?: { label: string; href?: string }[];
}

export function PageHero({ title, subtitle, image, breadcrumbs }: PageHeroProps) {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-16">
      <div className="absolute inset-0 z-0">
        <img
          src={image}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/85 via-primary/70 to-primary/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/20" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          {breadcrumbs && breadcrumbs.length > 0 && (
            <motion.nav
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="mb-4 flex items-center justify-center gap-1.5 text-sm text-white/70"
              aria-label="Breadcrumb"
            >
              {breadcrumbs.map((crumb, i) => (
                <React.Fragment key={i}>
                  {crumb.href ? (
                    <Link href={crumb.href} className="hover:text-white transition-colors">
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className="text-white/90">{crumb.label}</span>
                  )}
                  {i < breadcrumbs.length - 1 && (
                    <ChevronRight className="size-3.5 text-white/50" />
                  )}
                </React.Fragment>
              ))}
            </motion.nav>
          )}

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="w-full font-display text-5xl font-extrabold leading-tight text-white sm:text-6xl md:text-7xl lg:text-8xl"
          >
            {title}
          </motion.h1>

          {subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="mt-6 max-w-3xl text-base leading-relaxed text-white/85 sm:text-lg md:text-xl"
            >
              {subtitle}
            </motion.p>
          )}
        </div>
      </div>
    </section>
  );
}
