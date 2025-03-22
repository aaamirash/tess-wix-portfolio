import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white text-center py-6 mt-10">
      <p className="text-sm font-gidole">
        &copy; {new Date().getFullYear()} Test Name. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;

