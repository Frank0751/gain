# Green Awareness International (GAIN) Website

A comprehensive, multi-page website for Green Awareness International (GAIN), a Ghanaian environmental nonprofit organization. Built with Next.js 16, TypeScript, Tailwind CSS 4, and shadcn/ui.

## Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run lint
npm run lint
```

The dev server runs on `http://localhost:3000`.

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4
- **UI Components**: shadcn/ui (New York style) with Lucide icons
- **Animations**: Framer Motion
- **Markdown**: react-markdown (for blog posts)
- **Database**: Prisma ORM (SQLite, configured but optional)
- **Fonts**: Geist Sans, Geist Mono, Poppins (display)

## Project Structure

```
src/
├── app/                      # Next.js App Router pages
│   ├── page.tsx              # Homepage
│   ├── about/                # About page
│   ├── programmes/           # Programmes page
│   ├── impact/               # Impact page
│   ├── gallery/              # Gallery page
│   ├── blog/                 # Blog listing + detail pages
│   │   ├── page.tsx          # Blog listing
│   │   ├── [slug]/page.tsx   # Blog detail
│   │   └── category/[category]/page.tsx  # Category pages
│   ├── events/               # Events page
│   ├── volunteer/            # Volunteer page
│   ├── donate/               # Donate page
│   │   └── thank-you/        # Donation thank-you page
│   ├── contact/              # Contact page
│   ├── partner/              # Partner with us page
│   ├── resources/            # Resources/downloads page
│   ├── impact-report/        # Annual impact report
│   ├── careers/              # Careers/jobs page
│   ├── transparency/         # Financial transparency page
│   ├── faq/                  # FAQ page
│   ├── privacy/              # Privacy policy
│   ├── terms/                # Terms of service
│   ├── newsletter/success/   # Newsletter success page
│   ├── sitemap-page/         # Human-readable sitemap
│   ├── not-found.tsx         # Custom 404 page
│   ├── sitemap.ts            # Dynamic XML sitemap
│   ├── robots.ts             # Dynamic robots.txt
│   └── api/                  # API routes
│       ├── contact/          # Contact form submissions
│       ├── newsletter/       # Newsletter subscriptions
│       ├── volunteer/        # Volunteer applications
│       ├── partner/          # Partnership inquiries
│       └── event-register/   # Event registrations
├── components/
│   ├── site/                 # Custom site components
│   │   ├── navbar.tsx        # Sticky navbar with dropdowns + search
│   │   ├── footer.tsx        # Footer with newsletter + links
│   │   ├── page-hero.tsx     # Full-height page hero
│   │   ├── section-heading.tsx
│   │   ├── search-command-palette.tsx  # Ctrl+K search
│   │   ├── social-share.tsx  # Blog social sharing
│   │   ├── testimonials.tsx  # Auto-rotating testimonials
│   │   ├── social-feed.tsx   # Social media feed
│   │   ├── contact-widget.tsx # Floating contact widget
│   │   ├── cookie-consent.tsx
│   │   ├── scroll-progress.tsx
│   │   ├── scroll-to-top.tsx # With scroll percentage ring
│   │   ├── campaign-progress.tsx
│   │   ├── animated-counter.tsx
│   │   ├── reading-progress.tsx
│   │   ├── json-ld.tsx       # SEO structured data
│   │   ├── lazy-image.tsx
│   │   ├── loading-skeleton.tsx
│   │   ├── skip-to-content.tsx
│   │   └── theme-provider.tsx
│   └── ui/                   # shadcn/ui components
├── lib/
│   ├── data.ts               # All site data (org info, blog posts, events, etc.)
│   ├── search-index.ts       # Search index for command palette
│   ├── utils.ts              # Utility functions
│   └── db.ts                 # Prisma client (optional)
├── hooks/
│   ├── use-toast.ts
│   └── use-mobile.ts
└── app/
    ├── globals.css           # Global styles + Tailwind
    └── layout.tsx            # Root layout with theme, JSON-LD, etc.

public/
├── gain-logo.jpg             # GAIN logo
├── logo.svg                  # Z.ai logo (can be replaced)
└── images/gain/              # Authentic GAIN social media images
    ├── gain-banner.jpg
    ├── gain-profile.jpg
    ├── gain-media-1.jpg
    ├── gain-media-2.jpg
    ├── gain-media-3.jpg
    ├── gain-media-4.jpg
    ├── gain-media-5.jpg
    └── gain-media-6.jpg
```

## Features

### Pages (20+ routes)
- Homepage with hero, stats, campaigns, programmes, testimonials, social feed
- About page with story, mission/vision, values, team, timeline
- Programmes page with 3 programme details
- Impact page with animated counters, stories, campaign progress, partners
- Gallery with filterable grid and lightbox
- Blog with search, category filter, and full article pages with references
- Events with registration, upcoming/past tabs, timeline
- Volunteer page with roles and application form
- Donate page with tiers, recurring option, impact calculator, Paystack info
- Contact page with form and FAQ
- Partner page with benefits, types, and inquiry form
- Resources page with downloadable guides
- Impact Report page with financials and milestones
- Careers page with job listings and application
- Transparency page with funding/spending breakdowns
- FAQ page with search and categories
- Privacy Policy and Terms of Service
- Newsletter success and donation thank-you pages
- Custom 404 page
- Human-readable sitemap

### Functionality
- Site-wide search with command palette (Ctrl+K / Cmd+K)
- 5 API endpoints (contact, newsletter, volunteer, partner, event-register)
- Social sharing on blog posts (X, Facebook, LinkedIn, copy link)
- Cookie consent banner
- Dark mode support
- Print-friendly styles for blog posts
- SEO: JSON-LD structured data, dynamic sitemap.xml, robots.txt
- Accessibility: skip-to-content, ARIA labels, keyboard navigation
- Loading skeletons for all pages
- Scroll progress bar and scroll-to-top with percentage ring
- Contact widget (WhatsApp, Email, Call)
- Animated stat counters
- Campaign progress bars
- Reading progress indicator on blog posts

### Design
- Forest green primary color with amber/gold accents
- Poppins display font for headings, Geist for body
- Fully responsive (mobile-first)
- Framer Motion animations throughout
- Glass-morphism navbar and effects
- Full-height page heroes

## Deploying to Vercel

### Option 1: Via Vercel Dashboard

1. Push your code to a GitHub repository
2. Go to [vercel.com](https://vercel.com) and sign in
3. Click "Add New Project" and import your GitHub repository
4. Vercel will auto-detect Next.js settings
5. Click "Deploy"

### Option 2: Via Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy from project root
vercel

# Deploy to production
vercel --prod
```

### Environment Variables

No environment variables are required for basic operation. The site uses:
- In-memory storage for form submissions (contact, newsletter, volunteer, partner, event-register)
- Static data in `src/lib/data.ts`

For production with a database, set up Prisma:
```bash
# Set the DATABASE_URL environment variable in Vercel
DATABASE_URL="file:./dev.db"
```

### Post-Deployment Checklist

1. **Update metadataBase**: In `src/app/layout.tsx`, update the `metadataBase` URL to your actual domain
2. **Update sitemap URLs**: In `src/app/sitemap.ts`, update the `baseUrl` to your actual domain
3. **Update robots.txt**: In `src/app/robots.ts`, update the sitemap URL
4. **Set up Paystack**: Integrate actual Paystack payment gateway for donations
5. **Set up email**: Configure email service for form submissions
6. **Add analytics**: Add Google Analytics or Vercel Analytics
7. **Test all forms**: Verify contact, volunteer, partner, and event registration forms work

## Customization

### Updating Content

All content is centralized in `src/lib/data.ts`:
- `ORG` - Organization info (name, contact, socials)
- `NAV_LINKS` and `NAV_GROUPS` - Navigation structure
- `STATS` - Impact statistics
- `VALUES` - Organization values
- `PROGRAMMES` - Programme details
- `IMPACT_STORIES` - Impact story cards
- `GALLERY_IMAGES` - Gallery photos
- `BLOG_POSTS` - Blog articles (with full markdown content and references)
- `EVENTS` - Event listings
- `DONATION_METHODS` and `DONATION_TIERS` - Donation options
- `TEAM` and `TEAM_EXTENDED` - Team members
- `FAQS` and `FAQS_EXTENDED` - FAQ items
- `TESTIMONIALS` - Testimonial carousel
- `SOCIAL_POSTS` - Social media feed
- `CAMPAIGNS` - Active campaigns with progress
- `PARTNERS` - Partner organizations
- `VOLUNTEER_ROLES` - Volunteer opportunities
- `RESOURCES` - Downloadable resources
- `IMPACT_REPORT_DATA` - Annual report data
- `CAREERS` - Job listings
- `TRANSPARENCY_DATA` - Financial transparency data
- `PARTNER_BENEFITS` and `PARTNER_TYPES` - Partnership info

### Updating Images

Replace images in `public/images/gain/` with your own. Keep the same filenames or update the paths in `src/lib/data.ts`.

### Updating Colors

Edit CSS variables in `src/app/globals.css`:
```css
:root {
  --primary: oklch(0.52 0.15 150);    /* Forest green */
  --accent: oklch(0.72 0.16 75);      /* Amber/gold */
  /* ... */
}
```

## Continuing in Claude Code

To continue development in Claude Code:

1. Extract this archive to your desired directory
2. Open the directory in Claude Code
3. Run `npm install` to install dependencies
4. Run `npm run dev` to start the dev server
5. Reference `worklog.md` for the full development history

Claude Code will have access to the entire codebase and can help you:
- Add new pages and features
- Modify existing content
- Integrate Paystack payment gateway
- Set up a database with Prisma
- Add authentication
- And more

## License

This project is proprietary to Green Awareness International (GAIN).

## Contact

- **Organization**: Green Awareness International (GAIN)
- **Email**: edmond.amankwaah@gmail.com
- **Phone**: 0558343278
- **Location**: Ghana, West Africa
- **Social Media**: X (@Gainghana), Facebook, Instagram (@gainghana), LinkedIn
