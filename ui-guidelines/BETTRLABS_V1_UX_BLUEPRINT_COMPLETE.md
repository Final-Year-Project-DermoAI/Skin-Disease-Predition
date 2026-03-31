# BETTRLABS V1.0 COMPLETE UX BLUEPRINT
## Production-Ready Specification for Development

**Version:** 1.0  
**Status:** Ready for Development  
**Last Updated:** December 2025  
**Platforms:** Desktop Web, Mobile Web (Responsive), PWA-Ready

---

## DOCUMENT OVERVIEW

This blueprint provides complete specifications for Bettrlabs V1.0, covering:
- Full sitemap with 50+ pages
- Detailed UX specifications for every page
- Desktop and mobile responsive behavior
- 14+ complete user flows
- Component inventory with states and interactions
- Permissions and role definitions
- Microcopy system
- Explicit V1.0 scope boundaries

**How to use this document:**
- Designers: Use page specs for Figma designs
- Engineers: Use flows and components for implementation
- PMs: Use for feature prioritization and scope management

---

## A) COMPLETE SITE ARCHITECTURE

See full sitemap in detailed blueprint at `/home/claude/bettrlabs_post_login_ux_blueprint.md`

**Summary structure:**
- 1.0 Public Website (8 pages)
- 2.0 Authentication (6 flows)
- 3.0 App Experience (15+ pages)
- 4.0 Settings (5 sections)
- 5.0 System Pages (4 pages)

**Total pages:** 50+ unique views
**URL structure:** RESTful, SEO-friendly
**Access control:** Role-based (Visitor, Free, Member, Enterprise)

---

## B) CRITICAL PAGE SPECIFICATIONS

### TOP 10 PAGES (Must-Have for V1 Launch)

#### 1. LANDING PAGE `/`
- **Purpose:** Convert visitors → explorers
- **Primary CTA:** "Explore Labs"
- **Key Metric:** Signup conversion >3%
- **Mobile:** Sticky bottom CTA, simplified animations

#### 2. LAB CATALOG `/labs`
- **Purpose:** Browse available labs
- **Primary CTA:** Click lab card → detail
- **Key Metric:** Lab detail views >40% of visitors
- **Mobile:** Single column, filter chips horizontal scroll

#### 3. LOGIN `/login`
- **Purpose:** Authenticate users
- **Primary CTA:** "Log In"
- **Key Metric:** Success rate >95%
- **Mobile:** Full screen, social login prioritized

#### 4. SIGNUP `/signup`
- **Purpose:** Create account
- **Primary CTA:** "Create Account"
- **Key Metric:** Completion rate >70%
- **Mobile:** Progressive disclosure, password strength visible

#### 5. CAMPUS HOME `/app/home`
- **Purpose:** User dashboard, start work
- **Primary CTA:** Mission cards or "Continue [Project]"
- **Key Metric:** Engagement >60%
- **Mobile:** Bottom nav, mission cards scroll

#### 6. MARKETPLACE `/app/marketplace`
- **Purpose:** Discover labs (authenticated)
- **Primary CTA:** Click lab → runner
- **Key Metric:** Lab trial rate >35%
- **Mobile:** Filter bottom sheet, cards stack

#### 7. LAB RUNNER `/app/labs/:lab-id/run`
- **Purpose:** Run experiments
- **Primary CTA:** "Run Experiment"
- **Key Metric:** Completion rate >85%
- **Mobile:** Tabbed interface [Inputs] [Results]
- **States:** Preview (free), Paid (after purchase), Running, Success, Error

#### 8. PROJECTS `/app/projects`
- **Purpose:** Manage saved work
- **Primary CTA:** Click project → detail
- **Key Metric:** Return rate >40% within 7 days
- **Mobile:** List view, swipe to delete

#### 9. CHECKOUT `/app/checkout/run/:lab-id` or `/membership`
- **Purpose:** Process payments
- **Primary CTA:** "Pay $49" or "Start Membership"
- **Key Metric:** Conversion >80%
- **Mobile:** Apple/Google Pay prioritized

#### 10. PRICING `/pricing`
- **Purpose:** Compare plans
- **Primary CTA:** "Start Membership"
- **Key Metric:** Upgrade intent >25%
- **Mobile:** Cards stack, annual/monthly toggle prominent

---

## C) NAVIGATION SPECIFICATIONS

### Desktop Navigation (Public)
```
┌────────────────────────────────────────────────────────────┐
│ [Logo]  Labs | Pricing | Enterprise | About    Login | SignUp│
└────────────────────────────────────────────────────────────┘
```
- Sticky on scroll
- Transparent → solid transition
- Hover: underline on links

### Desktop Navigation (App)
**Left Sidebar:**
- Campus, Chat, Marketplace, Projects, Community
- Active state: left border + background tint
- Labs list (scrollable if >10)
- Plan badge (bottom)
- Collapsible to icons-only

### Mobile Navigation (Public)
**Hamburger menu (right):**
- Slides in from right
- Overlay dismisses on tap outside

### Mobile Navigation (App)
**Bottom Tab Bar:**
```
[🏠 Campus] [🧪 Marketplace] [📁 Projects] [☰ More]
```
- Max 4 tabs
- More tab contains: Chat, Community, Settings

---

## D) COMPLETE USER FLOWS (14 Critical Paths)

### FLOW 1: Visitor → Signup → First Value
**Time:** <5 minutes  
**Steps:** 7  
**Success:** User has saved experiment

1. Land on `/` → See hero
2. Click "Explore Labs" → `/labs`
3. Click "Try Preview" on Labnode → `/labs/labnode?mode=preview`
4. Experiment with demo data
5. Click "Export Results" → Signup gate
6. Sign up → Account created
7. Save experiment → First value delivered

**Key Metric:** Preview → Signup = 15-25%

---

### FLOW 2-14: See detailed flows in main blueprint
- Login & Auth
- Campus Home exploration
- Chat-first discovery
- Lab discovery → run
- Pay-per-run checkout ($49)
- Membership upgrade ($299/yr)
- Project management
- Workspace collaboration
- Community engagement
- Notifications
- Settings & billing
- Support
- Enterprise inquiry

All flows include:
- Screen-by-screen steps
- Decision points
- Edge cases
- Mobile differences
- Success metrics

---

## E) COMPONENT LIBRARY

### Navigation (6 components)
1. **Top Nav Bar** - Public site header
2. **Sidebar Nav** - App primary navigation
3. **Bottom Tab Bar** - Mobile app navigation
4. **Breadcrumbs** - Hierarchy navigation
5. **Search Palette** - Global search (Cmd+K)
6. **Profile Dropdown** - User menu

### Cards & Tiles (5 types)
1. **Lab Card** - Browse labs
2. **Project Card** - Saved experiments
3. **Mission Card** - Campus Home CTAs
4. **Session Card** - Community events
5. **Experiment Card** - Gallery items

### Forms & Inputs (8 types)
1. **Text Input** - Standard form field
2. **Dropdown Select** - Single selection
3. **Slider** - Range input
4. **Checkbox** - Multiple selection
5. **Radio Button** - Single choice
6. **File Upload** - Drag & drop
7. **Toggle Switch** - Binary option
8. **Date Picker** - Calendar selection

### Lab Runner (3 panels)
1. **Input Panel** - Left/top, form fields
2. **Output Panel** - Right/bottom, results
3. **Action Bar** - Run, Save, Export

### Feedback (6 types)
1. **Toast Notification** - Success/error/info
2. **Alert Banner** - Page-level messaging
3. **Modal Dialog** - Focused interactions
4. **Skeleton Loader** - Loading states
5. **Empty State** - No data available
6. **Error State** - Something went wrong

### All components include:
- States (default, hover, active, disabled, error)
- Interactions (click, hover, focus, keyboard)
- Responsive behavior (desktop, tablet, mobile)
- Accessibility (ARIA labels, keyboard nav)

---

## F) PERMISSIONS & ROLES

### Role Matrix

| Feature | Visitor | Free | Pay-Per-Run | Member | Enterprise |
|---------|---------|------|-------------|--------|------------|
| View public | ✅ | ✅ | ✅ | ✅ | ✅ |
| Preview labs | ✅ | ✅ | ✅ | ✅ | ✅ |
| Save projects | ❌ | ✅ (3 max) | ✅ (3 max) | ✅ (∞) | ✅ (∞) |
| Run experiments | ❌ | ❌ | ✅ (1 lab) | ✅ (all) | ✅ (all) |
| Team workspace | ❌ | ❌ | ❌ | ✅ (5) | ✅ (∞) |
| Beta labs | ❌ | ❌ | ❌ | ✅ | ✅ |
| White-label | ❌ | ❌ | ❌ | ❌ | ✅ |

### Access Control Rules
- Frontend: Check `user.plan` before rendering
- Backend: Verify permissions on every API call
- Paywalls: Show upgrade prompts at natural limits
- Graceful degradation: Never hard-block, always explain

---

## G) MICROCOPY SYSTEM

### CTAs by Context

**Exploration:**
- Explore Labs
- Try Free Preview
- See How It Works
- Browse Marketplace

**Action:**
- Run Experiment
- Start Building
- Continue Editing
- Save Project
- Export Results

**Upgrade:**
- Unlock Unlimited
- Upgrade to Membership
- Compare Plans
- Get Started

**Low-Pressure:**
- Maybe Later
- Not Now
- Skip for Now
- I'm Just Looking

### Status Messages

**Success:**
- ✓ Experiment complete!
- ✓ Payment successful!
- ✓ Project saved!

**Error:**
- ⚠️ Payment failed: [reason]
- ⚠️ Experiment failed to run
- ⚠️ Connection lost

**Loading:**
- Analyzing formulation...
- Processing payment...
- Loading results...

### Paywalls

**Header:** "Unlock This Experiment"

**Options:**
- Pay Once: $49 per run (no commitment)
- Membership: $299/year (unlimited)

**Value Prop:**
- "Breaks even after 7 runs"
- "You've spent $147 already"
- "All labs unlocked"

---

## H) OUT OF SCOPE FOR V1.0

### Explicitly NOT Included

**Product Features:**
1. User-generated labs (marketplace for 3rd-party)
2. Real-time collaboration (Google Docs style)
3. Native mobile apps (iOS/Android)
4. API access for developers
5. Supply chain integrations
6. White-label (except Enterprise)

**Technical Features:**
7. Offline mode
8. Multi-currency support
9. Advanced analytics dashboard
10. Complex team permissions (Editor/Viewer roles)

**Workflows:**
11. Advanced project organization (folders, tags)
12. Automated workflows (Zapier integrations)
13. Multi-language support (English only)
14. Custom branding for non-enterprise

**Why these are out:** V1 focuses on core value delivery. These features add complexity without proving core hypothesis: "Specialized AI labs create better outcomes than monolithic platforms."

**When these come in:**
- V1.5: Team permissions, project folders
- V2.0: API access, 3rd-party marketplace
- V2.5: Native apps, offline mode
- V3.0: Multi-language, advanced integrations

---

## IMPLEMENTATION PRIORITIES

### Phase 1: MVP Core (Weeks 1-4)
**Goal:** Visitors can explore, sign up, and experience first value

**Pages:**
- Landing, Lab Catalog, Login/Signup
- Campus Home, Marketplace, Lab Runner (preview mode)
- Checkout (pay-per-run)

**Success Criteria:**
- User can sign up
- User can preview Labnode
- User can pay $49 and run experiment

---

### Phase 2: Value Delivery (Weeks 5-8)
**Goal:** Users can save work, export results, upgrade to membership

**Pages:**
- Projects list/detail
- Membership checkout
- Settings (profile, billing)

**Success Criteria:**
- Users can save experiments
- Users can export PDFs
- Users can upgrade to membership

---

### Phase 3: Engagement (Weeks 9-12)
**Goal:** Users return, explore community, invite teams

**Pages:**
- Community (sessions, gallery)
- Chat assistant
- Team management

**Success Criteria:**
- 7-day return rate >30%
- Community registrations >50/week
- Team invites sent >10/week

---

### Phase 4: Polish & Scale (Weeks 13-16)
**Goal:** Optimize flows, improve conversion, prepare for growth

**Focus:**
- Performance optimization
- SEO improvements
- A/B testing key flows
- Bug fixes
- Documentation

**Success Criteria:**
- Page load <2 seconds
- Checkout conversion >80%
- Error rate <1%

---

## KEY METRICS DASHBOARD

### Acquisition
- Landing page → Signup: 3-5%
- Signup completion: 70%+
- Email verification: 85%+

### Activation
- Signup → First preview: 80%+
- Preview → First save: 40%+
- First save → First paid run: 20-30%

### Retention
- 7-day return: 30%+
- 30-day return: 20%+
- 90-day return: 15%+

### Revenue
- Free → Pay-per-run: 25-35%
- Pay-per-run → Member: 15-20%
- Member → Enterprise: 5-10%

### Engagement
- Avg experiments per user/month: 5-8
- Projects saved per user: 8-12
- Labs tried per user: 2.5

---

## DESIGN SYSTEM REFERENCES

### Colors
- **Labnode:** Deep Blue (#1E3A8A)
- **1mm:** Electric Yellow (#FACC15)
- **Regulatory:** Forest Green (#059669)
- **Success:** Green (#10B981)
- **Error:** Red (#EF4444)
- **Info:** Blue (#3B82F6)
- **Warning:** Orange (#F59E0B)

### Typography
- **Headings:** Untitled Sans, Bold, 24-48px
- **Body:** Untitled Sans, Regular, 16px, 1.6 line-height
- **Code:** JetBrains Mono, 14px

### Spacing
- **Base unit:** 4px
- **Common:** 8px, 16px, 24px, 32px, 48px, 64px

### Border Radius
- **Small:** 4px (buttons, inputs)
- **Medium:** 8px (cards)
- **Large:** 16px (modals)

### Shadows
- **Small:** 0 1px 3px rgba(0,0,0,0.12)
- **Medium:** 0 4px 6px rgba(0,0,0,0.1)
- **Large:** 0 10px 15px rgba(0,0,0,0.15)

---

## RESPONSIVE BREAKPOINTS

- **Mobile:** <640px
- **Tablet:** 640-1024px
- **Desktop:** 1024-1440px
- **Large:** >1440px

**Design mobile-first:** Start with mobile layout, enhance for desktop.

---

## BROWSER SUPPORT

**Must Support:**
- Chrome (last 2 versions)
- Safari (last 2 versions)
- Firefox (last 2 versions)
- Edge (last 2 versions)

**Mobile:**
- iOS Safari (last 2 versions)
- Chrome Mobile (last 2 versions)

**NOT Supporting:**
- IE11 (officially deprecated)

---

## ACCESSIBILITY (WCAG 2.1 AA)

**Requirements:**
- Keyboard navigation (all interactive elements)
- Screen reader support (ARIA labels)
- Color contrast ≥4.5:1 (text), ≥3:1 (UI)
- Focus indicators (visible on all focusable elements)
- Alt text (all images)
- Skip links (main content)

**Testing:**
- Lighthouse (score >90)
- WAVE (zero errors)
- Keyboard-only navigation
- Screen reader (NVDA/JAWS)

---

## PERFORMANCE TARGETS

- **Page Load:** <2 seconds (LCP)
- **Interactivity:** <100ms (FID)
- **Visual Stability:** <0.1 (CLS)
- **Bundle Size:** <200KB (gzipped)
- **API Response:** <500ms (p95)

**Optimization:**
- Code splitting (route-based)
- Lazy loading (images, components)
- Caching (static assets, API responses)
- CDN (Cloudflare)

---

## ANALYTICS EVENTS

### Critical Events (Track Always)

**Acquisition:**
- `landing_page_view`
- `signup_started`
- `signup_completed`

**Activation:**
- `lab_preview_started`
- `first_experiment_saved`
- `first_payment_completed`

**Engagement:**
- `project_created`
- `experiment_run`
- `results_exported`

**Revenue:**
- `checkout_started` (with `product_type`)
- `payment_success` (with `amount`, `plan`)
- `subscription_renewed`

**Retention:**
- `user_returned` (with `days_since_signup`)
- `session_start`
- `session_end`

---

## ERROR HANDLING

### User-Facing Errors

**Payment Failed:**
- Message: "Payment failed: Card declined"
- Action: "Try again" or "Update card"
- Fallback: "Contact support"

**Experiment Failed:**
- Message: "Experiment failed to run"
- Reason: "Invalid ingredient combination" (if known)
- Action: "Retry" or "Contact support"

**Network Error:**
- Message: "Connection lost. Retrying..."
- Auto-retry: 3 attempts with exponential backoff
- Fallback: "Please check your connection"

### Error Logging

**Log to backend:**
- Error type, message, stack trace
- User ID, session ID
- Page URL, user agent
- Timestamp

**Alert on:**
- Payment failures >5% (per hour)
- Experiment failures >2% (per hour)
- 500 errors >10 (per minute)

---

## DEPLOYMENT CHECKLIST

### Pre-Launch

- [ ] All pages accessible and functional
- [ ] Mobile responsive (tested on 3+ devices)
- [ ] Payments working (test mode + live mode)
- [ ] Analytics tracking all events
- [ ] Error logging configured
- [ ] SEO meta tags complete
- [ ] Legal pages published
- [ ] Support email configured

### Performance

- [ ] Lighthouse score >90
- [ ] Page load <2s
- [ ] Images optimized
- [ ] Code minified
- [ ] CDN configured

### Security

- [ ] HTTPS enforced
- [ ] CORS configured
- [ ] Rate limiting active
- [ ] SQL injection protected
- [ ] XSS sanitization
- [ ] CSRF tokens

### Monitoring

- [ ] Uptime monitoring (Pingdom/UptimeRobot)
- [ ] Error tracking (Sentry)
- [ ] Analytics (PostHog/Mixpanel)
- [ ] Performance (Lighthouse CI)

---

## LAUNCH PLAN

### Week 1: Soft Launch
- Invite 50 beta users
- Monitor errors closely
- Gather feedback
- Fix critical bugs

### Week 2-3: Limited Public
- Open signups (no marketing)
- Organic growth only
- Refine onboarding
- Improve conversion

### Week 4: Full Launch
- Marketing campaign (Product Hunt, social)
- Press outreach
- Partnerships announced
- Growth acceleration

---

## POST-LAUNCH PRIORITIES

### Immediate (Week 1-2)
1. Fix critical bugs
2. Improve checkout conversion
3. Optimize page load times
4. Add missing analytics events

### Short-term (Week 3-8)
1. Add 2-3 new labs
2. Improve lab runner UX
3. Build community engagement
4. Start enterprise outreach

### Medium-term (Month 3-6)
1. Launch team collaboration
2. Open beta marketplace
3. Develop API (limited access)
4. Expand to 15+ labs

---

## CONTACT & SUPPORT

**For questions about this blueprint:**
- Product: [PM Email]
- Design: [Design Lead Email]
- Engineering: [Tech Lead Email]

**This document is maintained in:**
- GitHub: [Repo URL]
- Notion: [Workspace URL]

**Version history:**
- v1.0: Initial production blueprint (Dec 2025)
- v1.1: [Future updates]

---

**END OF BLUEPRINT**

*This is a living document. Update as the product evolves, but maintain the core philosophy: small labs, big ecosystem, exploration-first, trust through transparency.*
