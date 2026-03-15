import type { Metadata } from "next";

// Base configuration that all pages share
export const baseMetadata = {
	siteName: "GrowthMate",
	siteUrl: "https://growthmate.xyz",
	twitterHandle: "@growthmate_xyz",
	defaultImage: "https://cdn.growthmate.xyz/openg-img/logo-square-1024x1024.png",
	themeColor: "#8BC34A",
	description:
		"Banner ads on blockchain explorers, analytics platforms, and crypto publications. Programmatic targeting with full control.",
	keywords: [
		"Web3 advertising",
		"blockchain targeting",
		"AI advertising",
		"crypto marketing",
		"on-chain analytics",
		"Web3 publisher",
		"DeFi advertising",
		"crypto audience targeting",
		"blockchain marketing platform",
		"Web3 growth",
	],
};

// Structured data for the organization
export const organizationSchema = {
	"@context": "https://schema.org",
	"@type": "Organization",
	name: baseMetadata.siteName,
	description: "Ad network for blockchain explorers, analytics platforms, and crypto publications.",
	url: baseMetadata.siteUrl,
	logo: `${baseMetadata.siteUrl}/growthmate-wordmark.svg`,
	contactPoint: {
		"@type": "ContactPoint",
		email: "contact@growthmate.xyz",
		contactType: "customer service",
	},
	sameAs: ["https://x.com/growthmate_xyz", "https://github.com/growth-mate", "https://t.me/lennczar"],
	foundingDate: "2024",
	industry: "Web3 Technology",
	serviceType: "Advertising Technology Platform",
	offers: [
		{
			"@type": "Service",
			name: "Web3 Advertising Platform",
			description: "Programmatic banner ads with context-aware targeting on crypto platforms.",
			provider: {
				"@type": "Organization",
				name: baseMetadata.siteName,
			},
		},
	],
};

// Helper function to create metadata for specific pages
export function createMetadata({
	title,
	description,
	path = "/",
	keywords = [],
	image,
	type = "website",
}: {
	title: string;
	description?: string;
	path?: string;
	keywords?: string[];
	image?: string;
	type?: "website" | "article";
}): Metadata {
	const url = `${baseMetadata.siteUrl}${path}`;
	const finalImage = image || baseMetadata.defaultImage;
	const allKeywords = [...baseMetadata.keywords, ...keywords];
	const finalDescription = description || baseMetadata.description;

	return {
		title,
		description: finalDescription,
		keywords: allKeywords,
		authors: [{ name: "GrowthMate" }],
		creator: baseMetadata.siteName,
		publisher: baseMetadata.siteName,
		metadataBase: new URL(baseMetadata.siteUrl),
		alternates: {
			canonical: path,
		},
		openGraph: {
			title: baseMetadata.siteName,
			description: finalDescription,
			url,
			type,
			images: [
				{
					url: finalImage,
					width: 1024,
					height: 1024,
					alt: `${baseMetadata.siteName} — The Ad Network for Crypto`,
				},
			],
		},
		twitter: {
			card: "summary",
			title: baseMetadata.siteName,
			description: finalDescription,
			site: baseMetadata.twitterHandle,
			creator: baseMetadata.twitterHandle,
			images: [finalImage],
		},
		robots: {
			index: true,
			follow: true,
			googleBot: {
				index: true,
				follow: true,
				"max-video-preview": -1,
				"max-image-preview": "large",
				"max-snippet": -1,
			},
		},
		category: "technology",
	};
}
