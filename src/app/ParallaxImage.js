// components/ParallaxImage.jsx (use client if using App Router)
'use client';
import { useRef } from 'react';
import Image from 'next/image';
import { useScroll, useTransform, motion } from 'framer-motion';

export default function ParallaxImage({ src, alt, speed = 0.2 }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  // `speed` controls how much the image moves relative to scroll.
  // A positive speed makes it move faster than the scroll, a negative speed slower (classic parallax).
  const y = useTransform(scrollYProgress, [0, 1], [`-${speed * 100}px`, `${speed * 100}px`]);

  return (
    <div ref={ref} className="relative h-screen overflow-hidden">
      <motion.div style={{ y }} className="w-full h-full">
        <Image
          src={src}
          alt={alt}
          fill
          style={{ objectFit: 'cover' }}
          // Add placeholder='blur' for better loading experience with Next.js Image
          placeholder="blur"
          blurDataURL={src.replace(/\.(jpg|jpeg|png)$/, '-blur.$1')} // Adjust based on your blur image naming
        />
      </motion.div>
    </div>
  );
}