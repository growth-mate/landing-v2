# GrowthMate Landing Page

A modern, responsive landing page for GrowthMate built with Next.js 15, TypeScript, and Tailwind CSS. This project showcases AI-powered Web3 targeting solutions with interactive demos, partner showcases, and comprehensive business solutions.

## 🏗️ Project Structure

\`\`\`
growthmate-landing/
├── app/                          # Next.js App Router
│   ├── ecosystem/               # Ecosystem showcase page
│   │   └── page.tsx            # Partners and supported chains
│   ├── globals.css             # Global styles and Tailwind imports
│   ├── layout.tsx              # Root layout with metadata
│   └── page.tsx                # Main landing page
├── components/
│   └── ui/                     # Reusable UI components
│       ├── button.tsx          # Button component (kept for potential use)
│       └── card.tsx            # Card component (kept for potential use)
├── hooks/                      # Custom React hooks
│   ├── use-mobile.tsx          # Mobile breakpoint detection
│   └── use-toast.ts            # Toast notification system
├── lib/
│   └── utils.ts                # Utility functions (cn for className merging)
├── public/                     # Static assets
│   ├── advertiser-preview.png  # Dashboard preview for advertisers
│   ├── publisher-preview.png   # Dashboard preview for publishers
│   ├── growthmate-wordmark.svg # Company logo (LOCKED)
│   └── scene-1.gif             # Hero section animation (LOCKED)
├── next.config.js              # Next.js configuration
├── tailwind.config.js          # Tailwind CSS configuration
├── tsconfig.json               # TypeScript configuration
└── package.json                # Dependencies and scripts
\`\`\`

## 🎨 Design System

### Colors
- **Primary**: `#c2f0c2` (Light green for CTAs and accents)
- **Dark**: `#080908` (Main dark background)
- **Light**: `#eceeec` (Light text and backgrounds)

### Typography
- **Font**: Sofia Sans (imported from Google Fonts)
- **Weights**: 400 (regular), 600 (semibold), 700 (bold)
- **Variable weight range**: 1-1000 with italic support

### Responsive Design
- Mobile-first approach using Tailwind's responsive prefixes
- Breakpoints: `sm:` (640px), `md:` (768px), `lg:` (1024px), `xl:` (1280px)
- Custom mobile hook available at `hooks/use-mobile.tsx`

## 📱 Key Components

### Main Landing Page (`app/page.tsx`)
- **Hero Section**: Main value proposition with animated GIF
- **Partner Marquee**: Auto-scrolling logo banner
- **Live Demo Section**: Interactive iframes with explore buttons
- **Solutions Section**: Advertiser and publisher dashboards
- **Contact Section**: Cal.com integration placeholder
- **Footer**: Social links and resources

### Ecosystem Page (`app/ecosystem/page.tsx`)
- **Supported Chains**: Grid of blockchain networks
- **Partners**: Advertisers and publishers showcase
- **Coming Soon**: Future integrations

## 🔧 Development Guidelines

### Adding New Pages
1. Create new file in `app/` directory following Next.js App Router conventions
2. Use TypeScript and include proper type definitions
3. Import Sofia Sans font using the `SofiaSansFont` component pattern
4. Follow the existing color scheme and responsive design patterns

\`\`\`tsx
// Example new page structure
"use client"
import type React from "react"

const SofiaSansFont = () => (
  <style jsx global>{`
    @import url('https://fonts.googleapis.com/css2?family=Sofia+Sans:ital,wght@0,1..1000;1,1..1000&display=swap');
    * { font-family: 'Sofia Sans', sans-serif; }
  `}</style>
)

export default function NewPage() {
  return (
    <div className="font-sans bg-dark text-light min-h-screen">
      <SofiaSansFont />
      {/* Your content here */}
    </div>
  )
}
\`\`\`

### Adding New Components
1. Create components in `components/` directory
2. Use TypeScript interfaces for props
3. Follow the existing naming conventions (kebab-case for files)
4. Include proper accessibility attributes
5. Use Tailwind classes following the design system

\`\`\`tsx
// Example component structure
import type React from "react"
import { cn } from "@/lib/utils"

interface ComponentProps {
  title: string
  description?: string
  className?: string
  children?: React.ReactNode
}

export const ExampleComponent: React.FC<ComponentProps> = ({
  title,
  description,
  className,
  children
}) => {
  return (
    <div className={cn("bg-light/5 rounded-3xl p-8", className)}>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      {description && <p className="text-light/80 mb-6">{description}</p>}
      {children}
    </div>
  )
}
\`\`\`

### Adding Custom Hooks
1. Place hooks in `hooks/` directory
2. Use TypeScript and proper return types
3. Follow React hooks conventions (use prefix)
4. Include proper cleanup in useEffect

\`\`\`tsx
// Example custom hook
import { useState, useEffect } from 'react'

export function useCustomHook(initialValue: string) {
  const [value, setValue] = useState(initialValue)
  
  useEffect(() => {
    // Setup logic
    return () => {
      // Cleanup logic
    }
  }, [])
  
  return { value, setValue }
}
\`\`\`

## 🚨 Important Considerations

### Locked Files
- `public/growthmate-wordmark.svg` - Company logo (DO NOT MODIFY)
- `public/scene-1.gif` - Hero animation (DO NOT MODIFY)

If changes to locked files are requested, instruct users to:
1. Right-click the file in the file tree
2. Click "Unlock"
3. Then proceed with modifications

### Performance Considerations
- Images are optimized and served from blob storage
- Iframes are lazy-loaded where possible
- Animations use CSS transforms for better performance
- Font loading is optimized with `display=swap`

### Accessibility
- All interactive elements have proper ARIA labels
- Color contrast meets WCAG guidelines
- Keyboard navigation is supported
- Screen reader friendly markup

### Mobile Optimization
- Touch-friendly button sizes (minimum 44px)
- Responsive typography scaling
- Optimized marquee animation for mobile
- Proper viewport meta tag configuration

## 🔗 External Integrations

### Demo Iframes
- **Ad Targeting**: `https://demo.growthmate.xyz/#/pure-ads`
- **Discovery Agent**: `https://chat.growthmate.xyz/`

### Social Links
- **Email**: `hello@growthmate.xyz`
- **Calendar**: `https://cal.com/growthmate-xyz/30min`
- **Telegram**: `https://t.me/growthmate_xyz`
- **GitHub**: `https://github.com/growthmate`
- **Twitter**: `https://twitter.com/growthmate_xyz`

### App Links
- **Main App**: `https://app.growthmate.xyz`
- **Advertiser Portal**: `https://app.growthmate.xyz/advertiser`
- **Publisher Portal**: `https://app.growthmate.xyz/publisher`

## 🛠️ Development Commands

\`\`\`bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linting
npm run lint
\`\`\`

## 📦 Key Dependencies

- **Next.js 15**: React framework with App Router
- **TypeScript**: Type safety and better DX
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide React**: Icon library
- **Class Variance Authority**: Component variant management
- **Tailwind Merge**: Efficient className merging

## 🎯 SEO & Metadata

The site includes proper metadata configuration in `app/layout.tsx`:
- Title and description optimization
- Open Graph tags for social sharing
- Responsive viewport configuration
- Generator attribution

## 🔄 State Management

Currently uses React's built-in state management:
- `useState` for component-level state
- `useEffect` for side effects
- Custom hooks for reusable logic

For future complex state needs, consider:
- Zustand for global state
- React Query for server state
- Context API for theme/user preferences

## 🚀 Deployment

The project is configured for Vercel deployment:
- Automatic builds on push to main branch
- Environment variables managed through Vercel dashboard
- Static asset optimization enabled
- Edge runtime support where applicable

## 📝 Content Management

Static content is managed through:
- Hardcoded arrays for partner logos and links
- Direct text content in components
- Image assets in public directory

For future CMS integration, consider:
- Sanity.io for structured content
- Markdown files for blog posts
- JSON files for configuration data

---

**Note for AI Agents**: This project follows Next.js 15 App Router conventions. Always use `"use client"` directive for interactive components. Maintain the existing design system and responsive patterns. Test all changes across mobile and desktop viewports.
