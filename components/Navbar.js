"use client"

import React, { useState } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex items-center justify-between px-4 py-3 bg-gray-800 text-white">
      <div className="flex items-center">
        <button
          type="button"
          className="text-white focus:outline-none md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
        <Link href="/">
          XECHO
        </Link>
      </div>
      <div className="hidden md:block">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Echo
        </button>
      </div>
      {/* Mobile Menu */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
        <a href="#" className="block px-4 py-2 text-white">
          Home
        </a>
        {/* Add other navigation links here */}
      </div>
    </div>
  );
};

export default Navbar;
