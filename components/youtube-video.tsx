import React from 'react'

const YouTubeVideo = ({ videoId, title }: { videoId: string; title: string }) => (
  <iframe
    className="w-full h-full"
    src={`https://www.youtube.com/embed/${videoId}`}
    title={title}
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
    style={{ aspectRatio: '16 / 9' }}
  ></iframe>
)

export default YouTubeVideo
