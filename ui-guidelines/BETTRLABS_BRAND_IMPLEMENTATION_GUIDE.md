# BETTRLABS BRAND IMPLEMENTATION GUIDE
## Quick Start for Developers

This guide shows you exactly how to implement the Bettrlabs brand guidelines in your codebase using Tailwind CSS.

---

## 1) SETUP (5 Minutes)

### Step 1: Update Tailwind Config

Add this to your `tailwind.config.js`:

```javascript
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Brand Colors
        'brand-lime': '#DAF185',
        'brand-black': '#1A1A1A',
        
        // Lab Colors
        'labnode': '#1E3A8A',
        '1mm': '#FACC15',
        'regulatory': '#059669',
        'sensory': '#EA580C',
        'packaging': '#7C3AED',
        
        // Backgrounds
        'hero-bg': '#F0F4F8',
        'app-bg': '#F9FAFB',
        
        // Decorative
        'blob-purple': '#C5C6FC',
        'blob-pink': '#FDA7D8',
      },
      fontFamily: {
        sans: ['Google Sans', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
      },
      borderRadius: {
        '3xl': '1.5rem',  // 24px
        '4xl': '2rem',     // 32px
      },
      animation: {
        'blob': 'blob 7s infinite',
      },
      keyframes: {
        blob: {
          '0%': { 
            transform: 'translate(0px, 0px) scale(1)' 
          },
          '33%': { 
            transform: 'translate(30px, -50px) scale(1.1)' 
          },
          '66%': { 
            transform: 'translate(-20px, 20px) scale(0.9)' 
          },
          '100%': { 
            transform: 'translate(0px, 0px) scale(1)' 
          },
        },
      },
    },
  },
  plugins: [],
}
```

### Step 2: Import Google Sans Font

Add to your `index.html` inside `<head>`:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Google+Sans:wght@300;400;500;700&display=swap" rel="stylesheet">
```

### Step 3: Install Lucide Icons

```bash
npm install lucide-react
```

---

## 2) COMPONENT LIBRARY (Copy-Paste Ready)

### Buttons

**Primary Button:**
```jsx
<button className="bg-black text-white rounded-full px-8 py-4 font-bold hover:bg-gray-800 transition-all duration-200 hover:scale-105">
  Run Experiment
</button>
```

**Secondary Button:**
```jsx
<button className="bg-white border border-gray-200 text-gray-900 rounded-full px-8 py-4 font-bold hover:bg-gray-50 transition-colors duration-200">
  Learn More
</button>
```

**Ghost Button:**
```jsx
<button className="text-gray-900 font-bold hover:text-black transition-colors duration-200">
  Skip for Now
</button>
```

**Small Button:**
```jsx
<button className="px-4 py-2 text-sm font-bold rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors">
  Edit
</button>
```

**Icon Button:**
```jsx
import { X } from 'lucide-react';

<button className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors">
  <X className="w-5 h-5" />
</button>
```

---

### Cards

**Standard Card:**
```jsx
<div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-200">
  {/* Content */}
</div>
```

**Large Feature Card:**
```jsx
<div className="rounded-[2rem] p-8 md:p-12 border border-gray-100 bg-white shadow-sm">
  {/* Content */}
</div>
```

**Dark Card:**
```jsx
<div className="bg-[#1A1A1A] text-white rounded-2xl p-6">
  {/* Content */}
</div>
```

**Lab Card (with Labnode color):**
```jsx
<div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-200">
  <div className="flex items-center gap-2 mb-4">
    <span className="text-2xl">🧬</span>
    <h3 className="text-xl font-bold text-gray-900">Labnode</h3>
    <span className="px-3 py-1 rounded-full bg-blue-50 border border-labnode text-labnode text-xs font-bold">
      ACTIVE
    </span>
  </div>
  <p className="text-gray-600">Deep R&D for formulations</p>
</div>
```

---

### Forms

**Text Input:**
```jsx
<input
  type="text"
  placeholder="Enter your email"
  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-black focus:ring-1 focus:ring-black text-gray-900 placeholder-gray-500 transition-colors"
/>
```

**Textarea:**
```jsx
<textarea
  placeholder="Describe your problem"
  rows={4}
  className="w-full bg-gray-50 border border-gray-200 rounded-xl p-4 focus:outline-none focus:border-black focus:ring-1 focus:ring-black text-gray-900 placeholder-gray-500 transition-colors resize-y"
/>
```

**Select Dropdown:**
```jsx
<select className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-black focus:ring-1 focus:ring-black text-gray-900 transition-colors">
  <option>Select an option</option>
  <option>Option 1</option>
  <option>Option 2</option>
</select>
```

**Checkbox:**
```jsx
<input
  type="checkbox"
  className="w-5 h-5 rounded border-2 border-gray-300 checked:bg-black checked:border-black focus:ring-2 focus:ring-black focus:ring-offset-2"
/>
```

---

### Navigation

**Top Nav (Glassmorphism):**
```jsx
<nav className="bg-white/80 backdrop-blur-md border-b border-gray-100 sticky top-0 z-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex items-center justify-between h-16">
      {/* Logo */}
      <div className="text-xl font-bold">BETTRLABS</div>
      
      {/* Nav Links */}
      <div className="hidden md:flex items-center gap-8">
        <a href="/labs" className="text-gray-600 hover:text-black transition-colors">
          Labs
        </a>
        <a href="/pricing" className="text-gray-600 hover:text-black transition-colors">
          Pricing
        </a>
        <button className="bg-black text-white rounded-full px-6 py-2 font-bold hover:bg-gray-800 transition-colors">
          Sign Up
        </button>
      </div>
    </div>
  </div>
</nav>
```

**Sidebar Nav (App):**
```jsx
<aside className="bg-white border-r border-gray-200 w-64 h-screen sticky top-0">
  <div className="p-4">
    {/* Logo */}
    <div className="text-xl font-bold mb-8">BETTRLABS</div>
    
    {/* Nav Items */}
    <nav className="space-y-2">
      <a href="/app/home" className="flex items-center gap-3 px-4 py-3 rounded-lg bg-gray-100 border-l-4 border-black text-black font-bold">
        Campus
      </a>
      <a href="/app/marketplace" className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-600 hover:bg-gray-50 hover:text-black transition-colors">
        Marketplace
      </a>
    </nav>
  </div>
</aside>
```

**Bottom Tab Bar (Mobile):**
```jsx
<nav className="bg-white border-t border-gray-200 fixed bottom-0 w-full flex justify-around items-center h-16 px-2 z-50">
  <button className="flex flex-col items-center gap-1 text-black">
    <Home className="w-6 h-6" />
    <span className="text-xs font-bold">Campus</span>
  </button>
  <button className="flex flex-col items-center gap-1 text-gray-400">
    <Grid className="w-6 h-6" />
    <span className="text-xs">Marketplace</span>
  </button>
  <button className="flex flex-col items-center gap-1 text-gray-400">
    <Folder className="w-6 h-6" />
    <span className="text-xs">Projects</span>
  </button>
  <button className="flex flex-col items-center gap-1 text-gray-400">
    <User className="w-6 h-6" />
    <span className="text-xs">Profile</span>
  </button>
</nav>
```

---

### Alerts & Notifications

**Toast:**
```jsx
<div className="bg-white border border-gray-200 rounded-xl shadow-lg px-4 py-3 flex items-center gap-3 max-w-sm">
  <CheckCircle className="w-5 h-5 text-green-500" />
  <span className="text-sm font-medium text-gray-900">Project saved!</span>
</div>
```

**Alert Banner (Success):**
```jsx
<div className="bg-green-50 border-l-4 border-green-500 px-6 py-4 rounded-xl flex items-start gap-3">
  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
  <div>
    <h4 className="font-bold text-green-900">Experiment Complete</h4>
    <p className="text-sm text-green-700">Your formulation analysis is ready to view.</p>
  </div>
</div>
```

**Alert Banner (Error):**
```jsx
<div className="bg-red-50 border-l-4 border-red-500 px-6 py-4 rounded-xl flex items-start gap-3">
  <XCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
  <div>
    <h4 className="font-bold text-red-900">Payment Failed</h4>
    <p className="text-sm text-red-700">Card declined. Please check your details.</p>
  </div>
</div>
```

---

### Modals

**Modal Component:**
```jsx
import { X } from 'lucide-react';

function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;
  
  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full mx-4 overflow-hidden">
        {/* Header */}
        <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between">
          <h3 className="text-xl font-bold text-gray-900">Modal Title</h3>
          <button 
            onClick={onClose}
            className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        
        {/* Body */}
        <div className="px-6 py-6 max-h-[70vh] overflow-y-auto">
          {children}
        </div>
        
        {/* Footer */}
        <div className="px-6 py-4 border-t border-gray-200 flex justify-end gap-3">
          <button className="bg-white border border-gray-200 text-gray-900 rounded-full px-6 py-2 font-bold hover:bg-gray-50">
            Cancel
          </button>
          <button className="bg-black text-white rounded-full px-6 py-2 font-bold hover:bg-gray-800">
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
}
```

---

### Loading States

**Spinner:**
```jsx
<div className="animate-spin rounded-full h-8 w-8 border-b-2 border-black"></div>
```

**Skeleton Card:**
```jsx
<div className="bg-white border border-gray-200 rounded-2xl p-6 animate-pulse">
  <div className="h-4 bg-gray-200 rounded w-3/4 mb-4"></div>
  <div className="h-4 bg-gray-200 rounded w-1/2"></div>
</div>
```

**Progress Bar:**
```jsx
<div className="w-full bg-gray-200 rounded-full h-2">
  <div className="bg-black h-2 rounded-full transition-all duration-300" style={{ width: '65%' }}></div>
</div>
```

---

## 3) LAYOUT PATTERNS

### Page Container:
```jsx
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
  {/* Page content */}
</div>
```

### 3-Column Grid:
```jsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {/* Cards */}
</div>
```

### Hero Section:
```jsx
<section className="bg-hero-bg py-24">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    <h1 className="text-5xl md:text-7xl font-medium tracking-tight text-gray-900 mb-6">
      The Marketplace for Intelligent R&D Tools
    </h1>
    <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
      Specialized AI labs for every stage of product development
    </p>
    <div className="flex items-center justify-center gap-4">
      <button className="bg-black text-white rounded-full px-8 py-4 font-bold hover:bg-gray-800 transition-all hover:scale-105">
        Explore Labs
      </button>
      <button className="bg-white border border-gray-200 text-gray-900 rounded-full px-8 py-4 font-bold hover:bg-gray-50 transition-colors">
        View Pricing
      </button>
    </div>
  </div>
</section>
```

---

## 4) BACKGROUND BLOBS (Decorative)

Add this to your component:

```jsx
<div className="relative overflow-hidden">
  {/* Content */}
  <div className="relative z-10">
    {/* Your actual content here */}
  </div>
  
  {/* Background Blobs */}
  <div className="absolute top-0 -left-4 w-72 h-72 bg-blob-purple rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
  <div className="absolute top-0 -right-4 w-72 h-72 bg-blob-pink rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
  <div className="absolute -bottom-8 left-20 w-72 h-72 bg-brand-lime rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
</div>
```

Add delay classes to CSS:
```css
.animation-delay-2000 {
  animation-delay: 2s;
}
.animation-delay-4000 {
  animation-delay: 4s;
}
```

---

## 5) ICON USAGE

```jsx
import { 
  ArrowRight, 
  Check, 
  X, 
  Menu,
  ChevronDown,
  Settings,
  User,
  Bell,
  Home,
  Grid,
  Folder
} from 'lucide-react';

// In component:
<ArrowRight className="w-5 h-5" /> // Default size
<Check className="w-4 h-4 text-green-500" /> // Small, colored
<Menu className="w-6 h-6" /> // Large
```

---

## 6) RESPONSIVE UTILITIES

### Show/Hide by Breakpoint:
```jsx
<div className="hidden md:block">
  Desktop only
</div>

<div className="block md:hidden">
  Mobile only
</div>
```

### Responsive Text:
```jsx
<h1 className="text-3xl md:text-5xl lg:text-7xl">
  Scales up on larger screens
</h1>
```

### Responsive Grid:
```jsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
  Responsive columns and gap
</div>
```

---

## 7) COMMON PAGES

### Landing Page Template:
```jsx
export default function LandingPage() {
  return (
    <>
      {/* Nav */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-gray-100 sticky top-0 z-50">
        {/* Nav content */}
      </nav>
      
      {/* Hero */}
      <section className="bg-hero-bg py-24">
        {/* Hero content */}
      </section>
      
      {/* Features */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature cards */}
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-gray-50 py-12">
        {/* Footer content */}
      </footer>
    </>
  );
}
```

### App Page Template:
```jsx
export default function AppPage() {
  return (
    <div className="flex h-screen bg-app-bg">
      {/* Sidebar */}
      <aside className="bg-white border-r border-gray-200 w-64 hidden lg:block">
        {/* Sidebar nav */}
      </aside>
      
      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Page content */}
        </div>
      </main>
      
      {/* Mobile Bottom Nav */}
      <nav className="lg:hidden fixed bottom-0 w-full bg-white border-t border-gray-200">
        {/* Bottom nav */}
      </nav>
    </div>
  );
}
```

---

## 8) ACCESSIBILITY CHECKLIST

✅ All buttons have descriptive text or aria-label  
✅ Forms have proper labels  
✅ Color contrast meets WCAG AA (4.5:1 for text)  
✅ Focus states visible (focus:ring)  
✅ Icons have text alternatives  
✅ Heading hierarchy logical (h1 → h2 → h3)  
✅ Keyboard navigation works  

---

## 9) PERFORMANCE TIPS

✅ Use `transition-colors` instead of `transition-all` when only color changes  
✅ Lazy load images with `loading="lazy"`  
✅ Use `will-change` sparingly (only for frequently animated elements)  
✅ Prefer CSS animations over JavaScript  
✅ Optimize images (WebP format, appropriate sizes)  

---

## 10) TESTING COLORS

Test your color combinations:

```jsx
// Test contrast
<div className="bg-white p-4">
  <p className="text-gray-900">✅ Good contrast (black on white)</p>
  <p className="text-gray-500">✅ Good contrast (medium gray on white)</p>
  <p className="text-gray-300">❌ Poor contrast (light gray on white)</p>
</div>

<div className="bg-labnode p-4">
  <p className="text-white">✅ Good contrast (white on deep blue)</p>
</div>
```

Use browser DevTools → Lighthouse to check accessibility scores.

---

## QUICK WINS

**Before you ship, make sure you have:**

1. ✅ Google Sans font loaded
2. ✅ Tailwind config extended with brand colors
3. ✅ All buttons use `rounded-full`
4. ✅ All cards use `rounded-2xl` or `rounded-[2rem]`
5. ✅ Inputs have focus states (`focus:border-black focus:ring-1 focus:ring-black`)
6. ✅ Icons from Lucide React (consistent style)
7. ✅ Page containers use `max-w-7xl mx-auto px-4`
8. ✅ Hover states on interactive elements
9. ✅ Loading states for async actions
10. ✅ Error states for failed actions

---

**That's it! You're ready to build on-brand Bettrlabs interfaces.**

For questions: Reference the full Brand Guidelines document.
