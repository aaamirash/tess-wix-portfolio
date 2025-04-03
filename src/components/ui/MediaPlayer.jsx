import React from 'react';

const MediaPlayer = ({ src, poster }) => {
  return (
    <div className="w-full max-w-2xl mx-auto">
      <video
        controls
        playsInline
        muted
        preload="metadata"
        poster={poster}
        className="w-full h-auto rounded-lg shadow"
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default MediaPlayer;

