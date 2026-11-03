# Design brief: how to prompt for a website that doesn't look generic

This file has two parts:

1. **The checklist**: what to tell Claude (or any designer) when asking for a website design.
   It is based on Anthropic's own guidance on frontend aesthetics and common practice in design briefs.
2. **The filled-in brief for Johanna's site**: the actual choices used for this website.

---

## Part 1 – What to put in a design prompt

Left alone, AI models fall back on safe "average" choices: Inter or Roboto, a purple gradient
on white, a centred hero, three equal cards, a soft shadow on everything. Anthropic calls
this the "AI slop" look. The fix is to **be specific about each design dimension** and to
**name the defaults you don't want**.

### 1. Context (who and why)
- **What the site is for**, who visits it and what they should do (book, call, trust).
- **Audience feelings**: what state are visitors in? (Here: stressed and unsure, so the site has to feel safe.)
- **Constraints**: legal wording, languages, formal or informal address ("du" vs. "Sie"), accessibility.

### 2. Aesthetic direction (pick one, commit to it)
- 3–5 **mood words** (e.g. "warm, editorial, calm, confident").
- A **concept or metaphor** that can drive visual decisions (e.g. "the path", "a letter", "a garden").
- **References**: what you like *and what you don't want it to look like*.
- Ask for **one signature element** people will remember.

### 3. Typography
- Name the fonts, or ask for **distinctive** ones and ban the defaults (Inter, Roboto, Arial, Open Sans, Lato, system fonts, Space Grotesk).
- **Pairing with contrast**: expressive serif + clean sans, display + mono, etc.
- **Use extremes**: big size jumps (3× or more), light vs. heavy weights, not 400 vs. 600.
- Define the **type scale**, line length (~60–75 characters) and line height.

### 4. Color and theme
- **One dominant color plus a sharp accent** beats a timid, evenly spread palette.
- Give **hex values** and a **role** for each color (background, text, accent = actions only).
- Define everything as **CSS variables** (design tokens).
- Ban clichés (purple gradients on white).
- Require **WCAG contrast**: 4.5:1 for body text, 3:1 for large text.

### 5. Layout and composition
- Ask for **unexpected but purposeful layouts**: asymmetry, overlap, editorial grids, sticky elements,
  varied section rhythm, not "hero + 3 cards + 3 cards + footer".
- Spacing system (e.g. 8px base) and maximum content width.
- **Hierarchy**: what is primary, secondary, tertiary, and where the calls to action sit.

### 6. Backgrounds and texture
- Atmosphere instead of flat fills: layered gradients, grain or noise, geometric patterns, subtle
  shapes that match the concept.

### 7. Motion
- **One well-orchestrated moment** (e.g. a staggered page-load reveal) beats lots of scattered effects.
- CSS-only where possible; meaningful hover states and micro-interactions.
- Always respect `prefers-reduced-motion`.

### 8. Imagery and icons
- How photos are treated (crop, shape, frame, color grading) and where they appear.
- Icon style (line weight, filled vs. outline), or no icons at all.

### 9. Components
- Buttons (primary vs. secondary), links, cards, forms, accordions: describe their **character**.

### 10. Responsiveness and accessibility
- Mobile first: what matters on the first phone screen, tap targets of 44px or more, no sideways scrolling.
- Semantic HTML, focus states, alt text, readable font sizes.

### 11. Copy tone
- Voice (warm or formal), sentence length, words to use and words to avoid.

### 12. Process instructions
- "Before coding, **state the aesthetic direction, fonts and palette** you chose and why."
- "Make **unexpected choices** that feel designed for this context."
- "Show screenshots on desktop and mobile, then critique and refine."

### Reusable prompt block (Anthropic's distilled version)

```
<frontend_aesthetics>
You tend to converge toward generic, "on distribution" outputs. In frontend design, this creates
what users call the "AI slop" aesthetic. Avoid this: make creative, distinctive frontends that
surprise and delight. Focus on:

Typography: Choose fonts that are beautiful, unique, and interesting. Avoid generic fonts like
Arial and Inter; opt instead for distinctive choices that elevate the frontend's aesthetics.

Color & Theme: Commit to a cohesive aesthetic. Use CSS variables for consistency. Dominant colors
with sharp accents outperform timid, evenly-distributed palettes. Draw from IDE themes and
cultural aesthetics for inspiration.

Motion: Use animations for effects and micro-interactions. Prioritize CSS-only solutions for HTML.
Focus on high-impact moments: one well-orchestrated page load with staggered reveals
(animation-delay) creates more delight than scattered micro-interactions.

Backgrounds: Create atmosphere and depth rather than defaulting to solid colors. Layer CSS
gradients, use geometric patterns, or add contextual effects that match the overall aesthetic.

Avoid generic AI-generated aesthetics:
- Overused font families (Inter, Roboto, Arial, system fonts)
- Clichéd color schemes (particularly purple gradients on white backgrounds)
- Predictable layouts and component patterns
- Cookie-cutter design that lacks context-specific character

Interpret creatively and make unexpected choices that feel genuinely designed for the context.
</frontend_aesthetics>
```

Sources: Anthropic, [Prompting for frontend aesthetics](https://platform.claude.com/cookbook/coding-prompting-for-frontend-aesthetics);
Anthropic, [Improving frontend design through Skills](https://claude.com/resources/articles/improving-frontend-design-through-skills).

---

## Part 2 – The brief for Johanna's site

| | Decision |
|---|---|
| **Purpose** | Visitors who feel overwhelmed should feel *safe* within 5 seconds and find "Termin anfragen" without searching. |
| **Mood words** | warm · editorial · calm · grounded · quietly confident |
| **Concept** | **"Der Weg"** (the path). One hand-drawn line runs through the page like a path walked together. It draws itself as you scroll and connects the sections. |
| **Not like** | The reference site (olive/mint, arch photo, floating dots), generic therapy sites (pastel, stock photos of stones and leaves), SaaS landing pages. |
| **Signature elements** | ① The drawn path line. ② A slowly rotating round seal, "Geprüfte Psychologische Beraterin · VFP". ③ An editorial numbered topic list instead of icon cards. |
| **Typography** | **Fraunces** (soft, characterful variable serif) for display, set large and light with italic accents. **Figtree** (friendly geometric sans) for text. Big jumps: hero around 6rem against 1rem body. |
| **Palette** | Paper `#F5EFE6` (background) · Ink `#1E2B2C` (text) · **Petrol `#1F4A4C` (dominant)** · **Apricot `#E0835C` (sharp accent, actions and highlights only)** · Blush `#F1D9C9` (soft surfaces) · Sand `#E7DCCB` (lines). |
| **Backgrounds** | Subtle paper grain over everything; deep petrol sections for rhythm; soft apricot glow behind the portrait. |
| **Layout** | Asymmetric editorial grid. Oversized headline overlaps the photo. A sticky heading next to the scrolling FAQ. Section rhythm alternates light paper and deep petrol. |
| **Motion** | One orchestrated page load (headline words rise in, staggered). The path draws on scroll; the seal turns slowly. Everything is off with `prefers-reduced-motion`. |
| **Photos** | One tall portrait with a thin inset frame, plus a close crop in the "Über mich" index card. Warm, natural, never filtered. |
| **Components** | Pill buttons in apricot (primary) and an outline (secondary); underlined text links with an animated underline; FAQ as fine-ruled lines, not boxes. |
| **Copy tone** | "du", warm, short sentences. Never: Therapie, Behandlung, Patient, Diagnose, Heilung, Psychologin. |
| **Accessibility** | Contrast of 4.5:1 or more for text, 44px tap targets, semantic landmarks, visible focus rings, alt text. |
| **Privacy** | No external requests: fonts self-hosted, no tracking, no embeds. |
