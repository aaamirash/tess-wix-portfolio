import React, { useRef, useEffect } from "react";

const AutoPlaySilentVideo = ({ videoSrc, className, poster }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.defaultMuted = true; // Required for Safari autoplay
      videoRef.current.muted = true;
      videoRef.current.playsInline = true;
      videoRef.current
        .play()
        .catch((err) => console.warn("Autoplay error:", err));
    }
  }, []);

  return (
    <video
      ref={videoRef}
      autoPlay
      loop
      muted
      playsInline
      preload="auto"
      poster={poster}
      className={className}
    >
      <source src={videoSrc} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};

export default AutoPlaySilentVideo;

