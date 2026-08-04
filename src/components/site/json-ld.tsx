import { ORG, BLOG_POSTS, EVENTS, PROGRAMMES } from "@/lib/data";

interface JsonLdProps {
  type: "organization" | "website" | "blogPost" | "event" | "breadcrumb";
  data?: Record<string, unknown>;
}

export function JsonLd({ type, data }: JsonLdProps) {
  let schema: Record<string, unknown> = {};

  if (type === "organization") {
    schema = {
      "@context": "https://schema.org",
      "@type": "NGO",
      name: ORG.name,
      alternateName: ORG.shortName,
      url: "https://gainghana.org",
      logo: "https://gainghana.org/gain-logo.jpg",
      description: ORG.bio,
      foundingDate: ORG.founded,
      email: ORG.email,
      telephone: ORG.phone,
      address: {
        "@type": "PostalAddress",
        addressCountry: "GH",
        addressRegion: "Greater Accra",
      },
      sameAs: [
        ORG.socials.x,
        ORG.socials.facebook,
        ORG.socials.instagram,
        ORG.socials.linkedin,
      ],
    };
  } else if (type === "website") {
    schema = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: ORG.name,
      url: "https://gainghana.org",
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: "https://gainghana.org/blog?q={search_term_string}",
        },
        "query-input": "required name=search_term_string",
      },
    };
  } else if (type === "blogPost" && data) {
    schema = {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: data.title,
      description: data.excerpt,
      image: `https://gainghana.org${data.image}`,
      author: {
        "@type": "Organization",
        name: data.author,
      },
      publisher: {
        "@type": "Organization",
        name: ORG.name,
        logo: {
          "@type": "ImageObject",
          url: "https://gainghana.org/gain-logo.jpg",
        },
      },
      datePublished: data.date,
      dateModified: data.date,
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": `https://gainghana.org/blog/${data.slug}`,
      },
    };
  } else if (type === "event" && data) {
    schema = {
      "@context": "https://schema.org",
      "@type": "Event",
      name: data.title,
      description: data.description,
      image: `https://gainghana.org${data.image}`,
      startDate: data.date,
      eventStatus: "https://schema.org/EventScheduled",
      eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
      location: {
        "@type": "Place",
        name: data.location,
        address: {
          "@type": "PostalAddress",
          addressCountry: "GH",
        },
      },
      organizer: {
        "@type": "Organization",
        name: ORG.name,
        url: "https://gainghana.org",
      },
    };
  } else if (type === "breadcrumb" && data) {
    schema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: (data.items as string[]).map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: item,
      })),
    };
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function OrganizationJsonLd() {
  return <JsonLd type="organization" />;
}

export function WebsiteJsonLd() {
  return <JsonLd type="website" />;
}

export function BlogPostJsonLd({ post }: { post: (typeof BLOG_POSTS)[number] }) {
  return <JsonLd type="blogPost" data={post} />;
}

export function EventJsonLd({ event }: { event: (typeof EVENTS)[number] }) {
  return <JsonLd type="event" data={event} />;
}

export function BreadcrumbJsonLd({ items }: { items: string[] }) {
  return <JsonLd type="breadcrumb" data={{ items }} />;
}
