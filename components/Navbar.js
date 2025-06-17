import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <a href="/" className="text-xl font-bold">DevsGeek</a>
        <div>
          <a href="#resources" className="px-4 hover:text-gray-300">Resources</a>
          <a href="#blog" className="px-4 hover:text-gray-300">Blog</a>
          <a href="#login" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
            Login
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;