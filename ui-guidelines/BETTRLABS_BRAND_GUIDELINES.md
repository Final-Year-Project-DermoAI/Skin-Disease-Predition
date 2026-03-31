# BETTRLABS BRAND GUIDELINES
## Complete Design System & Brand Identity

**Version:** 1.0  
**Last Updated:** December 2025  
**Status:** Production Ready

---

## TABLE OF CONTENTS

1. [Brand Essence](#1-brand-essence)
2. [Logo & Identity](#2-logo--identity)
3. [Color System](#3-color-system)
4. [Typography](#4-typography)
5. [UI Components](#5-ui-components)
6. [Layout & Spacing](#6-layout--spacing)
7. [Iconography](#7-iconography)
8. [Imagery & Photography](#8-imagery--photography)
9. [Data Visualization](#9-data-visualization)
10. [Animation & Motion](#10-animation--motion)
11. [Voice & Tone](#11-voice--tone)
12. [Brand Applications](#12-brand-applications)

---

## 1) BRAND ESSENCE

### Brand Personality

**What Bettrlabs Is:**
- **Intelligent but Approachable** - Sophisticated AI, simple interface
- **Confident but Humble** - Know our capabilities, honest about limitations
- **Scientific but Creative** - Data-driven decisions, imaginative solutions
- **Professional but Friendly** - Serious about quality, warm in interaction

**What Bettrlabs Is NOT:**
- Corporate/Stuffy - We're builders, not enterprise bureaucracy
- Hyped/Salesy - No superlatives, no inflated claims
- Intimidating - Powerful tools, gentle learning curve
- Generic SaaS - Specialized labs, not monolithic platform

### Brand Attributes

```
CURIOUS ──────────── Not Prescriptive
PRECISE ──────────── Not Vague
CALM ────────────── Not Urgent
MODULAR ─────────── Not Monolithic
TRANSPARENT ──────── Not Black Box
```

### Design Philosophy

**Campus, Not Dashboard**
- Labs feel like specialized buildings on a campus
- Navigation = walking between spaces
- Each lab has distinct visual identity
- Unified by common design language

**Small Apps, Not Big Platform**
- Each lab is self-contained
- Clear entry/exit points
- Specialized, not general-purpose
- Composable, not tangled

**Exploration Before Commitment**
- Preview mode always available
- Try before you buy philosophy
- Transparent pricing, no gates
- Trust built through transparency

---

## 2) LOGO & IDENTITY

### Logo System

**Wordmark (Primary)**
```
BETTRLABS
```
- Font: Google Sans Medium
- Tracking: -0.02em (tight)
- All caps or Title Case based on context
- Never condensed or stretched

**Logo Variations**

**1. Full Wordmark** (Primary)
```
Usage: Headers, hero sections, official communications
Minimum Size: 120px width
Clear Space: 0.5x the height of the logo on all sides
```

**2. Compact Mark** (Icon)
```
Usage: Favicons, app icons, small spaces
Minimum Size: 32px × 32px
Format: "B" or "BL" monogram
```

**3. Wordmark + Tagline**
```
BETTRLABS
The Marketplace for Intelligent R&D Tools

Usage: Marketing materials, presentations
Tagline: Google Sans Light, 0.4x size of wordmark
```

### Logo Colors

**On Light Backgrounds:**
- Primary: Black (#1A1A1A)
- Secondary: Gray 900 (#111827)

**On Dark Backgrounds:**
- Primary: White (#FFFFFF)
- Secondary: Gray 50 (#F9FAFB)

**On Brand Colors:**
- Use White with sufficient contrast (WCAG AA: 4.5:1 minimum)

### Logo Don'ts

❌ Don't rotate the logo  
❌ Don't apply effects (shadows, gradients, glows)  
❌ Don't place on busy backgrounds without sufficient contrast  
❌ Don't alter letter spacing  
❌ Don't use unapproved colors  
❌ Don't add additional elements around the logo  

---

## 3) COLOR SYSTEM

### Primary Palette

**Brand Black** (Primary Action Color)
```css
Hex: #1A1A1A
RGB: 26, 26, 26
Tailwind: Custom (or gray-950 approximation)

Usage:
- Primary buttons
- Headlines
- Logo (on light backgrounds)
- Key UI elements
- High-emphasis text
```

**Brand Lime** (Accent/Energy)
```css
Hex: #DAF185
RGB: 218, 241, 133
Tailwind: Custom

Usage:
- Highlights and callouts
- Membership badges
- Success states
- Decorative blobs
- Hover states on special elements
```

### Lab Identity Colors

Each lab has a signature color for brand recognition:

**Labnode** (Deep R&D)
```css
Hex: #1E3A8A
RGB: 30, 58, 138
Tailwind: blue-900

Usage:
- Labnode cards and badges
- Formulation screens
- Charts and graphs in Labnode
```

**1mm** (Micro-actions)
```css
Hex: #FACC15
RGB: 250, 204, 21
Tailwind: yellow-400

Usage:
- 1mm cards and badges
- Brand positioning screens
- Quick action buttons
```

**Regulatory Engine**
```css
Hex: #059669
RGB: 5, 150, 105
Tailwind: emerald-600

Usage:
- Regulatory cards and badges
- Compliance check indicators
- Approval states
```

**Sensory Lab**
```css
Hex: #EA580C
RGB: 234, 88, 12
Tailwind: orange-600

Usage:
- Sensory cards and badges
- Taste/texture visualizations
```

**Packaging Designer**
```css
Hex: #7C3AED
RGB: 124, 58, 237
Tailwind: violet-600

Usage:
- Packaging cards and badges
- Design preview screens
```

### Neutral Palette

**Background Colors**
```css
Hero/Login Background: #F0F4F8 (Light Blue-Gray)
App Background: #F9FAFB (Tailwind: gray-50)
Card Background: #FFFFFF (White)
Surface Dark: #1A1A1A (For dark cards/sections)
```

**Text Colors**
```css
Primary Text: #111827 (Tailwind: gray-900)
Secondary Text: #6B7280 (Tailwind: gray-500)
Tertiary Text: #9CA3AF (Tailwind: gray-400)
Placeholder Text: #D1D5DB (Tailwind: gray-300)
```

**Border Colors**
```css
Default Border: #E5E7EB (Tailwind: gray-200)
Light Border: #F3F4F6 (Tailwind: gray-100)
Hover Border: #111827 (Black)
```

### Semantic Colors

**Success**
```css
Hex: #10B981
Tailwind: emerald-500

Usage:
- Success messages
- Completed states
- Positive indicators
- ✓ Checkmarks
```

**Error**
```css
Hex: #EF4444
Tailwind: red-500

Usage:
- Error messages
- Failed states
- Destructive actions
- ⚠️ Warnings (critical)
```

**Warning**
```css
Hex: #F59E0B
Tailwind: amber-500

Usage:
- Warning messages
- Caution states
- Pending approvals
```

**Info**
```css
Hex: #3B82F6
Tailwind: blue-500

Usage:
- Info messages
- Tooltips
- Helper text
- Beta badges
```

### Decorative Colors (Blobs & Accents)

**Pastel Purple**
```css
Hex: #C5C6FC
RGB: 197, 198, 252

Usage: Background blobs, decorative elements
```

**Pastel Pink**
```css
Hex: #FDA7D8
RGB: 253, 167, 216

Usage: Background blobs, decorative elements
```

### Color Usage Rules

**Contrast Requirements**
- Text on background: Minimum 4.5:1 (WCAG AA)
- Large text (18pt+): Minimum 3:1
- UI elements: Minimum 3:1

**Color Combinations**

✅ **Good Combinations:**
- Black text on White background
- White text on Black background
- Gray 900 text on Gray 50 background
- Lab colors on White background
- White text on Lab colors

❌ **Avoid:**
- Gray 500 text on Gray 100 background (insufficient contrast)
- Lime on White (use sparingly, not for body text)
- Lab colors on each other (no blue on purple)

**Accessibility**
- Never rely on color alone to convey information
- Always pair color with icons, text, or patterns
- Test all combinations with color blindness simulators

---

## 4) TYPOGRAPHY

### Font Family

**Primary: Google Sans**
```css
font-family: 'Google Sans', sans-serif;

Weights Used:
- Light (300): Subtitles, large body text
- Regular (400): Body text, UI elements
- Medium (500): Emphasis, small headings
- Bold (700): Headlines, CTAs
```

**Import (Add to `<head>`):**
```html
<link href="https://fonts.googleapis.com/css2?family=Google+Sans:wght@300;400;500;700&display=swap" rel="stylesheet">
```

**Fallback Stack:**
```css
font-family: 'Google Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
```

### Type Scale

**Display (Hero Headlines)**
```css
Desktop: text-7xl (72px) font-medium tracking-tight
Mobile: text-5xl (48px) font-medium tracking-tight
Line Height: leading-tight (1.2)
Letter Spacing: -0.02em

Usage: Landing page heroes, major announcements
Example: "The Marketplace for Intelligent R&D Tools"
```

**H1 (Page Titles)**
```css
Desktop/Mobile: text-3xl (30px) font-light
Line Height: leading-normal (1.5)
Color: text-gray-900

Usage: Page headers, section titles
Example: "Campus Home", "My Projects"
```

**H2 (Section Headers)**
```css
Desktop/Mobile: text-4xl (36px) font-normal
Line Height: leading-snug (1.375)
Color: text-gray-900

Usage: Major sections on landing pages
Example: "How It Works", "Pricing"
```

**H3 (Card/Module Titles)**
```css
Desktop/Mobile: text-xl (20px) font-bold
Line Height: leading-normal (1.5)
Color: text-gray-900

Usage: Card titles, modal headers, subsections
Example: "Labnode", "Recent Projects"
```

**H4 (Subheadings)**
```css
Desktop/Mobile: text-lg (18px) font-bold
Line Height: leading-normal (1.5)
Color: text-gray-900

Usage: Form sections, accordion headers
```

**Body Large (Intro Text)**
```css
Desktop/Mobile: text-xl (20px) font-normal
Line Height: leading-relaxed (1.625)
Color: text-gray-900

Usage: Introduction paragraphs, important body text
Max Width: max-w-2xl (42rem) for readability
```

**Body (Default)**
```css
Desktop/Mobile: text-base (16px) font-normal
Line Height: leading-relaxed (1.625)
Color: text-gray-900

Usage: Standard body text, descriptions
Max Width: max-w-2xl for long-form content
```

**Body Small (UI Text)**
```css
Desktop/Mobile: text-sm (14px) font-normal
Line Height: leading-normal (1.5)
Color: text-gray-600

Usage: Labels, helper text, metadata, timestamps
```

**Caption**
```css
Desktop/Mobile: text-xs (12px) font-normal
Line Height: leading-normal (1.5)
Color: text-gray-500

Usage: Fine print, image captions, footnotes
```

### Typography Rules

**Hierarchy**
- Only one H1 per page
- Skip heading levels sparingly (H1 → H3 only if necessary)
- Maintain consistent spacing between heading levels

**Line Length**
- Optimal: 50-75 characters per line
- Use `max-w-2xl` or `max-w-3xl` for body text
- Wider for dashboards/data tables

**Letter Spacing**
- Tight for large headlines: `tracking-tight` (-0.025em)
- Normal for body: `tracking-normal` (0)
- Slight increase for all-caps: `tracking-wide` (0.025em)

**Text Alignment**
- Left-aligned for body text (never justify)
- Center-aligned for heroes, CTAs
- Right-aligned sparingly (metadata, timestamps)

---

## 5) UI COMPONENTS

### Buttons

**Primary Button** (Main Actions)
```css
Classes:
bg-black text-white rounded-full px-8 py-4 font-bold
hover:bg-gray-800 transition-all duration-200 hover:scale-105

Minimum Width: 120px (auto for text)
Height: 56px (with py-4)
Padding: 32px horizontal, 16px vertical

States:
- Default: bg-black
- Hover: bg-gray-800 + scale-105
- Active: bg-gray-900 + scale-95
- Disabled: bg-gray-300 text-gray-500 cursor-not-allowed

Usage:
- "Start Building"
- "Run Experiment"
- "Upgrade to Membership"
```

**Secondary Button** (Alternative Actions)
```css
Classes:
bg-white border border-gray-200 text-gray-900 rounded-full px-8 py-4 font-bold
hover:bg-gray-50 transition-colors duration-200

States:
- Default: white with gray border
- Hover: bg-gray-50
- Active: bg-gray-100
- Disabled: border-gray-100 text-gray-400

Usage:
- "Learn More"
- "View Pricing"
- "Cancel"
```

**Ghost Button** (Tertiary Actions)
```css
Classes:
text-gray-900 font-bold hover:text-black transition-colors duration-200

No background, no border
Just text with hover state

Usage:
- "Skip for now"
- "Maybe later"
- Navigation links
```

**Small Button** (UI Actions)
```css
Classes:
px-4 py-2 text-sm font-bold rounded-lg border border-gray-200
hover:bg-gray-50 transition-colors

Height: 36px
Usage:
- "Edit"
- "Delete"
- "Export"
- Table actions
```

**Icon Button**
```css
Classes:
w-10 h-10 rounded-full flex items-center justify-center
hover:bg-gray-100 transition-colors

Size: 40px × 40px
Usage:
- Close (×)
- Back (←)
- Menu (☰)
```

### Cards

**Standard Card**
```css
Classes:
bg-white border border-gray-200 rounded-2xl p-6
shadow-sm hover:shadow-md transition-shadow duration-200

Border Radius: 16px (rounded-2xl)
Padding: 24px (p-6)
Hover: Increase shadow

Usage:
- Lab cards
- Project cards
- Feature cards
```

**Large Feature Card**
```css
Classes:
rounded-[2rem] p-8 md:p-12 border border-gray-100 bg-white
shadow-sm

Border Radius: 32px (rounded-[2rem])
Padding: 32px mobile, 48px desktop
No hover state (static)

Usage:
- Hero sections
- Major feature explanations
- Pricing cards
```

**Compact Card**
```css
Classes:
bg-white border border-gray-200 rounded-xl p-4
hover:border-gray-300 transition-colors

Border Radius: 12px (rounded-xl)
Padding: 16px (p-4)

Usage:
- List items
- Small modules
- Notifications
```

**Dark Card**
```css
Classes:
bg-[#1A1A1A] text-white rounded-2xl p-6

For contrast/emphasis sections

Usage:
- Premium features
- Membership benefits
- Special callouts
```

### Forms & Inputs

**Text Input**
```css
Classes:
w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3
focus:outline-none focus:border-black focus:ring-1 focus:ring-black
text-gray-900 placeholder-gray-500 transition-colors

Height: 48px (with py-3)
Border Radius: 12px (rounded-xl)

States:
- Default: gray-50 bg, gray-200 border
- Focus: black border + ring
- Error: border-red-500 + ring-red-500
- Disabled: bg-gray-100 text-gray-400

Placeholder: text-gray-500
```

**Textarea**
```css
Same as text input but:
- Minimum height: 120px
- Resize: vertical only (resize-y)
- Padding: p-4 (16px all sides)
```

**Dropdown Select**
```css
Same as text input plus:
- Arrow icon on right
- appearance-none (custom styling)
```

**Checkbox**
```css
Classes:
w-5 h-5 rounded border-2 border-gray-300
checked:bg-black checked:border-black
focus:ring-2 focus:ring-black focus:ring-offset-2

Size: 20px × 20px
Border Radius: 4px (rounded)
```

**Radio Button**
```css
Classes:
w-5 h-5 border-2 border-gray-300
checked:bg-black checked:border-black
focus:ring-2 focus:ring-black focus:ring-offset-2

Size: 20px × 20px (circular)
```

**Toggle Switch**
```css
Width: 44px
Height: 24px
Border Radius: Full (pill shape)
Thumb: 20px diameter

States:
- Off: bg-gray-200
- On: bg-black
- Disabled: bg-gray-100
```

**File Upload**
```css
Drag & Drop Area:
border-2 border-dashed border-gray-300 rounded-xl
p-8 text-center
hover:border-gray-400 hover:bg-gray-50
transition-colors

Active (dragging over):
border-black bg-gray-50
```

### Navigation

**Top Nav Bar (Public Site)**
```css
Classes:
bg-white/80 backdrop-blur-md border-b border-gray-100
sticky top-0 z-50

Background: Glassmorphism (semi-transparent + blur)
Height: 72px
Padding: px-4 py-4
```

**Sidebar Nav (App)**
```css
Classes:
bg-white border-r border-gray-200
w-64 h-screen sticky top-0

Width: 256px
Background: Solid white
Border: Right border only

Nav Item (Active):
bg-gray-100 border-l-4 border-black text-black font-bold

Nav Item (Inactive):
text-gray-600 hover:bg-gray-50 hover:text-black
```

**Bottom Tab Bar (Mobile)**
```css
Classes:
bg-white border-t border-gray-200
fixed bottom-0 w-full
flex justify-around items-center
h-16 px-2

Height: 64px
Background: Solid white
Border: Top border only

Tab (Active):
text-black font-bold (icon filled)

Tab (Inactive):
text-gray-400 (icon outlined)
```

### Modals & Overlays

**Modal Overlay**
```css
Classes:
fixed inset-0 bg-black/50 backdrop-blur-sm
flex items-center justify-center z-50

Background: Semi-transparent black + blur
Centered content
Click outside to close
```

**Modal Container**
```css
Classes:
bg-white rounded-2xl shadow-2xl
max-w-2xl w-full mx-4
overflow-hidden

Max Width: 672px (max-w-2xl)
Border Radius: 16px
Margin: 16px on mobile (mx-4)
Shadow: Large (shadow-2xl)
```

**Modal Header**
```css
Classes:
px-6 py-4 border-b border-gray-200
flex items-center justify-between

Padding: 24px horizontal, 16px vertical
Border: Bottom only
```

**Modal Body**
```css
Classes:
px-6 py-6 max-h-[70vh] overflow-y-auto

Padding: 24px all sides
Max Height: 70% of viewport (scrollable)
```

**Modal Footer**
```css
Classes:
px-6 py-4 border-t border-gray-200
flex justify-end gap-3

Padding: 24px horizontal, 16px vertical
Border: Top only
Buttons: Right-aligned with gap
```

### Badges & Tags

**Status Badge**
```css
Classes:
inline-flex items-center px-3 py-1 rounded-full
text-xs font-bold

Size: Auto width, 28px height
Border Radius: Full (pill)

Variants:
- Active: bg-green-100 text-green-800
- Beta: bg-blue-100 text-blue-800
- Coming Soon: bg-gray-100 text-gray-800
- Locked: bg-red-100 text-red-800
```

**Count Badge**
```css
Classes:
inline-flex items-center justify-center
w-6 h-6 rounded-full bg-black text-white
text-xs font-bold

Size: 24px × 24px (circular)
Usage: Notification counts, unread indicators
```

**Lab Badge**
```css
Classes:
inline-flex items-center gap-2 px-3 py-1.5 rounded-lg
border text-sm font-bold

Background: Lab color at 10% opacity
Border: Lab color
Text: Lab color (dark variant)

Example (Labnode):
bg-blue-50 border-blue-900 text-blue-900
```

### Alerts & Notifications

**Toast Notification**
```css
Classes:
bg-white border border-gray-200 rounded-xl shadow-lg
px-4 py-3 flex items-center gap-3
max-w-sm

Position: Top-right corner (fixed)
Animation: Slide in from right
Auto-dismiss: 5 seconds
```

**Alert Banner**
```css
Classes:
px-6 py-4 rounded-xl border-l-4 flex items-start gap-3

Border Left: 4px (accent color)

Variants:
- Success: bg-green-50 border-green-500 text-green-900
- Error: bg-red-50 border-red-500 text-red-900
- Warning: bg-amber-50 border-amber-500 text-amber-900
- Info: bg-blue-50 border-blue-500 text-blue-900
```

### Loading States

**Spinner**
```css
<!-- Tailwind Spinner -->
<div class="animate-spin rounded-full h-8 w-8 border-b-2 border-black"></div>

Sizes:
- Small: h-4 w-4
- Medium: h-8 w-8
- Large: h-12 w-12
```

**Skeleton Loader**
```css
Classes:
bg-gray-200 rounded animate-pulse

For text:
h-4 w-full (or specific width)

For cards:
h-64 w-full rounded-2xl
```

**Progress Bar**
```css
<!-- Container -->
<div class="w-full bg-gray-200 rounded-full h-2">
  <!-- Fill -->
  <div class="bg-black h-2 rounded-full" style="width: 65%"></div>
</div>

Height: 8px
Border Radius: Full
```

---

## 6) LAYOUT & SPACING

### Container System

**Page Container**
```css
Classes:
max-w-7xl mx-auto px-4 sm:px-6 lg:px-8

Max Width: 1280px (max-w-7xl)
Margin: Centered (mx-auto)
Padding: Responsive
- Mobile: 16px (px-4)
- Tablet: 24px (sm:px-6)
- Desktop: 32px (lg:px-8)

Usage: All page sections
```

**Narrow Container** (For text-heavy content)
```css
Classes:
max-w-3xl mx-auto px-4

Max Width: 768px (max-w-3xl)
Usage: Blog posts, legal pages, long-form content
```

**Wide Container** (For dashboards)
```css
Classes:
max-w-screen-2xl mx-auto px-4

Max Width: 1536px
Usage: Dashboards, data tables, wide layouts
```

### Grid System

**Standard Grid** (3 columns on desktop)
```css
Classes:
grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6

Columns:
- Mobile: 1 column
- Tablet: 2 columns
- Desktop: 3 columns

Gap: 24px (gap-6)
```

**Feature Grid** (2 columns)
```css
Classes:
grid grid-cols-1 lg:grid-cols-2 gap-8

Columns:
- Mobile: 1 column
- Desktop: 2 columns

Gap: 32px (gap-8)
```

**Auto-Fit Grid** (Responsive without breakpoints)
```css
Classes:
grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6

Automatically fits columns based on available space
Minimum column width: 300px
```

### Spacing Scale

**Base Unit: 4px**

Tailwind uses a base-4 spacing scale:

```
0.5 = 2px
1 = 4px
2 = 8px
3 = 12px
4 = 16px
5 = 20px
6 = 24px
8 = 32px
10 = 40px
12 = 48px
16 = 64px
20 = 80px
24 = 96px
32 = 128px
```

**Common Usage:**

**Component Internal Spacing:**
- Cards: `p-6` (24px)
- Large Cards: `p-8 md:p-12` (32px mobile, 48px desktop)
- Buttons: `px-8 py-4` (32px horizontal, 16px vertical)
- Inputs: `px-4 py-3` (16px horizontal, 12px vertical)

**Section Spacing (Vertical):**
- Between sections: `py-20` or `py-24` (80-96px)
- Between elements in section: `mb-12` or `mb-16` (48-64px)
- Between related elements: `mb-6` or `mb-8` (24-32px)

**Layout Gaps:**
- Card grids: `gap-6` (24px)
- Feature grids: `gap-8` (32px)
- List items: `gap-4` (16px)

### Responsive Breakpoints

```css
/* Tailwind Default Breakpoints */
sm: 640px   /* Tablet */
md: 768px   /* Tablet landscape / small desktop */
lg: 1024px  /* Desktop */
xl: 1280px  /* Large desktop */
2xl: 1536px /* Extra large desktop */
```

**Usage:**
```css
<!-- Mobile-first approach -->
<div class="text-base md:text-lg lg:text-xl">
  Text scales up on larger screens
</div>

<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
  1 column mobile, 2 tablet, 3 desktop
</div>
```

### Z-Index Scale

```css
/* Layering System */
z-0: Base layer (default)
z-10: Sticky headers, cards
z-20: Dropdowns, popovers
z-30: Modals overlay backdrop
z-40: Modal content
z-50: Toasts, notifications (highest)
```

**Usage:**
- Nav bars: `z-10` (sticky top-0 z-10)
- Dropdowns: `z-20`
- Modal backdrop: `z-30`
- Modal content: `z-40`
- Toasts: `z-50`

---

## 7) ICONOGRAPHY

### Icon System

**Primary Source: Lucide Icons**
```bash
npm install lucide-react
```

**Style:**
- Outline style (not filled)
- 24px default size
- 1.5px stroke width
- Round line caps and joins

**Usage:**
```jsx
import { ArrowRight, Check, X, Menu } from 'lucide-react';

<ArrowRight className="w-5 h-5" />
```

### Common Icons

**Navigation:**
- Menu: `Menu`
- Close: `X`
- Back: `ArrowLeft`
- Forward: `ArrowRight`
- Up: `ChevronUp`
- Down: `ChevronDown`

**Actions:**
- Add: `Plus`
- Edit: `Edit`
- Delete: `Trash2`
- Save: `Save`
- Download: `Download`
- Upload: `Upload`
- Share: `Share2`

**Status:**
- Success: `CheckCircle` or `Check`
- Error: `XCircle` or `AlertCircle`
- Warning: `AlertTriangle`
- Info: `Info`

**UI:**
- Search: `Search`
- Settings: `Settings`
- User: `User`
- Notification: `Bell`
- Help: `HelpCircle`
- External Link: `ExternalLink`

### Icon Sizes

```css
Small: w-4 h-4 (16px) - Used in small buttons, badges
Medium: w-5 h-5 (20px) - Default, most UI elements
Large: w-6 h-6 (24px) - Headers, emphasis
XL: w-8 h-8 (32px) - Feature icons, empty states
```

### Icon Colors

**Match text color by default:**
```jsx
<Check className="w-5 h-5 text-gray-600" />
```

**Semantic colors:**
```jsx
<CheckCircle className="w-5 h-5 text-green-500" />
<XCircle className="w-5 h-5 text-red-500" />
<AlertTriangle className="w-5 h-5 text-amber-500" />
```

### Lab Icons

Each lab has a unique emoji icon:

- Labnode: 🧬
- 1mm: ⚡ or 🎯
- Regulatory Engine: ✅
- Sensory Lab: 👅 or 🍽️
- Packaging: 📦

**Usage:**
```jsx
<span className="text-2xl">🧬</span> Labnode
```

---

## 8) IMAGERY & PHOTOGRAPHY

### Photography Style

**Characteristics:**
- Light and airy (not dark/moody)
- Clean and uncluttered
- Scientific but warm
- Natural lighting preferred
- Soft focus backgrounds

**Subject Matter:**
- Lab environments (clean, organized)
- Product ingredients (macro shots)
- People working (candid, not posed)
- Abstract scientific imagery (molecules, patterns)

**Color Palette:**
- Slightly desaturated (not overly vibrant)
- Cool tones preferred (blues, grays, whites)
- Accents of green (plants, ingredients)

### Image Treatment

**Aspect Ratios:**
- Hero images: 16:9
- Cards: 4:3 or 1:1
- Thumbnails: 1:1
- Wide banners: 21:9

**Border Radius:**
- Match card styles: `rounded-2xl` (16px)
- Small images: `rounded-xl` (12px)

**Overlays (when text on images):**
```css
<!-- Gradient overlay for readability -->
bg-gradient-to-r from-black/60 to-transparent
```

### Illustrations

**Style:**
- Line-based (outline style)
- Minimal color (2-3 colors max)
- Geometric and clean
- Abstract, not literal

**Colors:**
- Primary: Black outlines
- Accent: Brand Lime (#DAF185)
- Secondary: Lab color (context-dependent)

**Usage:**
- Empty states
- Onboarding screens
- Error pages (404, 500)
- Feature explanations

### Placeholder Images

**When no image available:**
```jsx
<!-- Gradient background with icon -->
<div class="w-full h-64 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center">
  <Icon className="w-16 h-16 text-gray-400" />
</div>
```

---

## 9) DATA VISUALIZATION

### Charts & Graphs

**Style Principles:**
- Minimalist (remove chart junk)
- Clear labels (no abbreviations unless necessary)
- Accessible colors (distinct for colorblind users)
- Interactive tooltips (show exact values on hover)

**Color Palette for Data:**

**Sequential (Single Metric):**
```
Light → Dark progression
#E5E7EB → #9CA3AF → #6B7280 → #374151 → #1F2937
```

**Categorical (Multiple Categories):**
```
Use Lab Colors (ensure sufficient contrast):
#1E3A8A (Labnode Blue)
#059669 (Regulatory Green)
#FACC15 (1mm Yellow)
#7C3AED (Packaging Purple)
#EA580C (Sensory Orange)
```

**Diverging (Positive/Negative):**
```
Negative: #EF4444 (Red 500)
Neutral: #E5E7EB (Gray 200)
Positive: #10B981 (Emerald 500)
```

### Chart Types

**Bar Chart**
```css
Bars: rounded-t-lg (top corners rounded)
Color: Lab color or Gray 900
Hover: Darken by 10%
Grid: Horizontal lines only, light gray
Axis: Gray 400, 12px font
```

**Line Chart**
```css
Line: 2px stroke width
Color: Lab color
Points: 6px diameter circles
Fill: Lab color at 10% opacity (optional gradient)
Grid: Both axes, light gray
```

**Pie/Donut Chart**
```css
Segments: Use categorical color palette
Hover: Pull out segment slightly
Labels: Outside with leader lines
Center (donut): Display total value
```

**Tables**
```css
Header: bg-gray-50 font-bold text-left
Rows: Alternating white/gray-50 (zebra striping optional)
Borders: Light gray between rows
Hover: bg-gray-50
Padding: px-4 py-3
Font: text-sm
```

### Data Display

**Key Metrics Card**
```jsx
<div class="bg-white border border-gray-200 rounded-2xl p-6">
  <div class="text-sm text-gray-500">Total Cost</div>
  <div class="text-3xl font-bold text-gray-900">$2.40</div>
  <div class="text-sm text-green-600">↓ 12% vs last run</div>
</div>
```

**Progress Indicators**
```css
<!-- Circular Progress -->
<svg class="w-20 h-20">
  <circle stroke="gray-200" />
  <circle stroke="black" stroke-dasharray="percentage" />
</svg>

<!-- Linear Progress (see Progress Bar above) -->
```

---

## 10) ANIMATION & MOTION

### Animation Principles

**Purpose:**
- Guide attention (where to look)
- Provide feedback (action acknowledged)
- Create delight (subtle, not distracting)
- Maintain context (where things come from/go to)

**Never:**
- Block interaction
- Loop infinitely (except loading)
- Cause motion sickness
- Distract from content

### Duration Guidelines

```css
Instant: 0ms (immediate feedback)
Fast: 100-200ms (UI feedback, hover states)
Normal: 200-300ms (transitions, page changes)
Slow: 300-500ms (complex animations)
Very Slow: 500ms+ (special effects only)
```

**Easing:**
```css
Default: ease-in-out (smooth start and end)
Enter: ease-out (decelerating)
Exit: ease-in (accelerating)
Bounce: Use sparingly for delight
```

### Common Animations

**Fade In**
```css
Classes:
animate-in fade-in duration-500

<!-- Or custom -->
opacity-0 transition-opacity duration-300 hover:opacity-100
```

**Slide In**
```css
Classes:
animate-in slide-in-from-bottom-4 duration-500

From bottom, top, left, right available
Distance: 4 units (16px)
```

**Scale (Hover Effects)**
```css
Classes:
transition-transform duration-200 hover:scale-105

Scale up: scale-105 (5% larger)
Scale down: scale-95 (5% smaller)

Usage: Buttons, cards on hover
```

**Background Blob Animation**
```css
@keyframes blob {
  0% { transform: translate(0px, 0px) scale(1); }
  33% { transform: translate(30px, -50px) scale(1.1); }
  66% { transform: translate(-20px, 20px) scale(0.9); }
  100% { transform: translate(0px, 0px) scale(1); }
}

.animate-blob {
  animation: blob 7s infinite;
}
```

**Pulse (Loading Indicator)**
```css
Classes:
animate-pulse

Opacity: 100% → 50% → 100% (repeat)
Duration: 2s infinite
```

**Spin (Loading Spinner)**
```css
Classes:
animate-spin

Rotation: 360° continuous
Duration: 1s linear infinite
```

### Page Transitions

**Enter (New page loads):**
```css
animate-in fade-in slide-in-from-bottom-4 duration-500
```

**Exit (Page unloads):**
```css
animate-out fade-out slide-out-to-top-4 duration-300
```

**Stagger (List items appear one by one):**
```jsx
{items.map((item, index) => (
  <div 
    className="animate-in fade-in slide-in-from-left-4"
    style={{ animationDelay: `${index * 100}ms` }}
  >
    {item}
  </div>
))}
```

### Interactive Feedback

**Button Click:**
```css
active:scale-95 transition-transform duration-100
```

**Input Focus:**
```css
focus:border-black focus:ring-1 focus:ring-black transition-colors duration-200
```

**Card Hover:**
```css
hover:shadow-md transition-shadow duration-200
```

**Link Hover:**
```css
hover:text-black transition-colors duration-150
```

### Performance

**Do:**
- Use `transform` and `opacity` (GPU-accelerated)
- Use `will-change` for frequent animations
- Limit simultaneous animations

**Don't:**
- Animate `width`, `height`, `top`, `left` (reflow-heavy)
- Animate many elements at once
- Use JS for simple transitions (prefer CSS)

---

## 11) VOICE & TONE

### Brand Voice

**Core Attributes:**

**CURIOUS**
- Ask questions, don't prescribe
- "What are you building?" not "Select your category"
- Invite exploration

**PRECISE**
- Specific numbers, not vague claims
- "$2.40 per unit" not "affordable"
- Show confidence intervals

**CALM**
- No urgency tactics (no "Limited time!" or "Act now!")
- Relaxed pacing
- Trust that value speaks for itself

**HONEST**
- Acknowledge limitations
- "This is simulation, not replacement for physical testing"
- No hiding constraints

### Writing Guidelines

**Active Voice:**
✅ "We'll design your system"  
❌ "Your system will be designed"

**Short Sentences:**
✅ "Start building. See results. Export data."  
❌ "You can start building your product, see the results, and export the data at any time."

**Plain Language:**
✅ "Cost per unit"  
❌ "Per-unit economic impact assessment"

**Second Person:**
✅ "Your formulation"  
❌ "The user's formulation" or "One's formulation"

### Tone by Context

**Marketing (Landing Page)**
- Confident but not hyped
- Clear value proposition
- Conversational but professional
- "The Marketplace for Intelligent R&D Tools" (direct, no fluff)

**Product (App Experience)**
- Instructive but not condescending
- Helpful but not hand-holding
- "Run Experiment" not "Click here to run your experiment"

**Errors**
- Apologetic but solution-focused
- Clear about what happened and what to do
- ⚠️ "Payment failed: Card declined. [Try Again]"

**Success**
- Celebratory but brief
- ✓ "Experiment complete!" (not "Congratulations! Your amazing experiment is now complete!")

**Help/Support**
- Patient and thorough
- Assume intelligence, not expertise
- Teach concepts, don't just give steps

### Words to Use

**Encourage:**
- Explore, Build, Experiment, Discover
- Try, Test, Iterate
- Your, You (personal)

**Avoid:**
- Revolutionary, Game-changing, Cutting-edge
- Seamless, Robust, Leverage
- Utilize (use "use")
- Synergy, Paradigm, Ecosystem (unless actually appropriate)

### Microcopy Examples

**CTAs:**
- ✅ "Try Free Preview" ❌ "Start Free Trial Now!"
- ✅ "Run Experiment" ❌ "Execute Analysis"
- ✅ "Upgrade to Membership" ❌ "Unlock Premium Features Today!"

**Empty States:**
- ✅ "Your lab bench is empty. Ready to start?" ❌ "No experiments found."
- ✅ "Start your first experiment" ❌ "Get started now"

**Errors:**
- ✅ "⚠️ Invalid ingredient combination" ❌ "Error: System failure"
- ✅ "Please check your card details" ❌ "Payment processing error occurred"

**Success:**
- ✅ "✓ Project saved" ❌ "Your project has been successfully saved to your account"
- ✅ "✓ Payment successful" ❌ "Congratulations! Payment completed successfully!"

---

## 12) BRAND APPLICATIONS

### Email Templates

**Structure:**
```
[Logo]

[Greeting]
Hi [Name],

[Body - Plain text, short paragraphs]

[CTA Button]

[Footer]
Questions? Reply to this email.
Bettrlabs | [Address] | Unsubscribe
```

**Styling:**
- Use brand colors sparingly
- Buttons: Same style as web (black, rounded-full)
- Maximum width: 600px
- Font: System stack (email clients)

### Social Media

**Profile Images:**
- Logo on white background
- Minimum size: 400px × 400px

**Cover Images:**
- 16:9 aspect ratio
- Brand colors with geometric patterns
- Include tagline: "The Marketplace for Intelligent R&D Tools"

**Post Templates:**
```
[Visual: Screenshot of lab or abstract brand graphic]

[Text: Short, clear, valuable]
"Labnode can model 12 nutrition scenarios in under 60 seconds.
Here's how →"

[Link to blog or lab]
```

**Hashtags:**
- #Bettrlabs (branded)
- #ProductDevelopment #FoodTech #CPG (industry)
- Limit to 3-5 per post

### Presentations

**Title Slide:**
```
[Large logo centered]
[Presentation title below]
[Date/Event - small text]
```

**Content Slides:**
- Max 3-5 bullet points per slide
- Large text (min 24pt)
- Use brand colors for emphasis
- Leave white space

**Data Slides:**
- Use brand chart styles
- One chart per slide
- Clear title explaining insight

### Print Materials

**Business Cards:**
```
[Front]
Name
Title
Email | Phone

[Back]
Bettrlabs Logo
Tagline
Website
```

**Letterhead:**
- Logo top-left
- Contact info footer
- Generous margins

---

## APPENDIX A: TAILWIND CONFIG

```javascript
// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'brand-lime': '#DAF185',
        'brand-black': '#1A1A1A',
        'labnode': '#1E3A8A',
        '1mm': '#FACC15',
        'regulatory': '#059669',
        'sensory': '#EA580C',
        'packaging': '#7C3AED',
        'hero-bg': '#F0F4F8',
        'blob-purple': '#C5C6FC',
        'blob-pink': '#FDA7D8',
      },
      fontFamily: {
        sans: ['Google Sans', 'sans-serif'],
      },
      borderRadius: {
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
      animation: {
        'blob': 'blob 7s infinite',
      },
      keyframes: {
        blob: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' },
        },
      },
    },
  },
  plugins: [],
}
```

---

## APPENDIX B: QUICK REFERENCE

### Color Codes (Copy-Paste)
```css
/* Brand Colors */
--brand-black: #1A1A1A;
--brand-lime: #DAF185;

/* Lab Colors */
--labnode: #1E3A8A;
--1mm: #FACC15;
--regulatory: #059669;
--sensory: #EA580C;
--packaging: #7C3AED;

/* Backgrounds */
--hero-bg: #F0F4F8;
--app-bg: #F9FAFB;

/* Semantic */
--success: #10B981;
--error: #EF4444;
--warning: #F59E0B;
--info: #3B82F6;
```

### Common Class Combinations
```css
/* Primary Button */
bg-black text-white rounded-full px-8 py-4 font-bold hover:bg-gray-800 transition-all hover:scale-105

/* Card */
bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow

/* Input */
w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-black focus:ring-1 focus:ring-black

/* Container */
max-w-7xl mx-auto px-4 sm:px-6 lg:px-8
```

---

**END OF BRAND GUIDELINES**

*Version 1.0 • December 2025*  
*For questions or additions, contact: brand@bettrlabs.com*

---

This is a living document. Update as the brand evolves, but maintain core principles: clean, scientific, approachable, modular.
