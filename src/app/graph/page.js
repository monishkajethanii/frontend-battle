"use client";
import React, { useState } from "react";
import { Download } from "lucide-react";
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

  //   const maxValue = Math.max(...chartData.map(d => d.value));
  const target2030 = 500;
  const target2025 = 600;

  const typeOptions = [
    {
      label: "Refurbishment",
      value: "Refurbishment",
      color: "border-rose-600 text-rose-600",
    },
    {
      label: "New build",
      value: "New build",
      color: "border-rose-600 text-rose-600",
    },
    {
      label: "All",
      value: "All",
      color: "bg-rose-600 text-white border-rose-600",
    },
  ];

  const statusOptions = [
    {
      label: "Complete",
      value: "Complete",
      color: "bg-rose-600 text-white border-rose-600",
    },
    {
      label: "Estimate",
      value: "Estimate",
      color: "border-gray-400 text-gray-600",
    },
  ];

  return (
    <>
      <Nav
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />
      <div className="min-h-screen bg-gray-50 p-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-start mb-8">
            <div className="space-y-8">
              <div className="space-y-6">
                <h2 className="text-lg font-medium text-gray-700">Filter by</h2>

                <div className="space-y-3">
                  <label className="text-sm font-medium text-gray-600">
                    Type
                  </label>
                  <div className="flex gap-3">
                    {typeOptions.map((option) => (
                      <button
                        key={option.value}
                        onClick={() => setSelectedType(option.value)}
                        className={`px-4 py-2 rounded-full border text-sm font-medium transition-all duration-200 ${
                          selectedType === option.value
                            ? "bg-rose-600 text-white border-rose-600"
                            : "border-rose-600 text-rose-600 hover:bg-rose-50"
                        }`}
                      >
                        {option.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-sm font-medium text-gray-600">
                    Status
                  </label>
                  <div className="flex gap-3">
                    {statusOptions.map((option) => (
                      <button
                        key={option.value}
                        onClick={() => setSelectedStatus(option.value)}
                        className={`px-4 py-2 rounded-full border text-sm font-medium transition-all duration-200 ${
                          selectedStatus === option.value
                            ? "bg-rose-600 text-white border-rose-600"
                            : "border-gray-400 text-gray-600 hover:bg-gray-50"
                        }`}
                      >
                        {option.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-medium text-gray-700">Key</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-0.5 border-t-2 border-dashed border-gray-400"></div>
                    <span className="text-sm text-gray-600">
                      500 kgCO<sub>2</sub>e/m² - Embodied Carbon Target 2030
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-0.5 bg-gray-400"></div>
                    <span className="text-sm text-gray-600">
                      600 kgCO<sub>2</sub>e/m² - Embodied Carbon Target 2025
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-right space-y-4">
              <div>
                <h1 className="text-4xl font-light text-gray-800 tracking-wider">
                  EMBODIED
                  <br />
                  <span className="text-rose-600">CARBON</span>
                  <br />
                  EMISSIONS
                </h1>
                <p className="text-sm text-gray-500 mt-4">
                  Intensity measured by kgCO<sub>2</sub>e/m²
                </p>
              </div>
              <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-full text-sm text-gray-600 hover:bg-gray-50 transition-colors">
                <span>Download the data</span>
                <Download className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Chart */}
          <div className="relative">
            {/* Y-axis labels */}
            <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-xs text-gray-500 -ml-12">
              <span>1200</span>
              <span>1000</span>
              <span>800</span>
              <span>600</span>
              <span>400</span>
              <span>200</span>
              <span>0</span>
            </div>

            {/* Y-axis label */}
            <div className="absolute -left-20 top-1/2 transform -rotate-90 text-sm text-gray-600 whitespace-nowrap">
              Embodied carbon intensity (kgCO<sub>2</sub>e/m²)
            </div>

            {/* Chart container */}
            <div className="ml-8 relative">
              {/* Target lines */}
              <div
                className="absolute w-full border-t-2 border-dashed border-gray-400 z-10"
                style={{ bottom: `${(target2030 / 1000) * 350 + 16}px` }}
              ></div>
              <div
                className="absolute w-full border-t-2 border-gray-400 z-10"
                style={{ bottom: `${(target2025 / 1000) * 350 + 16}px` }}
              ></div>

              {/* Chart bars */}
              <div className="flex items-end gap-1 h-96 bg-white border-l border-b border-gray-300 px-4">
                {chartData.map((item, index) => (
                  <div
                    key={index}
                    className="relative flex-1 flex flex-col items-center min-w-0"
                  >
                    <div className="relative group w-full">
                      {/* Value label */}
                      <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-xs text-gray-700 font-medium whitespace-nowrap">
                        {item.value}
                      </div>
                      {/* Bar */}
                      <div
                        className="w-full bg-rose-400 hover:bg-rose-500 transition-colors cursor-pointer rounded-t-sm"
                        style={{
                          height: `${Math.max((item.value / 1000) * 350, 8)}px`,
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CarbonEmissionsDashboard;
