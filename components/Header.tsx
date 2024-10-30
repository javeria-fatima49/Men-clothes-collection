"use client";
import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-900 p-4 relative">
      <div className="flex justify-center items-center">
        <div className="text-white font-bold text-center font-serif text-2xl">Men Clothes Collection</div>
        <button 
          className="text-white focus:outline-none absolute right-4" 
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>
      {isOpen && (
        <div className="bg-white p-4 mt-2 rounded-md shadow-lg absolute top-full right-0 w-48 z-50">
          <ul className="space-y-2">
            <li>
              <Link href="/" className="font-semibold text-gray-700 hover:text-gray-900">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="font-semibold text-gray-700 hover:text-gray-900">
                About
              </Link>
            </li>
            <li>
              <Link href="/product/id" className="font-semibold text-gray-700 hover:text-gray-900">
                Product
              </Link>
            </li>
            <li>
              <Link href="/contact" className="font-semibold text-gray-700 hover:text-gray-900">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
