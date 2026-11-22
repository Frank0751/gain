import type { Metadata } from "next";
import { Ubuntu, Ubuntu_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/site/theme-provider";
import { ScrollProgress } from "@/components/site/scroll-progress";
import { CookieConsent } from "@/components/site/cookie-consent";
import { SkipToContent } from "@/components/site/skip-to-content";
import { OrganizationJsonLd, WebsiteJsonLd } from "@/components/site/json-ld";
import { ContactWidget } from "@/components/site/contact-widget";

const ubuntu = Ubuntu({
  variable: "--font-ubuntu",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  display: "swap",
});

const ubuntuMono = Ubuntu_Mono({
  variable: "--font-ubuntu-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://gainghana.org"),
  title: "Green Awareness International (GAIN) | Empowering Youth for a Greener Ghana",
  description:
    "Green Awareness International is a youth-led nonprofit empowering young people and communities to drive environmental change in Ghana through skills development, public education, and environmental action.",
  keywords: [
    "Green Awareness International",
    "GAIN",
    "Ghana environmental NGO",
    "youth environmental action",
    "climate action Ghana",
    "tree planting Ghana",
    "environmental education",
    "sustainability Ghana",
    "nonprofit Ghana",
    "clean environment",
  ],
  authors: [{ name: "Green Awareness International" }],
  icons: {
    icon: "/gain-logo.jpg",
  },
  openGraph: {
    title: "Green Awareness International (GAIN)",
    description:
      "Youth-led initiative empowering young people and communities to drive environmental change in Ghana.",
    siteName: "Green Awareness International",
    type: "website",
    images: ["/images/gain/gain-media-2.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Green Awareness International (GAIN)",
    description:
      "Youth-led initiative empowering young people and communities to drive environmental change in Ghana.",
    images: ["/images/gain/gain-media-2.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${ubuntu.variable} ${ubuntuMono.variable} antialiased bg-background text-foreground font-sans`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <SkipToContent />
          <ScrollProgress />
          <OrganizationJsonLd />
          <WebsiteJsonLd />
          {children}
          <ContactWidget />
          <CookieConsent />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
