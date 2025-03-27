import React from "react";

const Bio = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col md:flex-row items-center justify-center px-6 py-12 gap-8">
      {/* Image Section */}
      <div className="w-full md:w-1/3">
        <img
          src="https://storage.googleapis.com/twix-bucket/Images/voce-tall.jpg"
          alt="Performer Portrait"
	  className="w-full max-w-md fade-to-black-edges"
        />
      </div>

      {/* Bio Text Section */}
      <div className="w-full md:w-2/3 text-lg leading-relaxed font-gidole">
        <h2 className="text-3xl font-explora mb-4">About Me</h2>
        <p>
          [Insert your professional bio here.] I am a classically trained soprano
        </p>
      </div>
    </div>
  );
};

export default Bio;

