import React from "react";
import { motion } from "framer-motion";

const programs = [
  { title: "Playgroup", desc: "For ages 1.5 - 2.5 years", img: "/Playgroup.png" },
  { title: "Nursery", desc: "For ages 2.5 - 3.5 years", img: "/Nursery2.png" },
  { title: "Junior KG", desc: "For ages 3.5 - 4.5 years", img: "/guniorKg.png" },
  { title: "Senior KG", desc: "For ages 4.5 - 5.5 years", img: "/SeniorKg.png" },
];

const Programs = () => {
  return (
    <section className="bg-purple-100 py-12 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold font-sans text-fuchsia-800 mb-8">Our Programs</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 ">
          {programs.map((program, index) => (
            <motion.div
              key={index}
              className="bg-stone-50 p-4 rounded-lg shadow hover:shadow-lg hover:scale-105 transition-transform duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <img src={program.img} alt={program.title} className="rounded-md mb-4 w-full" />
              <h3 className="text-xl font-semibold text-purple-800">{program.title}</h3>
              <p className="text-gray-600 mt-2">{program.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;
