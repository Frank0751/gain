"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Send, Clock, MapPin, Check, Heart, Users } from "lucide-react";

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
import { VOLUNTEER_ROLES, STATS } from "@/lib/data";
import { useToast } from "@/hooks/use-toast";

const benefits = [
  "Gain practical experience in environmental action and community work",
  "Build your network with like-minded young changemakers across Ghana",
  "Receive a certificate of participation and volunteer hours verification",
  "Access training and mentorship from experienced environmental leaders",
  "Make a tangible difference in your community and the planet",
  "Develop transferable skills in leadership, communication, and project management",
];

export default function VolunteerPage() {
  const { toast } = useToast();
  const [loading, setLoading] = React.useState(false);
  const [form, setForm] = React.useState({
    name: "",
    email: "",
    phone: "",
    role: "",
    availability: "",
    message: "",
  });

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.role) {
      toast({
        title: "Missing fields",
        description: "Please fill in your name, email, and preferred role.",
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
      const res = await fetch("/api/volunteer", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (data.success) {
        toast({
          title: "Application received",
          description: data.message,
        });
        setForm({ name: "", email: "", phone: "", role: "", availability: "", message: "" });
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
          title="Volunteer With Us"
          subtitle="Join a community of young changemakers driving environmental change across Ghana. Your time and skills can transform communities."
          image="/images/gain/gain-media-6.jpg"
          breadcrumbs={[{ label: "Home", href: "/" }, { label: "Volunteer" }]}
        />

        {/* Why volunteer */}
        <section className="bg-background py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              title="Why Volunteer With GAIN?"
              subtitle="Volunteering with GAIN is more than giving your time. It is about growing, learning, and creating lasting change."
            />
            <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
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

        {/* Volunteer roles */}
        <section className="bg-secondary/30 py-20 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              title="Open Volunteer Roles"
              subtitle="Find a role that matches your skills, schedule, and passion for the environment."
            />
            <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {VOLUNTEER_ROLES.map((role, i) => (
                <motion.div
                  key={role.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                >
                  <Card className="card-lift h-full border-border/60">
                    <CardContent className="space-y-3">
                      <h3 className="font-display text-lg font-bold text-primary">
                        {role.title}
                      </h3>
                      <div className="flex flex-wrap gap-x-4 gap-y-1.5 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1.5">
                          <Clock className="size-3.5 text-primary/70" />
                          {role.commitment}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <MapPin className="size-3.5 text-primary/70" />
                          {role.location}
                        </span>
                      </div>
                      <p className="text-sm leading-relaxed text-muted-foreground">
                        {role.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats banner */}
        <section className="bg-primary py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 gap-8 text-center lg:grid-cols-4">
              <div>
                <p className="font-display text-4xl font-extrabold text-white">
                  {STATS[2].value.toLocaleString()}+
                </p>
                <p className="mt-1 text-sm text-white/80">Active Volunteers</p>
              </div>
              <div>
                <p className="font-display text-4xl font-extrabold text-white">
                  {STATS[3].value.toLocaleString()}+
                </p>
                <p className="mt-1 text-sm text-white/80">Campaigns Run</p>
              </div>
              <div>
                <p className="font-display text-4xl font-extrabold text-white">6</p>
                <p className="mt-1 text-sm text-white/80">Open Roles</p>
              </div>
              <div>
                <p className="font-display text-4xl font-extrabold text-white">100%</p>
                <p className="mt-1 text-sm text-white/80">Free to Join</p>
              </div>
            </div>
          </div>
        </section>

        {/* Volunteer form */}
        <section className="bg-background py-20 md:py-28">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              title="Apply to Volunteer"
              subtitle="Fill out the form below and our team will reach out within 1 to 2 business days."
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
                        <Label htmlFor="vname">Full Name</Label>
                        <Input
                          id="vname"
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          placeholder="Your name"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="vemail">Email</Label>
                        <Input
                          id="vemail"
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
                        <Label htmlFor="vphone">Phone</Label>
                        <Input
                          id="vphone"
                          value={form.phone}
                          onChange={(e) => setForm({ ...form, phone: e.target.value })}
                          placeholder="05XXXXXXXX"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="vrole">Preferred Role</Label>
                        <Select
                          value={form.role}
                          onValueChange={(value) => setForm({ ...form, role: value })}
                        >
                          <SelectTrigger id="vrole">
                            <SelectValue placeholder="Select a role" />
                          </SelectTrigger>
                          <SelectContent>
                            {VOLUNTEER_ROLES.map((role) => (
                              <SelectItem key={role.title} value={role.title}>
                                {role.title}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="vavailability">Availability</Label>
                      <Input
                        id="vavailability"
                        value={form.availability}
                        onChange={(e) => setForm({ ...form, availability: e.target.value })}
                        placeholder="e.g. Weekends, evenings, 2 days per week"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="vmessage">Why do you want to volunteer?</Label>
                      <Textarea
                        id="vmessage"
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        placeholder="Tell us about your motivation and any relevant experience..."
                        rows={4}
                      />
                    </div>
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
