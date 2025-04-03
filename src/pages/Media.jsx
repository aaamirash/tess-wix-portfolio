import React from 'react';

const mediaItems = [
  {
    id: 1,
    title: 'Ach, Ich Fühl’s – Mozart',
    src: 'https://storage.googleapis.com/twix-bucket/Videos/AchIch.mp4',
    thumbnail: 'https://storage.googleapis.com/twix-bucket/Images/achpic.png',
  },
  {
    id: 2,
    title: 'Somewhere - Bernstein',
    src: 'https://storage.googleapis.com/twix-bucket/Videos/Somewhere-web.mp4',
    thumbnail: 'https://storage.googleapis.com/twix-bucket/Images/somewhere.png',
  },
  {
    id: 3,
    title: 'Je Veux Vivre - Gounod',
    src: 'https://storage.googleapis.com/twix-bucket/Videos/JeVeuxVivre.mp4',
    thumbnail: 'https://storage.googleapis.com/twix-bucket/Images/jeveux.png',
  },
];

const Media = () => {
  return (
    <div className="bg-black text-white min-h-screen px-6 py-12 font-gidole">
      <h1 className="text-6xl font-explora text-center mb-12">Media Gallery</h1>

      {/* Responsive 2x2 Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {mediaItems.map((item) => (
          <div key={item.id} className="bg-black/70 p-4 rounded-lg shadow">
            <video
              controls
              playsInline
              preload="metadata"
              poster={item.thumbnail}
              className="w-full h-auto rounded"
            >
              <source src={item.src} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <h3 className="text-center mt-4 text-lg font-semibold">{item.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Media;

/*import React from 'react';

const Media = () => {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl mb-6">Test Video</h1>

      <video
        controls
        playsInline
        preload="metadata"
        poster="https://storage.googleapis.com/twix-bucket/Images/tess_singing.jpg"
        className="w-full max-w-xl rounded shadow"
      >
        <source
          src="https://storage.googleapis.com/twix-bucket/Videos/Somewhere-web.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Media;
*/
