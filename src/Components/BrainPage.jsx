import React from "react";

const Brain = () => {
  return (
    <div className="bg-gradient-to-br from-purple-100 to-purple-50 py-16 px-4 relative overflow-hidden">
      {/* Decorative curved top section */}
      <div
        className="absolute top-0 left-0 w-full h-24 bg-gradient-to-r from-purple-600 to-purple-700"
        style={{ clipPath: "ellipse(100% 100% at 50% 0%)" }}
      ></div>

      {/* Decorative spiral element */}
      <div className="absolute bottom-8 left-8 opacity-30 hidden md:block">
        <svg
          className="w-16 h-16 text-purple-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1}
            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Main Section */}
        <div className="flex flex-col lg:flex-row justify-center items-center gap-10 relative">
          {/* Left Mind Types */}
          <div className="flex flex-col space-y-8 text-center lg:text-right order-2 lg:order-1">
            <div>
              <h3 className="text-xl font-bold text-purple-700">Focused Mind</h3>
              <p className="text-gray-600 text-sm">Knowledge Retention</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-purple-700">Analytical Mind</h3>
              <p className="text-gray-600 text-sm">Knowledge Application</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-purple-700">Conscientious Mind</h3>
              <p className="text-gray-600 text-sm">Knowledge Acquisition</p>
            </div>
          </div>

          {/* Brain Diagram */}
          <div className="relative z-10 order-1 lg:order-2">
            <svg className="w-64 h-64 md:w-80 md:h-80" viewBox="0 0 400 400" fill="none">
              {/* Left brain */}
              <path
                d="M200 50 C120 50 60 110 60 190 C60 270 120 330 200 330 L200 190 Z"
                fill="url(#leftGradient)"
              />
              {/* Right brain */}
              <path
                d="M200 50 C280 50 340 110 340 190 C340 270 280 330 200 330 L200 190 Z"
                fill="url(#rightGradient)"
              />
              {/* Neural connections */}
              <g className="animate-pulse">
                <circle cx="200" cy="160" r="6" fill="#E91E63" />
                <circle cx="185" cy="180" r="4" fill="#E91E63" />
                <circle cx="215" cy="180" r="4" fill="#E91E63" />
                <circle cx="200" cy="200" r="5" fill="#E91E63" />
                <circle cx="175" cy="220" r="3" fill="#E91E63" />
                <circle cx="225" cy="220" r="3" fill="#E91E63" />
                <line x1="200" y1="166" x2="185" y2="176" stroke="#E91E63" strokeWidth="2" />
                <line x1="200" y1="166" x2="215" y2="176" stroke="#E91E63" strokeWidth="2" />
                <line x1="185" y1="184" x2="200" y2="195" stroke="#E91E63" strokeWidth="2" />
                <line x1="215" y1="184" x2="200" y2="195" stroke="#E91E63" strokeWidth="2" />
                <line x1="200" y1="205" x2="175" y2="217" stroke="#E91E63" strokeWidth="2" />
                <line x1="200" y1="205" x2="225" y2="217" stroke="#E91E63" strokeWidth="2" />
              </g>
              <defs>
                <linearGradient id="leftGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#FDD835" />
                  <stop offset="100%" stopColor="#FB8C00" />
                </linearGradient>
                <linearGradient id="rightGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#1E88E5" />
                  <stop offset="100%" stopColor="#3949AB" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* Right Mind Types */}
          <div className="flex flex-col space-y-8 text-center lg:text-left order-3">
            <div>
              <h3 className="text-xl font-bold text-purple-700">Inventive Mind</h3>
              <p className="text-gray-600 text-sm">Knowledge Development</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-purple-700">Empathetic Mind</h3>
              <p className="text-gray-600 text-sm">
                Emotional Balance propagates real learning
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Title Section */}
        <div className="text-center mt-12">
          <h1 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mb-2">
            PéNTEMiND
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold text-purple-700">
            The Learning Minds
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Brain;
