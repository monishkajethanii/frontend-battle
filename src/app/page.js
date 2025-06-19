"use client";

import { useEffect, useState } from "react";
import { Sun, Moon, Menu, X } from "lucide-react";
import Nav from "./Nav";

const Page = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const body = document.body;
    if (darkMode) {
      body.classList.add("dark");
      body.classList.remove("light");
    } else {
      body.classList.remove("dark");
      body.classList.add("light");
    }
  }, [darkMode]);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-800"
      }`}
    >
      <Nav
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />
      <main className="min-h-screen flex flex-col items-center justify-center space-y-4 sm:space-y-8 px-4 bg-gradient-to-b from-transparent to-gray-200/50 dark:to-gray-800/50 transition-colors duration-300">
        <div className="text-center space-y-2 sm:space-y-4">
          <h1
            className={`text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold font-mono text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 drop-shadow-lg leading-tight`}
          >
            Frontend
          </h1>
          <h1
            className={`text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold font-mono text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-yellow-500 drop-shadow-lg leading-tight`}
          >
            Battle
          </h1>
        </div>
      </main>

      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={closeMenu}
        />
      )}
    </div>
  );
};

export default Page;