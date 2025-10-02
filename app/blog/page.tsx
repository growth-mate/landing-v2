import { createMetadata } from "@/lib/metadata"
import BlogClientPage from "./BlogClientPage"

export const metadata = createMetadata({
  title: "Blog - GrowthMate",
  description: "Latest insights on Web3 advertising, AI targeting, and blockchain marketing from the GrowthMate team.",
})

export default function BlogPage() {
  return <BlogClientPage />
}
