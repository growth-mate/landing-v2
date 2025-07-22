"use client"

import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import Link from "next/link"

// Add Sofia Sans font
const SofiaSansFont = () => (
  <style jsx global>{`
    @import url('https://fonts.googleapis.com/css2?family=Sofia+Sans:ital,wght@0,1..1000;1,1..1000&display=swap');
    
    * {
      font-family: 'Sofia Sans', sans-serif;
    }
  `}</style>
)

export default function NotFound() {
  return (
    <div className="font-sans bg-dark text-light min-h-screen">
      <SofiaSansFont />
      <Header />

      <main className="pt-24">
        <div className="container mx-auto px-4 md:px-6 py-12 md:py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6">Post Not Found</h1>
            <p className="text-lg md:text-xl text-light/80 mb-8 md:mb-12">
              The blog post you&apos;re looking for doesn&apos;t exist.
            </p>
            <Link
              href="/blog"
              className="bg-primary text-dark px-6 md:px-8 py-2.5 md:py-3 rounded-full font-semibold hover:bg-opacity-90 transition-colors inline-flex items-center gap-2"
            >
              Back to Blog
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
