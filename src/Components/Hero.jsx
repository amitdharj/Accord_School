import React from "react";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-b from-purple-400 to-Purple-300 relative  pt-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        
        {/* Left Side Content */}
        <div className="space-y-4 z-10">
          <p className="text-lg text-gray-700 italic">Join Exciting Activities!</p>
          <h1 className="text-4xl md:text-5xl font-bold text-purple-900 leading-tight">
            Learning Through Fun <br /> Play Every Day
          </h1>
          <p className="text-gray-600 text-lg">
            Encourage children to participate in art, science, and physical
            activities for holistic development. This is the ideal way for young
            learners to engage.
          </p>
          <button className="bg-purple-600 text-white px-6 py-3 rounded-md hover:bg-purple-800 transition duration-300">
            Discover More
          </button>
        </div>

        {/* Right Side Image */}
        <div className="relative flex justify-center">
          <img
            src="/Kidsplaying.jpg"
            alt="Kids playing"
            className="rounded-lg shadow-lg max-w-full"
          />
        </div>
      </div>

      {/* Decorative Elements */}
      <img
        src="/sun.png"
        alt="Sun"
        className="absolute top-20 left-10 w-20 animate-bounce"
      />
      <img
        src="/hotair.png"
        alt="Hot air balloon"
        className="absolute bottom-10 left-20 w-16 animate-bounce"
      />
      <img
        src="/cloude.png"
        alt="Cloud"
        className="absolute bottom-0 right-0 w-32 opacity-80 animate-pulse duration-700"
      />
    </section>
  );
};

export default HeroSection;
