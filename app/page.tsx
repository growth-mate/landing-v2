"use client"

import { LogoWall } from "@/components/ui/logo-wall"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import Cal, { getCalApi } from "@calcom/embed-react"
import { ArrowRight } from "lucide-react"
import type React from "react"
import { useEffect } from "react"

// :D

const DemoCard = ({
  title,
  description,
  children,
  exploreUrl,
  height = "min-h-[300px]",
}: {
  title: string
  description: string
  children: React.ReactNode
  exploreUrl: string
  height?: string
}) => (
  <div className="bg-light/5 rounded-3xl p-6 md:p-8">
    <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-3">{title}</h3>
    <p className="text-light/80 mb-4 md:mb-6">{description}</p>
    <div className={`bg-light/10 rounded-2xl p-3 md:p-4 ${height} flex items-center justify-center relative overflow-hidden`}>
      {children}
      <a
        href={exploreUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute top-2 md:top-3 right-2 md:right-3 bg-primary text-dark px-3 md:px-4 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-semibold hover:bg-opacity-90 transition-colors z-10"
      >
        Explore
      </a>
    </div>
  </div>
)

export default function Home() {
  useEffect(() => {
    ;(async () => {
      const cal = await getCalApi({ namespace: "15min" })
      cal("ui", {
        theme: "dark",
        cssVarsPerTheme: { light: { "cal-brand": "#8cb88c" }, dark: { "cal-brand": "#c2f0c2" } },
        hideEventTypeDetails: true,
        layout: "month_view",
      })
    })()
  }, [])

  return (
    <div className="font-sans bg-dark text-light min-h-screen">
      <Header />

      <main className="pt-20 md:pt-24">
        <section className="container mx-auto px-4 md:px-6 py-12 md:py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-6xl font-bold mb-3 md:mb-4">AI-Powered Web3 Targeting</h1>
            <p className="text-lg md:text-xl mb-6 md:mb-8 text-light/80">
              Optimize engagement with precision targeting based on on-chain activity
            </p>
            <a
              href="https://app.growthmate.xyz"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-dark px-6 md:px-8 py-2.5 md:py-3 rounded-full font-semibold text-base md:text-lg hover:bg-opacity-90 transition-colors inline-flex items-center gap-2"
            >
              Launch App <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div className="my-[-40px] md:my-[-60px] rounded-3xl overflow-hidden hidden md:block">
            <img
              src="/scene-1.gif"
              alt="GrowthMate Demo"
              className="w-full rounded-3xl"
              style={{
                clipPath: "inset(60px 0 60px 0)",
              }}
            />
          </div>
        </section>

        <section className="py-8 md:py-12 border-y border-light/10 overflow-hidden">
          <div className="container mx-auto px-0 md:px-6">
            <div className="text-center mb-4 md:mb-6 px-4 md:px-0">
              <h2 className="text-2xl md:text-3xl font-bold text-center">Our Partners</h2>
            </div>
            <div className="relative -my-6">
              <LogoWall src="/partners.png" alt="GrowthMate Partners" className="h-full" height={80} speed={60} />
              {/* Left gradient overlay */}
              <div className="absolute top-0 left-0 w-8 md:w-16 h-full bg-gradient-to-r from-[#080908] to-transparent pointer-events-none z-10" />
              {/* Right gradient overlay */}
              <div className="absolute top-0 right-0 w-8 md:w-16 h-full bg-gradient-to-l from-[#080908] to-transparent pointer-events-none z-10" />
            </div>
          </div>
        </section>

        {/* Temporarily removed sections - keeping as comments for future restoration */}
        {/* 
        <section id="features" className="container mx-auto px-6 py-20">
          <h2 className="text-3xl font-bold mb-12 text-center">Why Choose GrowthMate</h2>
          // Features content here
        </section>
        */}

        <section id="demo" className="container mx-auto px-4 md:px-6 py-12 md:py-20">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-center">Live Demo</h2>
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            <DemoCard
              title="Advertiser Dashboard"
              description="Create targeted campaigns based on on-chain activity and user behavior patterns."
              exploreUrl="https://app.growthmate.xyz/advertiser/demo"
            >
              <iframe
                src="https://app.growthmate.xyz/advertiser/demo"
                className="w-full h-full rounded-lg border-0"
                sandbox="allow-scripts allow-same-origin"
                loading="lazy"
              />
            </DemoCard>
            <DemoCard
              title="Publisher Dashboard"
              description="Monetize your platform with relevant, high-converting Web3 advertisements."
              exploreUrl="https://app.growthmate.xyz/publisher/demo"
            >
              <iframe
                src="https://app.growthmate.xyz/publisher/demo"
                className="w-full h-full rounded-lg border-0"
                sandbox="allow-scripts allow-same-origin"
                loading="lazy"
              />
            </DemoCard>
          </div>
        </section>

        <section id="solutions" className="container mx-auto px-4 md:px-6 py-12 md:py-20">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-center">Solutions</h2>
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            <DemoCard
              title="For Advertisers"
              description="Reach users who actually engage with DeFi, NFTs, and Web3 applications."
              exploreUrl="https://app.growthmate.xyz/advertiser"
              height="min-h-[200px] md:min-h-[250px]"
            >
              <img
                src="/advertiser-preview.png"
                alt="Advertiser Dashboard Preview"
                className="w-full h-full object-cover rounded-lg"
              />
            </DemoCard>
            <DemoCard
              title="For Publishers"
              description="Monetize your traffic with ads that your Web3-savvy audience will actually click."
              exploreUrl="https://app.growthmate.xyz/publisher"
              height="min-h-[200px] md:min-h-[250px]"
            >
              <img
                src="/publisher-preview.png"
                alt="Publisher Dashboard Preview"
                className="w-full h-full object-cover rounded-lg"
              />
            </DemoCard>
          </div>
        </section>

        {/* 
        <section id="testimonials" className="container mx-auto px-6 py-20">
          <h2 className="text-3xl font-bold mb-12 text-center">What Our Clients Say</h2>
          // Testimonials content here
        </section>

        <section id="faq" className="container mx-auto px-6 py-20">
          <h2 className="text-3xl font-bold mb-12 text-center">Common Questions</h2>
          // FAQ content here
        </section>
        */}

        <section
          id="contact"
          className="container mx-auto px-4 md:px-6 py-12 md:py-20 border-t md:border-t-0 border-light/10"
        >
          <div className="bg-transparent md:bg-light/5 rounded-2xl md:rounded-3xl md:p-12 text-left md:text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">Ready to Enhance Your Targeting?</h2>
            <p className="text-lg md:text-xl mb-6 md:mb-8 text-light/80">Schedule a personalized demo with our team</p>
            <Cal
              namespace="15min"
              calLink="growthmate-xyz/15min"
              className="w-full h-full max-h-[550px] md:max-h-none overflow-scroll rounded-2xl"
              config={{ layout: "month_view", theme: "dark" }}
            />
          </div>
        </section>
      </main>

      <Footer />

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </div>
  )
}
