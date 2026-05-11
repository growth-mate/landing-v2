"use client";

import { useState } from "react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

type Cadence = "annual" | "quarterly";

type Tier = {
	id: string;
	name: string;
	desc: string;
	prices: Record<Cadence, string>;
	footnotes: Record<Cadence, string>;
	cta: string;
};

const TIERS: Tier[] = [
	{
		id: "dapp",
		name: "dApp",
		desc: "Single product Web3 apps with one frontend and a smaller user base.",
		prices: { annual: "$599", quarterly: "$749" },
		footnotes: {
			annual: "$7,188 billed annually. 3 month minimum on quarterly.",
			quarterly: "$2,247 billed quarterly. Switch to annual for 20% off.",
		},
		cta: "Start dApp",
	},
	{
		id: "protocol",
		name: "Protocol",
		desc: "Protocols running a product suite: main app, docs, bridge, staking, and more.",
		prices: { annual: "$1,919", quarterly: "$2,399" },
		footnotes: {
			annual: "$23,028 billed annually. 3 month minimum on quarterly.",
			quarterly: "$7,197 billed quarterly. Switch to annual for 20% off.",
		},
		cta: "Start Protocol",
	},
	{
		id: "ecosystem",
		name: "Ecosystem",
		desc: "L1s, L2s, gaming ecosystems, and foundations with many properties to index.",
		prices: { annual: "$4,399", quarterly: "$5,499" },
		footnotes: {
			annual: "$52,788 billed annually. 3 month minimum on quarterly.",
			quarterly: "$16,497 billed quarterly. Switch to annual for 20% off.",
		},
		cta: "Start Ecosystem",
	},
];

const ROWS: Array<
	| { kind: "group"; label: string }
	| { kind: "row"; label: string; values: [string, string, string]; num?: boolean; missing?: [boolean, boolean, boolean] }
> = [
	{ kind: "group", label: "Coverage" },
	{ kind: "row", label: "Domains indexed", values: ["1", "5", "Unlimited"], num: true },
	{ kind: "row", label: "Monthly visits", values: ["250K", "1.5M", "7.5M"], num: true },
	{ kind: "row", label: "Data refresh", values: ["Monthly", "Daily", "Daily"] },
	{ kind: "group", label: "Workspace" },
	{ kind: "row", label: "Dashboard seats included", values: ["2", "5", "12"], num: true },
	{
		kind: "row",
		label: "Ad network discount",
		values: ["Not included", "Not included", "$500/mo off"],
		missing: [true, true, false],
	},
	{ kind: "row", label: "Setup fee", values: ["$0", "$0", "$0"], num: true },
];

export default function PricingClient() {
	const [cadence, setCadence] = useState<Cadence>("annual");

	return (
		<div className="font-sans bg-dark text-light min-h-screen di-pricing">
			<Header />

			<main className="page">
				<header className="head">
					<div>
						<div className="eyebrow">Pricing, Domain Intelligence</div>
						<h1>User analytics, built for Web3.</h1>
					</div>
					<p className="hero-sub">
						Audience intelligence for the entire Web3 web, whether you want to research a competitor,
						scope an ecosystem, or get full visibility on your own users.
					</p>
				</header>

				{/* Section 1 — Access */}
				<div className="section-title">
					<span className="eb">01</span>
					<h2>Access</h2>
					<span className="desc">
						View the cross domain dashboards. Available to anyone, including individuals.
					</span>
				</div>

				<div
					className="seat-card"
					role="region"
					aria-label="Dashboard viewer seat"
				>
					<div className="price">
						<span className="amount">$60</span>
						<span className="per">/seat/mo</span>
					</div>
					<div className="copy">
						A <b>dashboard seat</b> gets you the full set of cross domain views without indexing your own
						site. Billed monthly, cancel anytime.
					</div>
					<button
						className="cta"
						type="button"
					>
						Get a seat
					</button>
				</div>

				<div className="between" />

				{/* Section 2 — Indexing */}
				<div className="section-title">
					<span className="eb">02</span>
					<h2>Indexing</h2>
					<span className="desc">
						Install a pixel on your own domains. See where your users came from and where they go next.
					</span>
				</div>

				<section
					className="card"
					aria-label="Domain indexing plans"
				>
					{/* Tier headers */}
					<div className="tiers">
						<div className="tier tier-meta">
							<span className="meta-eyebrow">Compare plans</span>
							<h3>What&apos;s included</h3>
							<p>
								All tiers share the same dashboard and data sources. Tiers differ in scale: domains
								indexed, monthly visits, and included seats.
							</p>
							<div
								className="toggle"
								role="tablist"
								aria-label="Billing cadence"
							>
								<button
									type="button"
									className={cadence === "annual" ? "on" : ""}
									onClick={() => setCadence("annual")}
								>
									Annual <span className="save">−20%</span>
								</button>
								<button
									type="button"
									className={cadence === "quarterly" ? "on" : ""}
									onClick={() => setCadence("quarterly")}
								>
									Quarterly
								</button>
							</div>
						</div>

						{TIERS.map((tier) => (
							<div
								key={tier.id}
								className="tier"
							>
								<div className="name">{tier.name}</div>
								<div className="desc">{tier.desc}</div>
								<div className="price">
									<span className="amount num">{tier.prices[cadence]}</span>
									<span className="per">/mo</span>
								</div>
								<div className="annual">{tier.footnotes[cadence]}</div>
								<button
									className="cta"
									type="button"
								>
									{tier.cta}
								</button>
							</div>
						))}
					</div>

					{/* Comparison rows */}
					<div className="rows">
						{ROWS.map((row, i) => {
							if (row.kind === "group") {
								return (
									<div
										key={`g-${i}`}
										className="group-label"
									>
										<div className="l">{row.label}</div>
									</div>
								);
							}
							return (
								<div
									key={`r-${i}`}
									className="row"
								>
									<div className="cell">{row.label}</div>
									{row.values.map((v, ci) => {
										const isMissing = row.missing?.[ci];
										return (
											<div
												key={ci}
												className={`cell${row.num ? " num" : ""}`}
											>
												{isMissing ? <span className="none">{v}</span> : v}
											</div>
										);
									})}
								</div>
							);
						})}
					</div>

					{/* Overage note */}
					<div className="foot">
						<span className="k">Overage</span>
						<span className="v">
							<b>1%</b> of monthly plan per 1% over visit cap, billed at period end. Pauses automatically
							at <b>+100%</b>.
						</span>
					</div>
				</section>

				<div className="belowfoot">
					<span>Prices in USD. Annual plans prepaid; quarterly is a 3 month commitment.</span>
					<span>
						<a href="mailto:contact@growthmate.xyz">Request a custom quote</a>
					</span>
				</div>
			</main>

			<Footer />

			<style jsx>{`
				.di-pricing {
					--fg-1: rgb(236 238 236 / 1);
					--fg-2: rgb(236 238 236 / 0.7);
					--fg-3: rgb(236 238 236 / 0.4);
					--fg-4: rgb(236 238 236 / 0.25);
					--fg-5: rgb(236 238 236 / 0.12);
					--bg-tint-1: rgb(236 238 236 / 0.05);
					--bg-tint-2: rgb(236 238 236 / 0.1);
					--border-2: rgb(36 53 24 / 0.3);
					--border-3: rgb(36 53 24 / 0.2);
					--gm-dark: #0a0d06;
					--gm-light: #eceeec;
					--gm-primary: #51d959;
					--gm-primary-dim: #28b630;
					--radius-lg: 12px;
					--radius-3xl: 22px;
					--text-eyebrow: 11px;
					--text-xs: 12px;
					--text-sm: 14px;
					--text-base: 16px;
					--text-xl: 20px;
					--text-2xl: 24px;
					--text-3xl: 30px;
					--tracking-tight: -0.022em;
					--tracking-eyebrow: 0.2em;
					--leading-relaxed: 1.55;
					--weight-medium: 500;
					--weight-semibold: 600;
					--weight-bold: 700;
					--ease-out: cubic-bezier(0.22, 1, 0.36, 1);
					--dur-fast: 200ms;
					--dur-base: 300ms;
				}

				.page {
					max-width: 1180px;
					margin: 0 auto;
					padding: 120px 24px 96px;
				}

				/* Heading */
				.head {
					display: grid;
					grid-template-columns: minmax(0, 2fr) minmax(0, 3fr);
					gap: 48px;
					align-items: end;
					padding: 0 8px 40px;
				}
				.head .eyebrow {
					font-size: var(--text-eyebrow);
					font-weight: var(--weight-medium);
					text-transform: uppercase;
					letter-spacing: var(--tracking-eyebrow);
					color: var(--fg-4);
					margin-bottom: 16px;
				}
				.head h1 {
					margin: 0;
					font-weight: var(--weight-bold);
					font-size: clamp(36px, 4.6vw, 60px);
					line-height: 1.05;
					letter-spacing: var(--tracking-tight);
				}
				.hero-sub {
					margin: 0;
					font-size: var(--text-xl);
					color: var(--fg-1);
					line-height: 1.3;
					max-width: 540px;
					padding-bottom: 6px;
					text-align: right;
					justify-self: end;
					font-weight: var(--weight-medium);
					letter-spacing: -0.005em;
				}

				/* Section title */
				.section-title {
					display: flex;
					align-items: baseline;
					gap: 14px;
					padding: 0 8px;
					margin-bottom: 18px;
					flex-wrap: wrap;
				}
				.section-title .eb {
					font-size: var(--text-eyebrow);
					font-weight: var(--weight-medium);
					text-transform: uppercase;
					letter-spacing: var(--tracking-eyebrow);
					color: var(--fg-4);
				}
				.section-title :global(h2) {
					margin: 0;
					font-weight: var(--weight-bold);
					font-size: var(--text-3xl);
					letter-spacing: var(--tracking-tight);
					line-height: 1.1;
					color: var(--fg-1);
				}
				.section-title .desc {
					font-size: var(--text-base);
					color: var(--fg-3);
					line-height: 1.4;
					margin-left: auto;
					max-width: 480px;
					text-align: right;
				}

				/* Viewer seat card */
				.seat-card {
					background: var(--bg-tint-1);
					border: 1px solid var(--border-3);
					border-radius: var(--radius-3xl);
					padding: 28px 36px;
					display: flex;
					align-items: center;
					gap: 28px;
					flex-wrap: wrap;
				}
				.seat-card .price {
					display: flex;
					align-items: baseline;
					gap: 6px;
					white-space: nowrap;
					flex: 0 0 auto;
					min-width: 240px;
				}
				.seat-card .price .amount {
					font-size: 38px;
					font-weight: var(--weight-bold);
					letter-spacing: var(--tracking-tight);
					color: var(--fg-1);
					line-height: 1;
					font-variant-numeric: tabular-nums;
				}
				.seat-card .price .per {
					font-size: var(--text-base);
					color: var(--fg-3);
				}
				.seat-card .copy {
					flex: 1 1 280px;
					font-size: var(--text-base);
					color: var(--fg-2);
					line-height: 1.45;
				}
				.seat-card .copy :global(b) {
					color: var(--fg-1);
					font-weight: var(--weight-semibold);
				}
				.seat-card .cta {
					display: inline-flex;
					align-items: center;
					justify-content: center;
					gap: 8px;
					height: 42px;
					padding: 0 18px;
					border-radius: var(--radius-lg);
					background: transparent;
					color: var(--fg-1);
					border: 1px solid var(--border-2);
					font-family: inherit;
					font-weight: var(--weight-semibold);
					font-size: var(--text-base);
					letter-spacing: -0.005em;
					cursor: pointer;
					transition: transform var(--dur-base) var(--ease-out),
						background var(--dur-fast) var(--ease-out);
					white-space: nowrap;
				}
				.seat-card .cta:hover {
					background: var(--bg-tint-2);
					transform: scale(1.02);
				}

				.between {
					height: 64px;
				}

				/* Indexing card */
				.card {
					background: var(--bg-tint-1);
					border: 1px solid var(--border-3);
					border-radius: var(--radius-3xl);
					overflow: hidden;
				}

				/* Tier header row */
				.tiers {
					display: grid;
					grid-template-columns: minmax(240px, 1.1fr) repeat(3, minmax(0, 1fr));
					border-bottom: 1px solid var(--border-3);
				}
				.tier {
					padding: 36px 28px 32px;
					display: flex;
					flex-direction: column;
					gap: 14px;
					border-left: 1px solid var(--border-3);
					position: relative;
					min-width: 0;
				}
				.tier-meta {
					border-left: none;
					padding-left: 36px;
					padding-right: 32px;
				}
				.tier .name {
					font-size: var(--text-2xl);
					font-weight: var(--weight-semibold);
					letter-spacing: var(--tracking-tight);
					color: var(--fg-1);
				}
				.tier .desc {
					font-size: var(--text-sm);
					color: var(--fg-3);
					line-height: var(--leading-relaxed);
					min-height: 66px;
				}
				.tier .price {
					display: flex;
					align-items: baseline;
					gap: 6px;
					margin-top: 6px;
					white-space: nowrap;
				}
				.tier .price .amount {
					font-size: 38px;
					font-weight: var(--weight-bold);
					letter-spacing: var(--tracking-tight);
					color: var(--fg-1);
					line-height: 1;
				}
				.tier .price .per {
					font-size: var(--text-base);
					color: var(--fg-3);
				}
				.tier .annual {
					font-size: var(--text-xs);
					color: var(--fg-4);
					line-height: 1.5;
					min-height: 36px;
				}
				.tier .annual :global(b) {
					color: var(--fg-2);
					font-weight: var(--weight-semibold);
				}
				.tier .cta {
					margin-top: 8px;
					display: inline-flex;
					align-items: center;
					justify-content: center;
					gap: 8px;
					height: 42px;
					padding: 0 18px;
					border-radius: var(--radius-lg);
					background: transparent;
					color: var(--fg-1);
					border: 1px solid var(--border-2);
					font-weight: var(--weight-semibold);
					font-size: var(--text-base);
					letter-spacing: -0.005em;
					transition: transform var(--dur-base) var(--ease-out),
						background var(--dur-fast) var(--ease-out);
					cursor: pointer;
					font-family: inherit;
				}
				.tier .cta:hover {
					background: var(--bg-tint-2);
					transform: scale(1.02);
				}

				.num {
					font-variant-numeric: tabular-nums;
				}

				.meta-eyebrow {
					font-size: var(--text-eyebrow);
					font-weight: var(--weight-medium);
					text-transform: uppercase;
					letter-spacing: var(--tracking-eyebrow);
					color: var(--fg-4);
				}
				.tier-meta :global(h3) {
					margin: 0;
					font-weight: var(--weight-bold);
					font-size: var(--text-2xl);
					letter-spacing: var(--tracking-tight);
					line-height: 1.15;
				}
				.tier-meta :global(p) {
					margin: 0;
					font-size: var(--text-base);
					color: var(--fg-3);
					line-height: var(--leading-relaxed);
				}

				.toggle {
					margin-top: auto;
					display: inline-flex;
					padding: 4px;
					background: rgb(0 0 0 / 0.25);
					border: 1px solid var(--border-3);
					border-radius: 999px;
					font-size: var(--text-sm);
					color: var(--fg-3);
					width: max-content;
				}
				.toggle :global(button) {
					appearance: none;
					border: none;
					background: transparent;
					color: inherit;
					font: inherit;
					padding: 7px 16px;
					border-radius: 999px;
					cursor: pointer;
					letter-spacing: 0.01em;
					transition: color var(--dur-fast) var(--ease-out),
						background var(--dur-fast) var(--ease-out);
				}
				.toggle :global(button.on) {
					background: var(--gm-light);
					color: var(--gm-dark);
					font-weight: var(--weight-semibold);
				}
				.toggle :global(.save) {
					font-size: 11px;
					color: var(--gm-primary);
					margin-left: 6px;
					font-weight: var(--weight-semibold);
				}
				.toggle :global(button.on .save) {
					color: var(--gm-primary-dim);
				}

				/* Comparison rows */
				.rows {
					padding: 8px 0;
				}
				.group-label {
					display: grid;
					grid-template-columns: minmax(240px, 1.1fr) repeat(3, minmax(0, 1fr));
					padding: 26px 0 10px;
				}
				.group-label .l {
					grid-column: 1 / -1;
					padding: 0 36px;
					font-size: var(--text-eyebrow);
					font-weight: var(--weight-medium);
					text-transform: uppercase;
					letter-spacing: var(--tracking-eyebrow);
					color: var(--fg-5);
				}

				.row {
					display: grid;
					grid-template-columns: minmax(240px, 1.1fr) repeat(3, minmax(0, 1fr));
					align-items: center;
					border-top: 1px solid var(--border-3);
					transition: background var(--dur-fast) var(--ease-out);
				}
				.row:hover {
					background: rgb(236 238 236 / 0.025);
				}
				.cell {
					padding: 20px 32px;
					font-size: var(--text-base);
					color: var(--fg-2);
					border-left: 1px solid var(--border-3);
					min-height: 60px;
					display: flex;
					align-items: center;
				}
				.cell:first-child {
					border-left: none;
					padding-left: 36px;
					color: var(--fg-1);
					font-weight: var(--weight-medium);
					letter-spacing: -0.005em;
				}
				.cell .none {
					color: var(--fg-5);
					font-size: var(--text-sm);
				}

				/* Footer notes */
				.foot {
					padding: 24px 36px;
					border-top: 1px solid var(--border-3);
					display: flex;
					align-items: center;
					gap: 16px;
					flex-wrap: wrap;
				}
				.foot .k {
					font-size: var(--text-eyebrow);
					text-transform: uppercase;
					letter-spacing: var(--tracking-eyebrow);
					font-weight: var(--weight-medium);
					color: var(--fg-4);
				}
				.foot .v {
					font-size: var(--text-sm);
					color: var(--fg-3);
					line-height: var(--leading-relaxed);
				}
				.foot .v :global(b) {
					color: var(--fg-2);
					font-weight: var(--weight-semibold);
				}

				/* Below card */
				.belowfoot {
					margin-top: 28px;
					display: flex;
					justify-content: space-between;
					align-items: center;
					padding: 0 8px;
					font-size: var(--text-sm);
					color: var(--fg-4);
					gap: 24px;
					flex-wrap: wrap;
				}
				.belowfoot :global(a) {
					color: var(--fg-3);
					transition: color var(--dur-fast) var(--ease-out);
					border-bottom: 1px solid var(--border-3);
					padding-bottom: 1px;
				}
				.belowfoot :global(a:hover) {
					color: var(--gm-primary);
					border-color: var(--gm-primary);
				}

				/* Responsive */
				@media (max-width: 880px) {
					.head {
						grid-template-columns: 1fr;
						gap: 16px;
						align-items: start;
					}
					.hero-sub {
						text-align: left;
						justify-self: start;
					}
					.section-title .desc {
						margin-left: 0;
						text-align: left;
						width: 100%;
					}
					.tiers {
						grid-template-columns: 1fr;
					}
					.tier {
						border-left: none;
						border-top: 1px solid var(--border-3);
					}
					.tier-meta {
						border-top: none;
					}
					.group-label,
					.row {
						grid-template-columns: 1fr 1fr;
					}
					.group-label .l {
						padding: 0 20px;
					}
					.cell {
						padding: 14px 20px;
						min-height: 48px;
					}
					.cell:first-child {
						padding-left: 20px;
						grid-column: 1 / -1;
						font-size: var(--text-sm);
						text-transform: uppercase;
						letter-spacing: var(--tracking-eyebrow);
						color: var(--fg-4);
						font-weight: var(--weight-medium);
						min-height: 0;
						padding-top: 14px;
						padding-bottom: 4px;
					}
					.cell {
						border-left: none;
					}
				}
			`}</style>
		</div>
	);
}
