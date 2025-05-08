'use client';
import { useState } from 'react';
import Image from 'next/image';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <a href="/" className="flex-shrink-0 flex items-center">
              <Image
                src="/sources/logo.png"
                alt="Akhisar Gözde Erkek Kuaförü Logo"
                width={40}
                height={40}
                className="h-10 w-auto"
              />
              <span className="ml-2 text-xl font-bold text-gray-900">Akhisar Gözde Erkek Kuaförü</span>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('anasayfa')} className="text-gray-600 hover:text-gray-900">
              Ana Sayfa
            </button>
            <button onClick={() => scrollToSection('hizmetler')} className="text-gray-600 hover:text-gray-900">
              Hizmetler
            </button>
            <button onClick={() => scrollToSection('hakkimizda')} className="text-gray-600 hover:text-gray-900">
              Hakkımızda
            </button>
            <button onClick={() => scrollToSection('galeri')} className="text-gray-600 hover:text-gray-900">
              Galeri
            </button>
            <button onClick={() => scrollToSection('iletisim')} className="text-gray-600 hover:text-gray-900">
              İletişim
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            >
              <span className="sr-only">Menüyü aç</span>
              {!isOpen ? (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <button onClick={() => scrollToSection('anasayfa')} className="block w-full text-left px-3 py-2 text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50">
              Ana Sayfa
            </button>
            <button onClick={() => scrollToSection('hizmetler')} className="block w-full text-left px-3 py-2 text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50">
              Hizmetler
            </button>
            <button onClick={() => scrollToSection('hakkimizda')} className="block w-full text-left px-3 py-2 text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50">
              Hakkımızda
            </button>
            <button onClick={() => scrollToSection('galeri')} className="block w-full text-left px-3 py-2 text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50">
              Galeri
            </button>
            <button onClick={() => scrollToSection('iletisim')} className="block w-full text-left px-3 py-2 text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50">
              İletişim
            </button>
          </div>
        </div>
      )}
    </nav>
  );
} 