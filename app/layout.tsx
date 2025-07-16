import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'GrowthMate',
  description: 'AI-Powered Web3 Targeting',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.svg" type="image/svg+xml" />
      </head>
      <body>{children}</body>
    </html>
  )
}
