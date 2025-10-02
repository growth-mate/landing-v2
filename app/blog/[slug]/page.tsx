import { getBlogPost, getBlogPosts } from "@/lib/blog"
import { createMetadata } from "@/lib/metadata"
import BlogPostClientPage from "./BlogPostClientPage"

export async function generateStaticParams() {
  const posts = getBlogPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = getBlogPost(params.slug)

  if (!post) {
    return createMetadata({
      title: "Post Not Found - GrowthMate Blog",
    })
  }

  return createMetadata({
    title: `${post.title} - GrowthMate Blog`,
    description: post.excerpt || `Read ${post.title} on the GrowthMate blog.`,
  })
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  return <BlogPostClientPage params={params} />
}
