"use client"

import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"

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
              Whether you&apos;re an advertiser looking to reach Web3 users or a publisher wanting to monetize your audience,
              we&apos;d love to work with you.
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
