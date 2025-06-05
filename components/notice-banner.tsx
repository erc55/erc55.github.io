import Link from 'next/link'

export default function NoticeBanner() {
  return (
    <section className="py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-2xl mx-auto">
          <div className=" bg-gray-900 backdrop-blur-sm rounded-2xl border border-white/10 p-6 shadow-lg">
            <div className="flex items-center justify-center text-center">
              <div className="flex items-center">
                <div className="flex-shrink-0 mr-3">
                  <div className="w-8 h-8 bg-blue-500/30 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" role="img">
                      <title>Information icon</title>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <p className="text-gray-200 font-medium">
                    Core Program Brasil 2025:{' '}
                    <Link 
                      href="/zk" 
                      className="text-blue-300 hover:text-blue-200 underline hover:no-underline transition-colors duration-200"
                    >
                      clique aqui
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 