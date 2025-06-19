"use client";
import React, { useState } from "react";
import { Download, Menu, X, Sun, Moon } from "lucide-react";
import Nav from "../Nav";

const CarbonEmissionsDashboard = () => {
  const [selectedType, setSelectedType] = useState("All");
  const [selectedStatus, setSelectedStatus] = useState("Complete");
  const [darkMode, setDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const chartData = [
    { value: 549, label: "Project A" },
    { value: 278, label: "Project B" },
    { value: 875, label: "Project C" },
    { value: 617, label: "Project D" },
    { value: 506, label: "Project E" },
    { value: 36, label: "Project F" },
    { value: 185, label: "Project G" },
    { value: 191, label: "Project H" },
    { value: 122, label: "Project I" },
    { value: 550, label: "Project J" },
    { value: 881, label: "Project K" },
    { value: 539, label: "Project L" },
    { value: 269, label: "Project M" },
    { value: 29, label: "Project N" },
    { value: 82, label: "Project O" },
    { value: 44, label: "Project P" },
    { value: 109, label: "Project Q" },
    { value: 106, label: "Project R" },
    { value: 607, label: "Project S" },
    { value: 528, label: "Project T" },
  ];

  const target2030 = 500;
  const target2025 = 600;
  const maxValue = 1200;

  const typeOptions = [
    { label: "Refurbishment", value: "Refurbishment" },
    { label: "New build", value: "New build" },
    { label: "All", value: "All" },
  ];

  const statusOptions = [
    { label: "Complete", value: "Complete" },
    { label: "Estimate", value: "Estimate" },
  ];

  const toggleDarkMode = () => setDarkMode(!darkMode);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className={`min-h-screen transition-all duration-500 ${
      darkMode ? "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white" : "bg-gradient-to-br from-gray-50 via-white to-gray-100 text-gray-800"
    }`}>
      {/* Navigation */}
      <nav className={`sticky top-0 z-50 backdrop-blur-md border-b transition-all duration-300 ${
        darkMode ? "bg-gray-900/80 border-gray-700" : "bg-white/80 border-gray-200"
      }`}>
             <Nav
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            
              
              <button
                onClick={toggleMenu}
                className="md:hidden p-2 rounded-full"
              >
                {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
     
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8 mb-12">
          {/* Title - Mobile First */}
          <div className="order-2 lg:order-1 w-full lg:w-auto">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-wider leading-tight">
                EMBODIED
                <br />
                <span className="bg-gradient-to-r from-rose-500 to-pink-600 bg-clip-text text-transparent">
                  CARBON
                </span>
                <br />
                EMISSIONS
              </h1>
              <p className={`text-sm mt-4 ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
                Intensity measured by kgCO<sub>2</sub>e/m²
              </p>
            </div>
            
            <button className={`mt-6 flex items-center gap-2 px-6 py-3 rounded-full border transition-all duration-300 hover:scale-105 hover:shadow-lg ${
              darkMode 
                ? "border-gray-600 text-gray-300 hover:bg-gray-800 hover:border-gray-500" 
                : "border-gray-300 text-gray-600 hover:bg-gray-50 hover:border-gray-400"
            }`}>
              <Download className="w-4 h-4" />
              <span>Download the data</span>
            </button>
          </div>

          {/* Filters */}
          <div className={`order-1 lg:order-2 w-full lg:w-auto p-6 rounded-2xl shadow-lg backdrop-blur-sm ${
            darkMode ? "bg-gray-800/50 border border-gray-700" : "bg-white/70 border border-gray-200"
          }`}>
            <h2 className={`text-lg font-semibold mb-6 ${darkMode ? "text-gray-200" : "text-gray-700"}`}>
              Filter by
            </h2>

            <div className="space-y-6">
              {/* Type Filter */}
              <div className="space-y-3">
                <label className={`text-sm font-medium ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
                  Type
                </label>
                <div className="flex flex-wrap gap-2">
                  {typeOptions.map((option) => (
                    <button
                      key={option.value}
                      onClick={() => setSelectedType(option.value)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 ${
                        selectedType === option.value
                          ? "bg-gradient-to-r from-rose-500 to-pink-600 text-white shadow-lg"
                          : darkMode
                          ? "border border-rose-400 text-rose-400 hover:bg-rose-400/10"
                          : "border border-rose-500 text-rose-600 hover:bg-rose-50"
                      }`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Status Filter */}
              <div className="space-y-3">
                <label className={`text-sm font-medium ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
                  Status
                </label>
                <div className="flex flex-wrap gap-2">
                  {statusOptions.map((option) => (
                    <button
                      key={option.value}
                      onClick={() => setSelectedStatus(option.value)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 ${
                        selectedStatus === option.value
                          ? "bg-gradient-to-r from-rose-500 to-pink-600 text-white shadow-lg"
                          : darkMode
                          ? "border border-gray-600 text-gray-400 hover:bg-gray-700"
                          : "border border-gray-400 text-gray-600 hover:bg-gray-50"
                      }`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Legend */}
            <div className="mt-8 pt-6 border-t border-gray-300 dark:border-gray-600">
              <h3 className={`text-sm font-semibold mb-4 ${darkMode ? "text-gray-200" : "text-gray-700"}`}>
                Legend
              </h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-0.5 border-t-2 border-dashed border-gray-400"></div>
                  <span className={`text-xs ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
                    500 kgCO<sub>2</sub>e/m² - Target 2030
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-0.5 bg-gray-400"></div>
                  <span className={`text-xs ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
                    600 kgCO<sub>2</sub>e/m² - Target 2025
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Chart Section */}
        <div className={`rounded-3xl shadow-2xl p-6 sm:p-8 backdrop-blur-sm ${
          darkMode ? "bg-gray-800/50 border border-gray-700" : "bg-white/80 border border-gray-200"
        }`}>
          <div className="overflow-x-auto">
            <div className="relative min-w-[800px]">
              {/* Y-axis labels */}
              <div className="absolute left-0 top-0 h-80 flex flex-col justify-between text-xs text-gray-500 -ml-16">
                <span>1200</span>
                <span>1000</span>
                <span>800</span>
                <span>600</span>
                <span>400</span>
                <span>200</span>
                <span>0</span>
              </div>

              {/* Y-axis label */}
              <div className="absolute -left-24 top-1/2 transform -rotate-90 text-sm text-gray-600 whitespace-nowrap">
                Embodied carbon intensity (kgCO<sub>2</sub>e/m²)
              </div>

              {/* Chart container */}
              <div className="ml-12 relative">
                {/* Target lines */}
                <div
                  className="absolute w-full border-t-2 border-dashed border-amber-500 z-10 opacity-80"
                  style={{ bottom: `${(target2030 / maxValue) * 320 + 16}px` }}
                >
                  <span className="absolute -top-6 right-0 text-xs text-amber-600 font-medium bg-amber-50 px-2 py-1 rounded">
                    2030 Target
                  </span>
                </div>
                <div
                  className="absolute w-full border-t-2 border-blue-500 z-10 opacity-80"
                  style={{ bottom: `${(target2025 / maxValue) * 320 + 16}px` }}
                >
                  <span className="absolute -top-6 right-0 text-xs text-blue-600 font-medium bg-blue-50 px-2 py-1 rounded">
                    2025 Target
                  </span>
                </div>

                {/* Chart bars */}
                <div className={`flex items-end gap-1 h-80 border-l-2 border-b-2 px-4 ${
                  darkMode ? "border-gray-600" : "border-gray-300"
                }`}>
                  {chartData.map((item, index) => (
                    <div
                      key={index}
                      className="relative flex-1 flex flex-col items-center min-w-0 group"
                    >
                      <div className="relative w-full">
                        {/* Value label */}
                        <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-xs font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gray-900 text-white px-2 py-1 rounded shadow-lg">
                          {item.value} kgCO₂e/m²
                          <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
                        </div>
                        
                        {/* Bar */}
                        <div
                          className={`w-full transition-all duration-500 cursor-pointer rounded-t-lg shadow-sm hover:shadow-md group-hover:scale-110 ${
                            item.value > target2030 
                              ? "bg-gradient-to-t from-red-400 to-red-500 hover:from-red-500 hover:to-red-600" 
                              : item.value > target2025
                              ? "bg-gradient-to-t from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600"
                              : "bg-gradient-to-t from-green-400 to-green-500 hover:from-green-500 hover:to-green-600"
                          }`}
                          style={{
                            height: `${Math.max((item.value / maxValue) * 320, 8)}px`,
                          }}
                        ></div>
                        
                        {/* Project label */}
                        <div className={`absolute -bottom-8 left-1/2 transform -translate-x-1/2 rotate-45 text-xs whitespace-nowrap ${
                          darkMode ? "text-gray-400" : "text-gray-600"
                        }`}>
                          {item.label}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {[
            { label: "Total Projects", value: chartData.length, color: "blue" },
            { label: "Above 2030 Target", value: chartData.filter(d => d.value > target2030).length, color: "red" },
            { label: "Meeting 2030 Target", value: chartData.filter(d => d.value <= target2030).length, color: "green" },
            { label: "Average Emissions", value: Math.round(chartData.reduce((sum, d) => sum + d.value, 0) / chartData.length), color: "purple" }
          ].map((stat, index) => (
            <div key={index} className={`p-6 rounded-2xl shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-105 ${
              darkMode ? "bg-gray-800/50 border border-gray-700" : "bg-white/70 border border-gray-200"
            }`}>
              <div className={`text-2xl font-bold mb-2 ${
                stat.color === 'blue' ? 'text-blue-500' :
                stat.color === 'red' ? 'text-red-500' :
                stat.color === 'green' ? 'text-green-500' :
                'text-purple-500'
              }`}>
                {stat.value}
              </div>
              <div className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CarbonEmissionsDashboard;