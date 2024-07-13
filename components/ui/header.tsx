import Link from 'next/link'
import Image from 'next/image'
import ERC55Logo from '@/public/images/erc55.png'

export default function Header() {
  return (
    <header className="absolute w-full z-30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Site branding */}
          <div className="shrink-0 mr-4">
            {/* Logo */}
            <Link href="/" className="block" aria-label="ERC55">
              <Image src={ERC55Logo} alt="ERC55 Logo" width="64" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
