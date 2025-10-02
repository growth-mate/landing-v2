"use client"

import { BlogPost } from "@/lib/blog"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import Link from "next/link"
import { ArrowLeftIcon } from "lucide-react"

interface BlogPostClientPageProps {
  post: BlogPost
}

export default function BlogPostClientPage({ post }: BlogPostClientPageProps) {
  return (
    <div className="font-sans bg-dark text-light min-h-screen">
      <Header />

      <main className="pt-24">
        <div className="container mx-auto px-4 md:px-6 py-12 md:py-20">
          <div className="max-w-2xl mx-auto">
            <nav className="mb-6 md:mb-8">
              <Link href="/blog" className="text-primary hover:text-primary/80 transition-colors flex items-center gap-2">
                <ArrowLeftIcon className="w-4 h-4" /> Back to Blog
              </Link>
            </nav>

            <article>
              <header className="mb-8 md:mb-12">
                <h1 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6">{post.title}</h1>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between text-light/60">
                  <div className="mb-2 md:mb-0">
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </div>
                  <div>By {post.author}</div>
                </div>
              </header>

              <div className="prose prose-invert prose-lg max-w-none">
                <ReactMarkdown
                  remarkPlugins={[remarkGfm]}
                  components={{
                    h1: ({ children }) => (
                      <h1 className="text-3xl md:text-4xl font-bold mb-10 md:mb-12 text-light">{children}</h1>
                    ),
                    h2: ({ children }) => (
                      <h2 className="text-2xl md:text-3xl font-bold mb-8 md:mb-10 text-light mt-8 md:mt-12">
                        {children}
                      </h2>
                    ),
                    h3: ({ children }) => (
                      <h3 className="text-xl md:text-2xl font-bold mb-6 md:mb-8 text-light mt-6 md:mt-8">{children}</h3>
                    ),
                    h4: ({ children }) => (
                      <h4 className="text-lg md:text-xl font-bold mb-4 md:mb-6 text-light mt-4 md:mt-6">{children}</h4>
                    ),
                    p: ({ children }) => <p className="text-lg md:text-xl text-light/80 mb-4 md:mb-6 leading-relaxed">{children}</p>,
                    ul: ({ children }) => (
                      <ul className="text-light/80 ml-4 md:ml-6 my-4 md:my-6 list-disc space-y-3">{children}</ul>
                    ),
                    ol: ({ children }) => (
                      <ol className="text-light/80 ml-4 md:ml-6 my-4 md:my-6 list-decimal space-y-3">{children}</ol>
                    ),
                    li: ({ children }) => <li className="text-lg md:text-xl leading-relaxed">{children}</li>,
                    blockquote: ({ children }) => (
                      <blockquote className="border-l-4 border-primary pl-4 md:pl-6 my-6 md:my-8 text-light/90 italic">
                        {children}
                      </blockquote>
                    ),
                    code: ({ children }) => (
                      <code className="bg-light/10 px-1 py-0.5 rounded text-sm text-primary align-middle">{children}</code>
                    ),
                    pre: ({ children }) => (
                      <pre className="bg-light/10 p-4 md:p-6 rounded-lg overflow-x-auto my-6 md:my-8
    [&>code]:bg-transparent [&>code]:p-0">
                        {children}
                      </pre>
                    ),
                    a: ({ href, children }) => (
                      <a
                        href={href}
                        className="text-primary hover:text-primary/80 transition-colors underline"
                        target={href?.startsWith("http") ? "_blank" : undefined}
                        rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
                      >
                        {children}
                      </a>
                    ),
                    table: ({ children }) => (
                      <div className="w-full overflow-x-auto mx-auto my-8">
                        <table className="text-sm md:text-lg border border-light/10 rounded-lg min-w-max">
                          {children}
                        </table>
                      </div>
                    ),
                    th: ({ children }) => (
                      <th className="px-2 md:px-4 py-1 md:py-2 border-b border-light/20 text-left font-semibold align-top">{children}</th>
                    ),
                    tr: ({ children }) => (
                      <tr className="border-b border-light/10 last:border-b-0">{children}</tr>
                    ),
                    td: ({ children }) => (
                      <td className="px-2 md:px-4 py-1 md:py-2 align-top">{children}</td>
                    ),
                  }}
                >
                  {post.content}
                </ReactMarkdown>
              </div>
            </article>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
