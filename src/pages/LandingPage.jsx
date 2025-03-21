import React from "react";
import '../styles/App.css';
import { Link } from 'react-router-dom';


const LandingPage = () => {
  return (
    <div className="background">
      <h1 className="text-6xl font-bold mb-4 text-center">
        Welcome
      </h1>
      <p className="text-lg mb-8 text-center max-w-2xl">
        Something profound about singing
      </p>
      <a
        href="#"
        className="bg-white text-blue-500 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200"
      >
      </a>
      <div className="landing-links">
          <Link to="/bio" className="landing-link">Bio</Link>
          <Link to="/media" className="landing-link">Media</Link>
        </div>
    </div>
  );
};

export default LandingPage;

