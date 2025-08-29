import React from "react";

const About = () => {
  return (
    <div className="bg-gradient-to-br from-purple-50 to-purple-100 py-16 px-4 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-8 left-8 opacity-60">
        <svg
          className="w-16 h-16 text-purple-400 transform rotate-12"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4"
          />
        </svg>
      </div>

      <div className="absolute top-12 right-12 opacity-60">
        <svg
          className="w-12 h-12 text-purple-400 transform -rotate-12"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
          />
        </svg>
      </div>

      <div className="absolute bottom-16 right-16 opacity-40">
        <div className="w-16 h-16 rounded-full border-2 border-purple-300 flex items-center justify-center">
          <div className="w-8 h-8 rounded-full border-2 border-purple-300"></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Image */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative">
              {/* White circular background */}
              <div className="w-96 h-96 bg-white rounded-full shadow-xl flex items-center justify-center">
                <div className="w-80 h-80 rounded-full overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=400&h=400&fit=crop&crop=faces"
                    alt="Happy child at Kidzee Preschool"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Decorative elements around the image */}
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-yellow-400 rounded-full animate-bounce"></div>
              <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-pink-400 rounded-full animate-pulse"></div>
              <div className="absolute top-1/4 -left-6 w-4 h-4 bg-blue-400 rounded-full animate-ping"></div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="space-y-8">
            {/* About Us Header */}
            <div className="text-center lg:text-left">
              <h2 className="text-4xl font-bold text-fuchsia-800 mb-4 relative inline-block">
                About Us
                <div className="absolute -bottom-2 left-1/2 lg:left-0 transform -translate-x-1/2 lg:translate-x-0 w-16 h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
              </h2>
            </div>

            {/* Kidzee Preschool Section */}
            <div>
              <h3 className="text-2xl font-bold text-fuchsia-800 mb-4">
                Accord Public School
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Accord Public School is a leading chain of preschools located in
                India and Nepal backed by Zee Learn Ltd. With more than two
                decades of experience in the preschool industry, Accord has
                nurtured more than 1.5 million children throughout India. Being
                one of the largest preschools in India, Accord has 2000+ centres
                in 750+ cities in India and Nepal.
              </p>
            </div>

            {/* Kidzee Advantage Section */}
            <div>
              <h3 className="text-2xl font-bold text-fuchsia-800 mb-4">
                Accord Advantage
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Accord is a{" "}
                <span className="font-semibold text-gray-800">leader</span> and
                a trendsetter in{" "}
                <span className="font-semibold text-gray-800">
                  Early Childhood Care and Education (ECCE)
                </span>
                . Our business partners' passion and drive are vital for our
                brand's success.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Our Business Partners don't just take the name, they also take
                our{" "}
                <span className="font-semibold text-gray-800">
                  pedagogy- PANKEMIND
                </span>
                , guidelines to teach, prescribes books/plays to be followed and
                so on to the ground.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Starting a preschool requires a strategic researching, planning,
                designing, and organising.{" "}
                <span className="font-semibold text-gray-800">
                  Accord Professional research
                </span>
                , makes this journey easier and rewarding for all our Business
                Partners.
              </p>
              <p className="text-gray-600 leading-relaxed">
                <span className="font-semibold text-gray-800">
                  Secret to Success is Service and Support.
                </span>{" "}
                We provide pre-opening and operational support apart from the
                regular support that is given additional to all systems and
                process.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Additional decorative elements */}
      <div className="absolute bottom-8 left-8 opacity-50">
        <div className="flex space-x-2">
          <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse"></div>
          <div
            className="w-3 h-3 bg-pink-500 rounded-full animate-pulse"
            style={{ animationDelay: "0.5s" }}
          ></div>
          <div
            className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default About;
