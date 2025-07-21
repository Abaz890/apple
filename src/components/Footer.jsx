import React from 'react';

const Footer = () => {
  return (
    <footer className="absolute bottom-0 left-0 w-full p-4 text-white text-center z-10">
      <p>&copy; {new Date().getFullYear()} Your Brand. All rights reserved.</p>
    </footer>
  );
};

export default Footer;