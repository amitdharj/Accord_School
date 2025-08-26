import React from "react";

const features = [
  {
    title: "Fun Quizzes and Games",
    desc: "offer engaging activities that make learning enjoyable for children.",
    icon: "/Quize.webp",
  },
  {
    title: "Creative Expression Tools",
    desc: "Children with innovative ways to express themselves through art.",
    icon: "/Art.png",
  },
  {
    title: "Resource Library",
    desc: "Offers a wide range of educational materials, including worksheets.",
    icon: "/Library.jpg",
    className: "rounded-xl",
  },
  {
    title: "Interactive Storytelling",
    desc: "Interactive Storytelling allows children to engage with stories.",
    icon: "/Storytelling.png",
  },
];

const WhyChoose = () => {
  return (
    <section className="bg-yellow-50 py-12 px-4 md:px-12 relative text-center">
      {/* Section Heading */}
      <p className="italic text-gray-600">Discover Our Strength</p>
      <h2 className="text-2xl md:text-3xl font-bold text-red-700 mt-2">
        Why Choose Our Kindergarten?
      </h2>
      <img
        src="/bee.png"
        alt="Bee"
        className="mx-auto w-8 mt-2 animate-bounce"
      />

      {/* Main Container */}
      <div className="relative mt-10 grid md:grid-cols-3 gap-6 items-center">
        {/* Left Features */}
        <div className="flex flex-col gap-6">
          {features.slice(0, 2).map((feature, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-md p-4 flex items-center gap-4 hover:scale-105 transition transform duration-300"
            >
              <img src={feature.icon} alt="icon" className="w-12 h-12" />
              <div className="text-left">
                <h3 className="text-red-700 font-bold">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Center Image */}
        <div className="flex justify-center">
          <img
            src="/images/kid.png"
            alt="Kid"
            className="w-56 md:w-64 lg:w-72 animate-fadeIn"
          />
        </div>

        {/* Right Features */}
        <div className="flex flex-col gap-6">
          {features.slice(2).map((feature, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-md p-4 flex items-center gap-4 hover:scale-105 transition transform duration-300"
            >
              <img src={feature.icon} alt="icon" className="w-12 h-12" />
              <div className="text-left">
                <h3 className="text-red-700 font-bold">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
