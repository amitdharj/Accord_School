import React from 'react';
import { Shield, BookOpen, Users, Lightbulb, Smartphone, Award } from 'lucide-react';

const AccordAdvantage = () => {
  const goldenEdges = [
    {
      icon: <BookOpen className="w-6 h-6" />,
      text: "Focus on What is Right for the Child."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      text: "Safety and security is a priority."
    },
    {
      icon: <Award className="w-6 h-6" />,
      text: "Integrated Pentemind Curriculum"
    },
    {
      icon: <Users className="w-6 h-6" />,
      text: "I Care and ECE trained facilitators"
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      text: "An innovative pedagogy aligned to NEP 2020 designed to help nurture collaborative team player and breakthrough leaders"
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      text: "Kidzee App"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br top-14 mb-14 from-purple-100 via-purple-50 to-pink-50 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-10 right-10 opacity-20">
        <div className="w-32 h-32 rounded-full border-4 border-purple-300 relative">
          <div className="absolute inset-4 rounded-full bg-gradient-to-br from-purple-200 to-pink-200"></div>
          <div className="absolute top-6 left-6 w-4 h-4 bg-purple-400 rounded-full"></div>
          <div className="absolute bottom-8 right-8 w-3 h-3 bg-pink-400 rounded-full"></div>
        </div>
      </div>
      
      <div className="absolute bottom-20 left-10 opacity-20">
        <div className="w-24 h-24 bg-gradient-to-br from-purple-200 to-pink-200 rounded-xl transform rotate-12">
          <div className="w-full h-full border-4 border-purple-300 rounded-xl flex items-center justify-center">
            <BookOpen className="w-8 h-8 text-purple-400" />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-16 max-w-6xl relative z-10">
        {/* Main Quote Section */}
        <div className="text-center mb-16">
          <div className="relative inline-block">
            <div className="absolute -top-4 -left-4 text-6xl text-purple-300 font-serif">"</div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-purple-800 leading-tight max-w-5xl mx-auto mb-8">
              Ranked amongst the top 100 franchise opportunities by Franchise India for 2022, 
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"> we are the experts in Early Childhood Care and Education.</span>
            </h1>
            <div className="absolute -bottom-4 -right-4 text-6xl text-purple-300 font-serif">"</div>
          </div>
        </div>

        {/* Mission Statement */}
        <div className="text-center mb-16">
          <div className="bg-white/30 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/20">
            <p className="text-xl md:text-2xl text-gray-700 font-medium max-w-4xl mx-auto leading-relaxed">
              We encourage, educate, and equip today's children to be tomorrow's leaders.
            </p>
          </div>
        </div>

        {/* Golden Five-Point Section */}
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-12 text-center">
            The Golden Five-Point Kidzee Edges:
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {goldenEdges.map((edge, index) => (
              <div
                key={index}
                className="bg-white/40 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/30 hover:shadow-xl hover:bg-white/50 transition-all duration-300 group hover:-translate-y-2"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                    {edge.icon}
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-700 font-medium leading-relaxed">
                      {edge.text}
                    </p>
                  </div>
                </div>
                
                {/* Animated border */}
                <div className="w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 group-hover:w-full transition-all duration-500 mt-4"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-8 text-white shadow-2xl">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Start Your Kidzee Franchise Journey?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Join India's leading early childhood education franchise and make a difference in children's lives.
            </p>
            <button className="bg-white text-purple-600 px-8 py-4 rounded-full font-bold text-lg hover:shadow-lg hover:scale-105 transition-all duration-300">
              Get Started Today
            </button>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          {[
            { number: "100+", label: "Top Franchise" },
            { number: "2022", label: "Franchise India" },
            { number: "NEP 2020", label: "Aligned Curriculum" },
            { number: "1000+", label: "Happy Centers" }
          ].map((stat, index) => (
            <div key={index} className="text-center bg-white/30 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="text-3xl font-bold text-purple-700 mb-2">{stat.number}</div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Floating Animation Elements */}
      <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-purple-300 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
      <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-pink-300 rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-1/4 left-1/3 w-5 h-5 bg-purple-200 rounded-full animate-bounce" style={{ animationDelay: '2s' }}></div>
    </div>
  );
};

export default AccordAdvantage;