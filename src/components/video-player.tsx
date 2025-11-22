"use client";

import { useEffect, useRef } from "react";

interface VideoPlayerProps {
  src: string;
  className?: string;
}

export default function VideoPlayer({ src, className = "" }: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
    }
  }, [src]);

  return (
    <video
      ref={videoRef}
      controls
      className={className}
      preload="auto"
      playsInline
      style={{ maxHeight: "500px" }}
    >
      <source src={src} type="video/mp4" />
      <source src={src} type="video/mpeg" />
      Your browser does not support the video tag.
    </video>
  );
}

