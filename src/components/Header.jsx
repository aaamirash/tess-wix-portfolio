// Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-black text-white p-4">
      <nav className="flex justify-between items-center max-w-7xl mx-auto">
        <div className="text-left">
          <h1 className="text-3xl font-bold leading-tight">Tess Wix</h1>
          <p className="text-base">Soprano</p>
        </div>
        <div className="space-x-6" text-2xl>
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/bio" className="hover:underline">Biography</Link>
          <Link to="/media" className="hover:underline">Media</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;

