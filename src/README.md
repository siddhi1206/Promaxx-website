# PROMAXX INDUSTRIES — Website

**BUILT FOR PERFORMANCE. FOCUSED ON VALUE.**

Four-page marketing site (Home, About, Products, Contact) for an industrial wheels and
castors manufacturer. Static frontend only — **no backend, no API, no database, no CMS, no
contact-form processing.** Contact is handled entirely by phone, WhatsApp and email links.

> **Note on the stack:** this preview environment renders React + TypeScript only, so the
> site is implemented as a small React app (Vite build, static output). It still deploys as
> plain static files to Firebase Hosting. If the plain HTML/CSS/JS version is required, the
> structure maps 1:1 — each file in `pages/` becomes one `.html` file, `components/`
> becomes partials, `data/` becomes one JS file, and the Tailwind classes become the CSS in
> `src/css/`.

---

## Project structure

```
App.tsx                     Routing only
index.css                   Brand CSS variables + font + global styles
tailwind.config.js          Brand colours, font, radius, easing

pages/                      One file per page
  Home.tsx  About.tsx  Products.tsx  Contact.tsx

components/
  Header.tsx  Footer.tsx  Layout.tsx  Logo.tsx
  Button.tsx  SectionHeading.tsx  PageHero.tsx  FinalCta.tsx
  Reveal.tsx  CountUp.tsx          <-- ALL scroll/number animation lives here
  home/                            <-- Home page sections
    Hero.tsx  Metrics.tsx  Introduction.tsx  WhyPromaxx.tsx
    ProductPreview.tsx  Applications.tsx  Commitment.tsx
  products/
    ProductCard.tsx  ProductFilters.tsx  ProductModal.tsx

data/
  products.ts               <-- THE PRODUCT CATALOGUE (edit here)
  site.ts                   <-- COMPANY DETAILS + IMAGE URLS (edit here)

types/product.ts            Product data shape
hooks/usePageMeta.ts        Per-page title, description, canonical, Open Graph

public/robots.txt
public/sitemap.xml
```

## Install and run locally

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build      # outputs static files to dist/
npm run preview    # preview the production build locally
```

## Deploy to Firebase Hosting

```bash
npm install -g firebase-tools
firebase login
firebase init hosting     # public directory: dist   |   single-page app: Yes
npm run build
firebase deploy --only hosting
```

`firebase.json` should contain the SPA rewrite so /about, /products and /contact resolve:

```json
{
  "hosting": {
    "public": "dist",
    "ignore": ["firebase.json", "**/.*", "**/node_modules/**"],
    "rewrites": [{ "source": "**", "destination": "/index.html" }]
  }
}
```

HTTPS is provisioned automatically by Firebase Hosting.

## Connect a custom domain

1. Firebase Console → Hosting → **Add custom domain**.
2. Enter the real domain (none is assumed or hardcoded anywhere in this project).
3. Add the TXT / A records Firebase provides at your registrar and wait for verification.
4. Replace `https://YOUR-DOMAIN` in `public/robots.txt` and `public/sitemap.xml`.
   Canonical and Open Graph URLs update automatically — they derive from the live origin.

## Replace the company contact information

Everything lives in **`data/site.ts`**. Replace the placeholders:

| Field          | Used by                          |
| -------------- | -------------------------------- |
| `phone`        | Contact page display             |
| `phoneHref`    | Every "Call Now" link (`tel:`)   |
| `whatsapp`     | Contact page display             |
| `whatsappHref` | `https://wa.me/<number>`         |
| `email`        | Contact page display             |
| `emailHref`    | Every "Email Us" link (`mailto:`)|
| `address`      | Contact page company information |
| `hours`        | Contact page company information |

No other file needs to change. Nothing is invented — unknown values are visible
placeholders such as `[COMPANY PHONE]`.

## Add or edit products

Edit **`data/products.ts`**. Each entry:

```js
{
  id: 'swivel-castor',          // used in URLs / lookups
  name: 'Swivel Castor',
  group: 'Castors',             // 'Wheels' | 'Castors'
  category: 'Castor',           // shown above the product name
  image: images.castorSwivel,
  imageAlt: 'Promaxx swivel industrial castor',
  description: '…',
  material: '', diameter: '', loadCapacity: '', bracketType: 'Swivel',
  applications: ['Warehouses'],
  specifications: {},           // add width, bearing type, plate size, overall height…
  tags: ['Swivel'],             // drives the filter bar
}
```

- Leave a field as `''` when the specification is not verified — the product modal then
  shows "Detailed specifications available on request."
- `specifications` accepts any key/value pairs; they render automatically in the modal, so
  the full catalogue can be added later **without redesigning anything**.
- Filter buttons come from `productFilters` in the same file.

## Where images live

Image URLs are centralised in `images` inside **`data/site.ts`**. They are currently
**dummy placeholder product photos**. To use the real catalogue photography, drop optimised
WebP files into `public/images/products/` with meaningful filenames
(`promaxx-uhmw-pe-wheel.webp`, `promaxx-ci-wheel.webp`, …) and point the `images` object at
them. Product images are lazy-loaded with explicit width/height to avoid layout shift.

## Where animations are controlled

| Behaviour                        | File                             |
| -------------------------------- | -------------------------------- |
| Scroll reveal (fade + rise)      | `components/Reveal.tsx`          |
| Number count-up                  | `components/CountUp.tsx`         |
| Hero entrance                    | `components/home/Hero.tsx`       |
| Page hero entrance               | `components/PageHero.tsx`        |
| Mobile menu / header transition   | `components/Header.tsx`          |
| Product modal transition         | `components/products/ProductModal.tsx` |
| Card hover / image scale         | `components/products/ProductCard.tsx`  |
| Global reduced-motion override   | `index.css`                      |

All motion is 200–700ms with a single easing curve. `prefers-reduced-motion` disables
movement everywhere; no content depends on animation.

## Analytics / Search Console (not installed)

No third-party scripts are loaded and no fake IDs exist. When required:

- **Google Analytics** — add the gtag snippet to `index.html` before `</head>`.
- **Search Console** — add the verification `<meta>` tag to `index.html`, or verify by DNS.

## Production QA results

- Navigation: all four routes, logo → home, header CTA, footer links, mobile menu
  (open/close, Escape, body-scroll lock, route change closes) verified.
- Products: 10 products render, filters (All / Wheels / Fixed / Swivel / Braked /
  Heavy Duty / Twin) work client-side, modal opens with keyboard focus, Escape and
  backdrop close, enquiry CTA passes `?product=` to the Contact page which displays
  "Product: …".
- Contact: `tel:`, `https://wa.me/` and `mailto:` links wired to `data/site.ts`
  placeholders — replace before publishing.
- Responsive: verified at 360, 375, 390, 414, 430, 768, 834, 1024, 1280 and 1440px — no
  horizontal scroll, no overlap, no fixed-width blocks, no wrapping nav labels.
- Accessibility: single `h1` per page, ordered headings, skip link, visible mustard focus
  ring, dialog with `aria-modal` + labelled title, `aria-pressed` filters, `aria-live`
  result count, alt text on every image, decorative elements `aria-hidden`, 48px+ touch
  targets, reduced-motion support.
- SEO: per-page title, meta description, canonical, Open Graph and Twitter tags, semantic
  landmarks, `robots.txt`, `sitemap.xml`.
- No console errors, no broken links, no unused heavy dependencies (GSAP was not needed —
  Framer Motion already ships with the project), no secrets.

## Content accuracy

Only the information supplied by the company is used: product range, 50–300 mm wheel
diameters, 250–2000 kg load capacity per wheel, ~90% repeat business, 100% on-time delivery
commitment, and the stated customer commitments. No founding year, certifications,
customer names, testimonials, addresses or superlative claims have been invented.
