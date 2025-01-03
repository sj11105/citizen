import React from "react";

const Flow = () => {
  const steps = [
    {
      id: 1,
      title: "Enter Your Details",
      description: "Provide your basic information to create account",
      icon: "📝",
    },
    {
      id: 2,
      title: "View Eligible Schemes",
      description: "Get a personalized list of government schemes.",
      icon: "📋",
    },
    {
      id: 3,
      title: "Upload Documents",
      description: "Upload required documents for automatic verification.",
      icon: "📤",
    },
    {
      id: 4,
      title: "Get Personalized Guidance",
      description:
        "Receive tailored guidance for applying to your eligible schemes.",
      icon: "✨",
    },
  ];

  return (
    <section className="bg-gray-100 py-12">
      <div
        className="max-w-7xl mx-auto px-6 lg:px-8"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <h2 className="text-3xl font-extrabold text-gray-800 text-center mb-8">
          How It Works
        </h2>
        <div className="flex flex-wrap justify-center gap-8">
          {steps.map((step) => (
            <div
              key={step.id}
              className="w-full sm:w-1/2 lg:w-1/4 bg-white shadow-lg rounded-lg p-6 text-center transition-transform duration-300 hover:scale-105 hover:shadow-xl"
            >
              <div
                className="text-4xl mb-4"
                data-aos="zoom-in"
                data-aos-duration="800"
              >
                {step.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-700">{step.title}</h3>
              <p className="text-gray-600 mt-2">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Flow;
