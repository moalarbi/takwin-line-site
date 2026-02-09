# TAKWIN LINE - Cleaning Services Website

A bilingual (Arabic/English) website for TAKWIN LINE cleaning company in Riyadh, Saudi Arabia. Built with React, TypeScript, Tailwind CSS, and Vite.

![TAKWIN LINE](https://img.shields.io/badge/TAKWIN%20LINE-Cleaning%20Services-teal)
![React](https://img.shields.io/badge/React-18-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3-38bdf8)

## Live Website

🔗 [https://moalarbi.github.io/takwin-line-site/](https://moalarbi.github.io/takwin-line-site/)

## Features

- **Bilingual Support**: Full Arabic (RTL) and English (LTR) support
- **Mobile-First Design**: Optimized for mobile devices with responsive desktop layout
- **Booking Funnel**: Multi-step WhatsApp booking system
- **SEO Optimized**: Meta tags, OpenGraph, JSON-LD schema, sitemap.xml
- **Fast Performance**: Vite-powered build with optimized assets
- **Accessible**: ARIA labels, keyboard navigation, focus states

## Tech Stack

- **Framework**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS + shadcn/ui components
- **Routing**: React Router
- **Icons**: Lucide React
- **Deployment**: GitHub Pages via GitHub Actions

## Project Structure

```
src/
├── components/       # Reusable UI components
│   ├── Header.tsx           # Navigation header
│   ├── Footer.tsx           # Site footer
│   ├── WhatsAppButton.tsx   # Floating WhatsApp CTA
│   ├── BookingFunnel.tsx    # Main booking component
│   ├── FAQAccordion.tsx     # FAQ section
│   └── ServiceCard.tsx      # Service display card
├── pages/            # Page components
│   ├── HomePage.tsx
│   ├── AboutPage.tsx
│   ├── ServicesPage.tsx
│   ├── B2BPage.tsx
│   ├── ContactPage.tsx
│   ├── PrivacyPage.tsx
│   └── TermsPage.tsx
├── contexts/         # React contexts
│   └── LanguageContext.tsx  # Language & RTL/LTR state
├── data/             # Static data
│   └── services.ts          # Service definitions
├── utils/            # Utility functions
│   └── whatsapp.ts          # WhatsApp link builders
└── App.tsx           # Main app with routing
```

## Installation

```bash
# Clone the repository
git clone https://github.com/moalarbi/takwin-line-site.git
cd takwin-line-site

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## Configuration

### Change WhatsApp Number

Edit the phone number in `src/utils/whatsapp.ts`:

```typescript
const WHATSAPP_NUMBER = '966559466460'; // Change this
```

### Edit Services

Services are defined in `src/data/services.ts`. Each service has:

```typescript
{
  id: 'unique-id',
  nameAr: 'Arabic Name',
  nameEn: 'English Name',
  descriptionAr: 'Arabic description',
  descriptionEn: 'English description',
  suitableForAr: ['Item 1', 'Item 2'],
  suitableForEn: ['Item 1', 'Item 2'],
  category: 'individual' | 'company' | 'both'
}
```

### Update Business Information

Edit the JSON-LD schema in `index.html`:

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "TAKWIN LINE",
  "telephone": "+966559466460",
  "email": "takwin.line@gmail.com",
  ...
}
</script>
```

## Deployment

The site automatically deploys to GitHub Pages when you push to the `main` branch.

### Manual Deployment

1. Go to repository Settings → Pages
2. Source: Deploy from a branch
3. Branch: `gh-pages` / `root`
4. Save

### GitHub Actions Workflow

The workflow (`.github/workflows/deploy.yml`) automatically:
1. Installs dependencies
2. Builds the project
3. Copies static files (robots.txt, sitemap.xml)
4. Deploys to GitHub Pages

## Environment Variables

No environment variables required. All configuration is in source files.

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

© 2026 TAKWIN LINE. All rights reserved.

## Contact

- WhatsApp: 0559466460
- Email: takwin.line@gmail.com
- TikTok: [@takwin.line](https://www.tiktok.com/@takwin.line)
