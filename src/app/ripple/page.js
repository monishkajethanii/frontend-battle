"use client";
import React, { useState, useEffect, useRef } from "react";
import Nav from "../Nav";

export default function CursorRippleEffect() {
  const [ripples, setRipples] = useState([]);
  const [isDragging, setIsDragging] = useState(false);
  const lastRippleTime = useRef(0);
  const throttleDelay = 80; // Increased delay for slower ripple creation

  const createRipple = (x, y) => {
    const now = Date.now();
    // Throttle ripple creation to prevent too many ripples
    if (now - lastRippleTime.current < throttleDelay) return;

    lastRippleTime.current = now;

    // Calculate size for full screen coverage
    const maxDistance = Math.max(
      Math.sqrt(x * x + y * y),
      Math.sqrt((window.innerWidth - x) ** 2 + y * y),
      Math.sqrt(x * x + (window.innerHeight - y) ** 2),
      Math.sqrt((window.innerWidth - x) ** 2 + (window.innerHeight - y) ** 2)
    );

    const size = maxDistance * 2;

    const newRipple = {
      x: x - size / 2,
      y: y - size / 2,
      size,
      id: Date.now() + Math.random(),
    };

    setRipples((prev) => [...prev, newRipple]);

    // Remove ripple after longer animation
    setTimeout(() => {
      setRipples((prev) => prev.filter((ripple) => ripple.id !== newRipple.id));
    }, 1500); // Increased from 800ms to 1500ms
  };

  const handleMouseMove = (event) => {
    // Create ripple on every mouse move
    createRipple(event.clientX, event.clientY);
  };

  const handleMouseDown = (event) => {
    setIsDragging(true);
    createRipple(event.clientX, event.clientY);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleDrag = (event) => {
    if (isDragging) {
      createRipple(event.clientX, event.clientY);
    }
  };

  useEffect(() => {
    // Add event listeners
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mousemove", handleDrag);

    // Touch events for mobile
    const handleTouchMove = (event) => {
      const touch = event.touches[0];
      if (touch) {
        createRipple(touch.clientX, touch.clientY);
      }
    };

    document.addEventListener("touchmove", handleTouchMove);
    document.addEventListener("touchstart", (event) => {
      const touch = event.touches[0];
      if (touch) {
        createRipple(touch.clientX, touch.clientY);
      }
    });

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mousemove", handleDrag);
      document.removeEventListener("touchmove", handleTouchMove);
      document.removeEventListener("touchstart", (event) => {
        const touch = event.touches[0];
        if (touch) {
          createRipple(touch.clientX, touch.clientY);
        }
      });
    };
  }, [isDragging]);

  return (
    <>
      <div>
        <Nav />
      </div>
      <div
        className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-100 relative overflow-hidden"
        style={{ cursor: isDragging ? "grabbing" : "crosshair" }}
      >
        {/* Ripple container */}
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            pointerEvents: "none",
            zIndex: 9999,
          }}
        >
          {ripples.map((ripple) => (
            <div
              key={ripple.id}
              style={{
                position: "absolute",
                left: ripple.x,
                top: ripple.y,
                width: ripple.size,
                height: ripple.size,
                borderRadius: "50%",
                background: isDragging
                  ? "rgba(236, 72, 153, 0.3)" // Pink when dragging
                  : "rgba(16, 185, 129, 0.2)", // Emerald for normal movement
                transform: "scale(0)",
                animation: "cursor-ripple 1.5s ease-out forwards",
              }}
            />
          ))}
        </div>

        {/* Page content */}
        <div className="relative z-10">
          <div className="container mx-auto px-6 py-12">
            <div className="text-center mb-2">
              <h1 className="text-3xl font-bold text-gray-800 mb-4">
                Cursor Movement Ripple Effect
              </h1>
            </div>
          </div>

          <div className="text-center mb-8">
            <div className="inline-flex space-x-4">
              <div className="px-6 py-3 bg-emerald-600/20 backdrop-blur-sm text-emerald-800 rounded-lg border border-emerald-200">
                Normal Movement: Emerald Ripples
              </div>
              <div className="px-6 py-3 bg-pink-600/20 backdrop-blur-sm text-pink-800 rounded-lg border border-pink-200">
                Dragging: Pink Ripples
              </div>
            </div>
          </div>
        </div>

        <style jsx>{`
          @keyframes cursor-ripple {
            0% {
              transform: scale(0);
              opacity: 0.6;
            }
            30% {
              opacity: 0.4;
            }
            70% {
              opacity: 0.2;
            }
            100% {
              transform: scale(1);
              opacity: 0;
            }
          }
        `}</style>
      </div>
    </>
  );
}
