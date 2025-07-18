import { createMetadata } from '@/lib/metadata'

export const metadata = createMetadata({
  title: 'GrowthMate Ecosystem - Web3 Partners & Integrations',
  description: 'Optimize engagement with precision targeting based on on-chain activity. AI-powered Web3 advertising platform for advertisers and publishers.',
  path: '/ecosystem',
})

export default function EcosystemLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 