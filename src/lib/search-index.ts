// Search index for the GAIN website
// Combines all searchable content into a single array

import { BLOG_POSTS, EVENTS, PROGRAMMES, NAV_LINKS, FAQS_EXTENDED } from "./data";

export interface SearchResult {
  title: string;
  description: string;
  href: string;
  category: string;
  keywords?: string;
}

export const SEARCH_INDEX: SearchResult[] = [
  // Pages
  { title: "Home", description: "GAIN homepage with mission, campaigns, and impact overview", href: "/", category: "Pages" },
  { title: "About Us", description: "Learn about GAIN's story, mission, vision, values, and team", href: "/about", category: "Pages" },
  { title: "Our Programmes", description: "Skills Development, Public Education, and Environmental Action programmes", href: "/programmes", category: "Pages" },
  { title: "Our Impact", description: "See our impact stats, stories, and campaign progress", href: "/impact", category: "Pages" },
  { title: "Gallery", description: "Photos from our campaigns, clean-ups, and community drives", href: "/gallery", category: "Pages" },
  { title: "Blog", description: "Articles, updates, and educational content on environmental action", href: "/blog", category: "Pages" },
  { title: "Events", description: "Upcoming and past events including tree planting and clean-ups", href: "/events", category: "Pages" },
  { title: "Volunteer", description: "Join GAIN as a volunteer and help drive environmental change", href: "/volunteer", category: "Pages" },
  { title: "Donate", description: "Support our mission with one-time or monthly donations", href: "/donate", category: "Pages" },
  { title: "Contact", description: "Get in touch with GAIN for enquiries, partnerships, or volunteering", href: "/contact", category: "Pages" },
  { title: "Partner With Us", description: "Partner with GAIN as a corporate, school, NGO, or community partner", href: "/partner", category: "Pages" },
  { title: "Resources and Downloads", description: "Free educational materials, guides, and toolkits for environmental action", href: "/resources", category: "Pages" },
  { title: "Annual Impact Report", description: "Our comprehensive annual report with impact metrics, financials, and stories", href: "/impact-report", category: "Pages" },
  { title: "Careers at GAIN", description: "Job openings and career opportunities at Green Awareness International", href: "/careers", category: "Pages" },
  { title: "Financial Transparency", description: "How we are funded, how we spend, and our governance commitments", href: "/transparency", category: "Pages" },
  { title: "FAQ", description: "Frequently asked questions about GAIN, donations, and volunteering", href: "/faq", category: "Pages" },
  { title: "Privacy Policy", description: "How we collect, use, and protect your information", href: "/privacy", category: "Legal" },
  { title: "Terms of Service", description: "Terms and conditions for using the GAIN website", href: "/terms", category: "Legal" },
  { title: "Sitemap", description: "Browse all pages on the GAIN website organized by category", href: "/sitemap-page", category: "Pages" },

  // Programmes
  ...PROGRAMMES.map((p) => ({
    title: p.title,
    description: p.description,
    href: "/programmes",
    category: "Programmes",
    keywords: p.tagline,
  })),

  // Blog posts
  ...BLOG_POSTS.map((post) => ({
    title: post.title,
    description: post.excerpt,
    href: `/blog/${post.slug}`,
    category: "Blog",
    keywords: post.category,
  })),

  // Events
  ...EVENTS.map((event) => ({
    title: event.title,
    description: event.description,
    href: "/events",
    category: event.type === "upcoming" ? "Upcoming Events" : "Past Events",
    keywords: event.tag,
  })),

  // FAQs
  ...FAQS_EXTENDED.map((faq) => ({
    title: faq.question,
    description: faq.answer,
    href: "/faq",
    category: "FAQ",
    keywords: faq.category,
  })),
];
