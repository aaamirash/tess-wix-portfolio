import React from "react";
import '../styles/App.css';
import { Link } from 'react-router-dom';


const LandingPage = () => {
  return (
    <div className="background">
      <h1 className="text-8xl font-bold mb-4 text-center">
	<Link to="/" className="hover:underline">Tess Wix</Link>
      </h1>
    </div>
  );
};

export default LandingPage;

