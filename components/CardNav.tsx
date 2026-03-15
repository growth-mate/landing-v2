"use client";

import React, { useState, useCallback, useRef, useEffect } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import SpotlightCard from "@/components/SpotlightCard";

export interface CardNavLink {
	label: string;
	href: string;
	external?: boolean;
}

export interface CardNavCard {
	title: string;
	links: CardNavLink[];
}

export type CardNavSlot = "burger" | "logo" | "cta" | "empty";

export interface CardNavProps {
	direction?: "down" | "up";
	cards: CardNavCard[];
	logo?: React.ReactNode;
	cta?: React.ReactNode;
	slotOrder?: [CardNavSlot, CardNavSlot, CardNavSlot];
	className?: string;
}

const COLS: Record<number, string> = {
	1: "sm:grid-cols-1",
	2: "sm:grid-cols-2",
	3: "sm:grid-cols-3",
	4: "sm:grid-cols-4",
};

export function CardNav({
	direction = "down",
	cards,
	logo,
	cta,
	slotOrder = ["burger", "logo", "cta"],
	className = "",
}: CardNavProps) {
	const [expanded, setExpanded] = useState(false);
	const [showCards, setShowCards] = useState(false);
	const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

	const clear = useCallback(() => {
		timers.current.forEach(clearTimeout);
		timers.current = [];
	}, []);

	useEffect(() => clear, [clear]);

	const open = useCallback(() => {
		clear();
		setExpanded(true);
		timers.current.push(setTimeout(() => setShowCards(true), 220));
	}, [clear]);

	const close = useCallback(() => {
		clear();
		setShowCards(false);
		timers.current.push(setTimeout(() => setExpanded(false), 380));
	}, [clear]);

	const toggle = useCallback(() => {
		if (expanded) close();
		else open();
	}, [expanded, open, close]);

	const renderSlot = (slot: CardNavSlot) => {
		switch (slot) {
			case "burger":
				return (
					<button
						onClick={toggle}
						className="relative w-5 h-5 px-4 text-light/50 hover:text-light transition-colors"
						aria-label={expanded ? "Close menu" : "Open menu"}
					>
						<Menu
							className={`w-4 h-4 absolute inset-0 m-auto transition-all duration-300 ${
								expanded ? "opacity-0 rotate-90 scale-75" : "opacity-100 rotate-0 scale-100"
							}`}
						/>
						<X
							className={`w-4 h-4 absolute inset-0 m-auto transition-all duration-300 ${
								expanded ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-90 scale-75"
							}`}
						/>
					</button>
				);
			case "logo":
				return <>{logo}</>;
			case "cta":
				return <>{cta}</>;
			case "empty":
				return null;
		}
	};

	const cardsContent = (
		<div
			className={`grid transition-[grid-template-rows] duration-300 ease-out ${
				expanded ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
			}`}
		>
			<div className="overflow-hidden min-h-0">
				<div
					className={`grid grid-cols-1 ${COLS[cards.length] ?? "sm:grid-cols-3"} gap-2 ${
						direction === "down" ? "pt-3" : "pb-3"
					}`}
				>
					{cards.map((card, i) => (
						<div
							key={card.title}
							className="bg-dark/60 border border-edge/15 rounded-2xl p-4 transition-all duration-300 ease-out"
							style={{
								transitionDelay: showCards ? `${i * 60}ms` : `${(cards.length - 1 - i) * 50}ms`,
								opacity: showCards ? 1 : 0,
								transform: showCards
									? "translateY(0) scale(1)"
									: `translateY(${direction === "down" ? "-8px" : "8px"}) scale(0.97)`,
							}}
						>
							<h3 className="text-xs font-semibold text-light/70 mb-3">{card.title}</h3>
							<div className="space-y-1.5">
								{card.links.map((link) => {
									const inner = (
										<>
											<ArrowUpRight className="w-2.5 h-2.5 shrink-0" />
											{link.label}
										</>
									);

									return link.external ? (
										<a
											key={link.label}
											href={link.href}
											target="_blank"
											rel="noopener noreferrer"
											className="flex items-center gap-1.5 text-[11px] text-light/30 hover:text-primary transition-colors"
											onClick={close}
										>
											{inner}
										</a>
									) : (
										<Link
											key={link.label}
											href={link.href}
											className="flex items-center gap-1.5 text-[11px] text-light/30 hover:text-primary transition-colors"
											onClick={close}
										>
											{inner}
										</Link>
									);
								})}
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);

	return (
		<div
			onMouseEnter={open}
			onMouseLeave={close}
			className={className}
		>
			<SpotlightCard
				spotlightColor="rgba(139, 195, 74, 0.08)"
				className={`backdrop-blur-2xl bg-dark/50 border border-edge/30 rounded-3xl p-2 transition-colors duration-300 ${
					expanded ? "border-edge/40" : ""
				}`}
			>
				{direction === "up" && cardsContent}

				<div className="flex items-center justify-between">
					<div className="flex-1 flex justify-start">{renderSlot(slotOrder[0])}</div>
					<div className="flex-1 flex justify-center items-center">{renderSlot(slotOrder[1])}</div>
					<div className="flex-1 flex justify-end items-center">{renderSlot(slotOrder[2])}</div>
				</div>

				{direction === "down" && cardsContent}
			</SpotlightCard>
		</div>
	);
}
