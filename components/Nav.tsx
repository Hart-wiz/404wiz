"use client";

import React, { useState, useEffect } from "react";
import {
  Terminal,
  Download,
  Menu,
  X,
  Moon,
  Sun,
  Globe,
  Mail,
  Share2,
} from "lucide-react";
import Link from "next/link";

const NAV_ITEMS = [
  { name: "Home", path: "/" },
  { name: "Projects", path: "/projects" },
  { name: "Experiences", path: "/experience" },
  { name: "Contact", path: "/contact" },
];

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [activeSection, setActiveSection] = useState("Experience");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMenuOpen]);

  return (
    <div className={`${isDarkMode ? "dark" : ""}`}>
      <div className=" flex  w-full flex-col bg-[#f6f7f8] dark:bg-[#101922] text-slate-900 dark:text-slate-100 font-sans transition-colors duration-300 fixed z-30">
        {/* Navigation Header */}
        <header className="flex items-center justify-between border-b border-solid border-slate-200 dark:border-slate-800 px-4 md:px-10 py-4 sticky top-0 bg-[#f6f7f8]/90 dark:bg-[#101922]/90 backdrop-blur-md z-[100]">
          {/* Logo Section */}
          <div className="flex items-center gap-3">
            <div className="size-8 bg-[#137fec] rounded flex items-center justify-center text-white shadow-lg shadow-[#137fec]/20">
              <Terminal className="w-5 h-5" />
            </div>
            <h2 className="text-lg md:text-xl font-bold leading-tight tracking-tight">
              404wiz
            </h2>
          </div>

          <div className="flex items-center gap-2 md:gap-8">
            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-8">
              {NAV_ITEMS.map((item, idx) => (
                <Link
                  href={item.path}
                  key={idx}
                  onClick={() => setActiveSection(item)}
                  className={`text-sm font-medium transition-all relative py-1 hover:text-[#137fec] ${
                    activeSection === item
                      ? "text-[#137fec]"
                      : "text-slate-500 dark:text-slate-400"
                  }`}
                >
                  {item.name}
                  {activeSection === item && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#137fec] rounded-full animate-in fade-in zoom-in duration-300" />
                  )}
                </Link>
              ))}
            </nav>

            {/* Action Group */}
            <div className="flex items-center gap-2 md:gap-4">
              {/* Theme Toggle */}
              <button
                onClick={() => setIsDarkMode(!isDarkMode)}
                className="p-2 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors text-slate-600 dark:text-slate-400"
                aria-label="Toggle theme"
              >
                {isDarkMode ? (
                  <Sun className="w-5 h-5" />
                ) : (
                  <Moon className="w-5 h-5" />
                )}
              </button>

              {/* Resume CTA */}
              <button className="flex items-center justify-center gap-2 rounded-lg h-9 md:h-10 px-3 md:px-4 bg-[#137fec] text-white text-sm font-bold shadow-lg shadow-[#137fec]/20 hover:bg-[#137fec]/90 transition-all active:scale-95">
                <Download className="w-4 h-4" />
                <span className="hidden sm:inline">Resume</span>
              </button>

              {/* Mobile Menu Hamburger Toggle */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden p-2 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors text-slate-600 dark:text-slate-400"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </header>

        {/* Mobile Navigation Menu Overlay */}
        <div
          className={`fixed inset-0 z-[90] lg:hidden transition-all duration-300 ${
            isMenuOpen ? "visible opacity-100" : "invisible opacity-0"
          }`}
        >
          {/* Backdrop blur */}
          <div
            className="absolute inset-0 bg-black/20 dark:bg-black/40 backdrop-blur-sm"
            onClick={() => setIsMenuOpen(false)}
          />

          {/* Menu Panel */}
          <nav
            className={`absolute top-[73px] left-0 right-0 bg-white dark:bg-[#101922] border-b border-slate-200 dark:border-slate-800 p-6 flex flex-col gap-4 transform transition-transform duration-300 shadow-xl ${
              isMenuOpen ? "translate-y-0" : "-translate-y-full"
            }`}
          >
            {NAV_ITEMS.map((item, idx) => (
              <Link
                href={item.path}
                key={idx}
                onClick={() => {
                  setActiveSection(item.path);
                  setIsMenuOpen(false);
                }}
                className={`text-left text-lg font-semibold py-3 px-4 rounded-xl transition-all active:scale-[0.98] ${
                  activeSection === item.path
                    ? "bg-[#137fec]/10 text-[#137fec]"
                    : "text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"
                }`}
              >
                {item.name}
              </Link>
            ))}

            {/* Mobile Footer Links (Optional/Additional) */}
            <div className="flex justify-center gap-6 pt-4 mt-2 border-t border-slate-100 dark:border-slate-800">
              <Globe className="w-5 h-5 text-slate-400" />
              <Mail className="w-5 h-5 text-slate-400" />
              <Share2 className="w-5 h-5 text-slate-400" />
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default App;
