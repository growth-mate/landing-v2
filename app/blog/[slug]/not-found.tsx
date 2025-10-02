import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"

export default function NotFound() {
  return (
    <div className="font-sans bg-dark text-light min-h-screen">
      <Header />

      <main className="pt-20 md:pt-24">
        <div className="container mx-auto px-4 md:px-6 py-12 md:py-20">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Post Not Found</h1>
            <p className="text-lg md:text-xl text-light/80 mb-8">
              Sorry, we couldn't find the blog post you're looking for.
            </p>
            <Link
              href="/blog"
              className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
