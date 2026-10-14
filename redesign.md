# Redesign the "Our Promise" Section — Ticket-Style UI

Redesign the existing "Our Promise" section to closely match the provided reference image. Implement the design directly in the existing website using real HTML, CSS, and the project's current icon library.

## 1. Reference Layout and Content

Create a centered section containing:

- Eyebrow label: `OUR PROMISE`
- Main heading: `Not a Facade. A Foundation.`
- A short accent-colored underline.
- Four ticket-style cards arranged horizontally on desktop.

Preserve the existing text exactly:

**01 — Curated Excellence**  
Every partner is meticulously vetted for authenticity, safety, and exceptional service.

**02 — Honest Pricing**  
The lowest commission rates in the market — ensuring the best value with no hidden fees.

**03 — Fair Policies**  
Clear cancellation and refund policies. No hidden surprises — ever.

**04 — Empowering Communities**  
Every booking directly contributes to the growth of local Egyptian creators.

Do not add additional content.

## 2. Brand Colors — Mandatory

Inspect the existing project's CSS variables, design tokens, and theme definitions before implementing the design.

Reuse the exact existing Egypt Travel brand colors. Do not introduce the reference's purple palette.

Map the reference's colors as follows:

- `--t-bg`: the appropriate dark background derived from the existing brand palette.
- `--t-bg-light`: a slightly lighter variation of the card background.
- `--t-accent`: the existing primary or accent brand color.
- `--t-accent-glow`: a translucent version of the brand accent.
- `--t-text-main`: the existing high-contrast primary text color.
- `--t-text-muted`: an appropriate muted text color from the existing theme.

The CSS variables below are structural defaults, not permission to override the project's established brand identity. Use the actual brand colors discovered in the project.

If the current website uses a light theme, retain the existing overall page background and introduce the ticket treatment using brand-compatible dark or translucent surfaces. The result must feel native to the website rather than like a separate, unrelated theme.

## 3. CSS Implementation

Use the following CSS as the starting point. Integrate it into the existing stylesheet and adapt its variables, dimensions, responsiveness, and visual effects to the current project.

Do not blindly copy the purple colors. Replace them with the actual brand colors and ensure that every effect works correctly.

```css
/* Our Promise — Ticket Style */
.ticket-canvas {
  width: 100%;
  min-height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3rem 1.5rem;
  box-sizing: border-box;
}

.ticket-section {
  width: 100%;
  max-width: 1440px;
  margin-inline: auto;

  /* Replace these fallback values with existing brand tokens. */
  --t-bg: #1e1e24;
  --t-bg-light: #2b2b36;
  --t-accent: var(--primary-color, #d5a64b);
  --t-accent-glow: color-mix(in srgb, var(--t-accent) 35%, transparent);
  --t-text-main: #f8fafc;
  --t-text-muted: #a7a7b4;

  color: var(--t-text-main);
}

.ticket-section *,
.ticket-section *::before,
.ticket-section *::after {
  box-sizing: border-box;
}

.ticket-heading {
  text-align: center;
  margin-bottom: 4rem;
}

.ticket-eyebrow {
  display: inline-block;
  margin-bottom: 1.25rem;
  color: var(--t-accent);
  font-size: 0.75rem;
  font-weight: 800;
  letter-spacing: 0.22em;
  text-transform: uppercase;
}

.ticket-heading h2 {
  margin: 0;
  font-size: clamp(2rem, 4vw, 3.25rem);
  font-weight: 800;
  line-height: 1.15;
  letter-spacing: -0.04em;
  color: var(--t-text-main);
}

.ticket-heading h2 span {
  color: var(--t-accent);
}

.ticket-heading::after {
  content: "";
  display: block;
  width: 56px;
  height: 3px;
  margin: 1.5rem auto 0;
  border-radius: 999px;
  background: var(--t-accent);
}

.ticket-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 1.5rem;
  align-items: stretch;
}

.ticket-wrapper {
  min-width: 0;
  perspective: 1000px;
}

.ticket {
  --ticket-radius: 1.25rem;
  --ticket-notch: 0.9rem;

  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 350px;
  height: 100%;
  overflow: hidden;
  isolation: isolate;

  padding: 1.75rem;
  color: var(--t-text-main);

  background:
    radial-gradient(
        circle at bottom left,
        transparent var(--ticket-notch),
        var(--t-bg) calc(var(--ticket-notch) + 1px)
      )
      bottom left / 51% 100% no-repeat,
    radial-gradient(
        circle at bottom right,
        transparent var(--ticket-notch),
        var(--t-bg) calc(var(--ticket-notch) + 1px)
      )
      bottom right / 51% 100% no-repeat;

  border: 1px solid var(--t-accent-glow);
  border-radius: var(--ticket-radius);

  box-shadow:
    0 12px 30px rgba(0, 0, 0, 0.16),
    inset 0 1px 0 rgba(255, 255, 255, 0.08);

  transform-style: preserve-3d;

  transition:
    transform 0.45s cubic-bezier(0.23, 1, 0.32, 1),
    border-color 0.35s ease,
    box-shadow 0.35s ease;
}

/* Subtle technical grid texture */
.ticket::before {
  content: "";
  position: absolute;
  inset: 0;
  z-index: -1;
  pointer-events: none;

  background:
    linear-gradient(rgba(255, 255, 255, 0.035) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.035) 1px, transparent 1px);

  background-size: 22px 22px;
  opacity: 0.65;
  mask-image: linear-gradient(to bottom, black, transparent 95%);
}

/* Diagonal reflective light sweep */
.ticket::after {
  content: "";
  position: absolute;
  inset: 0;
  z-index: 5;
  pointer-events: none;

  background: linear-gradient(
    115deg,
    transparent 35%,
    rgba(255, 255, 255, 0.025) 43%,
    rgba(255, 255, 255, 0.12) 50%,
    rgba(255, 255, 255, 0.025) 57%,
    transparent 65%
  );

  background-size: 250% 250%;
  background-position: 100% 100%;

  transition: background-position 0.6s ease;
}

/* Ticket side cutouts */
.ticket-notch {
  position: absolute;
  z-index: 4;
  top: 42%;
  width: calc(var(--ticket-notch) * 2);
  height: calc(var(--ticket-notch) * 2);
  border-radius: 50%;

  background: var(--page-bg, #101014);
  border: 1px solid var(--t-accent-glow);
}

.ticket-notch-left {
  left: calc(var(--ticket-notch) * -1);
}

.ticket-notch-right {
  right: calc(var(--ticket-notch) * -1);
}

/* Card content */
.ticket-content {
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  flex: 1;
}

.ticket-icon {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 3.75rem;
  height: 3.75rem;
  margin-bottom: 1.5rem;

  color: var(--t-accent);
  background: color-mix(in srgb, var(--t-accent) 12%, var(--t-bg));

  border: 1px solid var(--t-accent-glow);
  border-radius: 0.9rem;

  box-shadow: 0 0 22px var(--t-accent-glow);
}

.ticket-icon svg {
  width: 1.75rem;
  height: 1.75rem;
  stroke: currentColor;
}

.ticket-title {
  margin: 0 0 0.75rem;
  font-size: 1.2rem;
  font-weight: 750;
  line-height: 1.35;
  color: var(--t-text-main);
}

.ticket-description {
  margin: 0;
  font-size: 0.95rem;
  line-height: 1.8;
  color: var(--t-text-muted);
}

/* Bottom progress indicators */
.ticket-footer {
  position: relative;
  z-index: 2;

  display: flex;
  align-items: center;
  gap: 0.4rem;

  margin-top: auto;
  padding-top: 1.5rem;
  padding-right: 3.5rem;
}

.ticket-progress {
  display: block;
  width: 2rem;
  height: 5px;
  border-radius: 999px;
  background: color-mix(in srgb, var(--t-text-muted) 30%, transparent);
}

.ticket-progress:first-child {
  background: var(--t-accent);
}

/* Numbered ticket stub */
.ticket-number {
  position: absolute;
  right: 0;
  bottom: 0;
  z-index: 3;

  display: flex;
  align-items: center;
  justify-content: center;

  min-width: 3.5rem;
  min-height: 3.5rem;
  padding: 0.5rem;

  color: var(--t-accent);
  font-size: 1.4rem;
  font-weight: 800;

  border-top: 1px dashed var(--t-accent-glow);
  border-left: 1px dashed var(--t-accent-glow);
  border-top-left-radius: 0.8rem;
  background: color-mix(in srgb, var(--t-accent) 6%, var(--t-bg));
}

/* Hover effects: desktop and devices that support hover */
@media (hover: hover) and (pointer: fine) {
  .ticket-wrapper:hover .ticket {
    transform: rotateX(3deg) rotateY(-4deg) translateY(-5px);
    border-color: var(--t-accent);

    box-shadow:
      0 22px 45px rgba(0, 0, 0, 0.24),
      0 0 25px var(--t-accent-glow),
      inset 0 1px 0 rgba(255, 255, 255, 0.12);
  }

  .ticket-wrapper:hover .ticket::after {
    background-position: 0% 0%;
  }

  .ticket-wrapper:hover .ticket-icon {
    box-shadow: 0 0 28px var(--t-accent-glow);
  }
}

/* Tablet */
@media (max-width: 1024px) {
  .ticket-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 1.25rem;
  }

  .ticket {
    min-height: 320px;
  }

  .ticket-heading {
    margin-bottom: 3rem;
  }
}

/* Mobile */
@media (max-width: 600px) {
  .ticket-canvas {
    padding: 3rem 1rem;
  }

  .ticket-grid {
    grid-template-columns: minmax(0, 1fr);
    gap: 1rem;
  }

  .ticket {
    min-height: 280px;
    padding: 1.5rem;
  }

  .ticket-heading {
    margin-bottom: 2.25rem;
  }

  .ticket-heading h2 {
    font-size: clamp(1.8rem, 8vw, 2.4rem);
  }

  .ticket-icon {
    width: 3.25rem;
    height: 3.25rem;
    margin-bottom: 1.25rem;
  }
}

/* Accessibility */
@media (prefers-reduced-motion: reduce) {
  .ticket,
  .ticket::after,
  .ticket-icon {
    transition: none !important;
  }

  .ticket-wrapper:hover .ticket {
    transform: none;
  }
}
```

## 4. HTML Structure

Adapt this structure to the project's existing framework and component conventions. Do not duplicate the section if it already exists.

```html
<section class="ticket-canvas">
  <div class="ticket-section">
    <header class="ticket-heading">
      <span class="ticket-eyebrow">OUR PROMISE</span>
      <h2>Not a Facade. <span>A Foundation.</span></h2>
    </header>

    <div class="ticket-grid">
      <!-- Repeat one ticket-wrapper per existing promise. -->
      <article class="ticket-wrapper">
        <div class="ticket">
          <span class="ticket-notch ticket-notch-left"></span>
          <span class="ticket-notch ticket-notch-right"></span>

          <div class="ticket-content">
            <div class="ticket-icon">
              <!-- Insert the matching icon from the existing icon library. -->
            </div>

            <h3 class="ticket-title">Curated Excellence</h3>

            <p class="ticket-description">
              Every partner is meticulously vetted for authenticity, safety, and
              exceptional service.
            </p>

            <div class="ticket-footer" aria-hidden="true">
              <span class="ticket-progress"></span>
              <span class="ticket-progress"></span>
              <span class="ticket-progress"></span>
            </div>
          </div>

          <span class="ticket-number" aria-hidden="true">01</span>
        </div>
      </article>

      <!-- Add the other three existing cards using the same structure. -->
    </div>
  </div>
</section>
```

The snippet illustrates the required structure. Complete all four cards in the actual implementation and use the correct icon components supported by the project.

## 5. Important Integration Rules

- Replace `--primary-color` and `--page-bg` with the actual existing theme tokens.
- Do not leave hardcoded fallback colors that conflict with the website's real theme.
- The ticket notch background must match the actual section background.
- If the website uses CSS Modules, SCSS, Tailwind, or another established styling approach, adapt the CSS to that approach rather than introducing a conflicting system.
- Scope all selectors to the Our Promise section.
- Use the existing font family and icon library.
- Keep the cards aligned and their content readable at all breakpoints.
- Ensure the cutouts remain visible without covering the text or breaking the border.
- Do not add animations beyond the specified subtle hover effects.
- Do not change the global navigation, hero section, footer, or unrelated components.

## 6. Final Acceptance Criteria

The final result must closely resemble the reference image in layout, ticket silhouette, lighting, grid texture, icon treatment, and numbered stubs, while using the exact existing Egypt Travel brand colors and preserving the current website content.

Implement and test the changes in the real project files. Do not stop at providing code snippets.
