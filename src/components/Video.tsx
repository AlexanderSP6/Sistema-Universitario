import React from "react"

interface VideoProps {
  src: string
}

export default function Video({ src }: VideoProps) {
  return (
    <iframe
      className="rounded-lg shadow-lg"
      title="video"
      width="100%"
      height="100%"
      src={src}
      allowFullScreen
    />
  )
}
