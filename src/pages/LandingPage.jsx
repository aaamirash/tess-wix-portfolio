import React from "react";
import '../styles/App.css';
import { Link } from 'react-router-dom';


const LandingPage = () => {
  return (
    <div className="background">
      <h1 className="text-8xl font-explora font-bold mb-4 text-center">
	<Link to="/" className="hover:scale-105 transition-transform duration-200 inline-block">Tess Wix</Link>
      </h1>
    </div>
  );
};

export default LandingPage;

