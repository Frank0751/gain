"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Send, Check, ArrowRight, Building2, School, Users, Home } from "lucide-react";

import { Navbar } from "@/components/site/navbar";
import { Footer } from "@/components/site/footer";
import { ScrollToTop } from "@/components/site/scroll-to-top";
import { PageHero } from "@/components/site/page-hero";
import { SectionHeading } from "@/components/site/section-heading";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { PARTNER_BENEFITS, PARTNER_TYPES, PARTNERS } from "@/lib/data";
import { useToast } from "@/hooks/use-toast";

const partnerTypeIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  "Corporate Partners": Building2,
  "School Partners": School,
  "NGO Partners": Users,
  "Community Partners": Home,
};

export default function PartnerPage() {
  const { toast } = useToast();
  const [loading, setLoading] = React.useState(false);
  const [form, setForm] = React.useState({
    name: "",
    email: "",
    phone: "",
    organization: "",
    partnerType: "",
    message: "",
  });

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.organization || !form.partnerType) {
      toast({
        title: "Missing fields",
        description: "Please fill in your name, email, organization, and partnership type.",
        variant: "destructive",
      });
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/partner", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (data.success) {
        toast({
          title: "Inquiry received",
          description: data.message,
        });
        setForm({ name: "", email: "", phone: "", organization: "", partnerType: "", message: "" });
      } else {
        toast({
          title: "Could not submit",
          description: data.message ?? "Please try again later.",
          variant: "destructive",
        });
      }
    } catch {
      toast({
        title: "Network error",
        description: "Please check your connection and try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main id="main-content" className="flex-1">
        <PageHero
          title="Partner With Us"
          subtitle="Multiply your impact by partnering with GAIN. Together, we can build a greener, more sustainable Ghana."
          image="/images/gain/gain-media-1.jpg"
          breadcrumbs={[{ label: "Home", href: "/" }, { label: "Partner" }]}
        />

        {/* Why Partner */}
        <section className="bg-background py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              title="Why Partner With GAIN?"
              subtitle="Partnership with GAIN goes beyond logos and mentions. It is about creating measurable, lasting environmental change together."
            />
            <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {PARTNER_BENEFITS.map((benefit, i) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                >
                  <Card className="card-lift h-full border-border/60">
                    <CardContent className="space-y-3">
                      <div className="flex items-start gap-3">
                        <div className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                          <Check className="size-4" />
                        </div>
                        <h3 className="font-display text-lg font-bold text-primary">
                          {benefit.title}
                        </h3>
                      </div>
                      <p className="text-sm leading-relaxed text-muted-foreground">
                        {benefit.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Partner Types */}
        <section className="bg-secondary/30 py-20 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              title="Types of Partnerships"
              subtitle="We work with organizations of all sizes and types. Find the partnership model that fits your goals."
            />
            <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
              {PARTNER_TYPES.map((type, i) => {
                const Icon = partnerTypeIcons[type.title] ?? Building2;
                return (
                  <motion.div
                    key={type.title}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                  >
                    <Card className="card-lift h-full border-border/60">
                      <CardContent className="space-y-4">
                        <div className="flex items-center gap-3">
                          <Icon className="size-6 text-primary" />
                          <h3 className="font-display text-xl font-bold text-foreground">
                            {type.title}
                          </h3>
                        </div>
                        <p className="text-sm leading-relaxed text-muted-foreground">
                          {type.description}
                        </p>
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                            Examples
                          </p>
                          <ul className="mt-2 space-y-1.5">
                            {type.examples.map((example) => (
                              <li key={example} className="flex items-start gap-2 text-sm text-foreground">
                                <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                                {example}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Current Partners */}
        <section className="bg-background py-20 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              title="Our Current Partners"
              subtitle="We are proud to work alongside these trusted institutions across Ghana."
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

        {/* Partnership Form */}
        <section className="bg-secondary/30 py-20 md:py-28">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              title="Start a Partnership"
              subtitle="Tell us about your organization and how you would like to partner. Our team will respond within 2 to 3 business days."
            />
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6 }}
              className="mt-10"
            >
              <Card className="border-border/60">
                <CardContent>
                  <form onSubmit={onSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="pname">Full Name</Label>
                        <Input
                          id="pname"
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          placeholder="Your name"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="pemail">Email</Label>
                        <Input
                          id="pemail"
                          type="email"
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                          placeholder="you@organization.com"
                          required
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="pphone">Phone</Label>
                        <Input
                          id="pphone"
                          value={form.phone}
                          onChange={(e) => setForm({ ...form, phone: e.target.value })}
                          placeholder="05XXXXXXXX"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="porg">Organization</Label>
                        <Input
                          id="porg"
                          value={form.organization}
                          onChange={(e) => setForm({ ...form, organization: e.target.value })}
                          placeholder="Your organization name"
                          required
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="ptype">Partnership Type</Label>
                      <Select
                        value={form.partnerType}
                        onValueChange={(value) => setForm({ ...form, partnerType: value })}
                      >
                        <SelectTrigger id="ptype">
                          <SelectValue placeholder="Select partnership type" />
                        </SelectTrigger>
                        <SelectContent>
                          {PARTNER_TYPES.map((type) => (
                            <SelectItem key={type.title} value={type.title}>
                              {type.title}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="pmessage">How would you like to partner?</Label>
                      <Textarea
                        id="pmessage"
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        placeholder="Tell us about your partnership goals and ideas..."
                        rows={5}
                      />
                    </div>
                    <Button
                      type="submit"
                      disabled={loading}
                      className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                    >
                      {loading ? "Submitting..." : "Submit Partnership Inquiry"}
                      {!loading && <Send className="size-4" />}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            <div className="mt-8 text-center">
              <p className="text-sm text-muted-foreground">
                Prefer to talk? <Link href="/contact" className="font-medium text-primary hover:underline">Contact us directly</Link>
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
