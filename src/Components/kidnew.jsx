import React from 'react';

const KidsPreschool = () => {
  return (
    <div className="bg-gradient-to-br from-purple-100 to-purple-200 min-h-screen py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-purple-700 mb-6">
            Why Choose Accord Public School?
          </h1>
          <p className="text-gray-700 text-lg max-w-5xl mx-auto leading-relaxed">
            Accord Public School is your experienced trusted partner in providing exceptional early education for your child. Here's why Accord stands out as the preferred choice for parents seeking the best for their little ones
          </p>
        </div>

        {/* Features Section */}
        <div className="relative">
          {/* Decorative Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Connecting dashed lines */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1200 400">
              {/* Line from feature 1 to 2 */}
              <path
                d="M 300 200 Q 450 150 600 200"
                stroke="#a855f7"
                strokeWidth="2"
                strokeDasharray="8,8"
                fill="none"
                opacity="0.6"
              />
              {/* Line from feature 2 to 3 */}
              <path
                d="M 600 200 Q 750 250 900 200"
                stroke="#a855f7"
                strokeWidth="2"
                strokeDasharray="8,8"
                fill="none"
                opacity="0.6"
              />
              {/* Line from feature 3 to 4 */}
              <path
                d="M 900 200 Q 1050 150 1200 200"
                stroke="#a855f7"
                strokeWidth="2"
                strokeDasharray="8,8"
                fill="none"
                opacity="0.6"
              />
            </svg>

            {/* Decorative stars and flowers */}
            <div className="absolute top-16 left-16">
              <div className="text-purple-400 text-3xl animate-pulse">⭐</div>
            </div>
            <div className="absolute top-32 right-24">
              <div className="text-pink-400 text-2xl animate-bounce">🌸</div>
            </div>
            <div className="absolute bottom-24 left-32">
              <div className="text-yellow-400 text-2xl animate-pulse">🌼</div>
            </div>
            <div className="absolute bottom-16 right-16">
              <div className="text-purple-400 text-3xl animate-bounce">🦋</div>
            </div>

            {/* Paper airplane */}
            <div className="absolute top-20 right-1/3 animate-pulse">
              <svg className="w-8 h-8 text-purple-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
              </svg>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            
            {/* Feature 1: Holistic Learning */}
            <div className="flex flex-col items-center text-center group">
              <div className="relative mb-6">
                <div className="w-48 h-48 bg-white rounded-lg shadow-lg overflow-hidden border-4 border-dashed border-purple-300 transform rotate-2 group-hover:rotate-0 transition-transform duration-300">
                  <img 
                    src="https://images.unsplash.com/photo-1587614295999-6c1c3e955e5b?w=200&h=200&fit=crop&crop=faces" 
                    alt="Children learning together"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -top-2 -left-2 text-purple-500 text-2xl">⭐</div>
              </div>
              <h3 className="text-2xl font-bold text-purple-700 mb-3">Holistic Learning</h3>
              <p className="text-gray-600 leading-relaxed">
                Fostering all-round development through a balanced blend of academics, play, and life skills.
              </p>
            </div>

            {/* Feature 2: Expert Educators */}
            <div className="flex flex-col items-center text-center group">
              <div className="relative mb-6">
                <div className="w-48 h-48 bg-gradient-to-br from-yellow-200 to-orange-200 rounded-full shadow-lg overflow-hidden border-4 border-dashed border-yellow-300 group-hover:scale-105 transition-transform duration-300">
                  <img 
                    src="https://images.unsplash.com/photo-1581726707445-75cbe4efc586?w=200&h=200&fit=crop&crop=faces" 
                    alt="Smiling child"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 text-pink-500 text-2xl">🌸</div>
              </div>
              <h3 className="text-2xl font-bold text-purple-700 mb-3">Expert Educators</h3>
              <p className="text-gray-600 leading-relaxed">
                Skilled teachers dedicated to nurturing every child's unique potential.
              </p>
            </div>

            {/* Feature 3: Safe and Secure */}
            <div className="flex flex-col items-center text-center group">
              <div className="relative mb-6">
                <div className="w-48 h-48 bg-white rounded-lg shadow-lg overflow-hidden border-4 border-dashed border-green-300 transform -rotate-1 group-hover:rotate-0 transition-transform duration-300">
                  <img 
                    src="https://images.unsplash.com/photo-1596464716127-f2a82984de30?w=200&h=200&fit=crop" 
                    alt="Safe classroom environment"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -top-3 -right-3 text-green-500 text-2xl">🦋</div>
              </div>
              <h3 className="text-2xl font-bold text-purple-700 mb-3">Safe and Secure</h3>
              <p className="text-gray-600 leading-relaxed">
                A protected, child-friendly environment ensuring safety and peace of mind.
              </p>
            </div>

            {/* Feature 4: Innovative Learning */}
            <div className="flex flex-col items-center text-center group">
              <div className="relative mb-6">
                <div className="w-48 h-48 bg-gradient-to-br from-blue-100 to-purple-200 rounded-lg shadow-lg overflow-hidden border-4 border-dashed border-blue-300 transform rotate-3 group-hover:rotate-0 transition-transform duration-300 clip-triangle">
                  <img 
                    src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=200&h=200&fit=crop" 
                    alt="Child with colorful learning materials"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-3 -left-3 text-blue-500 text-2xl">🌈</div>
              </div>
              <h3 className="text-2xl font-bold text-purple-700 mb-3">Innovative Learning</h3>
              <p className="text-gray-600 leading-relaxed">
                Engaging, modern teaching methods that make learning fun and impactful.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
            Enroll Your Child Today
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default KidsPreschool;