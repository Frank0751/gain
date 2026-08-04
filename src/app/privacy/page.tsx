import * as React from "react";
import Link from "next/link";

import { Navbar } from "@/components/site/navbar";
import { Footer } from "@/components/site/footer";
import { ScrollToTop } from "@/components/site/scroll-to-top";
import { PageHero } from "@/components/site/page-hero";
import { Card, CardContent } from "@/components/ui/card";
import { ORG } from "@/lib/data";

const SECTIONS = [
  {
    title: "Information We Collect",
    content: [
      "We collect information you provide directly to us when you fill out forms on our website, including your name, email address, phone number, and any message you send through our contact or volunteer forms.",
      "When you subscribe to our newsletter, we collect your email address to send you updates about our campaigns, events, and impact stories.",
      "We also automatically collect certain technical information such as your IP address, browser type, and pages visited, through cookies and similar technologies.",
    ],
  },
  {
    title: "How We Use Your Information",
    content: [
      "We use your information to respond to your enquiries, process volunteer applications, and send you updates about our work.",
      "We may use your contact details to notify you about upcoming events, campaigns, and donation opportunities that may interest you.",
      "We use technical data to improve our website, analyze traffic patterns, and enhance user experience.",
      "We never sell, rent, or share your personal information with third parties for marketing purposes.",
    ],
  },
  {
    title: "Cookies",
    content: [
      "Our website uses cookies to improve your browsing experience, remember your preferences, and understand how you use our site.",
      "You can control cookies through your browser settings. Disabling cookies may affect some functionality of our website.",
      "We use a cookie consent banner to ask for your permission before setting non-essential cookies.",
    ],
  },
  {
    title: "Donations and Payments",
    content: [
      "When you make a donation through Paystack, your payment is processed securely on Paystack's platform. We do not collect or store your card details, bank account numbers, or mobile money PINs.",
      "Paystack may share transaction confirmations with us so we can acknowledge your donation and issue receipts.",
      "For direct mobile money or bank transfers, we use the details you provide solely to confirm receipt of your donation.",
    ],
  },
  {
    title: "Data Security",
    content: [
      "We take reasonable measures to protect your personal information from unauthorized access, alteration, or disclosure.",
      "Our website uses HTTPS encryption for all data transmission.",
      "However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.",
    ],
  },
  {
    title: "Your Rights",
    content: [
      "You have the right to access, correct, or delete the personal information we hold about you.",
      "You can unsubscribe from our newsletter at any time by clicking the unsubscribe link in any email we send.",
      "You can request that we erase your data by contacting us using the details below.",
      "You can decline to provide information, though this may limit your ability to use certain features of our website.",
    ],
  },
  {
    title: "Third-Party Links",
    content: [
      "Our website may contain links to third-party websites such as our social media profiles and payment processors.",
      "We are not responsible for the privacy practices of these third-party sites and encourage you to read their privacy policies.",
    ],
  },
  {
    title: "Children's Privacy",
    content: [
      "Our website is not directed to children under 16, and we do not knowingly collect personal information from children under 16.",
      "If you believe a child has provided us with personal information, please contact us so we can delete it.",
    ],
  },
  {
    title: "Changes to This Policy",
    content: [
      "We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements.",
      "We will post the updated policy on this page and update the last modified date below.",
      "We encourage you to review this page periodically to stay informed about how we protect your information.",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main id="main-content" className="flex-1">
        <PageHero
          title="Privacy Policy"
          subtitle="Your privacy matters to us. This policy explains how we collect, use, and protect your information."
          image="/images/gain/gain-media-6.jpg"
          breadcrumbs={[{ label: "Home", href: "/" }, { label: "Privacy Policy" }]}
        />

        <section className="bg-background py-16 md:py-24">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="mb-8 rounded-lg border border-border bg-secondary/30 p-4 text-sm text-muted-foreground">
              <p>
                <span className="font-semibold text-foreground">Last updated:</span> August 2025
              </p>
              <p className="mt-1">
                This Privacy Policy describes how {ORG.name} collects, uses, and protects your information when you visit our website or use our services.
              </p>
            </div>

            <div className="space-y-8">
              {SECTIONS.map((section, idx) => (
                <div key={idx} id={`section-${idx}`}>
                  <h2 className="font-display text-xl font-bold text-foreground sm:text-2xl">
                    {idx + 1}. {section.title}
                  </h2>
                  <div className="mt-3 space-y-3">
                    {section.content.map((paragraph, pIdx) => (
                      <p key={pIdx} className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Contact section */}
            <Card className="mt-12 border-primary/20">
              <CardContent>
                <h2 className="font-display text-xl font-bold text-foreground">
                  Contact Us
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  If you have any questions about this Privacy Policy or how we handle your data, please contact us:
                </p>
                <div className="mt-4 space-y-1 text-sm">
                  <p><span className="font-semibold text-foreground">Email:</span> <a href={`mailto:${ORG.email}`} className="text-primary hover:underline">{ORG.email}</a></p>
                  <p><span className="font-semibold text-foreground">Phone:</span> <a href={`tel:${ORG.phone}`} className="text-primary hover:underline">{ORG.phone}</a></p>
                  <p><span className="font-semibold text-foreground">Attention:</span> {ORG.contactPerson}</p>
                </div>
              </CardContent>
            </Card>

            <div className="mt-8 text-center">
              <Link href="/terms" className="text-sm font-medium text-primary hover:underline">
                View our Terms of Service
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
