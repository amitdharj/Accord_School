import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const programs = [
  {
    title: "Imaginative Innovators (4 - 5 years)",
    desc: "Encourages problem-solving and critical thinking.",
    color: "text-green-600",
    img: "/images/innovators.png",
  },
  {
    title: "Little Explorers (1.5 - 2 years)",
    desc: "Toddlers engage in sensory activities that promote curiosity.",
    color: "text-orange-600",
    img: "/images/explorers.png",
  },
  {
    title: "Creative Learners (2 - 3 years)",
    desc: "Emphasizes creative expression through art, music.",
    color: "text-blue-600",
    img: "/images/learners.png",
  },
];

const EducationalAdventures = () => {
  const [index, setIndex] = useState(0);

  // Auto slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % programs.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + programs.length) % programs.length);
  };

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % programs.length);
  };

  return (
    <section className="bg-gradient-to-t from-purple-100 to-Purple-300 py-10 text-center pb-6">
      <p className="italic text-gray-600">Engaging Learning Programs</p>
      <h2 className="text-2xl md:text-3xl font-bold text-fuchsia-900 mt-2">
        Our Educational Adventures
      </h2>

      <div className="relative mt-8 flex justify-center items-center gap-4">
        {/* Left Arrow */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white border rounded-full w-8 h-8 flex items-center justify-center shadow-md hover:scale-110 transition"
        >
          ←
        </button>

        {/* Slider Container */}
        <div className="overflow-hidden w-full max-w-3xl pt-5 pb-7">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ x: "100%", opacity: 0 }}
              animate={{ x: "0%", opacity: 1 }}
              exit={{ x: "-100%", opacity: 0 }}
              transition={{ duration: 0.6 }}
              className="flex justify-center gap-6"
            >
              {programs.slice(index, index + 3).map((program, i) => (
                <div
                  key={i}
                  className="bg-yellow-50 rounded-2xl shadow-md p-6 w-64 flex-shrink-0 hover:scale-105 transition"
                >
                  <img
                    src={program.img}
                    alt={program.title}
                    className="w-full h-32 object-contain mb-4"
                  />
                  <h3 className={`font-bold ${program.color}`}>
                    {program.title}
                  </h3>
                  <p className="text-gray-600 text-sm mt-2">{program.desc}</p>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right Arrow */}
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white border rounded-full w-8 h-8 flex items-center justify-center shadow-md hover:scale-110 transition"
        >
          →
        </button>
      </div>
    </section>
  );
};

export default EducationalAdventures;
