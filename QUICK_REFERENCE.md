# Quick Reference & Code Examples

## Using the Centralized Configuration

### Example 1: Adding New Section Navigation
```tsx
// In src/config/wedding.ts - add to sections array
export const WEDDING_CONFIG = {
  // ...
  sections: [
    { id: "about", label: "Home", labelDE: "Home" },
    // Add new section here:
    { id: "photos", label: "Photo Gallery", labelDE: "Fotogalerie" },
  ],
};

// Automatically updates Navbar without any component changes!
```

### Example 2: Updating Wedding Date
```tsx
// Single change in config - updates everywhere (hero, countdown, metadata)
export const WEDDING_CONFIG = {
  weddingDate: new Date("2026-06-06T15:00:00+02:00"),  // Change here
  weddingDateISO: "2026-06-06",
  // ... countdown component uses this automatically
};
```

### Example 3: Getting Dynamic Map URL
```tsx
import { getMapEmbedURL, WEDDING_CONFIG } from "@/config/wedding";

export default function Destination() {
  const mapURL = getMapEmbedURL(WEDDING_CONFIG.location);
  
  return (
    <iframe src={mapURL} title="Wedding location" />
  );
}
```

---

## Design System Usage

### Color Usage
```tsx
// Button with primary accent color
<button className="btn btn-wedding">Register</button>
// Uses: --color-rose (#c97a8a)

// Neutral text
<p className="section-subtitle">Details here</p>
// Uses: --text-secondary (lighter taupe)

// Card borders
<div className="card">Content</div>
// Uses: border-left with --accent-primary
```

### Spacing System
```tsx
// Before (scattered values)
<div style={{ marginBottom: '40px', padding: '20px 24px' }}>

// After (using tokens)
<div className={styles.container}>
  {/* In CSS module: */}
  /* margin-bottom: var(--spacing-xl); 
     padding: var(--spacing-lg);
  */}
</div>
```

### Card Component Pattern
```tsx
// All cards now use consistent styling
<div className="card">
  <h3>Title</h3>
  <p>Content</p>
</div>

/* CSS Results:
  - border-left: 4px solid var(--accent-primary)
  - padding: var(--spacing-lg)
  - box-shadow: var(--shadow-md)
  - border-radius: var(--radius-lg)
*/
```

---

## Form & Accessibility Examples

### Before: Inaccessible Form
```tsx
<label className={styles.label}>Email</label>
<input type="email" name="email" />
// Issues: No htmlFor, not connected, no id
```

### After: Accessible Form
```tsx
<label htmlFor="email" className={styles.label}>
  Email Address
</label>
<input
  id="email"
  type="email"
  name="email"
  className={`form-control ${styles.input}`}
  placeholder="melanie@example.com"
/>
// Keyboard accessible, screen reader friendly
```

### Radio Button Pattern
```tsx
// Before: Unclear grouping
<input type="radio" name="attendance" value="both" />
<input type="radio" name="attendance" value="aperitif" />

// After: Proper semantic structure
<fieldset>
  <legend>Will you be joining us?</legend>
  <label htmlFor="both">
    <input id="both" type="radio" name="attendance" value="both" />
    I'll attend both events
  </label>
  <label htmlFor="aperitif">
    <input id="aperitif" type="radio" name="attendance" value="aperitif" />
    I'll attend aperitif only
  </label>
</fieldset>
```

---

## CSS Variable Reference

### Quick Copy-Paste for New Sections

```css
/* Card styling template */
.card {
  background: var(--bg-alt);
  border-radius: var(--radius-lg);
  padding: var(--spacing-lg);
  box-shadow: var(--shadow-md);
  border-left: 4px solid var(--accent-primary);
}

/* Section title template */
.title {
  font-family: var(--font-serif);
  font-size: var(--font-size-2xl);
  text-align: center;
  margin-bottom: var(--spacing-xl);
  color: var(--text-primary);
}

/* Hover effect for interactive elements */
.element {
  transition: transform var(--transition-base), box-shadow var(--transition-base);
}

.element:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-lg);
}

/* Focus state for keyboard navigation */
.element:focus-visible {
  outline: 2px solid var(--accent-primary);
  outline-offset: 2px;
}
```

---

## Common Tasks & Solutions

### Task: Add a New Section
```
1. Create new file: src/app/sections/NewSection.tsx
2. Create styles: src/app/sections/NewSection.module.css
3. Add to config: sections array in src/config/wedding.ts
4. Import in page.tsx: import NewSection from "./sections/NewSection"
5. Add to HomePage JSX: <NewSection />
```

### Task: Update Contact Email
```tsx
// src/config/wedding.ts
export const WEDDING_CONFIG = {
  contactEmail: "new-email@example.com",  // Change here
};

// Automatically updates RSVP form:
<a href={`mailto:${WEDDING_CONFIG.contactEmail}`}>
```

### Task: Change Wedding Date
```tsx
// src/config/wedding.ts
weddingDate: new Date("2026-07-15T15:00:00+02:00"),  // New date
weddingDateISO: "2026-07-15",

// Automatically updates:
// - Countdown component
// - About section display
// - All metadata
```

### Task: Add Form Submission Endpoint
```tsx
// In RSVP.tsx handleSubmit function:
const response = await fetch('/api/rsvp', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(data),
});

if (response.ok) {
  setSubmitted(true);
}
```

### Task: Add Image Optimization
```tsx
// Before
<img src="/images/hero-wedding.jpg" />

// After with Next/Image
import Image from "next/image";

<Image
  src="/images/hero-wedding.jpg"
  alt="Melanie and Cyril wedding in Mallorca"
  width={1920}
  height={1080}
  priority
/>
```

---

## Performance Optimization Checklist

### Images
```tsx
// Configure Next.js image optimization in next.config.ts:
const nextConfig: NextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    sizes: [640, 750, 828, 1080, 1200, 1920],
  },
};
```

### Fonts
```css
/* In globals.css - preload serif font for faster loading */
@import url('https://fonts.googleapis.com/css2?family=Georgia&display=swap');

/* Or self-hosted for better performance */
@font-face {
  font-family: 'Georgia';
  src: url('/fonts/georgia.woff2') format('woff2');
  font-weight: normal;
}
```

### CSS
```tsx
// Bootstrap is already optimized with CSS Modules
// Minimal CSS is sent per page due to scoping
// No global CSS pollution
```

---

## Testing & Validation

### Browser Compatibility
- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Android)

### Accessibility Testing
```bash
# Install axe accessibility checker
npm install --save-dev @axe-core/react

# Run accessibility audit during development
# Use axe DevTools browser extension for quick checks
```

### Performance Testing
```bash
# Next.js built-in performance optimization
npm run build

# Check bundle size
# Vercel Analytics integration recommended
```

---

## Environment Variables

### Required for Production
```
# .env.local
NEXT_PUBLIC_BASE_URL=https://your-domain.com
```

### Optional for Features
```
# Form submission service (when implemented)
NEXT_PUBLIC_FORM_API_URL=https://api.example.com/rsvp

# Analytics
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Email service
EMAIL_SERVICE_KEY=your-key-here
```

---

## Troubleshooting

### Issue: Hydration Mismatch
**Cause**: Client and server render different HTML
**Solution**: Use `mounted` state guard like in Countdown component
```tsx
const [mounted, setMounted] = useState(false);
useEffect(() => setMounted(true), []);
if (!mounted) return <Skeleton />;
return <RealContent />;
```

### Issue: Form Not Submitting
**Cause**: No API endpoint configured
**Solution**: 
1. Create API route in `src/app/api/rsvp/route.ts`
2. Update handleSubmit in RSVP.tsx
3. Test form submission

### Issue: Colors Look Different on Mobile
**Cause**: Browser theme color not set
**Solution**: Already fixed in viewport configuration
```tsx
themeColor: "#f5e9da",  // Safari reader mode background
```

### Issue: Navbar Links Not Closing Menu
**Cause**: Mobile menu doesn't auto-close
**Solution**: Already fixed with data-bs-toggle attribute
```tsx
data-bs-toggle="collapse"
data-bs-target="#weddingNavbar"
```

---

## CSS Variables Quick Lookup

| Variable | Value | Use Case |
|----------|-------|----------|
| `--color-sand` | #f5e9da | Main background |
| `--color-white` | #ffffff | Cards, contrast |
| `--color-taupe` | #6b5e55 | Primary text |
| `--color-blush` | #f7dde2 | Soft backgrounds |
| `--color-rose` | #c97a8a | Buttons, accents |
| `--color-gold` | #e7cba9 | Warm accents |
| `--spacing-xs` | 8px | Small gaps |
| `--spacing-md` | 16px | Standard spacing |
| `--spacing-lg` | 24px | Card padding |
| `--spacing-xl` | 40px | Section margin |
| `--spacing-xxl` | 80px | Section padding |
| `--radius-sm` | 12px | Form inputs |
| `--radius-lg` | 18px | Main cards |
| `--radius-full` | 30px | Buttons |
| `--shadow-md` | 0 8px 18px... | Standard shadow |
| `--shadow-lg` | 0 12px 28px... | Emphasis shadow |

---

## Git Commit Template (Optional)

```
feat: Add centralized wedding configuration
- Create src/config/wedding.ts with unified data structure
- Update components to use WEDDING_CONFIG
- Improve maintainability and DRY principles

refactor: Standardize design tokens and CSS variables
- Introduce comprehensive spacing, color, and typography system
- Unify border-radius, shadows across all sections
- Update all CSS modules for consistency

fix: Resolve countdown hydration mismatch
- Implement mounted state guard pattern
- Precompute initial countdown value
- Prevent layout shift on initial render

a11y: Enhance form accessibility
- Add htmlFor attributes to all form labels
- Implement fieldset for radio button groups
- Add unique IDs to form inputs
- Improve ARIA attributes
```

---

## Production Deployment Guide

### Pre-Deployment Checklist
- [ ] `npm run lint` passes
- [ ] `npm run build` succeeds
- [ ] All environment variables set
- [ ] Form submission endpoint ready
- [ ] Hero image optimized
- [ ] SSL certificate active

### Vercel Deployment (Recommended)
```bash
# Push to GitHub
git push origin main

# Vercel automatically deploys
# Check deployment status in Vercel dashboard
```

### Custom Domain Setup
1. Add domain in Vercel project settings
2. Update DNS records with Vercel nameservers
3. Wait for DNS propagation (up to 48 hours)
4. SSL automatically provisioned

### Post-Deployment Verification
1. Visit site on desktop and mobile
2. Test form submission
3. Check analytics tracking
4. Verify Open Graph preview on social media
5. Run accessibility audit
6. Check Core Web Vitals

---

## Support & Next Steps

### For Maintenance
- Keep wedding configuration updated
- Monitor form submissions
- Track Core Web Vitals
- Update content as needed

### For Enhancement
- Add guest photo gallery
- Implement wedding registry links
- Add accommodation recommendations
- Create post-wedding thank you page

### For Internationalization (Future)
- Current structure supports i18n
- Config has both English and German labels
- Ready for `next-i18n-router` integration
