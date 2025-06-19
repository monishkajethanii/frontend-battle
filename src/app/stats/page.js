"use client";
import React, { useState } from "react";
import { Download, ArrowRight, TrendingUp, TrendingDown } from "lucide-react";
import Nav from "../Nav";

const Dashboard = () => {
  const metrics = [
    {
      title: "Managed portfolio carbon footprint",
      unit: "tCO₂e",
      currentValue: "45,048",
      trend: "16%",
      trendDirection: "up",
      baseYear: "from 2019",
      yearlyData: [
        { year: "2022", value: "45,048", percentage: 100 },
        { year: "2021", value: "14,111", percentage: 31 },
        { year: "2020", value: "32,813", percentage: 73 },
        { year: "2019", value: "38,673", percentage: 86 },
      ],
      actionText: "See full breakdown of carbon footprint",
    },
    {
      title: "Managed portfolio energy intensity",
      unit: "kWh/m²",
      currentValue: "123",
      trend: "22%",
      trendDirection: "down",
      baseYear: "from 2019",
      yearlyData: [
        { year: "2022", value: "123", percentage: 78 },
        { year: "2021", value: "128", percentage: 82 },
        { year: "2020", value: "135", percentage: 86 },
        { year: "2019", value: "157", percentage: 100 },
      ],
      actionText: "Download the data",
    },
    {
      title: "Managed portfolio energy consumption",
      unit: "kWh",
      currentValue: "47,790,662",
      trend: "27%",
      trendDirection: "down",
      baseYear: "from 2019",
      yearlyData: [
        { year: "2022", value: "47,790,662", percentage: 73 },
        { year: "2021", value: "49,324,077", percentage: 76 },
        { year: "2020", value: "48,784,205", percentage: 75 },
        { year: "2019", value: "65,198,706", percentage: 100 },
      ],
      actionText: "Download the data",
    },
  ];
  const [darkMode, setDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const formatNumber = (num) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  return (
    <>
      <Nav
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />
      <div className="min-h-screen bg-gray-50 p-4 md:p-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {metrics.map((metric, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 md:p-8 shadow-sm"
              >
                {/* Header */}
                <div className="mb-8">
                  <h2 className="text-gray-700 text-base md:text-lg font-medium mb-4 leading-relaxed">
                    {metric.title}
                  </h2>
                  <div className="flex items-end gap-2 mb-2">
                    <span className="text-4xl md:text-5xl font-light text-gray-900">
                      {metric.currentValue}
                    </span>
                    <span className="text-sm text-gray-500 mb-2">
                      {metric.unit}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <span className="text-gray-500">{metric.baseYear}</span>
                    <div
                      className={`flex items-center gap-1 ${
                        metric.trendDirection === "up"
                          ? "text-red-500"
                          : "text-green-500"
                      }`}
                    >
                      {metric.trendDirection === "up" ? (
                        <TrendingUp className="w-4 h-4" />
                      ) : (
                        <TrendingDown className="w-4 h-4" />
                      )}
                      <span className="font-medium">{metric.trend}</span>
                    </div>
                  </div>
                </div>

                {/* Chart */}
                <div className="mb-8 space-y-4">
                  {metric.yearlyData.map((data, idx) => (
                    <div key={idx} className="flex items-center gap-4">
                      <span className="text-gray-600 text-sm w-12 flex-shrink-0">
                        {data.year}
                      </span>
                      <div className="flex-1 flex items-center gap-3">
                        <div className="flex-1 bg-gray-200 rounded-full h-3 overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-red-400 to-red-500 rounded-full transition-all duration-700 ease-out"
                            style={{ width: `${data.percentage}%` }}
                          />
                        </div>
                        <span className="text-gray-700 text-sm font-medium w-20 text-right">
                          {data.value}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Action Button */}
                <button className="group flex items-center gap-2 text-gray-600 hover:text-gray-800 text-sm font-medium transition-colors duration-200">
                  <span>{metric.actionText}</span>
                  {index === 0 ? (
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                  ) : (
                    <Download className="w-4 h-4 group-hover:translate-y-0.5 transition-transform duration-200" />
                  )}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
