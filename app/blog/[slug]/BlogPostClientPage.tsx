"use client"

import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import ReactMarkdown from "react-markdown"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import type { BlogPost } from "@/lib/blog"

interface BlogPostClientPageProps {
  post: BlogPost
}

export default function BlogPostClientPage({ post }: BlogPostClientPageProps) {
  return (
    <div className="font-sans bg-dark text-light min-h-screen">
      <Header />

      <main className="pt-20 md:pt-24">
        <article className="container mx-auto px-4 md:px-6 py-12 md:py-20">
          <div className="max-w-3xl mx-auto">
            <Link
              href="/blog"
              className="inline-flex items-center text-primary hover:text-primary/80 transition-colors mb-8"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Link>

            <header className="mb-8">
              <h1 className="text-3xl md:text-5xl font-bold mb-4">{post.title}</h1>
              <div className="flex items-center gap-4 text-light/60">
                <time className="text-sm">{post.date}</time>
                <span className="text-sm">•</span>
                <span className="text-sm">{post.author}</span>
              </div>
            </header>

            <div className="prose prose-invert prose-lg max-w-none">
              <ReactMarkdown
                components={{
                  h1: ({ ...props }) => <h1 className="text-3xl font-bold mt-8 mb-4" {...props} />,
                  h2: ({ ...props }) => <h2 className="text-2xl font-bold mt-6 mb-3" {...props} />,
                  h3: ({ ...props }) => <h3 className="text-xl font-bold mt-4 mb-2" {...props} />,
                  p: ({ ...props }) => <p className="mb-4 text-light/80 leading-relaxed" {...props} />,
                  ul: ({ ...props }) => <ul className="list-disc list-inside mb-4 space-y-2" {...props} />,
                  ol: ({ ...props }) => <ol className="list-decimal list-inside mb-4 space-y-2" {...props} />,
                  li: ({ ...props }) => <li className="text-light/80" {...props} />,
                  a: ({ ...props }) => (
                    <a className="text-primary hover:text-primary/80 underline transition-colors" {...props} />
                  ),
                  blockquote: ({ ...props }) => (
                    <blockquote className="border-l-4 border-primary/50 pl-4 italic text-light/70 my-4" {...props} />
                  ),
                  code: ({ ...props }) => <code className="bg-light/10 px-1.5 py-0.5 rounded text-sm" {...props} />,
                  pre: ({ ...props }) => <pre className="bg-light/10 p-4 rounded-lg overflow-x-auto mb-4" {...props} />,
                }}
              >
                {post.content}
              </ReactMarkdown>
            </div>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  )
}
