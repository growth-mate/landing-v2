import fs from "fs"
import path from "path"
import matter from "gray-matter"

export interface BlogPost {
  slug: string
  title: string
  date: string
  author: string
  excerpt: string
  content: string
}

const contentDirectory = path.join(process.cwd(), "content/blog")

export function getBlogPosts(): BlogPost[] {
  try {
    if (!fs.existsSync(contentDirectory)) {
      return []
    }

    const fileNames = fs.readdirSync(contentDirectory)
    const allPostsData = fileNames
      .filter((fileName) => fileName.endsWith(".md"))
      .map((fileName) => {
        const slug = fileName.replace(/\.md$/, "")
        const fullPath = path.join(contentDirectory, fileName)
        const fileContents = fs.readFileSync(fullPath, "utf8")
        const { data, content } = matter(fileContents)

        return {
          slug,
          title: data.title || "Untitled",
          date: data.date || new Date().toISOString().split("T")[0],
          author: data.author || "GrowthMate Team",
          excerpt: data.excerpt || "",
          content,
        }
      })

    return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1))
  } catch (error) {
    console.error("Error reading blog posts:", error)
    return []
  }
}

export function getBlogPost(slug: string): BlogPost | null {
  try {
    if (!fs.existsSync(contentDirectory)) {
      return null
    }

    const fullPath = path.join(contentDirectory, `${slug}.md`)
    if (!fs.existsSync(fullPath)) {
      return null
    }

    const fileContents = fs.readFileSync(fullPath, "utf8")
    const { data, content } = matter(fileContents)

    return {
      slug,
      title: data.title || "Untitled",
      date: data.date || new Date().toISOString().split("T")[0],
      author: data.author || "GrowthMate Team",
      excerpt: data.excerpt || "",
      content,
    }
  } catch (error) {
    console.error("Error reading blog post:", error)
    return null
  }
}
