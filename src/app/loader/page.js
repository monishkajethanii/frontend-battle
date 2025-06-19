"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Nav from "../Nav";

const LoaderThenImage = () => {
  const [progress, setProgress] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
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

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setLoaded(true);
          return 100;
        }
        return prev + 1;
      });
    }, 30);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Nav
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />

      <div className="min-h-screen flex flex-col items-center justify-center bg-black px-4 text-white">
        {!loaded ? (
          <>
            {/* Custom progress bar styled like your image */}
            <div className="w-full max-w-md h-6 bg-[#1a1a1a] overflow-hidden">
              <div
                className="h-full bg-[#aaaaaa] transition-all duration-300 ease-out"
                style={{ width: `${progress}%` }}
              />
            </div>
            <p className="mt-4 text-lg font-mono">{progress}%</p>
          </>
        ) : (
          <div className="fade-in flex flex-col items-center gap-4 mt-8">
            <Image
              src="/eye.jpg" 
              alt="Loaded Image"
              width={250}
              height={250}
              className="rounded-xl shadow-2xl bg-white border border-gray-300"
            />
          </div>
        )}
      </div>

      <style jsx>{`
        .fade-in {
          animation: fadeIn 1s ease-in-out forwards;
          opacity: 0;
        }

        @keyframes fadeIn {
          to {
            opacity: 1;
          }
        }
      `}</style>
    </>
  );
};

export default LoaderThenImage;