"use client"

import { LogoWall } from "@/components/ui/logo-wall"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import Cal, { getCalApi } from "@calcom/embed-react"
import { ArrowRight, ExternalLink } from "lucide-react"
import type React from "react"
import { useEffect } from "react"

const advertiserDeckUrl =
  "https://docs.google.com/presentation/d/1uffmrZWWRdeA8EpOOxnHuGBlkHPDceOj2coEk4RF3U8/export?format=pdf"
const publisherDeckUrl =
  "https://docs.google.com/presentation/d/1nOwJK2pptSiqEfSMpV5wtTy_1fW4E9gNgAuTbA__u7A/export?format=pdf"

// :D

// Add Sofia Sans font
const SofiaSansFont = () => (
  <style jsx global>{`
    @import url('https://fonts.googleapis.com/css2?family=Sofia+Sans:ital,wght@0,1..1000;1,1..1000&display=swap');
    
    * {
      font-family: 'Sofia Sans', sans-serif;
    }
  `}</style>
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
      <SofiaSansFont />
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

        {/* <section
          id="demo"
          className="container mx-auto px-0 md:px-6 py-12 md:py-20 border-t md:border-t-0 border-light/10"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-8 md:mb-12 text-center px-4 md:px-0">
            Experience GrowthMate
          </h2>
          <div className="space-y-6 md:space-y-8">
            <div className="bg-transparent md:bg-light/5 rounded-none md:rounded-3xl p-4 md:p-8 relative mx-0 md:mx-auto">
              <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3">Smart Ad Targeting</h3>
              <p className="text-light/80 mb-4 md:mb-6 text-sm md:text-base">
                See how we optimize ad delivery in real-time
              </p>
              <div className="bg-dark/50 rounded-2xl min-h-[200px] md:min-h-[300px] flex items-center justify-center relative">
                <iframe
                  src="https://demo.growthmate.xyz/#/pure-ads"
                  className="w-full h-full min-h-[200px] md:min-h-[300px] rounded-2xl border-0"
                  title="GrowthMate Ad Targeting Demo"
                />
                <a
                  href="https://demo.growthmate.xyz/#/ads"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute top-4 right-4 bg-primary text-dark p-2 rounded-lg hover:bg-primary/90 transition-colors z-10"
                  title="Explore in new window"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div className="bg-transparent md:bg-light/5 rounded-none md:rounded-3xl p-4 md:p-8 relative mx-0 md:mx-auto">
              <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3">Personalized Discovery Agent</h3>
              <p className="text-light/80 mb-4 md:mb-6 text-sm md:text-base">
                Watch our AI curate personalized content feeds
              </p>
              <div className="bg-dark/50 rounded-2xl max-h-screen h-[700px] flex items-center justify-center relative">
                <iframe
                  src="https://chat.growthmate.xyz/?noFocus"
                  className="w-full h-full rounded-2xl border-0"
                  title="GrowthMate Discovery Agent Demo"
                />
                <a
                  href="https://chat.growthmate.xyz/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute top-4 right-4 bg-primary text-dark p-2 rounded-lg hover:bg-primary/90 transition-colors z-10"
                  title="Explore in new window"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </section> */}

        <section
          id="solutions"
          className="container mx-auto px-0 md:px-6 py-12 md:py-20 border-t md:border-t-0 border-light/10"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-8 md:mb-12 text-center px-4 md:px-0">
            Solutions for Your Business
          </h2>
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            <div className="bg-transparent md:bg-light/5 rounded-none md:rounded-3xl p-4 md:p-8 text-left md:text-center">
              <h3 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4">For Advertisers</h3>
              <p className="text-light/80 mb-4 md:mb-6 text-sm md:text-base">
                Reach the right users with AI-powered targeting based on on-chain activity. Increase engagement and ROI
                with precision ad delivery.
              </p>
              <img
                src="/advertiser-preview.png"
                alt="Advertiser Dashboard Preview"
                className="w-full h-auto rounded-2xl md:rounded-3xl mb-4 md:mb-6 mx-auto"
              />
              <div className="space-y-3 md:space-y-4 text-center">
                <a
                  href="https://app.growthmate.xyz/advertise"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary text-dark px-4 md:px-6 py-2.5 md:py-3 rounded-full font-semibold hover:bg-opacity-90 transition-colors inline-flex items-center gap-2 text-sm md:text-base"
                >
                  Start Advertising <ArrowRight className="w-4 h-4" />
                </a>
                <div>
                  <a
                    href={advertiserDeckUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary/80 transition-colors text-xs md:text-sm underline"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-transparent md:bg-light/5 rounded-none md:rounded-3xl p-4 md:p-8 text-left md:text-center">
              <h3 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4">For Publishers</h3>
              <p className="text-light/80 mb-4 md:mb-6 text-sm md:text-base">
                Monetize your platform with relevant, high-performing ads. Increase revenue while providing value to
                your users.
              </p>
              <img
                src="/publisher-preview.png"
                alt="Publisher Dashboard Preview"
                className="w-full h-auto rounded-2xl md:rounded-3xl mb-4 md:mb-6 mx-auto"
              />
              <div className="space-y-3 md:space-y-4 text-center">
                <a
                  href="https://app.growthmate.xyz/publish"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary text-dark px-4 md:px-6 py-2.5 md:py-3 rounded-full font-semibold hover:bg-opacity-90 transition-colors inline-flex items-center gap-2 text-sm md:text-base"
                >
                  Become a Publisher <ArrowRight className="w-4 h-4" />
                </a>
                <div>
                  <a    
                    href={publisherDeckUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary/80 transition-colors text-xs md:text-sm underline"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Temporarily removed sections - keeping as comments for future restoration */}
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
          <div className="flex flex-col md:flex-row gap-3 md:gap-4 justify-center mt-8 md:mt-12">
            <a
              href={advertiserDeckUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-dark px-6 md:px-8 py-2.5 md:py-3 rounded-full font-semibold text-base md:text-lg hover:bg-opacity-90 transition-colors inline-flex items-center gap-2"
            >
              Advertise with GrowthMate <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href={publisherDeckUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-light/10 text-light px-6 md:px-8 py-2.5 md:py-3 rounded-full font-semibold text-base md:text-lg hover:bg-light/20 transition-colors inline-flex items-center gap-2"
            >
              Publish with GrowthMate <ArrowRight className="w-4 h-4" />
            </a>
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
