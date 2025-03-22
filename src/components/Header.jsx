// Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-black text-white p-4">
      <nav className="flex justify-between items-center max-w-7xl mx-auto">
        <div className="text-left" text-5xl>
	  <Link to="/" className="hover:scale-105 transition-transform duration-200 inline-block">
  	    <h1 className="text-5xl font-bold leading-tight">Tess Wix</h1>
	  </Link>
	  <p className="text-base">Soprano</p>
        </div>
        <div className="space-x-6" text-3xl>
          <Link to="/bio" className="hover:scale-105 transition-transform duration-200 inline-block">Biography</Link>
          <Link to="/media" className="hover:scale-105 transition-transform duration-200 inline-block">Media</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;

