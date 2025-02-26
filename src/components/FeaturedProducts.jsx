import React, { useState } from 'react';
import fpImage1 from '../assets/fpimage1.png';
import fpImage2 from '../assets/fpimage2.png';
import fpImage3 from '../assets/fpimage3.png';
import fpImage4 from '../assets/fpimage4.png';

const FeaturedProducts = () => {
  const products = [
    {
      id: 1,
      name: 'Fresh Tomatoes',
      image: fpImage1,
      price: 18.00,
      originalPrice: 20.00,
      discount: 20,
      rating: 4,
    },
    {
      id: 2,
      name: 'White Radish',
      image: fpImage2,
      price: 18.00,
      originalPrice: 20.00,
      discount: 20,
      rating: 4,
    },
    {
      id: 3,
      name: 'Sweet Bell Pepper',
      image: fpImage3,
      price: 18.00,
      originalPrice: 20.00,
      discount: 20,
      rating: 4,
    },
    {
      id: 4,
      name: 'Green Lettuce',
      image: fpImage4,
      price: 18.00,
      originalPrice: 20.00,
      discount: 20,
      rating: 4,
    },
    {
      id: 5,
      name: 'Fresh Tomatoes',
      image: fpImage1,
      price: 18.00,
      originalPrice: 20.00,
      discount: 20,
      rating: 4,
    },
    {
      id: 6,
      name: 'Fresh Tomatoes',
      image: fpImage1,
      price: 18.00,
      originalPrice: 20.00,
      discount: 20,
      rating: 4,
    },
    {
      id: 7,
      name: 'Fresh Tomatoes',
      image: fpImage1,
      price: 18.00,
      originalPrice: 20.00,
      discount: 20,
      rating: 4,
    },
    {
      id: 8,
      name: 'Fresh Tomatoes',
      image: fpImage1,
      price: 18.00,
      originalPrice: 20.00,
      discount: 20,
      rating: 4,
    },
  ];

  // State to track quantities for each product
  const [quantities, setQuantities] = useState(
    products.reduce((acc, product) => {
      acc[product.id] = 1;
      return acc;
    }, {})
  );

  // Handle quantity changes
  const updateQuantity = (productId, change) => {
    setQuantities((prev) => {
      const newValue = Math.max(1, prev[productId] + change);
      return { ...prev, [productId]: newValue };
    });
  };

  // Render star ratings
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span key={i} className={i <= rating ? 'text-yellow-400' : 'text-gray-300'}>
          ★
        </span>
      );
    }
    return stars;
  };

  return (
    <div className="container mx-auto px-2 sm:px-4 md:px-6 lg:px-8 py-4 sm:py-6 md:py-8">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-2 sm:mb-3 md:mb-4">Featured Products</h1>

      <p className="text-gray-600 text-sm sm:text-base mb-4 sm:mb-6 md:mb-8">
        Lorem ipsum dolor sit amet consectetur. Tortor nunc mauris arcu tristique massa nisi in non ante.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-4 md:gap-6">
        {products.map((product) => (
          <div key={product.id} className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow duration-300">
            {/* Product Image with Discount Badge */}
            <div className="relative bg-gray-100 p-2 sm:p-3 md:p-4">
              <div className="absolute top-2 left-2 bg-yellow-400 text-black font-medium text-xs sm:text-sm px-1 sm:px-2 py-0.5 sm:py-1 rounded-sm">
                -{product.discount}%
              </div>
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-32 sm:h-40 md:h-48 object-contain mx-auto"
              />
            </div>

            {/* Product Details */}
            <div className="p-2 sm:p-3 md:p-4">
              {/* Rating */}
              <div className="mb-1 sm:mb-2 text-lg">
                {renderStars(product.rating)}
              </div>

              {/* Product Name */}
              <h3 className="text-sm sm:text-base md:text-lg font-medium text-gray-800 mb-1 sm:mb-2">
                {product.name}
              </h3>

              {/* Price */}
              <div className="flex items-center mb-2 sm:mb-3">
                <span className="text-sm sm:text-base md:text-lg font-bold mr-1 sm:mr-2">${product.price.toFixed(2)}</span>
                <span className="text-gray-500 text-xs sm:text-sm line-through">${product.originalPrice.toFixed(2)}</span>
              </div>

              {/* Quantity and Add to Cart */}
              <div className="flex items-center">
                <div className="flex items-center border border-gray-300 rounded-md mr-1 sm:mr-2">
                  <button
                    className="px-1 sm:px-2 py-1 text-gray-600 text-xs sm:text-sm hover:bg-gray-100"
                    onClick={() => updateQuantity(product.id, -1)}
                  >
                    −
                  </button>
                  <span className="px-2 py-1 text-xs sm:text-sm">{quantities[product.id]}</span>
                  <button
                    className="px-1 sm:px-2 py-1 text-gray-600 text-xs sm:text-sm hover:bg-gray-100"
                    onClick={() => updateQuantity(product.id, 1)}
                  >
                    +
                  </button>
                </div>
                <button className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-800 text-xs sm:text-sm py-1 sm:py-2 px-2 sm:px-4 rounded-md transition-colors">
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;