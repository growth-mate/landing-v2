import type { Metadata } from "next";
import PricingClient from "./PricingClient";

export const metadata: Metadata = {
	title: "Pricing — Domain Intelligence | GrowthMate",
	description:
		"Audience intelligence for the entire Web3 web, whether you want to research a competitor, scope an ecosystem, or get full visibility on your own users.",
	robots: { index: false, follow: false },
};

export default function DomainIntelligencePricingPage() {
	return <PricingClient />;
}
