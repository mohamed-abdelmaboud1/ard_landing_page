# Style Guide: "Your workshop" Hero Section
Source: https://getyourguide.supply/ (Supplier landing page)

> **Confidence note for the agent:** The structure, copy, and behavior below were read directly from the page content. Exact visual values (hex colors, font names, pixel sizes) were NOT visible in the fetched content. Items marked `[VERIFY]` are reasonable assumptions and must be checked against the live site's CSS (browser DevTools) before being treated as final.

---

## 1. Purpose of the section

Hero that introduces the supplier program. It speaks directly to the supplier ("Your ...") and makes the offer feel personal to *their* kind of business by cycling the last word of a headline through their product types.

## 2. Content structure (top to bottom)

1. **Eyebrow label:** `Partner with GetYourGuide`
2. **H1:** `Reach millions of travelers. Grow your business.`
3. **Subheading:** `Tap into global demand that drives more visibility, more bookings and more revenue.`
4. **Primary CTA button:** `Become a supplier` -> `/register/`
5. **Hero visual:** large photo/collage background plus a rotating image set
6. **Rotating phrase block:**
   ```
   Your
   [ workshop | tour | experience | activity ]
   ```
7. **Next section heading:** `Turn visibility into revenue with our globally trusted marketplace`

## 3. The "Your workshop" rotating-word pattern (key feature)

- Fixed word: **"Your"**
- Rotating word list (in order): `workshop` -> `tour` -> `experience` -> `activity`
- Each word is paired with a matching image (alt text: `Workshop`, `Tour`, *(blank)*, `Activity`). When the word changes, the image changes with it.
- Implementation intent:
  - "Your" stays static; only the second word animates (vertical slide/fade, roll-style ticker). `[VERIFY animation type]`
  - Words are lowercase.
  - The rotating word should be visually emphasized (larger and/or brand-colored) versus "Your". `[VERIFY]`
  - Loop infinitely, roughly 2-3 s per word. `[VERIFY]`
  - Provide `prefers-reduced-motion` fallback: show a static word ("experience") and a single image.
  - Accessibility: put `aria-live="off"` on the rotator and a static accessible label like "Your workshop, tour, experience, or activity".

## 4. Tone of voice

- Direct, second person ("Your", "you").
- Short, confident, benefit-first sentences.
- Outcome words: *visibility, bookings, revenue, reach, grow, scale*.
- No jargon. Friendly but professional.
- Pattern: **[Action]. [Outcome].** (e.g., "Reach millions of travelers. Grow your business.")

## 5. Layout

- Full-width hero, content left-aligned or centered over/beside a large image. `[VERIFY]`
- Generous whitespace; one clear primary action.
- Header is sticky with: logo, Growth Hub dropdown, Help center, Login (text), **Sell on GetYourGuide** (filled button).
- Responsive: stack text above imagery on mobile; the rotator stays on one line when possible and scales down with `clamp()`.

## 6. Visual tokens (assumptions, verify)

| Token | Suggested value | Status |
|---|---|---|
| Brand accent (CTA, rotating word) | GetYourGuide orange-red, approx `#FF5533` | `[VERIFY]` |
| Text on light | Near-black / deep navy, approx `#1A2B49` | `[VERIFY]` |
| Background | White / very light gray | `[VERIFY]` |
| Headline font | Bold geometric/humanist sans-serif | `[VERIFY]` |
| H1 size | `clamp(2.25rem, 5vw, 4rem)` | assumption |
| Rotator word size | Same as or larger than H1 | assumption |
| Button | Filled, rounded (pill or ~8-12px radius), bold label | `[VERIFY]` |
| Imagery | Real photography of guides, workshops, tours, travelers; warm, candid, high-quality `.webp` | observed (webp) |

## 7. Component spec: CTA button

- Label: `Become a supplier`
- Style: primary filled brand color, white bold text, comfortable padding (about 14px 28px), hover = slightly darker shade, visible focus ring.
- One primary CTA per viewport; repeat the same CTA lower on the page ("Start selling your experiences worldwide").

## 8. Sections that follow (for visual consistency)

- **Stats row** with icon + bold number + small caption: `4.8★ rating`, `#1 app for experiences`, `200,000+ activities`, `37 languages and currencies`.
- **Testimonial cards**: quote text + supplier name + photo.
- **Feature cards** with image on top, bold title, one-line description.
- **3-step process** numbered `01.`, `02.`, `03.`.
- **FAQ accordion.**
- Consistent pattern: *small eyebrow -> big heading -> short supporting text -> visual*.

## 9. Do / Don't for the agent

**Do**
- Keep headlines to two short sentences.
- Address the reader as "you/your".
- Pair every rotating word with a relevant image.
- Use one strong CTA per section.
- Keep copy benefit-led and plain.

**Don't**
- Add more than four rotating words.
- Use long paragraphs in the hero.
- Use stock clip-art; use real experience photography.
- Animate without a reduced-motion fallback.

## 10. Minimal HTML/CSS reference (pattern only)

```html
<section class="hero">
  <p class="eyebrow">Partner with GetYourGuide</p>
  <h1>Reach millions of travelers. Grow your business.</h1>
  <p class="sub">Tap into global demand that drives more visibility, more bookings and more revenue.</p>
  <a class="btn" href="/register/">Become a supplier</a>

  <div class="rotator" aria-label="Your workshop, tour, experience, or activity">
    <span class="fixed">Your</span>
    <span class="words" aria-hidden="true">
      <span>workshop</span><span>tour</span><span>experience</span><span>activity</span>
    </span>
  </div>
</section>
```

```css
.rotator { font-size: clamp(2rem, 6vw, 4.5rem); font-weight: 700; line-height: 1.1; }
.words { display: inline-block; height: 1.1em; overflow: hidden; vertical-align: bottom; color: var(--brand, #FF5533); }
.words span { display: block; animation: roll 10s infinite; }
@keyframes roll { 0%,20% { transform: translateY(0) } 25%,45% { transform: translateY(-100%) } 50%,70% { transform: translateY(-200%) } 75%,95% { transform: translateY(-300%) } 100% { transform: translateY(0) } }
@media (prefers-reduced-motion: reduce) { .words span { animation: none } .words span:not(:nth-child(3)) { display: none } }
```
