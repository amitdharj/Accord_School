import React from "react";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-b from-purple-400 to-Purple-300 relative  pt-22 pb-26  overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

        {/* Decorative Elements */}
      <div className="absolute top-12 left-5 opacity-60 ">
        <svg className="w-16 h-16 text-purple-600 transform rotate-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4"/>
        </svg>
      </div>
      
      <div className="absolute top-22 right-12 opacity-60">
        <svg className="w-12 h-12 text-purple-700 transform -rotate-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/>
        </svg>
      </div>

      <div className="absolute bottom-16 right-26 opacity-40">
        <div className="w-16 h-16 rounded-full border-2 border-purple-800 flex items-center justify-center">
          <div className="w-8 h-8 rounded-full border-2 border-purple-800"></div>
        </div>
      </div>
        
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
        className="absolute bottom-10 left-16 w-18 pt-24 animate-bounce"
      />
      <img
        src="/cloude.png"
        alt="Cloud"
        className="absolute bottom-0 right-0 w-40 opacity-80 pr-10 animate-pulse duration-700"
      />
       {/* Additional decorative elements */}
      <div className="absolute  bottom-8 left-18 opacity-50">
        <div className="flex space-x-2">
          <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse"></div>
          <div className="w-3 h-3 bg-pink-500 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
          <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
