"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, MapPin, Clock, Briefcase, Check, Send } from "lucide-react";

import { Navbar } from "@/components/site/navbar";
import { Footer } from "@/components/site/footer";
import { ScrollToTop } from "@/components/site/scroll-to-top";
import { PageHero } from "@/components/site/page-hero";
import { SectionHeading } from "@/components/site/section-heading";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
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
import { CAREERS, ORG } from "@/lib/data";
import { useToast } from "@/hooks/use-toast";

const benefits = [
  "Meaningful work that creates real environmental impact",
  "Competitive salary and benefits package",
  "Professional development and training opportunities",
  "Collaborative and passionate team environment",
  "Flexible work arrangements for eligible roles",
  "Opportunity to shape Ghana's environmental future",
];

export default function CareersPage() {
  const { toast } = useToast();
  const [loading, setLoading] = React.useState(false);
  const [form, setForm] = React.useState({ name: "", email: "", phone: "", role: "", message: "" });

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.role) {
      toast({ title: "Missing fields", description: "Please fill in your name, email, and preferred role.", variant: "destructive" });
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      toast({ title: "Invalid email", description: "Please enter a valid email.", variant: "destructive" });
      return;
    }
    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, subject: `Job Application: ${form.role}` }),
      });
      const data = await res.json();
      if (data.success) {
        toast({ title: "Application received", description: data.message });
        setForm({ name: "", email: "", phone: "", role: "", message: "" });
      } else {
        toast({ title: "Could not submit", description: data.message, variant: "destructive" });
      }
    } catch {
      toast({ title: "Network error", description: "Please try again.", variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main id="main-content" className="flex-1">
        <PageHero
          title="Careers at GAIN"
          subtitle="Join our team of passionate environmental changemakers. Build a career that makes a difference in Ghana."
          image="/images/gain/gain-media-6.jpg"
          breadcrumbs={[{ label: "Home", href: "/" }, { label: "Careers" }]}
        />

        {/* Why work with us */}
        <section className="bg-background py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              title="Why Work With Us?"
              subtitle="At GAIN, your work directly contributes to a greener, more sustainable Ghana. Join a team that values passion, integrity, and impact."
            />
            <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {benefits.map((benefit, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                >
                  <Card className="h-full border-border/60">
                    <CardContent className="flex items-start gap-3">
                      <div className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <Check className="size-4" />
                      </div>
                      <p className="text-sm leading-relaxed text-foreground">{benefit}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Open positions */}
        <section className="bg-secondary/30 py-20 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              title="Open Positions"
              subtitle="Browse our current openings. If you do not see a role that fits, we welcome general applications."
            />
            <div className="mt-12 space-y-4">
              {CAREERS.map((job, i) => (
                <motion.div
                  key={job.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                >
                  <Card className="card-lift border-border/60">
                    <CardContent className="space-y-4">
                      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                        <div className="space-y-2">
                          <div className="flex flex-wrap items-center gap-2">
                            <h3 className="font-display text-xl font-bold text-foreground">
                              {job.title}
                            </h3>
                            <Badge variant="secondary" className="border-0 bg-primary/10 text-primary">
                              {job.department}
                            </Badge>
                          </div>
                          <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs text-muted-foreground">
                            <span className="flex items-center gap-1.5">
                              <Briefcase className="size-3.5 text-primary/70" />
                              {job.type}
                            </span>
                            <span className="flex items-center gap-1.5">
                              <MapPin className="size-3.5 text-primary/70" />
                              {job.location}
                            </span>
                            <span className="flex items-center gap-1.5">
                              <Clock className="size-3.5 text-primary/70" />
                              {job.deadline}
                            </span>
                          </div>
                        </div>
                        <Button
                          size="sm"
                          onClick={() => {
                            document.getElementById("apply-form")?.scrollIntoView({ behavior: "smooth" });
                            setForm({ ...form, role: job.title });
                          }}
                        >
                          Apply Now
                        </Button>
                      </div>
                      <p className="text-sm leading-relaxed text-muted-foreground">
                        {job.description}
                      </p>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                          Requirements
                        </p>
                        <ul className="mt-2 grid grid-cols-1 gap-1.5 sm:grid-cols-2">
                          {job.requirements.map((req) => (
                            <li key={req} className="flex items-start gap-2 text-sm text-foreground">
                              <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                              {req}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Application form */}
        <section id="apply-form" className="bg-background py-20 md:py-28">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              title="Submit Your Application"
              subtitle="Fill out the form below and attach your CV. Our team will review and reach out if your profile matches."
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
                        <Label htmlFor="cname">Full Name</Label>
                        <Input
                          id="cname"
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          placeholder="Your name"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="cemail">Email</Label>
                        <Input
                          id="cemail"
                          type="email"
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                          placeholder="you@example.com"
                          required
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="cphone">Phone</Label>
                        <Input
                          id="cphone"
                          value={form.phone}
                          onChange={(e) => setForm({ ...form, phone: e.target.value })}
                          placeholder="05XXXXXXXX"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="crole">Position Applied For</Label>
                        <Select
                          value={form.role}
                          onValueChange={(value) => setForm({ ...form, role: value })}
                        >
                          <SelectTrigger id="crole">
                            <SelectValue placeholder="Select a position" />
                          </SelectTrigger>
                          <SelectContent>
                            {CAREERS.map((job) => (
                              <SelectItem key={job.title} value={job.title}>
                                {job.title}
                              </SelectItem>
                            ))}
                            <SelectItem value="General Application">General Application</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="cmessage">Cover Letter / Message</Label>
                      <Textarea
                        id="cmessage"
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        placeholder="Tell us why you are interested in this role and what you bring to GAIN..."
                        rows={5}
                      />
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Please email your CV to <a href={`mailto:${ORG.email}`} className="text-primary hover:underline">{ORG.email}</a> after submitting this form.
                    </p>
                    <Button
                      type="submit"
                      disabled={loading}
                      className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                    >
                      {loading ? "Submitting..." : "Submit Application"}
                      {!loading && <Send className="size-4" />}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
