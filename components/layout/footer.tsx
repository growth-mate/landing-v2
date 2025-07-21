import { Calendar, Github, Send, Twitter, Mail } from "lucide-react"

const advertiserDeckUrl =
  "https://docs.google.com/presentation/d/1uffmrZWWRdeA8EpOOxnHuGBlkHPDceOj2coEk4RF3U8/export?format=pdf"
const publisherDeckUrl =
  "https://docs.google.com/presentation/d/1nOwJK2pptSiqEfSMpV5wtTy_1fW4E9gNgAuTbA__u7A/export?format=pdf"
const discoveryDeckUrl =
  "https://docs.google.com/presentation/d/15vLp6EXiRfI58zAJfMNB-GeH8C3r7JixKRSXx_OPgK8/export?format=pdf"
const brandKitUrl = "https://drive.google.com/drive/folders/12wWdK4s3LpUx8PY8QDqLGTh3J4g8Tps6?usp=sharing"

export function Footer() {
  return (
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
                {/* <a href="/blog" className="block text-light/60 hover:text-primary transition-colors">
                  Blog
                </a> */}
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
          © 2025 GrowthMate. All rights reserved. |{" "}
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
  )
}
