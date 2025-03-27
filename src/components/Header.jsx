// Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/App.css';
import { FaInstagram } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="bg-black text-white p-4">
      <nav className="flex justify-between items-center max-w-7xl mx-auto">
        <div className="text-left" text-5xl>
	  <Link to="/" className="hover:scale-105 transition-transform duration-200 inline-block">
  	    <h1 className="text-5xl font-explora font-bold leading-tight">Tess Wix</h1>
	  </Link>
	  <p className="text-4xl font-explora">Soprano</p>
        </div>
        <div className="space-x-6 text-2xl font-charm">
	  <a href="/biography" className="hover:scale-105 transition-transform duration-200 inline-block">Biography</a>
          <a href="/media" className="hover:scale-105 transition-transform duration-200 inline-block">Media</a>
	  <a
            href="https://instagram.com/tesswixsoprano"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-400 text-xl inline-block"
          >
	    <FaInstagram />
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;

