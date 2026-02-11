"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    image: "/slide1.jpg",
    heading: "Welcome to mySchool",
    subtext: "Empowering young minds for a brighter future.",
  },
  {
    image: "/slide2.jpg",
    heading: "Excellence in Education",
    subtext: "Where learning meets inspiration and growth.",
  },
  {
    image: "/slide3.jpg",
    heading: "Building Tomorrow’s Leaders",
    subtext: "Join us in shaping the next generation.",
  },
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);

  // Auto change slide every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full h-[85vh] overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          {/* Background Image */}
          <Image
            src={slides[current].image}
            alt={slides[current].heading}
            fill
            priority
            className="object-cover brightness-75"
          />
        </motion.div>
      </AnimatePresence>

      {/* Overlay Text */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4">
        <motion.h1
          key={slides[current].heading}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-3xl md:text-5xl font-bold text-[#ffcc66] drop-shadow-lg"
        >
          {slides[current].heading}
        </motion.h1>

        <motion.p
          key={slides[current].subtext}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="text-lg md:text-2xl mt-3 text-white max-w-2xl"
        >
          {slides[current].subtext}
        </motion.p>

        <motion.a
          href="/admissions"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-6 bg-[#ffcc66] text-[#003366] font-semibold px-6 py-3 rounded-full shadow-md hover:bg-[#ffd77f] transition"
        >
          Apply Now
        </motion.a>
      </div>

      {/* Dots Indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, i) => (
          <div
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full cursor-pointer transition-all ${
              i === current ? "bg-[#ffcc66] scale-125" : "bg-white/60"
            }`}
          ></div>
        ))}
      </div>
    </section>
  );
}
