import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Team | GrowthMate",
  description: "Meet the experienced team behind GrowthMate's AI-powered Web3 targeting platform",
}

const XIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
)

const teamMembers = [
  {
    name: "Mohamed Ali Chelbi",
    role: "CTO & Secretary",
    description: "Developer, experience in Process Mining & analytics",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ef610fc4-2df0-4af1-93c7-f8e0882f4129-iDui6i3rkhVINAchGi14rLRWQfSORM.png",
    linkedin: "https://www.linkedin.com/in/mohamed-ali-chelbi/",
    x: "https://x.com/0xchluff",
  },
  {
    name: "Ivan Dimitrov",
    role: "CFO",
    description: "PhD Candidate Blockchain Technology, expert in EVM development",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/e4ce75cb-ca27-4e93-800b-ae6280cd23b2-83hmuiKxvdm5o7AQNO1nsbIR7q5WTC.png",
    linkedin: "https://www.linkedin.com/in/ivan0x/",
    x: "https://x.com/IvanE1E1",
  },
  {
    name: "Lennart Czardybon",
    role: "CEO",
    description: "Web3 Data Scientist, focus on Process Mining & Machine Learning",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2fdc319e-e9b8-45fa-9344-0c38383cd492-ERkQyfakDDGHTxSesmY1cxaZQyHsOc.png",
    linkedin: "https://www.linkedin.com/in/lennart-czardybon/",
    x: "https://x.com/lennc2ar",
  },
]

export default function TeamPage() {
  return (
    <div className="font-sans bg-dark text-light min-h-screen">
      <Header />

      <main className="pt-20 md:pt-24">
        <section className="container mx-auto px-4 md:px-6 py-12 md:py-20">
          <div className="max-w-4xl mx-auto text-center mb-12 md:mb-16">
            <h1 className="text-2xl md:text-4xl font-bold mb-4">Experienced Team</h1>
          </div>

          <div className="grid md:grid-cols-3 gap-8 md:gap-12 max-w-6xl mx-auto mb-16 md:mb-20">
            {teamMembers.map((member, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="w-48 h-48 md:w-64 md:h-64 rounded-3xl overflow-hidden mb-6 bg-light/5">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <h3 className="text-xl md:text-2xl font-semibold mb-2">{member.name}</h3>
                <p className="text-primary font-semibold mb-3">{member.role}</p>
                <p className="text-light/70 text-sm md:text-base mb-4">{member.description}</p>
                <div className="flex gap-3">
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-light/60 hover:text-primary transition-colors"
                    aria-label={`${member.name} on LinkedIn`}
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href={member.x}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-light/60 hover:text-primary transition-colors"
                    aria-label={`${member.name} on X`}
                  >
                    <XIcon className="w-5 h-5" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="max-w-4xl mx-auto bg-light/5 rounded-3xl p-6 md:p-10">
            <h2 className="text-2xl md:text-4xl font-bold mb-6 text-center">Previous Work</h2>
            <div className="space-y-4 mb-8">
              <p className="text-light/80 text-sm md:text-base leading-relaxed">
                Prior to GrowthMate, our team has been conducting User Behavior Analytics for various web3 projects,
                including NEAR Foundation.
              </p>
              <p className="text-light/80 text-sm md:text-base leading-relaxed">
                We used process mining techniques to identify bottlenecks, analyze user behavior around key dApp
                interactions, and track the movement of users and funds.
              </p>
              <p className="text-light/80 text-sm md:text-base leading-relaxed">
                Our previous experience in tracing user actions is essential to today's effectiveness of our
                recommendation engine.
              </p>
            </div>
            <div className="flex justify-center">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-dark font-semibold">
                <a href="#">More About Us</a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}