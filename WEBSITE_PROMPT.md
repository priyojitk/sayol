# Website Creation Prompt

Create a modern, professional nonprofit/NGO website using Next.js with the following specifications:

## Tech Stack Requirements

- **Framework**: Next.js 16+ with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Dark Mode**: next-themes (v0.4.6) with selector-based dark mode
- **Additional Packages**: 
  - tailwindcss-animate
  - lucide-react (for icons)
  - clsx and tailwind-merge (for className utilities)

## Project Structure

```
app/
  layout.tsx          # Root layout with ThemeProvider
  page.tsx            # Homepage
  globals.css         # Global styles with Tailwind v4 configuration
  components/
    Header.tsx        # Sticky header with navigation
    Footer.tsx        # Footer with links and social media
    SiteLayout.tsx    # Wrapper layout component
    ThemeProvider.tsx # Client component wrapper for next-themes
    ThemeSwitcher.tsx # Dark/light mode toggle button
```

## Design System

### Color Palette
- **Primary**: Blue (#2563eb / blue-600) and Green (#16a34a / green-600)
- **Background**: White (light) / Slate-950 (dark)
- **Text**: Slate-900 (light) / Slate-100 (dark)
- **Accents**: Blue-600, Green-600 with gradient combinations

### Typography
- Use system fonts with proper font-weight hierarchy
- Headings: Bold, large sizes (text-3xl to text-7xl)
- Body: Regular weight, readable sizes (text-sm to text-lg)

### Layout
- Use `container` class with `mx-auto` for centered content
- Consistent padding: `px-6` for horizontal, `py-4` to `py-32` for vertical
- Responsive breakpoints: sm, md, lg

## Component Specifications

### 1. Root Layout (`app/layout.tsx`)
- Server component (no "use client")
- Wrap children with ThemeProvider
- Configure ThemeProvider with:
  - `attribute="class"`
  - `defaultTheme="system"`
  - `enableSystem`
  - `disableTransitionOnChange`
- Add `suppressHydrationWarning` to `<html>` tag

### 2. SiteLayout Component
- Wrapper that includes Header and Footer
- Flexbox layout: `min-h-screen flex flex-col`
- Background: `bg-white dark:bg-slate-950`
- Main content area: `flex-1 w-full`

### 3. Header Component
- **Styling**:
  - Sticky positioning: `sticky top-0 z-50`
  - Glassmorphism effect: `bg-white/80 dark:bg-slate-950/80 backdrop-blur-md`
  - Border: `border-b border-slate-200 dark:border-slate-800`
  - Shadow: `shadow-sm`
- **Logo**: Gradient square icon (blue-600 to green-600) + text
- **Navigation**:
  - Responsive mobile menu (hamburger icon)
  - Links: Home, Mission, Events, Contact
  - Hover effects: `hover:text-blue-600 dark:hover:text-blue-400`
- **Actions**:
  - Theme switcher button
  - Donate CTA button (blue-600 background)
- **Mobile**: Collapsible menu with theme switcher and donate button inside

### 4. Footer Component
- **Styling**: `bg-slate-900 dark:bg-slate-950`
- **Layout**: 4-column grid on desktop, stacked on mobile
- **Sections**:
  1. Brand: Logo + tagline
  2. Organization: About, Mission, Programs, Reports
  3. Get Involved: Donate, Volunteer, Events, Gallery
  4. Legal: Privacy Policy, Terms, Contact
- **Bottom Section**:
  - Copyright notice with dynamic year
  - Social media icons (Facebook, Twitter, LinkedIn, Instagram)
  - Styled with `text-slate-400 hover:text-blue-400`

### 5. ThemeSwitcher Component
- Client component with `useTheme` hook
- Handle mounting state to prevent hydration errors
- Show placeholder div before mounting
- Toggle between sun/moon icons based on current theme
- Button styling: `p-2 rounded-lg bg-gray-100 dark:bg-slate-800`

### 6. Homepage Sections

#### Hero Section
- **Background**: Gradient `from-blue-50 via-white to-green-50` (light) / `from-slate-900 via-slate-950 to-slate-900` (dark)
- **Pattern**: Subtle grid pattern overlay
- **Content**:
  - Large heading with gradient text effect on second line
  - Subheading paragraph
  - Two CTAs: Primary button (blue-600) and secondary link
- **Spacing**: `py-20 md:py-32`

#### Stats Section
- **Background**: `bg-white dark:bg-slate-950`
- **Layout**: 4-column grid (responsive: 1 col mobile, 2 tablet, 4 desktop)
- **Content**: Large numbers with labels
- **Colors**: Alternating blue-600 and green-600 for numbers

#### Programs Section
- **Background**: `bg-slate-50 dark:bg-slate-900`
- **Layout**: 3-column grid of cards
- **Card Design**:
  - Rounded corners: `rounded-xl`
  - Background: `bg-white dark:bg-slate-800`
  - Shadow: `shadow-sm ring-1` with hover effect
  - Icon in colored circle (blue-100/green-100)
  - Title and description
- **Programs**: Education, Healthcare, Social Welfare

#### CTA Section
- **Background**: Gradient `from-blue-600 to-green-600`
- **Content**: Heading, description, two action buttons
- **Buttons**: White button with blue text, and text link

## Styling Guidelines

### Dark Mode
- Use `dark:` prefix for all dark mode styles
- Ensure all text, backgrounds, and borders have dark mode variants
- Test contrast ratios for accessibility

### Responsive Design
- Mobile-first approach
- Breakpoints: `sm:`, `md:`, `lg:`
- Navigation collapses to hamburger menu on mobile
- Grid layouts adapt: 1 col → 2 col → 3-4 col

### Animations & Transitions
- Use `transition-colors` for hover effects
- Smooth color transitions on theme changes
- Hover effects on cards: `hover:shadow-md`

### Container Usage
- Use `container mx-auto px-6` for all content sections
- Container automatically handles max-width and centering

## Tailwind Configuration

```javascript
// tailwind.config.js
module.exports = {
  darkMode: 'selector',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

## Key Features to Implement

1. **Dark Mode Toggle**: Fully functional with system preference detection
2. **Responsive Navigation**: Mobile hamburger menu
3. **Smooth Transitions**: All interactive elements have hover states
4. **Accessibility**: Proper ARIA labels, semantic HTML, keyboard navigation
5. **Performance**: Server components where possible, client components only when needed
6. **Type Safety**: Full TypeScript implementation with proper types

## Content Structure

The website should feel professional and trustworthy, suitable for a nonprofit organization. Use:
- Clear, impactful messaging
- Social proof (stats, numbers)
- Clear calls-to-action
- Easy navigation
- Professional imagery placeholders (can use gradients/icons)

## Additional Notes

- All components should be properly typed with TypeScript
- Use Next.js Link component for internal navigation
- Ensure no hydration errors (handle client-only state properly)
- Use semantic HTML5 elements
- Implement proper error boundaries if needed
- Follow Next.js 16 App Router best practices

---

This prompt should result in a modern, professional website with dark mode support, responsive design, and a clean, trustworthy aesthetic perfect for a nonprofit organization.
