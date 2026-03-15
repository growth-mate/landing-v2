import { Calendar, Github, Send, Twitter, Mail } from "lucide-react";
import Link from "next/link";

const advertiserDeckUrl =
	"https://docs.google.com/presentation/d/1uffmrZWWRdeA8EpOOxnHuGBlkHPDceOj2coEk4RF3U8/export?format=pdf";

export function Footer() {
	return (
		<footer className="border-t border-edge/30">
			<div className="mx-auto pt-12 md:pt-20 pb-8 md:pb-12">
				<div className="container flex justify-start mb-10 md:mb-14">
					<img
						src="/logo.svg"
						alt="GrowthMate"
						className="h-20 md:h-32 lg:h-44 opacity-[0.06]"
					/>
				</div>

				<div className="container grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-12 md:mb-16">
					<div>
						<h4 className="text-[11px] uppercase tracking-[0.15em] text-light/25 mb-4">Product</h4>
						<div className="space-y-2 text-sm">
							<a
								href="#placements"
								className="block text-light/40 hover:text-primary transition-colors duration-200"
							>
								Ad Placements
							</a>
							<a
								href="#targeting"
								className="block text-light/40 hover:text-primary transition-colors duration-200"
							>
								Targeting
							</a>
							<a
								href="#contact"
								className="block text-light/40 hover:text-primary transition-colors duration-200"
							>
								Pricing
							</a>
						</div>
					</div>

					<div>
						<h4 className="text-[11px] uppercase tracking-[0.15em] text-light/25 mb-4">Resources</h4>
						<div className="space-y-2 text-sm">
							<a
								href={advertiserDeckUrl}
								target="_blank"
								rel="noopener noreferrer"
								className="block text-light/40 hover:text-primary transition-colors duration-200"
							>
								Advertiser Deck
							</a>
							<Link
								href="/blog"
								className="block text-light/40 hover:text-primary transition-colors duration-200"
							>
								Blog
							</Link>
						</div>
					</div>

					<div>
						<h4 className="text-[11px] uppercase tracking-[0.15em] text-light/25 mb-4">Company</h4>
						<div className="space-y-2 text-sm">
							<Link
								href="/team"
								className="block text-light/40 hover:text-primary transition-colors duration-200"
							>
								Team
							</Link>
							<a
								href="mailto:contact@growthmate.xyz"
								className="block text-light/40 hover:text-primary transition-colors duration-200"
							>
								Contact
							</a>
						</div>
					</div>

					<div>
						<h4 className="text-[11px] uppercase tracking-[0.15em] text-light/25 mb-4">Connect</h4>
						<div className="flex gap-3">
							<a
								href="mailto:contact@growthmate.xyz"
								className="text-light/25 hover:text-primary transition-colors duration-200"
							>
								<Mail className="w-4 h-4" />
							</a>
							<a
								href="https://cal.com/growthmate-xyz"
								target="_blank"
								rel="noopener noreferrer"
								className="text-light/25 hover:text-primary transition-colors duration-200"
							>
								<Calendar className="w-4 h-4" />
							</a>
							<a
								href="https://t.me/lennczar"
								target="_blank"
								rel="noopener noreferrer"
								className="text-light/25 hover:text-primary transition-colors duration-200"
							>
								<Send className="w-4 h-4" />
							</a>
							<a
								href="https://github.com/growth-mate"
								target="_blank"
								rel="noopener noreferrer"
								className="text-light/25 hover:text-primary transition-colors duration-200"
							>
								<Github className="w-4 h-4" />
							</a>
							<a
								href="https://x.com/growthmate_xyz"
								target="_blank"
								rel="noopener noreferrer"
								className="text-light/25 hover:text-primary transition-colors duration-200"
							>
								<Twitter className="w-4 h-4" />
							</a>
						</div>
					</div>
				</div>

				<div className="border-t border-edge/30" />

				<div className="container pt-6 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-light/25">
					<span>&copy; {new Date().getFullYear()} GrowthMate. All rights reserved.</span>
					<div className="flex gap-4">
						<a
							href="https://cdn.growthmate.xyz/tos.html"
							target="_blank"
							rel="noopener noreferrer"
							className="hover:text-primary transition-colors duration-200"
						>
							Terms of Service
						</a>
						<a
							href="https://cdn.growthmate.xyz/privacy-policy.html"
							target="_blank"
							rel="noopener noreferrer"
							className="hover:text-primary transition-colors duration-200"
						>
							Privacy Policy
						</a>
					</div>
				</div>
			</div>

			<div className="md:hidden h-10"></div>
		</footer>
	);
}
