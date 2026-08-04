"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, MapPin, Tag, UserPlus } from "lucide-react";

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
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { EVENTS } from "@/lib/data";
import { useToast } from "@/hooks/use-toast";

function formatDate(d: string) {
  try {
    return new Date(d).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  } catch {
    return d;
  }
}

function getDay(d: string) {
  try {
    return new Date(d).getDate().toString().padStart(2, "0");
  } catch {
    return "--";
  }
}

function getMonth(d: string) {
  try {
    return new Date(d).toLocaleDateString("en-US", { month: "short" }).toUpperCase();
  } catch {
    return "";
  }
}

export default function EventsPage() {
  const { toast } = useToast();
  const upcoming = EVENTS.filter((e) => e.type === "upcoming");
  const past = EVENTS.filter((e) => e.type === "past");
  const [registerEvent, setRegisterEvent] = React.useState<string | null>(null);
  const [loading, setLoading] = React.useState(false);
  const [form, setForm] = React.useState({ name: "", email: "", phone: "", attendees: "1" });

  const onRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email) {
      toast({ title: "Missing fields", description: "Please enter your name and email.", variant: "destructive" });
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      toast({ title: "Invalid email", description: "Please enter a valid email.", variant: "destructive" });
      return;
    }
    setLoading(true);
    try {
      const res = await fetch("/api/event-register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, eventTitle: registerEvent }),
      });
      const data = await res.json();
      if (data.success) {
        toast({ title: "Registration confirmed", description: data.message });
        setRegisterEvent(null);
        setForm({ name: "", email: "", phone: "", attendees: "1" });
      } else {
        toast({ title: "Could not register", description: data.message, variant: "destructive" });
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
          title="Events"
          subtitle="Join us at our next campaign or take a look at the change we have already created together."
          image="/images/gain/gain-media-4.jpg"
          breadcrumbs={[{ label: "Home", href: "/" }, { label: "Events" }]}
        />

        <section className="bg-background py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading title="Upcoming and Past Events" />

            <Tabs defaultValue="upcoming" className="mt-10">
              <TabsList className="mx-auto flex w-fit">
                <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
                <TabsTrigger value="past">Past Events</TabsTrigger>
              </TabsList>

              <TabsContent value="upcoming" className="mt-10">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {upcoming.map((event, i) => (
                    <motion.div
                      key={event.title}
                      initial={{ opacity: 0, y: 24 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-60px" }}
                      transition={{ duration: 0.5, delay: i * 0.08 }}
                    >
                      <Card className="card-lift group h-full overflow-hidden border-border/60 p-0">
                        <div className="relative aspect-[16/9] overflow-hidden">
                          <img
                            src={event.image}
                            alt={event.title}
                            className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                          <div className="absolute left-3 top-3 flex size-14 flex-col items-center justify-center rounded-lg bg-white/95 text-primary shadow-md">
                            <span className="font-display text-xl font-extrabold leading-none">
                              {getDay(event.date)}
                            </span>
                            <span className="text-[10px] font-semibold uppercase">
                              {getMonth(event.date)}
                            </span>
                          </div>
                          <Badge className="absolute right-3 top-3 border-0 bg-accent text-accent-foreground shadow">
                            {event.tag}
                          </Badge>
                        </div>
                        <CardContent className="space-y-3 pt-5">
                          <h3 className="font-display text-lg font-bold leading-snug text-foreground">
                            {event.title}
                          </h3>
                          <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs text-muted-foreground">
                            <span className="flex items-center gap-1.5">
                              <Calendar className="size-3.5 text-primary/70" />
                              {formatDate(event.date)}
                            </span>
                            <span className="flex items-center gap-1.5">
                              <Clock className="size-3.5 text-primary/70" />
                              {event.time}
                            </span>
                            <span className="flex items-center gap-1.5">
                              <MapPin className="size-3.5 text-primary/70" />
                              {event.location}
                            </span>
                          </div>
                          <p className="text-sm leading-relaxed text-muted-foreground">
                            {event.description}
                          </p>
                          <Button
                            className="w-full"
                            size="sm"
                            onClick={() => setRegisterEvent(event.title)}
                          >
                            <UserPlus className="size-4" />
                            Register for this Event
                          </Button>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="past" className="mt-10">
                <div className="relative mx-auto max-w-3xl">
                  <div
                    aria-hidden="true"
                    className="absolute left-4 top-0 h-full w-px bg-border md:left-1/2"
                  />
                  <ol className="space-y-8">
                    {past.map((event, i) => (
                      <motion.li
                        key={event.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-60px" }}
                        transition={{ duration: 0.5, delay: i * 0.08 }}
                        className={`relative flex flex-col gap-4 md:flex-row md:items-center ${
                          i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                        }`}
                      >
                        <span className="absolute left-4 top-1 z-10 inline-flex size-3 -translate-x-1/2 items-center justify-center rounded-full bg-primary ring-4 ring-background md:left-1/2" />
                        <div className="md:w-1/2" />
                        <div className="pl-10 md:w-1/2 md:px-6">
                          <Card className="border-border/60">
                            <CardContent className="space-y-2">
                              <div className="flex items-center justify-between gap-2">
                                <Badge variant="secondary" className="border-0 bg-primary/10 text-primary">
                                  <Tag className="size-3" />
                                  {event.tag}
                                </Badge>
                                <span className="text-xs text-muted-foreground">
                                  {formatDate(event.date)}
                                </span>
                              </div>
                              <h4 className="font-display text-base font-bold text-foreground">
                                {event.title}
                              </h4>
                              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-muted-foreground">
                                <span className="flex items-center gap-1">
                                  <MapPin className="size-3 text-primary/70" />
                                  {event.location}
                                </span>
                                <span className="flex items-center gap-1">
                                  <Clock className="size-3 text-primary/70" />
                                  {event.time}
                                </span>
                              </div>
                              <p className="text-sm text-muted-foreground">
                                {event.description}
                              </p>
                            </CardContent>
                          </Card>
                        </div>
                      </motion.li>
                    ))}
                  </ol>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>

      {/* Registration Dialog */}
      <Dialog open={!!registerEvent} onOpenChange={(open) => !open && setRegisterEvent(null)}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Register for Event</DialogTitle>
            <DialogDescription>
              {registerEvent}
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={onRegister} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="ename">Full Name</Label>
              <Input
                id="ename"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Your name"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="eemail">Email</Label>
              <Input
                id="eemail"
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="you@example.com"
                required
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="ephone">Phone</Label>
                <Input
                  id="ephone"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  placeholder="05XXXXXXXX"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="eattendees">Attendees</Label>
                <Input
                  id="eattendees"
                  type="number"
                  min="1"
                  max="10"
                  value={form.attendees}
                  onChange={(e) => setForm({ ...form, attendees: e.target.value })}
                />
              </div>
            </div>
            <Button type="submit" disabled={loading} className="w-full">
              {loading ? "Registering..." : "Confirm Registration"}
            </Button>
          </form>
        </DialogContent>
      </Dialog>

      <Footer />
      <ScrollToTop />
    </div>
  );
}
