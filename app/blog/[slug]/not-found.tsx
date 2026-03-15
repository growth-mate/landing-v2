"use client";

import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import Link from "next/link";

export default function NotFound() {
	return (
		<div className="font-sans bg-dark text-light min-h-screen">
			<Header />

			<main className="pt-24 md:pt-28">
				<div className="container mx-auto px-6 py-12 md:py-16">
					<div className="max-w-2xl mx-auto text-center">
						<h1 className="text-2xl md:text-4xl font-bold tracking-tight mb-3">Post Not Found</h1>
						<p className="text-xs md:text-sm text-light/30 leading-relaxed mb-8">
							The blog post you&apos;re looking for doesn&apos;t exist.
						</p>
						<Link
							href="/blog"
							className="bg-primary/90 text-dark px-6 py-2.5 rounded-xl text-sm font-semibold hover:bg-primary transition-colors"
						>
							Back to Blog
						</Link>
					</div>
				</div>
			</main>

			<Footer />
		</div>
	);
}
