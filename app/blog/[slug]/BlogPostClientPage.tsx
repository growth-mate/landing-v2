"use client";

import { BlogPost } from "@/lib/blog";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

interface BlogPostClientPageProps {
	post: BlogPost;
}

export default function BlogPostClientPage({ post }: BlogPostClientPageProps) {
	return (
		<div className="font-sans bg-dark text-light min-h-screen">
			<Header />

			<main className="pt-24 md:pt-28">
				<div className="container mx-auto px-6 py-12 md:py-16">
					<div className="max-w-2xl mx-auto">
						<nav className="mb-8 md:mb-10">
							<Link
								href="/blog"
								className="inline-flex items-center gap-1 text-[11px] text-light/40 hover:text-primary/60 transition-colors"
							>
								<ArrowLeft className="w-3 h-3" /> Back
							</Link>
						</nav>

						<article>
							<header className="mb-10 md:mb-14">
								<h1 className="text-2xl md:text-4xl font-bold tracking-tight leading-[1.15] mb-4">
									{post.title}
								</h1>
								<div className="flex items-center gap-3 text-[11px] text-light/40">
									<time>
										{new Date(post.date).toLocaleDateString("en-US", {
											year: "numeric",
											month: "long",
											day: "numeric",
										})}
									</time>
									<span className="text-light/8">&middot;</span>
									<span>{post.author}</span>
								</div>
							</header>

							<div className="prose prose-invert max-w-none">
								<ReactMarkdown
									remarkPlugins={[remarkGfm]}
									components={{
										h1: ({ children }) => (
											<h2 className="text-xl md:text-2xl font-bold tracking-tight mb-4 mt-10 md:mt-14 text-light">
												{children}
											</h2>
										),
										h2: ({ children }) => (
											<h2 className="text-xl md:text-2xl font-bold tracking-tight mb-4 mt-10 md:mt-14 text-light">
												{children}
											</h2>
										),
										h3: ({ children }) => (
											<h3 className="text-base md:text-lg font-semibold tracking-tight mb-3 mt-8 md:mt-10 text-light">
												{children}
											</h3>
										),
										h4: ({ children }) => (
											<h4 className="text-sm md:text-base font-semibold mb-2 mt-6 md:mt-8 text-light/90">
												{children}
											</h4>
										),
										p: ({ children }) => (
											<p className="text-sm md:text-[15px] text-light/70 mb-5 leading-[1.75] text-justify">
												{children}
											</p>
										),
										ul: ({ children }) => (
											<ul className="text-light/70 ml-4 my-4 list-disc space-y-2 text-justify">
												{children}
											</ul>
										),
										ol: ({ children }) => (
											<ol className="text-light/70 ml-4 my-4 list-decimal space-y-2 text-justify">
												{children}
											</ol>
										),
										li: ({ children }) => (
											<li className="text-sm md:text-[15px] leading-[1.75]">{children}</li>
										),
										blockquote: ({ children }) => (
											<blockquote className="border-l-2 border-primary/30 pl-4 my-6 text-light/80 italic">
												{children}
											</blockquote>
										),
										code: ({ children }) => (
											<code className="bg-edge/80 px-1.5 py-0.5 rounded text-xs text-primary/80">
												{children}
											</code>
										),
										pre: ({ children }) => (
											<pre className="bg-panel border border-edge/80 p-4 rounded-xl overflow-x-auto my-6 text-xs [&>code]:bg-transparent [&>code]:p-0">
												{children}
											</pre>
										),
										a: ({ href, children }) => (
											<a
												href={href}
												className="text-primary/80 hover:text-primary transition-colors underline underline-offset-2 decoration-primary/20"
												target={href?.startsWith("http") ? "_blank" : undefined}
												rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
											>
												{children}
											</a>
										),
										table: ({ children }) => (
											<div className="w-full overflow-x-auto my-6">
												<table className="text-xs md:text-sm border border-edge/40 rounded-xl min-w-max">
													{children}
												</table>
											</div>
										),
										th: ({ children }) => (
											<th className="px-3 py-2 border-b border-edge/20 text-left text-[11px] uppercase tracking-[0.1em] text-light/80 font-medium">
												{children}
											</th>
										),
										tr: ({ children }) => (
											<tr className="border-b border-edge/40 last:border-b-0">{children}</tr>
										),
										td: ({ children }) => <td className="px-3 py-2 text-light/80">{children}</td>,
										hr: () => <hr className="border-edge/15 my-8 md:my-10" />,
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
	);
}
