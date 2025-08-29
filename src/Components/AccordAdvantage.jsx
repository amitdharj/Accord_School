import React from "react";
import { Link,NavLink } from "react-router-dom";

const AboutSection = () => {
  return (
    <div className="min-h-screen top-12 mb-12 bg-gradient-to-br from-purple-100 via-purple-50 to-yellow-100 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-300 rounded-full opacity-80 -translate-y-32 translate-x-32"></div>
      <div className="absolute bottom-10 left-10 w-20 h-20 border-4 border-purple-300 rounded-lg rotate-12 opacity-60"></div>
      <div className="absolute top-1/2 right-20 opacity-30">
        <svg
          width="100"
          height="100"
          viewBox="0 0 100 100"
          className="text-purple-300"
        >
          <path
            d="M20 50 Q50 20 80 50 Q50 80 20 50"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
          />
          <circle cx="30" cy="40" r="3" fill="currentColor" />
          <circle cx="70" cy="40" r="3" fill="currentColor" />
        </svg>
      </div>
      <div className="absolute bottom-20 right-1/4 opacity-40">
        <svg
          width="80"
          height="60"
          viewBox="0 0 80 60"
          className="text-purple-200"
        >
          <path
            d="M10 50 Q20 10 40 30 Q60 10 70 50"
            fill="none"
            stroke="currentColor"
            strokeWidth="4"
            strokeLinecap="round"
          />
        </svg>
      </div>

      <div className="container mx-auto px-6 py-12 max-w-6xl relative z-10">
        {/* Navigation Tabs */}
        <div className="flex flex-wrap gap-4 mb-12 justify-center lg:justify-start">
          <NavLink to="/AboutSection" className={({ isActive }) =>
            isActive
              ? "bg-fuchsia-900 text-white px-6 py-3 rounded-full font-semibold shadow-lg transition-all duration-300 transform scale-105"
              : "bg-stone-300 text-black px-6 py-3 rounded-full font-semibold shadow-md shadow-gray-400 hover:bg-fuchsia-900 transition-all duration-300 transform hover:scale-105"
          }>
            Legacy
          </NavLink>
          <NavLink to="/AccordAdvantage" className={({ isActive }) =>
            isActive
              ? "bg-fuchsia-900 text-white px-6 py-3 rounded-full font-semibold shadow-lg transition-all duration-300 transform scale-105"
              : "bg-stone-300 text-black px-6 py-3 rounded-full font-semibold shadow-md shadow-gray-400 hover:bg-fuchsia-900 transition-all duration-300 transform hover:scale-105"
          }>
            Accord Advantage
          </NavLink>

          <NavLink to="/VisionMission" className={({ isActive }) =>
            isActive
              ? "bg-fuchsia-900 text-white px-6 py-3 rounded-full font-semibold shadow-lg transition-all duration-300 transform scale-105"
              : "bg-stone-300 text-black px-6 py-3 rounded-full font-semibold shadow-md shadow-gray-400 hover:bg-fuchsia-900 transition-all duration-300 transform hover:scale-105"
          }>
            Vision & Mission
          </NavLink>
         
        </div>

        {/* Content Section */}
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Side - Icon */}
          <div className="lg:col-span-2 flex justify-center lg:justify-start">
            <div className="relative">
              <div className="w-24 h-24 bg-white rounded-2xl shadow-lg flex items-center justify-center transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  className="text-purple-600"
                >
                  <path
                    d="M12 8h24c2.2 0 4 1.8 4 4v24c0 2.2-1.8 4-4 4H12c-2.2 0-4-1.8-4-4V12c0-2.2 1.8-4 4-4z"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <path
                    d="M16 16h16M16 24h12M16 32h8"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <circle cx="32" cy="32" r="2" fill="currentColor" />
                </svg>
              </div>
              <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full"></div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-10 space-y-8">
            {/* Title */}
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-purple-800 leading-tight">
                Accord Advantage
              </h1>
              <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-purple-400 rounded-full"></div>
            </div>

            {/* Subtitle */}
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 leading-relaxed">
              Little Accord Public School
            </h2>

            {/* Description */}
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-purple-100">
              <p className="text-lg text-gray-700 leading-relaxed font-medium">
                We believe that there is 'unique potential' in every child, and
                Accord nurtures it. Touted to be one of the best preschools in
                India, we nurture and shape minds with the help of our
                best-in-class age appropriate progressive curriculum. We are
                changing the face of early childhood education with consistent
                upgradation and innovation to meet the current needs with a
                proactive future, focussed on grooming them to be 'ever-ready
                for life'. Our commitment towards quality education also values
                aspects like self-reliance, peer interaction, and individual
                growth. Our solid foundation and polished business model makes
                it profitable for all the stakeholders involved.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Additional decorative elements */}
      <div className="absolute bottom-0 left-0 w-40 h-40 opacity-20">
        <svg viewBox="0 0 100 100" className="text-purple-300 w-full h-full">
          <circle cx="20" cy="80" r="3" fill="currentColor" />
          <circle cx="40" cy="85" r="2" fill="currentColor" />
          <circle cx="60" cy="75" r="4" fill="currentColor" />
          <circle cx="80" cy="90" r="2" fill="currentColor" />
          <path
            d="M15 75 Q30 60 45 80 Q60 55 85 85"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          />
        </svg>
      </div>
    </div>
  );
};

export default AboutSection;
