# Quick Website Creation Prompt

Create a modern nonprofit website with Next.js 16 (App Router), TypeScript, Tailwind CSS v4, and next-themes for dark mode.

## Requirements:

**Tech Stack:**
- Next.js 16+ App Router
- TypeScript
- Tailwind CSS v4 with `darkMode: 'selector'`
- next-themes v0.4.6
- tailwindcss-animate

**Components Needed:**
1. **Header**: Sticky, glassmorphism effect (`bg-white/80 backdrop-blur-md`), responsive mobile menu, logo with gradient icon, navigation links (Home, Mission, Events, Contact), theme switcher, and Donate CTA button
2. **Footer**: Dark background (`bg-slate-900`), 4-column grid with brand, organization links, get involved section, legal links, social media icons, copyright
3. **ThemeSwitcher**: Client component with sun/moon icons, handles hydration properly
4. **SiteLayout**: Wraps Header, main content, and Footer
5. **Homepage Sections**:
   - **Hero**: Gradient background, large heading with gradient text, CTAs
   - **Stats**: 4-column grid with large numbers (10K+, 500+, 50+, 25+)
   - **Programs**: 3 cards (Education, Healthcare, Social Welfare) with icons
   - **CTA**: Gradient background with donation/volunteer buttons

**Design:**
- Color scheme: Blue (#2563eb) and Green (#16a34a) gradients
- Use `container mx-auto px-6` for all content
- Full dark mode support with `dark:` variants
- Responsive: mobile-first, hamburger menu on mobile
- Smooth transitions and hover effects
- Professional, trustworthy aesthetic

**Key Features:**
- Dark/light mode toggle with system preference
- No hydration errors
- Fully responsive
- Accessible (ARIA labels, semantic HTML)
- TypeScript throughout

**File Structure:**
```
app/
  layout.tsx (server component, ThemeProvider wrapper)
  page.tsx (homepage with all sections)
  globals.css (Tailwind v4 config)
  components/
    Header.tsx
    Footer.tsx
    SiteLayout.tsx
    ThemeProvider.tsx
    ThemeSwitcher.tsx
```

Use server components by default, client components only when needed (useTheme, useState). Ensure ThemeProvider wraps everything with `attribute="class"`, `defaultTheme="system"`, `enableSystem`.
