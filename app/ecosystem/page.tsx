"use client"

import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

const Logo = () => (
  <svg width="73" height="65" viewBox="0 0 73 65" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
    <path
      d="M42.356 0.723179L68.0414 1.44634C70.7092 1.52143 72.8113 3.77427 72.7374 6.47812L72.0238 32.5141C72.02 32.6529 72.0048 32.7886 71.9796 32.9205C71.9732 32.9516 71.9695 32.9831 71.9688 33.0149L71.9499 33.6896C71.4651 51.3998 56.9077 65.3581 39.4358 64.8661C33.7429 64.7059 28.4429 63.0313 23.901 60.2336C23.589 60.0414 23.5853 59.5878 23.8887 59.3815C26.6692 57.4941 29.299 55.5946 31.8433 53.6406C31.9854 53.5314 32.1735 53.5063 32.3397 53.5718C34.629 54.475 37.1077 55.0015 39.7041 55.0744C51.841 55.4165 61.9532 45.7202 62.29 33.4176L62.5536 23.7988C62.4449 21.7293 59.9351 20.7016 58.4391 22.2072L57.0042 23.6516C39.5523 41.7994 28.5194 51.699 8.12304 63.4541C5.80333 64.7911 2.85355 63.9685 1.53459 61.6173C0.215624 59.2662 1.02694 56.2756 3.34666 54.9389C22.8451 43.7013 33.1649 34.4403 50.6436 16.2321L51.8169 14.9878C53.256 13.4616 52.2429 10.9284 50.1617 10.8487L43.7308 10.6023L40.9249 10.5233C28.788 10.1816 18.6759 19.8777 18.3388 32.1802C18.2791 34.3565 18.5294 36.4685 19.0489 38.4728C19.1021 38.678 19.0291 38.8963 18.8609 39.0225C16.4781 40.8101 14.0142 42.5428 11.3977 44.2696C11.1305 44.4459 10.7712 44.3294 10.6595 44.0268C9.27143 40.2636 8.56217 36.1715 8.67903 31.9083C9.1643 14.198 23.7214 0.239746 41.1932 0.731636L41.8649 0.750535C41.8958 0.751432 41.9268 0.749254 41.9574 0.745026C42.0874 0.726895 42.2205 0.719335 42.356 0.723179Z"
      fill="currentColor"
    />
  </svg>
)

const EcosystemLogo = ({ name, url }: { name: string; url: string }) => (
  <a
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    className="bg-light/5 rounded-2xl p-4 hover:bg-light/10 transition-colors group"
  >
    <div className="text-center">
      <div className="w-12 h-12 mx-auto mb-2 bg-light/10 rounded-lg flex items-center justify-center">
        <span className="text-xs font-mono">{name.slice(0, 3).toUpperCase()}</span>
      </div>
      <p className="text-sm font-medium">{name}</p>
    </div>
  </a>
)

export default function Ecosystem() {
  const supportedChains = [
    { name: "Base", url: "https://base.org" },
    { name: "Ethereum", url: "https://ethereum.org" },
    { name: "Polygon", url: "https://polygon.technology" },
    { name: "Arbitrum", url: "https://arbitrum.io" },
    { name: "Optimism", url: "https://optimism.io" },
    { name: "Binance", url: "https://bnbchain.world" },
  ]

  const partners = [
    { name: "Partner 1", url: "#" },
    { name: "Partner 2", url: "#" },
    { name: "Partner 3", url: "#" },
    { name: "Partner 4", url: "#" },
    { name: "Partner 5", url: "#" },
    { name: "Partner 6", url: "#" },
  ]

  const comingSoon = [{ name: "Routescan", url: "https://routescan.io" }]

  return (
    <div className="font-sans bg-dark text-light min-h-screen">
      <Header />

      <main className="pt-24 container mx-auto px-6 py-20">
        <h1 className="text-4xl md:text-5xl font-bold mb-12">Our Ecosystem</h1>

        {/* Supported Chains */}
        <section className="mb-12">
          <div className="bg-light/5 rounded-3xl p-8">
            <h2 className="text-2xl font-semibold mb-6 text-light/90">Supported Chains</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-6">
              {supportedChains.map((chain) => (
                <EcosystemLogo key={chain.name} name={chain.name} url={chain.url} />
              ))}
            </div>
            <p className="text-light/60 text-center">& many more</p>
          </div>
        </section>

        {/* Advertisers and Publishers */}
        <section className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-light/5 rounded-3xl p-8">
            <h2 className="text-2xl font-semibold mb-6 text-light/90">Advertisers & Publishers</h2>
            <div className="grid grid-cols-2 gap-4 mb-6">
              {partners.map((partner) => (
                <EcosystemLogo key={partner.name} name={partner.name} url={partner.url} />
              ))}
            </div>
            <p className="text-light/60 text-center">Growing ecosystem of Web3 partners</p>
          </div>

          <div className="bg-light/5 rounded-3xl p-8">
            <h2 className="text-2xl font-semibold mb-6 text-light/90">Coming Soon</h2>
            <div className="grid grid-cols-1 gap-4 mb-6">
              {comingSoon.map((partner) => (
                <EcosystemLogo key={partner.name} name={partner.name} url={partner.url} />
              ))}
            </div>
            <p className="text-light/60 text-center">More integrations in development</p>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <div className="bg-light/5 rounded-3xl p-8">
            <h2 className="text-2xl font-bold mb-4">Want to Join Our Ecosystem?</h2>
            <p className="text-light/80 mb-6">
              Whether you're an advertiser looking to reach Web3 users or a publisher wanting to monetize your audience,
              we'd love to work with you.
            </p>
            <a
              href="mailto:partnerships@growthmate.xyz"
              className="bg-primary text-dark px-6 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-colors inline-block"
            >
              Get in Touch
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
