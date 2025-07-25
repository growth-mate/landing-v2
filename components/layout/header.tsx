"use client"

import Link from "next/link"

const WordmarkLogo = ({ className = "h-8" }: { className?: string }) => (
  <img src="/growthmate-wordmark.svg" alt="GrowthMate" className={`h-[1.5rem] md:h-8 ${className}`} />
)

export function Header() {
  return (
    <nav className="fixed w-full bg-dark/80 backdrop-blur-sm z-50">
      <div className="container mx-auto px-4 md:px-6 py-3 md:py-4 flex justify-between items-center">
        <Link href="/">
          <WordmarkLogo />
        </Link>
        <div className="flex items-center gap-4 md:gap-8">
          <nav className="hidden md:flex gap-6">
            <Link href="/#demo" className="hover:text-primary transition-colors">
              Live Demo
            </Link>
            <Link href="/#solutions" className="hover:text-primary transition-colors">
              Solutions
            </Link>
            {/* <Link href="/blog" className="hover:text-primary transition-colors">
              Blog
            </Link> */}
          </nav>
          <a
            href="https://app.growthmate.xyz"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-dark px-4 md:px-6 py-2 rounded-full font-semibold hover:bg-opacity-90 transition-colors text-sm md:text-base"
          >
            Launch App
          </a>
        </div>
      </div>
    </nav>
  )
}
