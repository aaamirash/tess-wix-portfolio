import React from 'react';
import '../styles/App.css'; // Reuse styles if needed
import MediaPlayer from '../components/ui/MediaPlayer';
import Card from '../components/ui/Card';
import video1 from '../assets/videos/AchIch.mp4';
import thumb1 from '../assets/images/tess_singing.jpg';

const mediaItems = [
  {
    id: 1,
    type: 'video',
    title: 'Ach Ich Fuhls',
    src: video1,
    thumbnail: thumb1
  }
];

const Media = () => {
  return (
    <div className="media-page">
      <h1>Media Gallery</h1>
      <div className="media-grid" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {mediaItems.map((item) => (
          <Card key={item.id} className="media-card">
            {item.type === 'video' ? (
              <MediaPlayer src={item.src} poster={item.thumbnail} />
            ) : (
              <img src={item.src} alt={item.title} className="media-image" style={{ width: '100%', borderRadius: '8px' }} />
            )}
            <h3 style={{ textAlign: 'center', marginTop: '10px' }}>{item.title}</h3>
          </Card>
        ))}
      </div>
    </div>
  );
};


export default Media;
