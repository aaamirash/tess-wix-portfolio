import React from 'react';
import { FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-6">
      <div className="flex flex-col items-center justify-center space-y-2">
        <div className="flex space-x-4 text-2xl">
          {/* Social icons, e.g. Instagram */}
          <a
            href="https://instagram.com/tesswixsoprano"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-400"
          >
	    <FaInstagram />
          </a>
        </div>

        <p className="text-sm font-gidole text-center">
          &copy; {new Date().getFullYear()} Test Name. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

