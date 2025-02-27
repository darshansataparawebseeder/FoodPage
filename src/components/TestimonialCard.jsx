import React from 'react';

const TestimonialCard = ({ image, name, role, rating, text }) => {
  // Function to render stars based on rating
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <span key={i} className="text-yellow-400 text-xl">
          ★
        </span>
      );
    }
    return stars;
  };

  return (
    <div className="border border-orange-700 bg-orange-100 rounded-lg p-6 relative">
      <div className="flex items-center mb-4">
        <img
          src={image}
          alt={name}
          className="w-16 h-16 rounded-full mr-4 object-cover"
        />
        <div>
          <div className="flex mb-1">{renderStars(rating)}</div>
          <h3 className="text-xl font-semibold text-gray-800">{name}</h3>
          <p className="text-gray-600">{role}</p>
        </div>
      </div>
      <p className="text-gray-700 mb-4">{text}</p>

      {/* Quote marks */}
      <div className="absolute top-6 right-6 text-6xl text-gray-200 opacity-50 font-serif">
        "
      </div>
    </div>
  );
};

export default TestimonialCard;