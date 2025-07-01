import React from 'react';

const About: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl w-full space-y-8 bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-4xl font-extrabold text-gray-900 text-center mb-6">About Us</h1>
        <p className="text-lg text-gray-700 leading-relaxed">
          Welcome to EliteStore! We are dedicated to providing you with the best products and shopping experience.
          Our mission is to offer high-quality items at competitive prices, backed by excellent customer service.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mt-4">
          Founded in 2024, EliteStore has quickly grown to become a trusted name in e-commerce.
          We carefully curate our product selection to meet the needs and preferences of our diverse customer base.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mt-4">
          Thank you for choosing EliteStore. We look forward to serving you and making your shopping experience exceptional.
        </p>
      </div>
    </div>
  );
};

export default About;
