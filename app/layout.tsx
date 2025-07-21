import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { createMetadata, baseMetadata, organizationSchema } from "@/lib/metadata"
import { Sofia_Sans } from "next/font/google"

const sofia = Sofia_Sans({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  variable: "--font-sofia",
})

export const metadata: Metadata = createMetadata({
  title: "GrowthMate - Web3 Ads & Discovery",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={sofia.variable}>
      <head>
        <link rel="icon" href="/logo.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/logo.svg" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content={baseMetadata.themeColor} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={sofia.className}>{children}</body>
    </html>
  )
}
