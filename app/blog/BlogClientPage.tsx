"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import type { BlogPost } from "@/lib/blog"

interface BlogClientPageProps {
  posts: BlogPost[]
}

export default function BlogClientPage({ posts }: BlogClientPageProps) {
  return (
    <div className="font-sans bg-dark text-light min-h-screen">
      <Header />

      <main className="pt-20 md:pt-24">
        <section className="container mx-auto px-4 md:px-6 py-12 md:py-20">
          <div className="max-w-4xl mx-auto text-center mb-12 md:mb-16">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">GrowthMate Blog</h1>
            <p className="text-lg md:text-xl text-light/80">
              Insights on Web3 advertising, AI targeting, and the future of decentralized marketing
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {posts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`}>
                <Card className="bg-light/5 border-light/10 hover:border-primary/50 transition-all duration-300 h-full">
                  <CardContent className="p-6">
                    <div className="mb-4">
                      <time className="text-sm text-light/60">{post.date}</time>
                    </div>
                    <h2 className="text-2xl font-bold mb-3 hover:text-primary transition-colors">{post.title}</h2>
                    <p className="text-light/70 mb-4">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-light/60">{post.author}</span>
                      <ArrowRight className="h-5 w-5 text-primary" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
