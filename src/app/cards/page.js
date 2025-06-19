"use client";
import React, { useState } from "react";
import { AlignJustify, Check } from "lucide-react";
import Nav from "../Nav";

const BrandKits = () => {
  const [selectedBrand, setSelectedBrand] = useState("The Agency");

  const brands = [
    {
      id: "ecorp",
      name: "ECorp",
      icon: "🟢", // Green circle
      selected: false,
    },
    {
      id: "icorp",
      name: "ICorp",
      icon: "🟠", // Orange circle
      selected: false,
    },
    {
      id: "agency",
      name: "The Agency",
      icon: "🔴", // Red circle
      selected: true,
    },
  ];

  const [darkMode, setDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleBrandSelect = (brandName) => {
    setSelectedBrand(brandName);
  };

  return (
    <>
      <Nav
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />
      <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
        <div className="relative">
          {/* Gradient border container */}
          <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 rounded-2xl blur-sm opacity-75"></div>

          {/* Main container */}
          <div className="relative bg-gray-900 rounded-2xl p-8 w-96">
            <h1 className="text-white text-2xl font-semibold mb-8">
              Brand Kits
            </h1>

            <div className="space-y-4">
              {brands.map((brand) => (
                <div
                  key={brand.id}
                  onClick={() => handleBrandSelect(brand.name)}
                  className="group relative bg-gray-800 hover:bg-gray-750 rounded-xl p-4 cursor-pointer transition-all duration-200 border border-gray-700 hover:border-gray-600"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      {/* Checkbox */}
                      <div className="relative">
                        <div
                          className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-all duration-200 ${
                            selectedBrand === brand.name
                              ? "bg-blue-500 border-blue-500"
                              : "border-gray-500 hover:border-gray-400"
                          }`}
                        >
                          {selectedBrand === brand.name && (
                            <Check
                              className="w-3 h-3 text-white"
                              strokeWidth={3}
                            />
                          )}
                        </div>
                      </div>

                      {/* Brand icon and name */}
                      <div className="flex items-center space-x-3">
                        <div className="relative">
                          {/* Cloud-like shape */}
                          <div
                            className={`w-8 h-6 rounded-full relative ${
                              brand.name === "ECorp"
                                ? "bg-emerald-400"
                                : brand.name === "ICorp"
                                ? "bg-orange-400"
                                : "bg-red-400"
                            }`}
                          >
                            <div
                              className={`absolute -top-1 left-2 w-4 h-4 rounded-full ${
                                brand.name === "ECorp"
                                  ? "bg-emerald-400"
                                  : brand.name === "ICorp"
                                  ? "bg-orange-400"
                                  : "bg-red-400"
                              }`}
                            ></div>
                            <div
                              className={`absolute -top-1 right-1 w-3 h-3 rounded-full ${
                                brand.name === "ECorp"
                                  ? "bg-emerald-400"
                                  : brand.name === "ICorp"
                                  ? "bg-orange-400"
                                  : "bg-red-400"
                              }`}
                            ></div>
                          </div>
                        </div>
                        <span className="text-white text-lg font-medium">
                          {brand.name}
                        </span>
                      </div>
                    </div>

                    {/* Menu icon */}
                    <button className="text-gray-400 hover:text-gray-300 transition-colors duration-200 p-1">
                      <AlignJustify className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Background blur effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-pink-900/20 to-blue-900/20 pointer-events-none"></div>
      </div>
    </>
  );
};

export default BrandKits;
