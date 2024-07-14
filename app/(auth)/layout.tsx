import PageIllustration from '@/components/page-illustration'
import FloatingEthereumLogos from '@/components/floating-ethereum-logs'

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="grow">
      <PageIllustration />

      {children}
    </main>
  )
}
