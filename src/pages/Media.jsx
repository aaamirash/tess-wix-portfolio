import React from 'react';
import '../styles/App.css'; // Reuse styles if needed
import MediaPlayer from '../components/ui/MediaPlayer';
import Card from '../components/ui/Card';

const mediaItems = [
  {
    id: 1,
    type: 'video',
    title: 'Ach Ich Fuhls',
    src: 'https://storage.cloud.google.com/twix-bucket/Videos/AchIch.mp4',
    thumbnail: 'https://storage.cloud.google.com/twix-bucket/Images/flute.jpg'
  }
];

const Media = () => {
  return (
    <div className="bg-black text-white min-h-screen px-6 py-12 font-gidole">
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
