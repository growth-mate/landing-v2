"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-dark/95 backdrop-blur-sm border-b border-light/10" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="flex items-center">
            <img src="/growthmate-wordmark.svg" alt="GrowthMate" className="h-8 md:h-10 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-light/80 hover:text-light transition-colors">
              Home
            </Link>
            <Link href="/team" className="text-light/80 hover:text-light transition-colors">
              Team
            </Link>
            <Link href="/blog" className="text-light/80 hover:text-light transition-colors">
              Blog
            </Link>
            <Button asChild className="bg-primary hover:bg-primary/90 text-dark font-semibold">
              <Link href="https://cal.com/growthmate" target="_blank" rel="noopener noreferrer">
                Get Started
              </Link>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-light" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-light/10">
            <div className="flex flex-col space-y-4">
              <Link
                href="/"
                className="text-light/80 hover:text-light transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/team"
                className="text-light/80 hover:text-light transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Team
              </Link>
              <Link
                href="/blog"
                className="text-light/80 hover:text-light transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </Link>
              <Button asChild className="bg-primary hover:bg-primary/90 text-dark font-semibold w-full">
                <Link href="https://cal.com/growthmate" target="_blank" rel="noopener noreferrer">
                  Get Started
                </Link>
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
