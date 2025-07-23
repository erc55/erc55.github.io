import Link from 'next/link'

interface LinkItemProps {
  href: string
  title: string
  description: string
  external?: boolean
}

export default function LinkItem({ href, title, description, external = false }: LinkItemProps) {
  const linkProps = external ? {
    target: "_blank",
    rel: "noopener noreferrer"
  } : {}

  return (
    <div>
      <Link 
        href={href} 
        {...linkProps}
        className="block w-full bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-white/10 p-6 shadow-lg hover:bg-gray-800/70 hover:border-purple-600/30 transition-all duration-300 group"
      >
        <div className="flex items-center justify-between">
          <div className="flex-grow">
            <h3 className="text-xl font-semibold text-gray-100 mb-2 group-hover:text-purple-300 transition-colors">
              {title}
            </h3>
            <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
              {description}
            </p>
          </div>
          <div className="ml-4">
            <svg 
              className="w-6 h-6 text-gray-400 group-hover:text-purple-400 transition-colors" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <title>Ícone de link externo</title>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </div>
        </div>
      </Link>
    </div>
  )
} 