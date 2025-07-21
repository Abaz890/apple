import React from 'react';

const Footer = () => {
  return (
    <footer className="relative w-full p-4 text-white text-center z-10 bg-black">
      <p>&copy; {new Date().getFullYear()} Your Brand. All rights reserved.</p>
    </footer>
  );
};

export default Footer;