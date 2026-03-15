"use client";

import { BlogPost } from "@/lib/blog";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface BlogClientPageProps {
	posts: BlogPost[];
}

export default function BlogClientPage({ posts }: BlogClientPageProps) {
	return (
		<div className="font-sans bg-dark text-light min-h-screen">
			<Header />

			<main className="pt-24 md:pt-28">
				<div className="container mx-auto px-6 py-12 md:py-16">
					<div className="max-w-2xl mx-auto">
						<h1 className="text-2xl md:text-4xl font-bold tracking-tight mb-3">Blog</h1>
						<p className="text-xs md:text-sm text-light/40 leading-relaxed mb-10 md:mb-14">
							Insights on crypto advertising and targeting.
						</p>

						{posts.length === 0 ? (
							<div className="py-16 text-center">
								<p className="text-xs text-light/40">No posts yet.</p>
							</div>
						) : (
							<div className="divide-y divide-edge/20">
								{posts.map((post) => (
									<article
										key={post.slug}
										className="py-6 md:py-8 group"
									>
										<div className="flex items-baseline gap-4 mb-2">
											<time className="text-[11px] text-light/40 tabular-nums shrink-0">
												{new Date(post.date).toLocaleDateString("en-US", {
													year: "numeric",
													month: "short",
													day: "numeric",
												})}
											</time>
											<span className="text-[11px] text-light/40">{post.author}</span>
										</div>

										<h2 className="text-base md:text-lg font-semibold mb-2 leading-snug">
											<Link
												href={`/blog/${post.slug}`}
												className="group-hover:text-primary transition-colors duration-200"
											>
												{post.title}
											</Link>
										</h2>

										{post.excerpt && (
											<p className="text-xs md:text-sm text-light/80 leading-relaxed line-clamp-2 mb-3">
												{post.excerpt}
											</p>
										)}

										<Link
											href={`/blog/${post.slug}`}
											className="inline-flex items-center gap-1 text-[11px] text-primary/40 hover:text-primary transition-colors"
										>
											Read <ArrowRight className="w-3 h-3" />
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
	);
}
