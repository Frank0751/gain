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
    title: "Acceptance of Terms",
    content: [
      "By accessing and using the Green Awareness International (GAIN) website, you accept and agree to be bound by these Terms of Service.",
      "If you do not agree to these terms, please do not use our website.",
      "We may update these terms at any time, and continued use of the website after changes constitutes acceptance of the updated terms.",
    ],
  },
  {
    title: "Use of Our Website",
    content: [
      "You agree to use our website only for lawful purposes and in a way that does not infringe the rights of others.",
      "You must not use our website to send unsolicited communications, upload harmful content, or attempt to gain unauthorized access to our systems.",
      "You agree not to reproduce, duplicate, or sell any content from our website without prior written permission.",
    ],
  },
  {
    title: "Donations",
    content: [
      "Donations made through our website are processed by Paystack, a third-party payment processor. Paystack's terms and conditions apply to all transactions.",
      "We reserve the right to decline or refund donations at our discretion.",
      "Donations are non-refundable except in cases of proven fraud or error, in which case we will work with Paystack to process a refund.",
      "Recurring (monthly) donations will continue until you cancel them through Paystack or by contacting us.",
    ],
  },
  {
    title: "Volunteer Applications",
    content: [
      "Submitting a volunteer application does not guarantee placement. We review all applications and select volunteers based on current needs and suitability.",
      "Volunteers must comply with our code of conduct and follow all safety guidelines during activities.",
      "We reserve the right to terminate a volunteer engagement at any time for conduct that violates our policies.",
    ],
  },
  {
    title: "Event Registration",
    content: [
      "Registering for an event does not guarantee a spot. We will confirm your registration via email.",
      "Events may be cancelled or rescheduled due to weather, safety concerns, or insufficient registration.",
      "Participants attend events at their own risk and are responsible for their personal safety and belongings.",
    ],
  },
  {
    title: "Intellectual Property",
    content: [
      "All content on this website, including text, images, logos, and graphics, is the property of GAIN unless otherwise stated.",
      "You may share links to our content on social media, but you may not reproduce full articles or images without permission.",
      "The GAIN logo and brand name are protected trademarks and may not be used without written consent.",
    ],
  },
  {
    title: "User-Generated Content",
    content: [
      "If you submit content to our website (such as comments or testimonials), you grant us a non-exclusive license to use, reproduce, and display that content.",
      "You warrant that you own the rights to any content you submit and that it does not infringe the rights of any third party.",
      "We reserve the right to remove any user-generated content at our discretion.",
    ],
  },
  {
    title: "Disclaimer of Liability",
    content: [
      "Our website is provided on an as-is basis. We make no warranties regarding the accuracy, completeness, or reliability of any content.",
      "GAIN shall not be liable for any direct, indirect, or consequential damages arising from your use of our website or participation in our events.",
      "You are responsible for evaluating the accuracy of any information before relying on it.",
    ],
  },
  {
    title: "Third-Party Services",
    content: [
      "Our website relies on third-party services including Paystack (payments), Vercel (hosting), and social media platforms.",
      "We are not responsible for the performance, availability, or practices of these third-party services.",
      "Account ownership and any third-party fees rest with the user.",
    ],
  },
  {
    title: "Governing Law",
    content: [
      "These Terms of Service are governed by the laws of the Republic of Ghana.",
      "Any disputes arising from these terms shall be resolved in the courts of Ghana.",
    ],
  },
];

export default function TermsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main id="main-content" className="flex-1">
        <PageHero
          title="Terms of Service"
          subtitle="The terms and conditions for using the Green Awareness International website and services."
          image="/images/gain/gain-media-2.jpg"
          breadcrumbs={[{ label: "Home", href: "/" }, { label: "Terms of Service" }]}
        />

        <section className="bg-background py-16 md:py-24">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="mb-8 rounded-lg border border-border bg-secondary/30 p-4 text-sm text-muted-foreground">
              <p>
                <span className="font-semibold text-foreground">Last updated:</span> August 2025
              </p>
              <p className="mt-1">
                Please read these Terms of Service carefully before using the {ORG.name} website.
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
                  Questions About These Terms?
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  If you have any questions or concerns about these Terms of Service, please reach out to us:
                </p>
                <div className="mt-4 space-y-1 text-sm">
                  <p><span className="font-semibold text-foreground">Email:</span> <a href={`mailto:${ORG.email}`} className="text-primary hover:underline">{ORG.email}</a></p>
                  <p><span className="font-semibold text-foreground">Phone:</span> <a href={`tel:${ORG.phone}`} className="text-primary hover:underline">{ORG.phone}</a></p>
                </div>
              </CardContent>
            </Card>

            <div className="mt-8 text-center">
              <Link href="/privacy" className="text-sm font-medium text-primary hover:underline">
                View our Privacy Policy
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
