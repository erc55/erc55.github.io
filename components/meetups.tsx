import YoutubeVideo from './youtube-video'
import videos from './videos'

export default function Meetups() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-32 md:py-20 mt-64">
          {/* Section header */}
          <div className="max-w-2xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">Encontros passados</h2>
          </div>

          {/* Testimonials */}
          <div className="max-w-sm mx-auto grid gap-4 lg:grid-cols-2 items-start lg:max-w-none">
            {/* 1st testimonial */}
            {videos.map((video, index) => (
              <div data-aos="fade-down" key={index}>
                <div className="relative inline-flex flex-col">
                  <YoutubeVideo title={video.title} videoId={video.videoId} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
