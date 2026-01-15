'use client';

import Link from "next/link";
import { useState } from "react";
import ThemeSwitcher from "./ThemeSwitcher";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 shadow-sm">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-green-600 rounded-lg"></div>
            <span className="text-xl font-bold text-slate-900 dark:text-white">SAYOL</span>
            <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Foundation</span>
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          {/* Navigation */}
          <nav className={`${
            isMenuOpen ? "block" : "hidden"
          } md:block absolute md:static top-full left-0 right-0 md:top-auto bg-white dark:bg-slate-950 md:bg-transparent md:dark:bg-transparent shadow-md md:shadow-none border-b border-slate-200 dark:border-slate-800 md:border-0`}>
            <div className="flex flex-col md:flex-row md:items-center md:space-x-8 px-6 py-4 md:py-0 space-y-2 md:space-y-0">
              <Link href="/" className="text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition">
                Home
              </Link>
             
              <Link href="/mission" className="text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition">
                Mission
              </Link>
             
              <Link href="/events" className="text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition">
                Events
              </Link>
              
              <Link href="/contact" className="text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition">
                Contact
              </Link>
              {/* Mobile Theme Switcher */}
              <div className="md:hidden flex items-center space-x-3 pt-2">
                <ThemeSwitcher />
                <Link href="/donate" className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition shadow-sm">
                  Donate
                </Link>
              </div>
            </div>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-3">
            <ThemeSwitcher />
            <Link href="/donate" className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition shadow-sm">
              Donate
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
