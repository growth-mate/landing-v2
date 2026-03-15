import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Linkedin } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Team — GrowthMate",
	description: "Meet the team behind GrowthMate.",
};

const XIcon = ({ className }: { className?: string }) => (
	<svg
		viewBox="0 0 24 24"
		className={className}
		fill="currentColor"
	>
		<path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
	</svg>
);

const teamMembers = [
	{
		name: "Mohamed Ali Chelbi",
		role: "CTO & Secretary",
		description: "Developer, experience in Process Mining & analytics",
		image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ef610fc4-2df0-4af1-93c7-f8e0882f4129-iDui6i3rkhVINAchGi14rLRWQfSORM.png",
		linkedin: "https://www.linkedin.com/in/mohamed-ali-chelbi/",
		x: "https://x.com/0xchluff",
	},
	{
		name: "Ivan Dimitrov",
		role: "CFO",
		description: "PhD Candidate Blockchain Technology, expert in EVM development",
		image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/e4ce75cb-ca27-4e93-800b-ae6280cd23b2-83hmuiKxvdm5o7AQNO1nsbIR7q5WTC.png",
		linkedin: "https://www.linkedin.com/in/ivan0x/",
		x: "https://x.com/IvanE1E1",
	},
	{
		name: "Lennart Czardybon",
		role: "CEO",
		description: "Web3 Data Scientist, focus on Process Mining & Machine Learning",
		image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2fdc319e-e9b8-45fa-9344-0c38383cd492-ERkQyfakDDGHTxSesmY1cxaZQyHsOc.png",
		linkedin: "https://www.linkedin.com/in/lennart-czardybon/",
		x: "https://x.com/lennc2ar",
	},
	{
		name: "Maks Vukovic",
		role: "Advisor",
		description: "Expert in Web3 Sales, Marketing, and general Business Strategy",
		image: "https://pbs.twimg.com/profile_images/1824203316923863041/lyzyPI4N_400x400.jpg",
		linkedin: "https://www.linkedin.com/in/maks-vukovic/",
		x: "https://x.com/maksvuk",
	},
];

export default function TeamPage() {
	return (
		<div className="font-sans bg-dark text-light min-h-screen">
			<Header />

			<main className="pt-24 md:pt-28">
				<section className="container mx-auto px-6 py-12 md:py-16">
					<div className="max-w-3xl mx-auto mb-14 md:mb-20">
						<h1 className="text-2xl md:text-4xl font-bold tracking-tight mb-3">Team</h1>
						<p className="text-xs md:text-sm text-light/40 leading-relaxed max-w-md">
							The people building GrowthMate.
						</p>
					</div>

					<div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10 md:gap-x-8 md:gap-y-14 max-w-3xl mx-auto mb-16 md:mb-24">
						{teamMembers.map((member, index) => (
							<div
								key={index}
								className="flex flex-col items-center text-center"
							>
								<div className="w-24 h-24 md:w-32 md:h-32 rounded-2xl overflow-hidden mb-4 border border-edge/20">
									<img
										src={member.image || "/placeholder.svg"}
										alt={member.name}
										className="w-full h-full object-cover"
										loading="lazy"
									/>
								</div>
								<h3 className="text-sm md:text-base font-semibold mb-0.5 leading-tight">
									{member.name}
								</h3>
								<p className="text-[11px] md:text-xs text-primary/60 font-medium mb-1.5">
									{member.role}
								</p>
								<p className="text-[11px] md:text-xs text-light/40 leading-relaxed mb-3 max-w-[160px]">
									{member.description}
								</p>
								<div className="flex gap-2.5">
									<a
										href={member.linkedin}
										target="_blank"
										rel="noopener noreferrer"
										className="text-light/30 hover:text-primary/70 transition-colors"
										aria-label={`${member.name} on LinkedIn`}
									>
										<Linkedin className="w-3.5 h-3.5" />
									</a>
									<a
										href={member.x}
										target="_blank"
										rel="noopener noreferrer"
										className="text-light/30 hover:text-primary/70 transition-colors"
										aria-label={`${member.name} on X`}
									>
										<XIcon className="w-3.5 h-3.5" />
									</a>
								</div>
							</div>
						))}
					</div>

					<div className="max-w-3xl mx-auto border-t border-edge/20 py-12 md:py-16">
						<div className="container mx-auto px-10 md:px-20">
							<div className="grid grid-cols-3 gap-4 md:gap-6 w-2/3 mx-auto">
								<div className="rounded-xl">
									<img
										src="/rwth.png"
										alt="RWTH Aachen University"
										className="w-full h-full object-cover"
									/>
								</div>
								<div className="rounded-xl">
									<img
										src="/bocconi.png"
										alt="Bocconi University"
										className="w-full h-full object-cover"
									/>
								</div>
								<div className="rounded-xl">
									<img
										src="/ethz.png"
										alt="ETH Zurich University"
										className="w-full h-full object-cover"
									/>
								</div>
							</div>
						</div>
					</div>

					<div className="max-w-3xl mx-auto border-t border-edge/20 pt-12 md:pt-16">
						<div className="grid md:grid-cols-5 gap-6 md:gap-10">
							<div className="md:col-span-2">
								<h2 className="text-lg md:text-2xl font-bold tracking-tight mb-2">Previous Work</h2>
							</div>
							<div className="md:col-span-3 space-y-3">
								<p className="text-xs md:text-sm text-light/40 leading-relaxed">
									Prior to GrowthMate, our team conducted user behavior analytics for various Web3
									projects, including NEAR Foundation.
								</p>
								<p className="text-xs md:text-sm text-light/40 leading-relaxed">
									We used process mining techniques to identify bottlenecks, analyze user behavior
									around key dApp interactions, and track the movement of users and funds.
								</p>
								<p className="text-xs md:text-sm text-light/40 leading-relaxed">
									Our experience in tracing user actions is essential to the effectiveness of our
									targeting engine.
								</p>
							</div>
						</div>
					</div>
				</section>
			</main>

			<Footer />
		</div>
	);
}
