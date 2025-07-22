import { getBlogPost, getBlogPosts } from "@/lib/blog"
import { createMetadata } from "@/lib/metadata"
import { notFound } from "next/navigation"
import BlogPostClientPage from "./BlogPostClientPage"

export function generateStaticParams() {
  const posts = getBlogPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getBlogPost(slug)
  
  if (!post) {
    return createMetadata({
      title: "Post Not Found - GrowthMate Blog",
    })
  }

  return createMetadata({
    title: `${post.title} - GrowthMate Blog`,
    description: post.excerpt || `Read about ${post.title} on the GrowthMate blog.`,
  })
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getBlogPost(slug)

  if (!post) {
    notFound()
  }

  return <BlogPostClientPage post={post} />
}
