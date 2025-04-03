import React from "react";

const Bio = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col md:flex-row items-center justify-center px-6 py-12 gap-8">

      {/* Bio Text Section */}
      <div className="w-full md:w-2/3 text-lg leading-relaxed font-gidole">
        <h2 className="text-3xl font-explora mb-4">About Me</h2>
        <p>
          Soprano Tess Wix is a first-generation American who graduated from Portland State University in 2023 with a Bachelor’s in Communications. During her time at PSU, she was an active member of the opera program and the Portland State Chamber Choir. Her travels outside of America have enriched her musical experience, including participation in events like the World Choir Expo in Portugal (2022) and tours in Greece and Italy, allowing her to communicate with diverse cultures through song. Notable credits include her portrayal of Alice Ford in Otto Nicolai's Merry Wives of Windsor and Pamina in Mozart's The Magic Flute, where she was praised by Oregon Arts Watch for creating "a passionate Pamina with a vibrant and warm voice that quickly swept up the audience." Tess was also honored to be a featured soloist with the Oregon Symphony, performing Xavier Foley’s impactful piece For Justice and Peace. Her most recent performance was with Orchestra Nova NorthWest, where she was featured as the soprano soloist along side talents like All Classical Radio’s Suzanne Nance.In addition to studying voice with baritone Richard Zeller, she works for Artists Repertory Theatre, where she combines her expertise in communication with her love for the arts.
        </p>
      </div>
      {/* Image Section */}
      <div className="w-full md:w-1/3">
        <img
          src="https://storage.googleapis.com/twix-bucket/Images/voce-tall.jpg"
          alt="Performer Portrait"
	  className="w-full max-w-md fade-to-black-edges"
        />
      </div>
    </div>
  );
};

export default Bio;

