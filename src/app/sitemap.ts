import type { MetadataRoute } from "next";
import { BLOG_POSTS } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://gainghana.org";
  const lastModified = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/`, lastModified, changeFrequency: "weekly", priority: 1.0 },
    { url: `${baseUrl}/about`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/programmes`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/impact`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/gallery`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/blog`, lastModified, changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/events`, lastModified, changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/volunteer`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/donate`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/donate/thank-you`, lastModified, changeFrequency: "yearly", priority: 0.3 },
    { url: `${baseUrl}/contact`, lastModified, changeFrequency: "yearly", priority: 0.6 },
    { url: `${baseUrl}/partner`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/resources`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/impact-report`, lastModified, changeFrequency: "yearly", priority: 0.6 },
    { url: `${baseUrl}/careers`, lastModified, changeFrequency: "weekly", priority: 0.7 },
    { url: `${baseUrl}/transparency`, lastModified, changeFrequency: "yearly", priority: 0.5 },
    { url: `${baseUrl}/newsletter/success`, lastModified, changeFrequency: "yearly", priority: 0.2 },
    { url: `${baseUrl}/faq`, lastModified, changeFrequency: "monthly", priority: 0.6 },
    { url: `${baseUrl}/privacy`, lastModified, changeFrequency: "yearly", priority: 0.3 },
    { url: `${baseUrl}/terms`, lastModified, changeFrequency: "yearly", priority: 0.3 },
    { url: `${baseUrl}/sitemap-page`, lastModified, changeFrequency: "monthly", priority: 0.4 },
  ];

  const blogPosts: MetadataRoute.Sitemap = BLOG_POSTS.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "yearly" as const,
    priority: 0.6,
  }));

  return [...staticPages, ...blogPosts];
}
