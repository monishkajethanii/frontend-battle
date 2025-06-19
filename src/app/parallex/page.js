"use client";

import React, { useState, useRef } from "react";
import Nav from "../Nav";
import Image from "next/image";

const RippleCursorPage = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [ripples, setRipples] = useState([]);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const imgRef = useRef(null);

  const createRipple = (event) => {
    const rect = imgRef.current?.getBoundingClientRect();
    if (!rect) return;

    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    // Ripple
    const newRipple = {
      x,
      y,
      id: Date.now() + Math.random(),
    };
    setRipples((prev) => [...prev, newRipple]);
    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== newRipple.id));
    }, 600);

    // Tilt
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * 5; // Max 5 degrees
    const rotateY = ((x - centerX) / centerX) * -5;
    setTilt({ x: rotateX, y: rotateY });
  };

  const resetTilt = () => setTilt({ x: 0, y: 0 });

  return (
    <>
      <Nav
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />
      <div
        className={`min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-4 transition-colors duration-500 ${
          darkMode ? "bg-gray-900" : "bg-gray-100"
        }`}
      >
        <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-4">
          <h1
            className={`text-5xl font-bold text-center mb-10 ${
              darkMode ? "text-white" : "text-black"
            }`}
          >
            Ripple with Image Movement
          </h1>

          <div
            ref={imgRef}
            onMouseMove={createRipple}
            onMouseLeave={resetTilt}
            className="relative w-[500px] h-[500px] cursor-pointer rounded-lg overflow-hidden transition-transform duration-200"
            style={{
              transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
            }}
          >
            <Image
              src="/eye.jpg"
              alt="Hover Image"
              fill
              className="object-cover"
            />

            {/* Ripple effects */}
            {ripples.map((ripple) => (
              <span
                key={ripple.id}
                className="absolute bg-white/60 rounded-full pointer-events-none"
                style={{
                  left: ripple.x - 5,
                  top: ripple.y - 5,
                  width: 10,
                  height: 10,
                  animation: "rippleSmall 0.6s ease-out forwards",
                }}
              />
            ))}
          </div>

          <style jsx>{`
            @keyframes rippleSmall {
              0% {
                transform: scale(0);
                opacity: 0.8;
              }
              100% {
                transform: scale(8);
                opacity: 0;
              }
            }
          `}</style>
        </div>
      </div>
    </>
  );
};

export default RippleCursorPage;
