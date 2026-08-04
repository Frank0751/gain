"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Heart, Copy, Check, Shield, CreditCard, Building2 } from "lucide-react";

import { Navbar } from "@/components/site/navbar";
import { Footer } from "@/components/site/footer";
import { ScrollToTop } from "@/components/site/scroll-to-top";
import { PageHero } from "@/components/site/page-hero";
import { SectionHeading } from "@/components/site/section-heading";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { DONATION_TIERS, DONATION_METHODS } from "@/lib/data";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";

function CopyField({ label, value }: { label: string; value: string }) {
  const [copied, setCopied] = React.useState(false);
  const { toast } = useToast();

  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      toast({ title: "Copied", description: `${label} copied to clipboard.` });
      setTimeout(() => setCopied(false), 2000);
    } catch {
      toast({ title: "Could not copy", variant: "destructive" });
    }
  };

  return (
    <div className="flex items-center justify-between gap-3 rounded-lg border border-border bg-background p-3">
      <div>
        <p className="text-xs text-muted-foreground">{label}</p>
        <p className="font-mono text-sm font-semibold text-foreground">{value}</p>
      </div>
      <Button variant="ghost" size="icon" onClick={onCopy} aria-label={`Copy ${label}`}>
        {copied ? <Check className="size-4 text-primary" /> : <Copy className="size-4" />}
      </Button>
    </div>
  );
}

export default function DonatePage() {
  const router = useRouter();
  const [selectedTier, setSelectedTier] = React.useState<number | null>(100);
  const [customAmount, setCustomAmount] = React.useState("");
  const [isRecurring, setIsRecurring] = React.useState(false);
  const [donating, setDonating] = React.useState(false);

  const currentAmount = selectedTier ?? (customAmount ? parseInt(customAmount) : 0);
  const treesPlanted = Math.floor(currentAmount / 10);
  const studentsEducated = Math.floor(currentAmount / 10);
  const wasteCollected = Math.floor(currentAmount / 5);

  const handleDonate = () => {
    if (currentAmount <= 0) return;
    setDonating(true);
    // Simulate Paystack redirect (in production, this would redirect to Paystack checkout)
    setTimeout(() => {
      router.push("/donate/thank-you");
    }, 1500);
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main id="main-content" className="flex-1">
        <PageHero
          title="Support Our Mission"
          subtitle="Your donation plants trees, educates students, cleans communities, and empowers young Ghanaians for a greener future."
          image="/images/gain/gain-media-1.jpg"
          breadcrumbs={[{ label: "Home", href: "/" }, { label: "Donate" }]}
        />

        {/* Donation tiers */}
        <section className="bg-background py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              title="Choose Your Impact"
              subtitle="Select a donation tier or enter a custom amount. Every contribution makes a tangible difference."
            />

            {/* One-time / Recurring toggle */}
            <div className="mt-8 flex justify-center">
              <div className="inline-flex rounded-full border border-border bg-secondary/50 p-1">
                <button
                  onClick={() => setIsRecurring(false)}
                  className={`rounded-full px-6 py-2 text-sm font-semibold transition-all ${
                    !isRecurring
                      ? "bg-primary text-primary-foreground shadow"
                      : "text-foreground/70 hover:text-primary"
                  }`}
                >
                  One-Time
                </button>
                <button
                  onClick={() => setIsRecurring(true)}
                  className={`rounded-full px-6 py-2 text-sm font-semibold transition-all ${
                    isRecurring
                      ? "bg-primary text-primary-foreground shadow"
                      : "text-foreground/70 hover:text-primary"
                  }`}
                >
                  Monthly
                </button>
              </div>
            </div>
            {isRecurring && (
              <p className="mt-3 text-center text-xs text-muted-foreground">
                Monthly recurring donations are processed by card via Paystack. Mobile money cannot auto-recur.
              </p>
            )}

            <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {DONATION_TIERS.map((tier, i) => (
                <motion.div
                  key={tier.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                >
                  <Card
                    className={cn(
                      "relative h-full cursor-pointer border-2 transition-all",
                      selectedTier === tier.amount
                        ? "border-primary shadow-lg"
                        : "border-border/60 hover:border-primary/40"
                    )}
                    onClick={() => {
                      setSelectedTier(tier.amount);
                      setCustomAmount("");
                    }}
                  >
                    {tier.popular && (
                      <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 border-0 bg-accent text-accent-foreground shadow">
                        Most Popular
                      </Badge>
                    )}
                    <CardContent>
                      <p className="font-display text-3xl font-extrabold text-primary">
                        {tier.currency} {tier.amount}
                      </p>
                      <h3 className="mt-2 font-display text-lg font-bold text-foreground">
                        {tier.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {tier.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Custom amount */}
            <div className="mt-8 mx-auto max-w-md">
              <Label htmlFor="custom" className="text-sm font-medium text-foreground">
                Or enter a custom amount (GHS)
              </Label>
              <Input
                id="custom"
                type="number"
                placeholder="Enter amount"
                value={customAmount}
                onChange={(e) => {
                  setCustomAmount(e.target.value);
                  setSelectedTier(null);
                }}
                className="mt-2"
              />
            </div>

            {/* Donate button */}
            <div className="mt-8 text-center">
              <Button
                size="lg"
                onClick={handleDonate}
                disabled={donating || currentAmount <= 0}
                className="bg-accent text-accent-foreground shadow-lg shadow-accent/30 hover:bg-accent/90"
              >
                <Heart className="size-4" />
                {donating ? "Redirecting to Paystack..." : `Donate ${selectedTier ? `GHS ${selectedTier}` : customAmount ? `GHS ${customAmount}` : "Now"}${isRecurring ? " /month" : ""} via Paystack`}
              </Button>
              <p className="mt-3 text-xs text-muted-foreground">
                You will be redirected to Paystack's secure checkout to complete your {isRecurring ? "recurring " : ""}payment.
              </p>

              {/* Impact calculator */}
              {currentAmount > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="mx-auto mt-8 max-w-2xl"
                >
                  <div className="rounded-xl border border-primary/20 bg-primary/5 p-6">
                    <p className="text-center text-sm font-semibold text-primary">
                      Your {isRecurring ? "monthly " : ""}donation of GHS {currentAmount} will:
                    </p>
                    <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-3">
                      <div className="text-center">
                        <p className="font-display text-2xl font-extrabold text-primary">{treesPlanted}</p>
                        <p className="text-xs text-muted-foreground">Trees Planted</p>
                      </div>
                      <div className="text-center">
                        <p className="font-display text-2xl font-extrabold text-primary">{studentsEducated}</p>
                        <p className="text-xs text-muted-foreground">Students Educated</p>
                      </div>
                      <div className="text-center">
                        <p className="font-display text-2xl font-extrabold text-primary">{wasteCollected}kg</p>
                        <p className="text-xs text-muted-foreground">Waste Collected</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </section>

        {/* Payment methods */}
        <section className="bg-secondary/30 py-20 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              title="Other Ways to Give"
              subtitle="Prefer to give directly? Use the mobile money or bank details below. No fees apply on direct transfers."
            />

            <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
              {/* Paystack */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5 }}
              >
                <Card className="h-full border-primary/20">
                  <CardContent className="space-y-4">
                    <div className="flex items-center gap-3">
                      <CreditCard className="size-6 text-primary" />
                      <h3 className="font-display text-lg font-bold text-foreground">
                        {DONATION_METHODS.paystack.title}
                      </h3>
                    </div>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {DONATION_METHODS.paystack.description}
                    </p>
                    <ul className="space-y-1.5">
                      {DONATION_METHODS.paystack.methods.map((method) => (
                        <li key={method} className="flex items-center gap-2 text-sm text-foreground">
                          <Check className="size-4 text-primary" />
                          {method}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>

              {/* MoMo */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <Card className="h-full border-accent/30">
                  <CardContent className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Heart className="size-6 text-accent-foreground" />
                      <h3 className="font-display text-lg font-bold text-foreground">
                        {DONATION_METHODS.momo.title}
                      </h3>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {DONATION_METHODS.momo.note}
                    </p>
                    <div className="space-y-2">
                      <CopyField label="Mobile Money Number" value={DONATION_METHODS.momo.number} />
                      <CopyField label="Account Name" value={DONATION_METHODS.momo.name} />
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Networks: {DONATION_METHODS.momo.networks.join(", ")}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Bank */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Card className="h-full border-primary/20">
                  <CardContent className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Building2 className="size-6 text-primary" />
                      <h3 className="font-display text-lg font-bold text-foreground">
                        {DONATION_METHODS.bank.title}
                      </h3>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {DONATION_METHODS.bank.note}
                    </p>
                    <div className="space-y-2">
                      <CopyField label="Bank" value={DONATION_METHODS.bank.bankName} />
                      <CopyField label="Branch" value={DONATION_METHODS.bank.branch} />
                      <CopyField label="Account Name" value={DONATION_METHODS.bank.accountName} />
                      <CopyField label="Account Number" value={DONATION_METHODS.bank.accountNumber} />
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            {/* Trust badges */}
            <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
              <span className="flex items-center gap-2">
                <Shield className="size-4 text-primary" />
                Secure Checkout
              </span>
              <span className="flex items-center gap-2">
                <Check className="size-4 text-primary" />
                No Fees on MoMo
              </span>
              <span className="flex items-center gap-2">
                <Check className="size-4 text-primary" />
                Registered NGO
              </span>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
