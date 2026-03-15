"use client";

import dynamic from "next/dynamic";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { getCalApi } from "@calcom/embed-react";
import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { Card } from "@/components/CardSwap";
import { useOrientation } from "@/components/ui/use-orientation";
// import { useIsMobile } from "@/hooks/use-mobile";

const Silk = dynamic(() => import("@/components/Silk"), { ssr: false });
const SplitText = dynamic(() => import("@/components/SplitText"), { ssr: false });
const CardSwap = dynamic(() => import("@/components/CardSwap").then((m) => ({ default: m.default })), {
	ssr: false,
});
interface LogoEntry {
	name: string;
	base: string;
	sm?: string;
	md?: string;
	lg?: string;
	span: string;
}
const logoGrid: LogoEntry[] = [
	{
		name: "Etherscan",
		base: "/etherscan-1.png",
		sm: "/etherscan-2.png",
		span: "flex-[1] sm:flex-[2] basis-16 sm:basis-32",
	},
	{
		name: "CoinMarketCap",
		base: "/coinmarketcap-1.png",
		lg: "/coinmarketcap-3.png",
		span: "flex-[1] lg:flex-[3] basis-16 lg:basis-48",
	},
	{
		name: "DexTools",
		base: "/dextools-1.png",
		md: "/dextools-2.png",
		span: "flex-[1] md:flex-[2] basis-16 md:basis-32",
	},
	{ name: "Investing.com", base: "/investing.com-2.png", span: "flex-[2] basis-32" },
	{ name: "Solscan", base: "/solscan-2.png", span: "flex-[2] basis-32" },
	{
		name: "CoinGecko",
		base: "/coingecko-1.png",
		md: "/coingecko-2.png",
		span: "flex-[1] md:flex-[2] basis-16 md:basis-32",
	},
	{
		name: "Watcherguru",
		base: "/watcherguru-1.png",
		lg: "/watcherguru-3.png",
		span: "flex-[1] lg:flex-[3] basis-16 lg:basis-48",
	},
	{
		name: "Apespace",
		base: "/apespace-1.png",
		md: "/apespace-2.png",
		span: "flex-[1] md:flex-[2] basis-16 md:basis-32",
	},
	{
		name: "CoinPaprika",
		base: "/coinpaprika-1.png",
		md: "/coinpaprika-2.png",
		span: "flex-[1] md:flex-[2] basis-16 md:basis-32",
	},
];
const useCases = [
	{
		who: "Onchain analytics companies",
		how: "target blockchain analysts by identifying users that run complex queries on block explorers.",
	},
	{
		who: "Cross-border payment providers",
		how: "target foreign workers by noticing when device language differs from the language of the user's country.",
	},
	{
		who: "AI companies",
		how: "target power-users by advertising to people frequently reading articles of a competitor.",
	},
	{
		who: "Exchanges",
		how: "target high-intent traders by reaching users that recently tracked price movements of specific tokens.",
	},
];

export default function Home() {
	const orientation = useOrientation();
	const [bgReady, setBgReady] = useState(false);
	const [headlineReady, setHeadlineReady] = useState(false);
	const [contentReady, setContentReady] = useState(false);
	// const isMobile = useIsMobile();

	useEffect(() => {
		const t1 = setTimeout(() => setBgReady(true), 50);
		const t2 = setTimeout(() => setHeadlineReady(true), 350);
		const t3 = setTimeout(() => setContentReady(true), 650);
		return () => {
			clearTimeout(t1);
			clearTimeout(t2);
			clearTimeout(t3);
		};
	}, []);

	useEffect(() => {
		(async () => {
			const cal = await getCalApi({ namespace: "growthmate" });
			cal("ui", {
				theme: "dark",
				cssVarsPerTheme: {
					dark: { "cal-brand": "#51d959" },
					light: { "cal-brand": "#51d959" },
				},
				hideEventTypeDetails: true,
				layout: "month_view",
			});
		})();
	}, []);

	return (
		<div className="min-h-screen bg-dark text-white font-sans">
			<Header />

			{/* ── Hero ── */}
			<section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden">
				<div
					className="absolute inset-10 md:inset-20 z-0 transition-opacity duration-[1200ms] ease-out"
					style={{ opacity: bgReady ? 1 : 0 }}
				>
					<div className="relative rounded-3xl overflow-hidden h-full w-full">
						<Silk
							color="#5dc064"
							speed={2}
							scale={0.85}
							noiseIntensity={1.5}
							rotation={orientation === "landscape" ? -0.6 : 0.6}
						/>
						<div className="absolute top-10 right-10">
							<img
								src="/logo.svg"
								alt=""
								className="w-10 h-10 md:w-12 md:h-12"
							/>
						</div>
					</div>
				</div>

				<div className="z-10 text-center px-10 md:px-20 max-w-[75%] mx-auto">
					<div className="mb-5 md:mb-6">
						{headlineReady && (
							<SplitText
								text="The ad network for crypto."
								className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-bold leading-[1.1] tracking-tight"
								delay={60}
								duration={0.8}
								ease="power3.out"
								splitType="words"
								from={{ opacity: 0, y: 30 }}
								to={{ opacity: 1, y: 0 }}
								threshold={0.1}
								rootMargin="0px"
								tag="h1"
							/>
						)}
					</div>

					<p
						className="text-sm md:text-base text-white mb-10 md:mb-12 max-w-md mx-auto leading-relaxed"
						style={{
							opacity: contentReady ? 1 : 0,
							filter: contentReady ? "blur(0px)" : "blur(6px)",
							transform: contentReady ? "translateY(0)" : "translateY(10px)",
							transition: "opacity 0.8s ease-out, filter 0.8s ease-out, transform 0.8s ease-out",
						}}
					>
						Programmatic banner ads across blockchain explorers, analytics platforms, and crypto
						publications, tailored to your audience and goals.
					</p>

					<button
						data-cal-namespace="growthmate"
						data-cal-link="growthmate-xyz/15min"
						className="bg-white text-dark px-7 py-2.5 rounded-xl text-sm font-semibold hover:bg-white transition-all duration-300 hover:scale-[1.02]"
						style={{
							opacity: contentReady ? 1 : 0,
							filter: contentReady ? "blur(0px)" : "blur(6px)",
							transform: contentReady ? "translateY(0)" : "translateY(10px)",
							transition:
								"opacity 0.8s ease-out 0.12s, filter 0.8s ease-out 0.12s, transform 0.8s ease-out 0.12s",
						}}
					>
						Get in Touch
					</button>
				</div>

				{/* Blur transition */}
				<div
					className="absolute bottom-0 left-0 right-0 h-full pointer-events-none z-10"
					style={{
						backdropFilter: "blur(16px)",
						WebkitBackdropFilter: "blur(16px)",
						maskImage: "linear-gradient(to bottom, transparent, black)",
						WebkitMaskImage: "linear-gradient(to bottom, transparent, black)",
					}}
				/>
			</section>

			{/* ── Trusted By ── */}
			{/* <section className="py-10 md:py-14">
				<div className="container mx-auto px-10 md:px-20">
					<p className="text-center text-[10px] md:text-[11px] uppercase tracking-[0.2em] text-light/12 mb-8">
						Trusted By
					</p>
					<div className="grid grid-cols-3 gap-4 md:gap-6 w-2/3 mx-auto">
						{isMobile ? (
							<>
								<div className="rounded-xl">
									<img
										src="/solflare-1.png"
										alt="Solflare"
										className="w-full h-full object-cover"
									/>
								</div>
								<div className="rounded-xl">
									<img
										src="/dune-1.png"
										alt="Dune"
										className="w-full h-full object-cover"
									/>
								</div>
								<div className="rounded-xl">
									<img
										src="/ready-1.png"
										alt="Ready"
										className="w-full h-full object-cover"
									/>
								</div>
							</>
						) : (
							<>
								<div className="rounded-xl">
									<img
										src="/solflare-2.png"
										alt="Solflare"
										className="w-full h-full object-cover"
									/>
								</div>
								<div className="rounded-xl">
									<img
										src="/dune-2.png"
										alt="Dune"
										className="w-full h-full object-cover"
									/>
								</div>
								<div className="rounded-xl">
									<img
										src="/ready-2.png"
										alt="Ready"
										className="w-full h-full object-cover"
									/>
								</div>
							</>
						)}
					</div>
				</div>
			</section> */}

			{/* ── What We Do ── */}
			{/* <section className="border-t border-edge/20 py-14 md:py-20"> */}
			<section className="py-14 md:py-20">
				<div className="container mx-auto px-10 md:px-20">
					<div className="max-w-2xl">
						<h2 className="text-xl md:text-3xl font-bold tracking-tight mb-4">
							Programmatic ads with granular targeting
						</h2>
						<p className="text-xs md:text-sm text-light/40 leading-relaxed">
							We help companies reach their audiences through programmatic banner ads. Full freedom to
							customize targeting and messaging down to a granular level, far beyond the constraints of
							mainstream ad platforms.
						</p>
					</div>
				</div>
			</section>

			{/* ── Targeting Use Cases ── */}
			<section
				id="targeting"
				className="border-t border-edge/20 py-14 md:py-20"
			>
				<div className="container mx-auto px-10 md:px-20">
					<div className="grid md:grid-cols-5 gap-6 md:gap-12">
						<div className="md:col-span-2">
							<span className="text-[10px] md:text-[11px] uppercase tracking-[0.15em] text-light/40 block mb-2">
								Targeting
							</span>
							<h2 className="text-xl md:text-3xl font-bold tracking-tight mb-3">
								Context-aware hyper-targeting
							</h2>
							<p className="text-xs md:text-sm text-light/40 leading-relaxed">
								By analyzing behavior in real time, we figure out who to target and when. Users see
								relevant ads at the exact moment they matter.
							</p>
						</div>

						<div className="md:col-span-3">
							<div className="divide-y divide-edge/20">
								{useCases.map((uc) => (
									<div
										key={uc.who}
										className="py-4 md:py-5"
									>
										<span className="text-xs md:text-sm font-medium text-light/70 block mb-1">
											{uc.who}
										</span>
										<span className="text-xs md:text-sm text-light/35 leading-relaxed">
											... can {uc.how}
										</span>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* ── Publishers ── */}
			<section className="border-t border-edge/20 py-14 md:py-20">
				<div className="container mx-auto px-10 md:px-20">
					<p className="text-center text-[10px] md:text-[11px] uppercase tracking-[0.2em] text-light/12 mb-8">
						Publishers
					</p>
					<div className="flex flex-wrap gap-2 justify-center">
						{logoGrid.map((logo) => (
							<div
								key={logo.name}
								className={`${logo.span} flex items-center justify-center h-16 p-2 bg-light/5 rounded-xl flex-grow-0`}
							>
								<picture>
									{logo.lg && (
										<source
											srcSet={logo.lg}
											media="(min-width: 1024px)"
										/>
									)}
									{logo.md && (
										<source
											srcSet={logo.md}
											media="(min-width: 768px)"
										/>
									)}
									{logo.sm && (
										<source
											srcSet={logo.sm}
											media="(min-width: 640px)"
										/>
									)}
									<img
										src={logo.base}
										alt={logo.name}
										className="h-16 object-contain"
									/>
								</picture>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* ── Ad Placements ── */}
			<section
				id="placements"
				className="border-t border-edge/20 py-14 md:py-20"
			>
				<div className="container mx-auto px-10 md:px-20 overflow-hidden">
					<div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
						<div>
							<span className="text-[10px] md:text-[11px] uppercase tracking-[0.15em] text-light/40 block mb-2">
								Placements
							</span>
							<h2 className="text-xl md:text-3xl font-bold tracking-tight mb-3">
								Standard formats, premium inventory
							</h2>
							<p className="text-xs md:text-sm text-light/40 leading-relaxed">
								Standard IAB formats running across blockchain explorers, analytics dashboards, and
								crypto news sites.
							</p>
							{/* <button
                data-cal-namespace="growthmate"
                data-cal-link="growthmate-xyz/15min"
                className="flex items-center gap-1 text-xs text-primary/50 hover:text-primary transition-colors"
              >
                Request a media kit <ArrowRight className="w-3 h-3" />
              </button> */}
						</div>

						<div className="flex justify-center items-center">
							<div className="relative w-[375px] h-[320px] overflow-y-clip overflow-x-visible pt-20 max-w-[calc(100vw-5rem)]">
								<CardSwap
									cardDistance={25}
									verticalDistance={20}
									delay={6000}
									pauseOnHover={true}
									width={320}
									height={200}
									easing="elastic"
									skewAmount={4}
								>
									<Card customClass="rounded-xl overflow-hidden border border-edge/30 shadow-2xl shadow-black/40">
										<img
											src="/placement-1.png"
											alt="Ad placement example — crypto news"
											className="w-full h-full object-cover object-top"
										/>
									</Card>
									<Card customClass="rounded-xl overflow-hidden border border-edge/30 shadow-2xl shadow-black/40">
										<img
											src="/placement-2.png"
											alt="Ad placement example — financial platform"
											className="w-full h-full object-cover object-top"
										/>
									</Card>
									<Card customClass="rounded-xl overflow-hidden border border-edge/30 shadow-2xl shadow-black/40">
										<img
											src="/placement-3.png"
											alt="Ad placement example — blockchain explorer"
											className="w-full h-full object-cover object-top"
										/>
									</Card>
								</CardSwap>
								<div
									className="absolute bottom-0 left-0 right-0 h-full pointer-events-none z-10"
									style={{ background: "linear-gradient(180deg, #0a0d0600 90%, #0a0d06)" }}
								/>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* ── Contact ── */}
			<section
				id="contact"
				className="relative flex items-center justify-center overflow-hidden border-t border-edge/20 py-20 md:py-28"
			>
				<div className="absolute container inset-10 md:inset-20 z-0 !p-0 !w-auto">
					<div className="relative rounded-3xl overflow-hidden h-full w-full">
						<Silk
							color="#5dc064"
							speed={2}
							scale={0.5}
							noiseIntensity={1.5}
							rotation={-0.6}
						/>
					</div>
				</div>

				<div className="container z-10 mx-auto px-10 md:px-20 text-center max-w-lg">
					<h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight mb-4">
						Want to see how this works for your project?
					</h2>
					<p className="text-xs md:text-sm text-white leading-relaxed mb-10">
						We&apos;ll walk you through a sample targeting plan for your audience. We genuinely enjoy
						exploring new advertising use cases.
					</p>

					<button
						data-cal-namespace="growthmate"
						data-cal-link="growthmate-xyz/15min"
						className="inline-flex items-center gap-2 bg-white text-dark px-7 py-2.5 rounded-xl text-sm font-semibold hover:bg-white transition-all duration-300 hover:scale-[1.02]"
					>
						Book a Call <ArrowRight className="w-4 h-4" />
					</button>

					<div className="mt-5">
						<a
							href="mailto:contact@growthmate.xyz"
							className="text-[11px] bold text-white/80 hover:text-white transition-colors"
						>
							or email contact@growthmate.xyz
						</a>
					</div>
				</div>

				{/* Blur transition */}
				<div
					className="absolute bottom-0 left-0 right-0 h-full pointer-events-none z-10"
					style={{
						backdropFilter: "blur(16px)",
						WebkitBackdropFilter: "blur(16px)",
						maskImage: "radial-gradient(circle, transparent, black 100%)",
						WebkitMaskImage: "radial-gradient(circle, transparent, black)",
					}}
				/>
			</section>

			<Footer />
		</div>
	);
}
