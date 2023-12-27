import React from "react"

let aspectRatio = 16 / 9
let maxWidth = 560
let viewportWidth = window.innerWidth
let frameWidth = viewportWidth < maxWidth ? viewportWidth * 0.9 : maxWidth
let frameHeight = frameWidth / aspectRatio

const YouTubeVideo = ({
  videoId,
  title,
}: {
  videoId: string
  title: string
}) => (
  <div style={{ display: "flex", padding: "20px", float: "left" }}>
    <iframe
      width={frameWidth}
      height={frameHeight}
      src={`https://www.youtube.com/embed/${videoId}`}
      title={title}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  </div>
)

export default YouTubeVideo
