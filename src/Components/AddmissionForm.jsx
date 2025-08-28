import React from "react";

const AdmissionForm = () => {
  return (
    <div className="bg-gradient-to-r from-purple-100 to-purple-400 top-16 mb-12 py-12 px-4 relative overflow-hidden rounded-2xl">
      {/* Title Section */}
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row justify-between items-center gap-10">
        {/* Left Content */}
        <div className="text-white text-center lg:text-left lg:w-1/2 space-y-6">
          <h1 className="text-3xl md:text-4xl font-extrabold leading-snug">
            Little Accord Public School Admissions Open for 2025-26. <br /> Enquire Now
          </h1>

          {/* Steps Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
            {[
              "Fill the School Admission Inquiry Form on the Website",
              "We will invite you to the nearest Kidzee preschool",
              "Visit the School for Campus Tour",
              "Join the Kidzee Family",
             ].map((step, i) => (
              <div
                key={i}
                className="bg-purple-600 bg-opacity-50 p-4 rounded-xl shadow-lg hover:scale-105 transform transition duration-300 text-center"
              >
                <h2 className="text-3xl font-extrabold mb-2">{i + 1}</h2>
                <p className="text-sm font-medium">{step}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Form */}
        <div className="bg-white bg-opacity-80 backdrop-blur-md rounded-xl p-6 shadow-lg w-full lg:w-1/3 space-y-4">
          <h3 className="text-xl font-bold mb-4 text-gray-800">Enquire Now</h3>
          <form className="grid grid-cols-1 gap-3">
            <input type="text" placeholder="First Name*" className="p-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-purple-400" />
            <input type="text" placeholder="Last Name*" className="p-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-purple-400" />
            <input type="email" placeholder="Email*" className="p-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-purple-400" />
            <input type="tel" placeholder="Mobile*" className="p-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-purple-400" />
            <div className="grid grid-cols-2 gap-3">
              <input type="text" placeholder="Pin Code*" className="p-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-purple-400" />
              <input type="text" placeholder="Country*" className="p-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-purple-400" />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <input type="text" placeholder="State/District*" className="p-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-purple-400" />
              <input type="text" placeholder="City*" className="p-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-purple-400" />
            </div>
            <input type="text" placeholder="Location*" className="p-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-purple-400" />

            {/* Captcha Section */}
            <div className="flex gap-3 items-center">
              <div className="bg-purple-200 px-4 py-2 rounded-md font-bold text-purple-700">xildYs</div>
              <input type="text" placeholder="Type CAPTCHA Here" className="flex-1 p-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-purple-400" />
            </div>

            <button className="bg-gradient-to-r from-purple-600 to-purple-800 text-white py-2 rounded-lg mt-2 hover:scale-105 transform transition duration-300">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdmissionForm;
