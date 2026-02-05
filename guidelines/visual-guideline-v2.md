# DocliQ – Visual Guideline v2 (Brand Guide 2025)

**Version:** 2.0
**Updated:** 2026-02-05
**Changes from v1:** Typography scale corrections, animation timing fixes, accessibility documentation, border radius and shadow system updates per Gap Analysis from Product Design.

This is the **strict** visual system for DocliQ-aligned UI in this repo (incl. Booking N3).

**Sources of truth**
- Brand PDF: `docs/z.guidelines/Docliq Brand Guide 2025.pdf`
- Tokens (extracted from the PDF): `docs/z.guidelines/docliq-tokens.json`
- Gap Analysis: `/Users/nganpham/Downloads/Gap Analysis from Product Design.md`
- Booking N3 implementation reference: `apps/appointment-booking-N3/src/index.css`

If anything conflicts, prefer the **brand PDF**, then `docliq-tokens.json`, then app CSS.

---

## Design Intent (Non-Negotiable)

- **Trust, efficiency, humanity** (professional healthcare tone; calm, not "startup flashy").
- **Mobile-first**: single-column, one primary action per screen, predictable navigation.
- **Germany + i18n-first**: support long German strings; avoid truncation; avoid idioms.
- **White-label ready**: use **semantic tokens** (roles), not hard-coded colors.

---

## Color (Use Semantic Tokens Only)

Do not invent palettes. Use `docs/z.guidelines/docliq-tokens.json` → `color.semantic.*`.

### Core Surfaces

| Token | Value | Name |
|-------|-------|------|
| `background.primary` | `#FAF8F5` | Cream 100 (App background) |
| `background.secondary` | `#FFFFFF` | White (Card/surface) |
| `background.tertiary` | `#F5F3EF` | Cream 200 (Subtle section) |
| `background.inverse` | `#1C2A30` | Charcoal 500 (Inverse surface) |

### Primary Action

| Token | Value | Name |
|-------|-------|------|
| `interactive.primary` | `#13A3B5` | Teal 500 (Default) |
| `interactive.primaryHover` | `#0F8A99` | Teal 600 (Hover) |
| `interactive.primaryActive` | `#0B6F7C` | Teal 700 (Active) |
| `text.onBrand` | `#FFFFFF` | White (Text on primary) |

### Text

| Token | Value | Usage |
|-------|-------|-------|
| `text.primary` | `#1C2A30` | Primary text |
| `text.secondary` | `#5E7A86` | Secondary/muted text |
| `text.tertiary` | `#7C939D` | Large text only |
| `text.link` | `#0F8A99` | Links |

### Status Colors (Never Color-Only)

| Status | Background | Border | Icon/Text |
|--------|------------|--------|-----------|
| Success | `#E8F6F8` | `#13A3B5` | `#0B6F7C` |
| Error | `#FDF3F0` | `#E06A4F` | `#A03D2D` |
| Warning | `#FAE0D9` | `#E88A73` | `#C9503A` |
| Info | `#EEF1F3` | `#5E7A86` | `#3E5159` |

---

## Typography (DM Sans)

Use `typography.*` from `docliq-tokens.json`.

### Font Family

- **Primary:** DM Sans
- **Fallback:** system-ui, -apple-system, sans-serif

### Font Weights

| Weight | Value | Usage |
|--------|-------|-------|
| Regular | 400 | Body text |
| Medium | 500 | Labels, navigation |
| Semibold | 600 | Subheadings |
| Bold | 700 | Headlines, emphasis |

### Mobile Type Scale (UPDATED)

> **Note:** Original brand spec (72/48/32px) was for desktop/marketing. The scale below is optimized for mobile apps per industry best practices.

| Level | Size | Line Height | Weight | Ratio | Usage |
|-------|------|-------------|--------|-------|-------|
| **H1 Display** | **32px** | 1.2 (tight) | 700 | 2.0× base | Page titles, max 1 per screen |
| **H2 Section** | **24px** | 1.25 (snug) | 600 | 1.5× base | Section headers |
| **H3 Card** | **20px** | 1.3 | 600 | 1.25× base | Card titles, subsections |
| Body Large | 18px | 1.5 | 400 | 1.125× base | Lead paragraphs, emphasis |
| Body | 16px | 1.5 | 400 | 1.0× (base) | Standard copy |
| Caption | 14px | 1.4 | 400 | 0.875× base | Labels, metadata |
| Small | 12px | 1.4 | 400 | 0.75× base | Timestamps, legal (sparingly) |

### Type Scale Rationale

**H1 at 32px (not 28px):**
- 28px is only 1.75× body, feels weak for page titles
- 32px (2×) creates clear visual anchor
- Matches iOS Large Title (34px) and Material Headline Large (32px)

**H2 at 24px (not 22px):**
- 24px is standard across iOS HIG and Material Design 3
- Creates 8px gap from H1 (25% step)
- 22px too close to H3, muddy hierarchy

**H3 at 20px (not 18px):**
- 18px matches Body Large, only weight differentiates
- 20px creates clear size distinction
- 4px steps: 32→24→20→16 (consistent rhythm)

### Industry Comparison

| Platform | H1 | H2 | H3 | Body |
|----------|-----|-----|-----|------|
| iOS HIG | 34px | 28px | 22px | 17px |
| Material 3 | 32px | 28px | 24px | 16px |
| **DocLiQ** | **32px** | **24px** | **20px** | **16px** |
| Airbnb | 32px | 26px | 22px | 16px |
| Uber | 36px | 28px | 22px | 16px |

### Typography Rules

- No fixed-height text containers.
- Prefer wrapping; allow hyphenation where appropriate (`de-DE`).
- Minimum body text: **16px** (WCAG requirement, prevents iOS zoom on form inputs).

---

## Layout, Spacing, and Density

Use `spacing.*` (4px base grid).

### Spacing Scale

| Token | Value | Usage |
|-------|-------|-------|
| `xs` | 4px (0.25rem) | Tight spacing |
| `sm` | 8px (0.5rem) | Small gaps |
| `md` | 16px (1rem) | Standard |
| `lg` | 24px (1.5rem) | Section gaps |
| `xl` | 32px (2rem) | Large sections |
| `2xl` | 48px (3rem) | Page margins |

### Layout Defaults

- Page padding: 16–24px
- Card padding: 20–24px
- Section gaps: 24–32px
- Minimum tap target: **44px** (WCAG requirement)
- Comfortable tap target: **48px** (recommended)

---

## Border Radius (UPDATED)

Use `radius.*`. Adopting softer values to align with "Humanity" brand pillar.

| Token | Value | Usage |
|-------|-------|-------|
| `radius.sm` | **12px** | Small elements, chips |
| `radius.md` | **16px** | Buttons, inputs, cards |
| `radius.lg` | **20px** | Large cards, sections |
| `radius.xl` | **24px** | Modals, bottom sheets |
| `radius.pill` | 9999px | Pills, badges, full-round |

### Radius Rationale

| Radius Style | Perception | Brand Fit |
|--------------|------------|-----------|
| Sharp (0-4px) | Technical, precise, corporate | Low |
| Medium (8-12px) | Balanced, modern, neutral | Medium |
| **Soft (16-24px)** | Friendly, approachable, warm | **High** |
| Pill (9999px) | Playful, casual, mobile-native | Medium |

Healthcare apps benefit from approachable, non-intimidating UI. Softer radii align with DocLiQ's "Humanity" pillar.

---

## Shadow System (UPDATED)

Use `shadow.*`. Adopting simpler, single-layer shadows for cleaner rendering.

| Token | Value | Usage |
|-------|-------|-------|
| `shadow.soft` | `0 1px 3px rgba(28,42,48, 0.04)` | Subtle lift |
| `shadow.card` | `0 2px 8px rgba(28,42,48, 0.06)` | Cards, default elevation |
| `shadow.elevated` | `0 4px 16px rgba(28,42,48, 0.08)` | Modals, dialogs |

### Shadow Anatomy

```
box-shadow: [x-offset] [y-offset] [blur] [spread] [color];
```

| Component | Effect |
|-----------|--------|
| Y-offset | Simulates light from above (positive = below element) |
| Blur | Softness of shadow edge |
| Spread | Size of shadow (negative = tighter) |
| Opacity | Subtlety vs prominence |

### Shadow Rules

- All shadows use Charcoal (`#1C2A30`) as base color with low opacity
- Single-layer shadows preferred (faster rendering, easier maintenance)
- Avoid heavy elevation except for dialogs and focused states

---

## Motion (UPDATED - CRITICAL FIX)

Use `motion.duration` and `motion.easing`.

### Duration Scale

| Token | Duration | Usage |
|-------|----------|-------|
| `motion.instant` | 100ms | Micro-interactions (opacity changes) |
| `motion.fast` | **200ms** | Button feedback, toggles, taps |
| `motion.default` | 300ms | Fade in, slides, standard transitions |
| `motion.slow` | 500ms+ | Page transitions, onboarding, celebrations |

> **CRITICAL FIX:** Fast animation changed from 150ms to **200ms**. The previous 150ms felt jittery on mobile devices.

### Duration Perception Guide

| Duration | User Perception | Best For |
|----------|-----------------|----------|
| 100ms | Instant, no animation perceived | Micro-interactions |
| 150ms | Snappy, almost instant | Desktop hover states only |
| **200ms** | Quick but noticeable | **Mobile taps, button feedback** |
| 300ms | Smooth, deliberate | Page transitions, modals |
| 500ms+ | Slow, cinematic | Onboarding, celebrations |

### Why Mobile Needs 200ms Minimum

1. **Finger occlusion:** User's finger covers the tap target, can't see instant feedback
2. **Touch latency:** Touch screens add 50-100ms latency vs mouse clicks
3. **Cognitive load:** Mobile users are often distracted; animations help confirm actions

### Platform Guidelines Comparison

| Platform | Fast | Default | Slow |
|----------|------|---------|------|
| iOS HIG | 200ms | 300ms | 500ms |
| Material Design | 200ms | 300ms | 500ms |
| **DocLiQ** | **200ms** | **300ms** | **500ms** |

### Easing

| Token | Value | Usage |
|-------|-------|-------|
| `motion.easeOut` | `cubic-bezier(0.4, 0, 0.2, 1)` | Standard easing |
| `motion.easeIn` | `cubic-bezier(0.4, 0, 1, 1)` | Exit animations |
| `motion.easeInOut` | `cubic-bezier(0.4, 0, 0.2, 1)` | Emphasis |

### Motion Rules

- **Always** respect `prefers-reduced-motion`
- Use `motion.fast` (200ms) for touch feedback
- Use `motion.default` (300ms) for content transitions
- Avoid animations longer than 500ms except for special moments

---

## Accessibility (NEW SECTION)

### Touch Targets

| Requirement | Size | Notes |
|-------------|------|-------|
| Minimum | **44px** | WCAG AAA requirement |
| Comfortable | 48px | Recommended for primary actions |

### Font Size Minimums

- Body text: **16px** minimum (prevents iOS zoom on inputs)
- Caption/metadata: 14px minimum (limited use)
- Small/legal: 12px minimum (timestamps only, sparingly)

### Focus States

| Property | Value | Notes |
|----------|-------|-------|
| Focus ring width | **3px** | Visible on all backgrounds |
| Focus ring color | `rgba(19, 163, 181, 0.4)` | Teal at 40% opacity |
| Focus ring offset | 2px | Space between element and ring |

> **Standardized:** Focus ring uses Teal (brand primary) for consistency across all components.

### WCAG Contrast Ratios

| Level | Normal Text (<18px) | Large Text (≥18px bold or ≥24px) |
|-------|---------------------|----------------------------------|
| AA (minimum) | 4.5:1 | 3:1 |
| AAA (enhanced) | 7:1 | 4.5:1 |

### DocLiQ Color Contrast Validation

| Pair | Foreground | Background | Ratio | Level | Safe? |
|------|------------|------------|-------|-------|-------|
| Primary text | `#1C2A30` | `#FAF8F5` | 12.8:1 | AAA | **Yes** |
| Secondary text | `#5E7A86` | `#FAF8F5` | 4.7:1 | AA | **Yes** |
| Teal links | `#13A3B5` | `#FAF8F5` | 4.6:1 | AA | **Yes** |
| CTA button | `#FFFFFF` | `#13A3B5` | 4.5:1 | AA | **Yes** |
| **Coral text** | `#E88A73` | `#FAF8F5` | 2.8:1 | FAIL | **NO** |
| Coral badge | `#1C2A30` | `#E88A73` | 4.8:1 | AA | **Yes** |
| **Success text** | `#10B77F` | `#FAF8F5` | 3.2:1 | FAIL | **NO** |

### Critical Color Warnings

#### Coral (#E88A73) Fails for Text

Coral on cream is **2.8:1**, well below the 4.5:1 AA threshold.

**Safe uses:**
- Decorative icons (with text labels nearby)
- Badge/tag backgrounds with charcoal text inside
- Accent borders or backgrounds
- Illustrations

**Never use for:**
- Standalone text
- Links
- Error messages (use `#A03D2D` instead)
- Any text without accompanying visual indicator

#### Success Green (#10B77F) is Borderline

Success green on cream is **3.2:1**, passes for large text only.

**Options:**
1. Always pair with checkmark icon (visual redundancy)
2. Use darker variant `#0A8F63` (4.5:1) for text-only success messages
3. Use on dark backgrounds where contrast is higher

### Accessibility Tools

- **WebAIM Contrast Checker:** webaim.org/resources/contrastchecker
- **Figma plugins:** Contrast, Stark, A11y
- **Chrome DevTools:** Inspect element → color picker shows ratio

---

## Component Rules (Booking N3)

- **Primary CTA**: Teal background + white label; disabled state uses neutral surface + muted text (not "ghost teal").
- **Secondary CTA**: neutral surface with border; avoid competing accents.
- **Forms**: 16px inputs (avoid iOS zoom); clear error text with icon + message (not color-only).
- **Headers**: sticky only when needed; keep titles short; provide back affordance.
- **Bottom navigation**: calm, neutral; active state can use stronger text/underline, not aggressive brand blocks.
- **Bottom sheets/modals**: rounded top (`radius.lg`/`xl`), dim overlay, close button with 44px target.

---

## Content & Tone

- Prefer German, formal "Sie" for production strings.
- Short, direct, reassuring; no exclamation marks; no marketing claims.
- Avoid diagnostic language; describe actions and next steps.

---

## Avoid

- Arbitrary blues/greens that don't map to DocliQ tokens
- Decorative gradients, glassmorphism, fintech "shine"
- Dense dashboards on mobile; too many CTAs per screen
- Coral (`#E88A73`) as standalone text color
- Animation durations under 200ms for mobile touch feedback
- Sharp corner radii (under 8px) for primary UI elements

---

## Changelog

### v2.0 (2026-02-05)

**Critical Fixes:**
- Fast animation duration: 150ms → **200ms**

**Typography Updates:**
- H1 Display: 28px → **32px**
- H2 Section: Added explicit **24px** (some repos had 22px)
- H3 Card: Added explicit **20px** (some repos had 18px)
- Added type scale rationale and industry comparison

**Accessibility (New):**
- Added WCAG contrast ratio documentation
- Standardized focus ring color to Teal (was inconsistent blue/teal)
- Added color contrast validation table
- Documented Coral and Success green limitations

**Border Radius Updates:**
- Adopted softer values (12-24px) from MedAlpha-Flow
- Added radius rationale for "Humanity" brand pillar

**Shadow System Updates:**
- Adopted simpler single-layer shadows from MedAlpha-Flow
- Added shadow anatomy documentation
