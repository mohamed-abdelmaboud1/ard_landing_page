---
version: "alpha"
name: "Egyptian Travel — Pharaonic Luxury"
description: "Premium Egyptian tourism landing page inspired by Ancient Egyptian civilization, combining cinematic travel photography, warm sandstone and antique gold colors, and a floating glassmorphism navigation bar."
---

# Egypt Traveling Landing Page — Design System

## 1. Design Vision

Design a visually stunning, premium Egyptian tourism website inspired by the beauty of Ancient Egypt, its monuments, the Nile, and its desert landscapes.

The design should feel cinematic, elegant, immersive, and modern — like a luxury travel brand introducing international travelers to Egypt.

**Core concept:** Ancient Egypt meets modern luxury travel.

Avoid generic SaaS layouts, excessive glass effects, neon colors, cartoonish pharaoh illustrations, and outdated tourism website aesthetics.

## 2. Visual Identity

### Color Palette

- Primary Gold: `#C9A45C`
- Antique Gold: `#AD8540`
- Deep Nile Navy: `#172B3A`
- Warm Sandstone: `#D7C1A0`
- Papyrus Background: `#F4EBDD`
- Warm White: `#FFFCF6`
- Dark Section: `#211C18`
- Nile Turquoise: `#3D8C88`
- Primary Text: `#28231D`
- Secondary Text: `#756B5D`

Use gold for important actions, active navigation indicators, fine borders, and decorative details.

Use sandstone and ivory for readable content sections. Use deep navy and charcoal for cinematic sections and footer areas.

Avoid electric blue, neon purple, vivid pink, and overly saturated gradients.

## 3. Glassmorphism Navigation Bar

The top navigation bar MUST use a premium glassmorphism effect.

### Appearance

- Floating navigation bar positioned near the top of the viewport.
- Transparent dark navy or charcoal background, approximately 55–70% opacity.
- `backdrop-filter: blur(16px)` with a graceful fallback.
- Thin translucent white border: `1px solid rgba(255,255,255,0.18)`.
- Soft, subtle shadow for separation from the hero image.
- Rounded corners between 16px and 24px.
- Elegant gold accents for active navigation items.
- White or warm ivory navigation text.
- Comfortable horizontal spacing and generous internal padding.
- Brand logo featuring elegant typography or a subtle Egyptian-inspired symbol.

### Behavior

- The navbar must remain readable over bright, dark, and visually complex photography.
- Keep it transparent and floating over the hero section at the top.
- When the page scrolls, it may become slightly more opaque while preserving its glass appearance.
- Include smooth, subtle hover states.
- Make the navbar responsive, with a clean mobile menu.
- Ensure keyboard accessibility, visible focus states, and sufficient contrast.

The navbar should resemble a luxury travel interface, not a generic futuristic glass dashboard.

## 4. Hero Section

Create a cinematic, full-width hero section that immediately communicates the beauty of Egypt.

### Background

Use a large, high-quality photographic background showing one of the following:

- The Great Pyramids of Giza at golden hour.
- Abu Simbel illuminated by warm sunlight.
- Luxor Temple at sunset.
- A traditional Nile cruise surrounded by Egyptian landscapes.
- An atmospheric desert landscape with ancient monuments.

Choose whichever image produces the strongest visual composition for the actual layout.

Use a subtle dark gradient overlay, especially behind text, to ensure readability.

The image must cover the hero section without distortion.

### Content

Include:

- A small elegant eyebrow label such as "DISCOVER EGYPT".
- A bold, editorial headline such as "Journey Through The Land Of Pharaohs".
- A concise description highlighting Egypt's history, culture, and unforgettable destinations.
- A primary gold CTA: "Explore Destinations".
- A secondary understated CTA: "Discover Our Story".
- Optional destination search or travel-planning controls if they improve the experience.

Use large typography, strong contrast, generous spacing, and a balanced composition.

Do not overcrowd the hero with too many buttons or floating cards.

## 5. Images and Internet Assets

The AI agent has full freedom to select suitable images from the internet.

- Search for and use real, high-quality photography relevant to Egyptian tourism.
- External image URLs are allowed.
- Use remote image assets directly where supported by the existing framework.
- Images may be used as full-section backgrounds, hero backgrounds, card images, decorative layers, or subtle textures.
- Prefer authentic photographs over generic AI-looking illustrations.
- Use appropriate `background-size: cover` and `background-position: center`.
- Add gradients or overlays when necessary for text contrast.
- Choose image focal points carefully, particularly on mobile screens.
- Avoid stretched images, broken URLs, irrelevant stock photography, and visible watermarks.
- Verify that selected image URLs load successfully.
- Provide a visually appropriate fallback if an external image fails.
- Do not use `picsum.photos` as a substitute for actual Egyptian destinations.
- Do not restrict the implementation to existing local assets when better images are available online.

Suggested search subjects include the Pyramids of Giza, the Sphinx, Karnak Temple, Luxor Temple, Abu Simbel, the Nile River, Egyptian desert landscapes, and luxury Nile cruises.

Use properly licensed assets and avoid hotlinking restrictions where possible.

## 6. Page Structure

Create a polished tourism landing page with sections selected according to the project's existing scope:

1. Floating glass navigation bar.
2. Cinematic photographic hero.
3. Featured Egyptian destinations.
4. Historical landmarks and cultural experiences.
5. Nile cruises and curated travel experiences.
6. Travel packages or a booking call to action.
7. A compelling final CTA.
8. An elegant footer with subtle Egyptian-inspired details.

Use large photographic cards, asymmetric editorial grids, and alternating light and dark sections.

Avoid making every section look identical.

Each section should have its own visual rhythm while maintaining a consistent design system.

## 7. Typography

For Arabic content, use Cairo or IBM Plex Sans Arabic.

For English content, use an elegant, readable typeface such as DM Sans, Manrope, or an appropriate editorial serif for large headlines.

Use:

- Strong, expressive hero headlines.
- Clear section headings.
- Readable body text.
- Restrained uppercase labels with letter spacing.
- Consistent font weights and line heights.

Do not use decorative hieroglyphic fonts for normal text.

## 8. Components and Shapes

- Buttons: refined shapes with approximately 8–12px corner radii.
- Content cards: 12–20px corner radii, depending on the composition.
- Navigation: floating glass container with 16–24px corner radii.
- Inputs: accessible, clearly labeled, and visually consistent.
- Images: use appropriate aspect ratios and intentional cropping.
- Borders: subtle and purposeful.
- Shadows: soft and realistic.

Use solid surfaces for most content components. Reserve glassmorphism primarily for navigation and selected overlays.

## 9. Responsive Design

The website must work beautifully on desktop, tablet, and mobile.

- Desktop: immersive wide hero imagery and balanced editorial layouts.
- Tablet: adjust content widths and grid columns.
- Mobile: prioritize readable text, image focal points, accessible buttons, and compact navigation.
- Prevent horizontal overflow.
- Keep navigation and interactive elements usable on touchscreens.
- Respect reduced-motion preferences.

## 10. Motion and Performance

Use subtle transitions only where they improve usability.

- Gentle hover transitions.
- Smooth navigation state changes.
- Optional restrained reveal effects for content sections.
- Avoid excessive parallax, distracting animations, and unnecessary effects.

Optimize large background images and avoid loading every below-the-fold image immediately.

## 11. Implementation Requirements

- First inspect the existing `Egypt-Traveling-Landing-Page` project and its current technology stack.
- Preserve the existing framework, project structure, routes, and working functionality.
- Apply this design system to the actual implementation, not just a mockup.
- Use reusable components and consistent design tokens.
- Keep all image URLs and assets maintainable.
- Do not replace working functionality with decorative placeholders.
- Do not invent booking functionality that does not exist.
- Ensure accessible contrast and responsive layouts.
- Validate the final result on desktop and mobile viewports.

## Final Quality Goal

The finished website should feel like a premium Egyptian travel experience: cinematic ancient monuments, warm golden light, authentic photography, refined typography, elegant Pharaonic details, and a floating glass navigation bar.

Prioritize visual quality, usability, authenticity, and performance over unnecessary decorative effects.

## Content Constraints

- Keep all website content concise, clear, and relevant.
- Do not add unnecessary text, long descriptions, filler paragraphs, or extra sections.
- Use short headlines, brief descriptions, and direct calls to action.
- Preserve existing content and functionality wherever possible.
- Only add new content when it is essential to complete the design or improve usability.
- Prioritize visual storytelling through photography, layout, and typography rather than excessive text.
- Do not invent statistics, historical facts, testimonials, reviews, or travel offers.
- Keep the page visually rich and elegant while maintaining a minimal amount of text.
 ## Code Structure and Organization

- The project uses plain HTML, CSS, and JavaScript.
- Keep HTML, CSS, and JavaScript in separate files.
- Use `index.html` for the page structure, `css/style.css` for all styles, and `js/main.js` for JavaScript interactions.
- Keep the code clean, readable, reusable, and well-organized.
- Avoid inline CSS, inline JavaScript, and unnecessary code duplication.
- Use CSS variables for colors, typography, spacing, and reusable design tokens.
- Organize CSS into clear sections for the navbar, hero, destinations, other page sections, responsive styles, and shared components.
- Keep JavaScript minimal and only add it when needed for actual interactions.
- Do not introduce frameworks, build tools, or unnecessary dependencies. Use vanilla HTML, CSS, and JavaScript.
- Preserve all existing functionality and ensure the website works by opening `index.html` directly in a browser.

