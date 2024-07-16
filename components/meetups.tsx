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

          {/* Meetups */}
          <div className="flex flex-wrap gap-12 lg:gap-20 justify-between w-full">
            {videos.map((video, index) => (
              <div className="flex-col w-full max-w-lg" data-aos="fade-down" key={index}>
                <YoutubeVideo title={video.title} videoId={video.videoId} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
