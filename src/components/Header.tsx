'use client';
import Image from 'next/image';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    closeMenu();
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-900/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
  {/* 기존 로고 div 대신 Image 컴포넌트 사용 */}
  <Image
    src="/logo.png" // public 폴더에 있는 로고 파일 경로
    alt="DeckDanis Logo"
    className="rounded-lg" // 필요한 경우 기존 rounded-lg 스타일 적용
  />
  <span className="text-white font-bold text-xl font-orbitron">
    AWAKENED GAMES
  </span>
</Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('hero')}
              className="text-gray-300 hover:text-white transition-colors duration-200"
            >
              Home
            </button>
            <Link
              href="/games"
              className="text-gray-300 hover:text-white transition-colors duration-200"
            >
              Games
            </Link>
            <Link
              href="/about"
              className="text-gray-300 hover:text-white transition-colors duration-200"
            >
              About
            </Link>
            <Link
              href="/news"
              className="text-gray-300 hover:text-white transition-colors duration-200"
            >
              News
            </Link>
            <Link
              href="/careers"
              className="text-gray-300 hover:text-white transition-colors duration-200"
            >
              Careers
            </Link>
            <Link
              href="/contact"
              className="text-gray-300 hover:text-white transition-colors duration-200"
            >
              Contact
            </Link>
            <Link
              href="/games"
              className="px-6 py-2 bg-gradient-to-r from-purple-600 to-purple-500 text-white font-semibold rounded-lg hover:from-purple-500 hover:to-purple-400 transition-all duration-300 transform hover:scale-105"
            >
              Play Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span
                className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                  isMenuOpen ? 'rotate-45 translate-y-1.5' : ''
                }`}
              />
              <span
                className={`block w-6 h-0.5 bg-white mt-1 transition-all duration-300 ${
                  isMenuOpen ? 'opacity-0' : ''
                }`}
              />
              <span
                className={`block w-6 h-0.5 bg-white mt-1 transition-all duration-300 ${
                  isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
                }`}
              />
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden transition-all duration-300 overflow-hidden ${
            isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="pt-4 pb-2 space-y-2">
            <button
              onClick={() => scrollToSection('hero')}
              className="block w-full text-left px-4 py-2 text-gray-300 hover:text-white hover:bg-slate-800 rounded-lg transition-colors duration-200"
            >
              Home
            </button>
            <Link
              href="/games"
              onClick={closeMenu}
              className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-slate-800 rounded-lg transition-colors duration-200"
            >
              Games
            </Link>
            <Link
              href="/about"
              onClick={closeMenu}
              className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-slate-800 rounded-lg transition-colors duration-200"
            >
              About
            </Link>
            <Link
              href="/news"
              onClick={closeMenu}
              className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-slate-800 rounded-lg transition-colors duration-200"
            >
              News
            </Link>
            <Link
              href="/careers"
              onClick={closeMenu}
              className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-slate-800 rounded-lg transition-colors duration-200"
            >
              Careers
            </Link>
            <Link
              href="/contact"
              onClick={closeMenu}
              className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-slate-800 rounded-lg transition-colors duration-200"
            >
              Contact
            </Link>
            <Link
              href="/games"
              onClick={closeMenu}
              className="block mx-4 mt-4 px-6 py-2 bg-gradient-to-r from-purple-600 to-purple-500 text-white font-semibold rounded-lg hover:from-purple-500 hover:to-purple-400 transition-all duration-300 text-center"
            >
              Play Now
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
