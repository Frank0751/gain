"use client";

import * as React from "react";
import { motion, useInView } from "framer-motion";

interface CampaignProgressProps {
  raised: number;
  goal: number;
  unit: string;
}

export function CampaignProgress({ raised, goal, unit }: CampaignProgressProps) {
  const ref = React.useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const percentage = Math.min(Math.round((raised / goal) * 100), 100);

  return (
    <div ref={ref} className="space-y-2">
      <div className="flex items-center justify-between text-sm">
        <span className="font-semibold text-foreground">
          {raised.toLocaleString()} {unit} raised
        </span>
        <span className="text-muted-foreground">
          Goal: {goal.toLocaleString()} {unit}
        </span>
      </div>
      <div className="h-3 w-full overflow-hidden rounded-full bg-secondary">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${percentage}%` } : { width: 0 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
          className="h-full rounded-full bg-gradient-to-r from-primary to-accent"
        />
      </div>
      <div className="flex items-center justify-between text-xs">
        <span className="font-semibold text-primary">{percentage}% funded</span>
        <span className="text-muted-foreground">{goal - raised} {unit} to go</span>
      </div>
    </div>
  );
}
