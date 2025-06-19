"use client";

import { useState } from "react";
import Image from "next/image";
import Nav from "../Nav";

const imagePairs = [
  { front: "/eye.jpg", back: "/frog.jpg" },
  { front: "/krishna.jpeg", back: "/sunset.jpeg" },
];

export default function CarouselSwitch() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-0 w-screen h-screen">
      {imagePairs.map((pair, index) => (
        <FlipImage key={index} front={pair.front} back={pair.back} />
      ))}
    </div>
  );
}

function FlipImage({ front, back }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <>
    {/* <Nav/> */}
      <div
        className="relative w-full h-screen perspective"
        onMouseEnter={() => setFlipped(true)}
        onMouseLeave={() => setFlipped(false)}
      >
        <div
          className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d ${
            flipped ? "rotate-y-90" : "rotate-y-0"
          }`}
        >
          <div className="absolute w-full h-full backface-hidden">
            <Image src={front} alt="front" fill className="object-cover" />
          </div>
          <div className="absolute w-full h-full backface-hidden rotate-y-180">
            <Image src={back} alt="back" fill className="object-cover" />
          </div>
        </div>
      </div>
    </>
  );
}

// Tailwind CSS custom styles (e.g., in global.css or tailwind.config.css)
/*

*/
