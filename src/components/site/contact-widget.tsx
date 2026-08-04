"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Mail, Phone, Send } from "lucide-react";

import { ORG } from "@/lib/data";

export function ContactWidget() {
  const [open, setOpen] = React.useState(false);

  const contactOptions = [
    {
      icon: Send,
      label: "WhatsApp",
      value: ORG.whatsapp,
      href: `https://wa.me/${ORG.whatsapp}`,
      color: "bg-green-600 hover:bg-green-700",
    },
    {
      icon: Mail,
      label: "Email",
      value: ORG.email,
      href: `mailto:${ORG.email}`,
      color: "bg-primary hover:bg-primary/90",
    },
    {
      icon: Phone,
      label: "Call",
      value: ORG.phone,
      href: `tel:${ORG.phone}`,
      color: "bg-accent text-accent-foreground hover:bg-accent/90",
    },
  ];

  return (
    <div className="fixed bottom-6 left-6 z-40">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-16 left-0 w-72 overflow-hidden rounded-2xl border border-border bg-card shadow-2xl"
          >
            <div className="bg-primary p-4 text-white">
              <h3 className="font-display text-lg font-bold">Get in Touch</h3>
              <p className="mt-1 text-xs text-white/80">
                Have a question? We are here to help.
              </p>
            </div>
            <div className="space-y-2 p-3">
              {contactOptions.map((option) => (
                <a
                  key={option.label}
                  href={option.href}
                  target={option.label === "WhatsApp" ? "_blank" : undefined}
                  rel={option.label === "WhatsApp" ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-3 rounded-lg p-2 transition-colors hover:bg-secondary"
                >
                  <div className={`flex size-10 shrink-0 items-center justify-center rounded-full text-white ${option.color}`}>
                    <option.icon className="size-5" />
                  </div>
                  <div className="flex-1 overflow-hidden">
                    <p className="text-sm font-semibold text-foreground">{option.label}</p>
                    <p className="truncate text-xs text-muted-foreground">{option.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        type="button"
        onClick={() => setOpen(!open)}
        aria-label={open ? "Close contact options" : "Open contact options"}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.92 }}
        className="inline-flex size-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg shadow-primary/30 ring-2 ring-primary/20 transition-colors hover:bg-primary/90"
      >
        <AnimatePresence mode="wait">
          {open ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X className="size-6" />
            </motion.div>
          ) : (
            <motion.div
              key="open"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <MessageCircle className="size-6" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
}
