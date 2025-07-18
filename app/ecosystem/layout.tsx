import { createMetadata } from '@/lib/metadata'

export const metadata = createMetadata({
  title: 'GrowthMate Ecosystem - Web3 Partners & Integrations',
  path: '/ecosystem',
})

export default function EcosystemLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 