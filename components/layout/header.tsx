"use client";

import Link from "next/link";
import { CardNav, CardNavCard } from "@/components/CardNav";

const cards: CardNavCard[] = [
	{
		title: "Product",
		links: [
			{ label: "Ad Placements", href: "/#placements" },
			{ label: "Targeting", href: "/#targeting" },
		],
	},
	{
		title: "Resources",
		links: [
			{ label: "Blog", href: "/blog" },
			{
				label: "Advertiser Deck",
				href: "https://docs.google.com/presentation/d/1uffmrZWWRdeA8EpOOxnHuGBlkHPDceOj2coEk4RF3U8/export?format=pdf",
				external: true,
			},
		],
	},
	{
		title: "Company",
		links: [
			{ label: "Team", href: "/team" },
			{ label: "Contact", href: "mailto:contact@growthmate.xyz", external: true },
		],
	},
];

const logo = (
	<Link
		href="/"
		className="flex items-center gap-1.5"
	>
		<img
			src="/growthmate-wordmark.svg"
			alt=""
			className="h-4"
		/>
	</Link>
);

const cta = (
	<a
		data-cal-namespace="growthmate"
		data-cal-link="growthmate-xyz/15min"
		className="bg-primary text-dark px-4 py-1.5 rounded-xl text-xs font-semibold hover:bg-primary/85 transition-colors duration-200 cursor-pointer"
	>
		Get in Touch
	</a>
);

export function Header() {
	return (
		<>
			{/* Desktop — top */}
			<nav className="hidden md:block fixed top-4 left-1/2 -translate-x-1/2 z-50 min-w-[420px]">
				<CardNav
					direction="down"
					slotOrder={["burger", "logo", "cta"]}
					cards={cards}
					logo={logo}
					cta={cta}
				/>
			</nav>

			{/* Mobile — bottom */}
			<nav className="md:hidden fixed bottom-10 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-5rem)]">
				<CardNav
					direction="up"
					slotOrder={["empty", "logo", "burger"]}
					cards={cards}
					logo={logo}
					cta={cta}
				/>
			</nav>
		</>
	);
}
