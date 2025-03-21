import React from 'react';

const MediaPlayer = ({ src, poster }) => {
  return (
    <video controls poster={poster} className="media-player" width="100%" height="auto">
      <source src={src} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};

export default MediaPlayer;
