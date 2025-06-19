"use client";

import { Sun, Moon, Menu, X } from "lucide-react";

const Nav = ({ darkMode, setDarkMode, isMenuOpen, setIsMenuOpen }) => {
  const navItems = [
    { href: "/", label: "Home" },
    { href: "/stats", label: "Stats" },
    { href: "/graph", label: "Graph" },
    { href: "/loader", label: "Loader" },
    { href: "/ripple", label: "Ripple Effect" },
    { href: "/caraousel", label: "Carousel Switch" },
    { href: "/cards", label: "Cards" },
    { href: "/striking", label: "Striking" },
  ];

  const navClass = `px-4 py-2 rounded-md transition-all duration-300 cursor-pointer block text-center sm:text-left`;

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`${
        darkMode ? "bg-gray-800" : "bg-white"
      } shadow-lg sticky top-0 z-50`}
    >
      <nav className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div
            className={`text-xl sm:text-2xl font-extrabold ${
              darkMode ? "text-blue-300" : "text-blue-700"
            }`}
          >
            Frontend Battle
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`${navClass} ${
                  darkMode
                    ? "hover:bg-blue-900 hover:text-blue-200 text-gray-300"
                    : "hover:bg-blue-100 hover:text-blue-700 text-gray-700"
                }`}
              >
                {item.label}
              </a>
            ))}

            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-full transition-all duration-300 ml-2 ${
                darkMode
                  ? "hover:bg-gray-700 text-yellow-400"
                  : "hover:bg-gray-200 text-gray-800"
              }`}
              title="Toggle Dark Mode"
            >
              {darkMode ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </button>
          </div>

          {/* Mobile Menu + Dark Mode Toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-full transition-all duration-300 ${
                darkMode
                  ? "hover:bg-gray-700 text-yellow-400"
                  : "hover:bg-gray-200 text-gray-800"
              }`}
              title="Toggle Dark Mode"
            >
              {darkMode ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </button>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2 rounded-md transition-all duration-300 ${
                darkMode
                  ? "hover:bg-gray-700 text-white"
                  : "hover:bg-gray-200 text-gray-800"
              }`}
              title="Toggle Menu"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0"
          }`}
        >
          <div
            className={`${
              darkMode ? "bg-gray-700" : "bg-gray-50"
            } rounded-lg p-4 space-y-2`}
          >
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className={`${navClass} ${
                  darkMode
                    ? "hover:bg-gray-600 hover:text-blue-200 text-gray-200"
                    : "hover:bg-blue-100 hover:text-blue-700 text-gray-700"
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Nav;