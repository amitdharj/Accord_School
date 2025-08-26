import React from 'react';

const Brain = () => {
  return (
    <div className="bg-gradient-to-br from-purple-100 to-purple-50 py-16 px-4 relative overflow-hidden">
      
      {/* Decorative curved top section */}
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-r from-purple-600 to-purple-700" 
           style={{clipPath: 'ellipse(100% 100% at 50% 0%)'}}>
      </div>

      {/* Decorative spiral elements */}
      <div className="absolute bottom-8 left-8 opacity-30">
        <svg className="w-16 h-16 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} 
                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto">
        
        {/* Main Brain Diagram */}
        <div className="flex justify-center items-center relative">
          
          {/* Left Side Mind Types */}
          <div className="absolute left-0 top-1/2 transform -translate-y-1/2 space-y-12">
            
            {/* Focused Mind */}
            <div className="flex items-center">
              <div className="text-right mr-8">
                <h3 className="text-xl font-bold text-purple-700">Focused Mind</h3>
                <p className="text-gray-600 text-sm">Knowledge Retention</p>
              </div>
              <div className="w-4 h-4 bg-purple-200 rounded-full border-2 border-purple-400"></div>
              <div className="w-32 h-0.5 bg-purple-300"></div>
            </div>

            {/* Analytical Mind */}
            <div className="flex items-center">
              <div className="text-right mr-8">
                <h3 className="text-xl font-bold text-purple-700">Analytical Mind</h3>
                <p className="text-gray-600 text-sm">Knowledge Application</p>
              </div>
              <div className="w-4 h-4 bg-purple-200 rounded-full border-2 border-purple-400"></div>
              <div className="w-32 h-0.5 bg-purple-300"></div>
            </div>

            {/* Conscientious Mind */}
            <div className="flex items-center">
              <div className="text-right mr-8">
                <h3 className="text-xl font-bold text-purple-700">Conscientious Mind</h3>
                <p className="text-gray-600 text-sm">Knowledge Acquisition</p>
              </div>
              <div className="w-4 h-4 bg-purple-200 rounded-full border-2 border-purple-400"></div>
              <div className="w-32 h-0.5 bg-purple-300"></div>
            </div>
          </div>

          {/* Center Brain Illustration */}
          <div className="relative z-10">
            <svg className="w-80 h-80" viewBox="0 0 400 400" fill="none">
              
              {/* Left brain hemisphere (Yellow/Orange) */}
              <path d="M200 50 C120 50 60 110 60 190 C60 270 120 330 200 330 L200 190 Z" 
                    fill="url(#leftGradient)" />
              
              {/* Right brain hemisphere (Blue) */}
              <path d="M200 50 C280 50 340 110 340 190 C340 270 280 330 200 330 L200 190 Z" 
                    fill="url(#rightGradient)" />
              
              {/* Neural connections in center */}
              <g className="animate-pulse">
                <circle cx="200" cy="160" r="6" fill="#E91E63" />
                <circle cx="185" cy="180" r="4" fill="#E91E63" />
                <circle cx="215" cy="180" r="4" fill="#E91E63" />
                <circle cx="200" cy="200" r="5" fill="#E91E63" />
                <circle cx="175" cy="220" r="3" fill="#E91E63" />
                <circle cx="225" cy="220" r="3" fill="#E91E63" />
                
                {/* Connecting lines */}
                <line x1="200" y1="166" x2="185" y2="176" stroke="#E91E63" strokeWidth="2" />
                <line x1="200" y1="166" x2="215" y2="176" stroke="#E91E63" strokeWidth="2" />
                <line x1="185" y1="184" x2="200" y2="195" stroke="#E91E63" strokeWidth="2" />
                <line x1="215" y1="184" x2="200" y2="195" stroke="#E91E63" strokeWidth="2" />
                <line x1="200" y1="205" x2="175" y2="217" stroke="#E91E63" strokeWidth="2" />
                <line x1="200" y1="205" x2="225" y2="217" stroke="#E91E63" strokeWidth="2" />
              </g>

              {/* Gradients */}
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

          {/* Right Side Mind Types */}
          <div className="absolute right-0 top-1/2 transform -translate-y-1/2 space-y-16">
            
            {/* Inventive Mind */}
            <div className="flex items-center">
              <div className="w-32 h-0.5 bg-purple-300"></div>
              <div className="w-4 h-4 bg-purple-200 rounded-full border-2 border-purple-400"></div>
              <div className="text-left ml-8">
                <h3 className="text-xl font-bold text-purple-700">Inventive Mind</h3>
                <p className="text-gray-600 text-sm">Knowledge Development</p>
              </div>
            </div>

            {/* Empathetic Mind */}
            <div className="flex items-center">
              <div className="w-32 h-0.5 bg-purple-300"></div>
              <div className="w-4 h-4 bg-purple-200 rounded-full border-2 border-purple-400"></div>
              <div className="text-left ml-8">
                <h3 className="text-xl font-bold text-purple-700">Empathetic Mind</h3>
                <p className="text-gray-600 text-sm">Emotional Balance propagates real learning</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Title Section */}
        <div className="text-center mt-16">
          <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mb-2">
            PéNTEMiND
          </h1>
          <h2 className="text-2xl font-semibold text-purple-700">
            The Learning Minds
          </h2>
        </div>

        {/* Additional decorative elements */}
        <div className="absolute top-32 right-16 opacity-40">
          <div className="w-12 h-12 rounded-full border-2 border-purple-800 animate-spin" 
               style={{animationDuration: '10s'}}>
            <div className="w-4 h-4 bg-purple-700 rounded-full mt-1 ml-1"></div>
          </div>
        </div>

        <div className="absolute bottom-32 right-8 opacity-30">
          <div className="w-8 h-8 border-2 border-purple-600 rotate-45"></div>
        </div>
      </div>

      {/* Floating elements animation */}
      <div className="absolute top-20 left-1/4 opacity-50">
        <div className="w-3 h-3 bg-purple-400 rounded-full animate-bounce" 
             style={{animationDelay: '0s', animationDuration: '2s'}}></div>
      </div>
      <div className="absolute top-40 right-1/4 opacity-50">
        <div className="w-2 h-2 bg-pink-400 rounded-full animate-bounce" 
             style={{animationDelay: '1s', animationDuration: '3s'}}></div>
      </div>
    </div>
  );
};

export default Brain;