"use client"

import { LogoWall } from "@/components/ui/logo-wall"
import Cal, { getCalApi } from "@calcom/embed-react"
import { ArrowRight, Calendar, ExternalLink, Github, Mail, Send, Twitter } from "lucide-react"
import type React from "react"
import { useEffect } from "react"
import { createMetadata } from '@/lib/metadata'

export const metadata = createMetadata({
  title: 'GrowthMate - Web3 Ads & Discovery',
  description: 'Optimize engagement with precision targeting based on on-chain activity. Advanced AI-powered Web3 advertising platform connecting advertisers and publishers in the decentralized ecosystem.',
})

const advertiserDeckUrl = "https://docs.google.com/presentation/d/1uffmrZWWRdeA8EpOOxnHuGBlkHPDceOj2coEk4RF3U8/export?format=pdf"
const publisherDeckUrl = "https://docs.google.com/presentation/d/1nOwJK2pptSiqEfSMpV5wtTy_1fW4E9gNgAuTbA__u7A/export?format=pdf"
const discoveryDeckUrl = "https://docs.google.com/presentation/d/15vLp6EXiRfI58zAJfMNB-GeH8C3r7JixKRSXx_OPgK8/export?format=pdf"
const brandKitUrl = "https://drive.google.com/drive/folders/12wWdK4s3LpUx8PY8QDqLGTh3J4g8Tps6?usp=sharing"

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

const Logo = () => (
  <svg width="73" height="65" viewBox="0 0 73 65" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
    <path
      d="M42.356 0.723179L68.0414 1.44634C70.7092 1.52143 72.8113 3.77427 72.7374 6.47812L72.0238 32.5141C72.02 32.6529 72.0048 32.7886 71.9796 32.9205C71.9732 32.9516 71.9695 32.9831 71.9688 33.0149L71.9499 33.6896C71.4651 51.3998 56.9077 65.3581 39.4358 64.8661C33.7429 64.7059 28.4429 63.0313 23.901 60.2336C23.589 60.0414 23.5853 59.5878 23.8887 59.3815C26.6692 57.4941 29.299 55.5946 31.8433 53.6406C31.9854 53.5314 32.1735 53.5063 32.3397 53.5718C34.629 54.475 37.1077 55.0015 39.7041 55.0744C51.841 55.4165 61.9532 45.7202 62.29 33.4176L62.5536 23.7988C62.4449 21.7293 59.9351 20.7016 58.4391 22.2072L57.0042 23.6516C39.5523 41.7994 28.5194 51.699 8.12304 63.4541C5.80333 64.7911 2.85355 63.9685 1.53459 61.6173C0.215624 59.2662 1.02694 56.2756 3.34666 54.9389C22.8451 43.7013 33.1649 34.4403 50.6436 16.2321L51.8169 14.9878C53.256 13.4616 52.2429 10.9284 50.1617 10.8487L43.7308 10.6023L40.9249 10.5233C28.788 10.1816 18.6759 19.8777 18.3388 32.1802C18.2791 34.3565 18.5294 36.4685 19.0489 38.4728C19.1021 38.678 19.0291 38.8963 18.8609 39.0225C16.4781 40.8101 14.0142 42.5428 11.3977 44.2696C11.1305 44.4459 10.7712 44.3294 10.6595 44.0268C9.27143 40.2636 8.56217 36.1715 8.67903 31.9083C9.1643 14.198 23.7214 0.239746 41.1932 0.731636L41.8649 0.750535C41.8958 0.751432 41.9268 0.749254 41.9574 0.745026C42.0874 0.726895 42.2205 0.719335 42.356 0.723179Z"
      fill="currentColor"
    />
  </svg>
)

const WordmarkLogo = ({ className = "h-8" }: { className?: string }) => (
  <img src="/growthmate-wordmark.svg" alt="GrowthMate" className={`h-[1.5rem] md:h-8 ${className}`} />
)

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
  <div className="bg-light/5 rounded-3xl p-8 relative">
    <h3 className="text-xl font-semibold mb-3">{title}</h3>
    <p className="text-light/80 mb-6">{description}</p>
    <div className={`bg-dark/50 rounded-2xl ${height} flex items-center justify-center relative`}>
      {children}
      <a
        href={exploreUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute top-4 right-4 bg-primary text-dark p-2 rounded-lg hover:bg-primary/90 transition-colors z-10"
        title="Explore in new window"
      >
        <ExternalLink className="w-4 h-4" />
      </a>
    </div>
  </div>
)

export default function Home() {
    useEffect(() => {
        (async function () {
          const cal = await getCalApi({"namespace":"15min"});
          cal("ui", {"theme":"dark","cssVarsPerTheme":{"light":{"cal-brand":"#8cb88c"},"dark":{"cal-brand":"#c2f0c2"}},"hideEventTypeDetails":true,"layout":"month_view"});
        })();
      }, [])

  return (
    <div className="font-sans bg-dark text-light min-h-screen">
      <SofiaSansFont />
      <nav className="fixed w-full bg-dark/80 backdrop-blur-sm z-50">
        <div className="container mx-auto px-4 md:px-6 py-3 md:py-4 flex justify-between items-center">
          <WordmarkLogo />
          <div className="flex items-center gap-4 md:gap-8">
            <nav className="hidden md:flex gap-6">
              <a href="#demo" className="hover:text-primary transition-colors">
                Live Demo
              </a>
              <a href="#solutions" className="hover:text-primary transition-colors">
                Solutions
              </a>
            </nav>
            <a
              href="https://app.growthmate.xyz"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-dark px-4 md:px-6 py-2 rounded-full font-semibold hover:bg-opacity-90 transition-colors text-sm md:text-base"
            >
              Launch App
            </a>
          </div>
        </div>
      </nav>

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
              <LogoWall 
                src="/partners.png" 
                alt="GrowthMate Partners" 
                className="h-full"
                height={80}
                speed={60}
              />
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

        <section id="demo" className="container mx-auto px-0 md:px-6 py-12 md:py-20 border-t md:border-t-0 border-light/10">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 md:mb-12 text-center px-4 md:px-0">Experience GrowthMate</h2>
          <div className="space-y-6 md:space-y-8">
            <div className="bg-transparent md:bg-light/5 rounded-none md:rounded-3xl p-4 md:p-8 relative mx-0 md:mx-auto">
              <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3">Smart Ad Targeting</h3>
              <p className="text-light/80 mb-4 md:mb-6 text-sm md:text-base">See how we optimize ad delivery in real-time</p>
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
              <p className="text-light/80 mb-4 md:mb-6 text-sm md:text-base">Watch our AI curate personalized content feeds</p>
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
        </section>

        <section id="solutions" className="container mx-auto px-0 md:px-6 py-12 md:py-20 border-t md:border-t-0 border-light/10">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 md:mb-12 text-center px-4 md:px-0">Solutions for Your Business</h2>
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
                  href="https://app.growthmate.xyz/advertiser"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary text-dark px-4 md:px-6 py-2.5 md:py-3 rounded-full font-semibold hover:bg-opacity-90 transition-colors inline-flex items-center gap-2 text-sm md:text-base"
                >
                  Start Advertising <ArrowRight className="w-4 h-4" />
                </a>
                <div>
                  <a
                    href="/advertiser-deck.pdf"
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
                  href="https://app.growthmate.xyz/publisher"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary text-dark px-4 md:px-6 py-2.5 md:py-3 rounded-full font-semibold hover:bg-opacity-90 transition-colors inline-flex items-center gap-2 text-sm md:text-base"
                >
                  Become a Publisher <ArrowRight className="w-4 h-4" />
                </a>
                <div>
                  <a
                    href="/publisher-deck.pdf"
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

        <section id="contact" className="container mx-auto px-4 md:px-6 py-12 md:py-20 border-t md:border-t-0 border-light/10">
          <div className="bg-transparent md:bg-light/5 rounded-2xl md:rounded-3xl md:p-12 text-left md:text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">Ready to Enhance Your Targeting?</h2>
            <p className="text-lg md:text-xl mb-6 md:mb-8 text-light/80">Schedule a personalized demo with our team</p>
            <Cal namespace="15min" calLink="growthmate-xyz/15min" className="w-full h-full max-h-[550px] md:max-h-none overflow-scroll rounded-2xl" config={{"layout":"month_view","theme":"dark"}} />
          </div><div className="flex flex-col md:flex-row gap-3 md:gap-4 justify-center mt-8 md:mt-12">
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

      <footer className="border-t border-light/10">
        <div className="container mx-auto px-4 md:px-6 py-8 md:py-12">
          <div className="flex flex-col md:flex-row justify-between items-start gap-6 md:gap-8">
            <div className="h-6 md:h-10">
              <img src="/growthmate-wordmark.svg" alt="GrowthMate" className="h-6 md:h-10" />
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
              <div>
                <h4 className="font-semibold mb-2 md:mb-3 text-sm md:text-base">Resources</h4>
                <div className="space-y-1.5 md:space-y-2 text-xs md:text-sm">
                  <a
                    href={advertiserDeckUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-light/60 hover:text-primary transition-colors"
                  >
                    Advertiser Deck
                  </a>
                  <a
                    href={publisherDeckUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-light/60 hover:text-primary transition-colors"
                  >
                    Publisher Deck
                  </a>
                  <a
                    href={discoveryDeckUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-light/60 hover:text-primary transition-colors"
                  >
                    Discovery Deck
                  </a>
                  <a
                    href={brandKitUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-light/60 hover:text-primary transition-colors"
                  >
                    Brand Kit
                  </a>
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-2 md:mb-3 text-sm md:text-base">Connect</h4>
                <div className="flex gap-3 md:gap-4">
                  <a href="mailto:contact@growthmate.xyz" className="text-light/60 hover:text-primary transition-colors">
                    <Mail className="w-4 md:w-5 h-4 md:h-5" />
                  </a>
                  <a
                    href="https://cal.com/growthmate-xyz"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-light/60 hover:text-primary transition-colors"
                  >
                    <Calendar className="w-4 md:w-5 h-4 md:h-5" />
                  </a>
                  <a
                    href="https://t.me/lennczar"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-light/60 hover:text-primary transition-colors"
                  >
                    <Send className="w-4 md:w-5 h-4 md:h-5" />
                  </a>
                  <a
                    href="https://github.com/growth-mate"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-light/60 hover:text-primary transition-colors"
                  >
                    <Github className="w-4 md:w-5 h-4 md:h-5" />
                  </a>
                  <a
                    href="https://x.com/growthmate_xyz"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-light/60 hover:text-primary transition-colors"
                  >
                    <Twitter className="w-4 md:w-5 h-4 md:h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-6 md:mt-8 text-center text-light/60 text-xs md:text-sm">
            © 2025 GrowthMate. All rights reserved. | {" "}
            <a
              href="https://cdn.growthmate.xyz/tos.html"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors underline"
            >
              Terms Of Service
            </a>
            {" | "}
            <a
              href="https://cdn.growthmate.xyz/privacy-policy.html"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors underline"
            >
              Privacy Policy
            </a>
          </div>
        </div>
      </footer>

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
