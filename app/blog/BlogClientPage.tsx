"use client"

import { getBlogPosts } from "@/lib/blog"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import Link from "next/link"

export default function BlogClientPage() {
  const posts = getBlogPosts()

  return (
    <div className="font-sans bg-dark text-light min-h-screen">
      <Header />

      <main className="pt-24">
        <div className="container mx-auto px-4 md:px-6 py-12 md:py-20">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6">Blog</h1>
            <p className="text-lg md:text-xl text-light/80 mb-8 md:mb-12">
              Latest insights on Web3 advertising, AI targeting, and blockchain marketing.
            </p>

            {posts.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-light/60">No blog posts found.</p>
              </div>
            ) : (
              <div className="space-y-8">
                {posts.map((post) => (
                  <article key={post.slug} className="bg-light/5 rounded-3xl p-6 md:p-8">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div className="text-sm text-light/60 mb-2 md:mb-0">
                        {new Date(post.date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </div>
                      <div className="text-sm text-light/60">By {post.author}</div>
                    </div>

                    <h2 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">
                      <Link href={`/blog/${post.slug}`} className="hover:text-primary transition-colors">
                        {post.title}
                      </Link>
                    </h2>

                    {post.excerpt && <p className="text-light/80 mb-4 md:mb-6">{post.excerpt}</p>}

                    <Link
                      href={`/blog/${post.slug}`}
                      className="text-primary hover:text-primary/80 transition-colors font-medium"
                    >
                      Read more →
                    </Link>
                  </article>
                ))}
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
