import React, { useState } from 'react';
import sevImage from '../assets/sev.jpg';
import mixtureImage from '../assets/mixture.jpeg';
import bhujiaImage from '../assets/bhujia.jpeg';
import chivdaImage from '../assets/chivda.jpeg';
import farsanImage from '../assets/farsan.jpeg';
import namkeenMixImage from '../assets/namkeenmix.jpg';
import moongDalImage from '../assets/moongDal.jpeg';
import masalaPeanutsImage from '../assets/masalaPeanuts.jpeg';

const PopularProducts = () => {
    const products = [
        {
            id: 1,
            name: 'Ratlami Sev',
            image: sevImage,
            price: 120.00,
            originalPrice: 150.00,
            discount: 20,
            rating: 4,
        },
        {
            id: 2,
            name: 'Navratan Mixture',
            image: mixtureImage,
            price: 150.00,
            originalPrice: 180.00,
            discount: 17,
            rating: 5,
        },
        {
            id: 3,
            name: 'Bikaneri Bhujia',
            image: bhujiaImage,
            price: 140.00,
            originalPrice: 180.00,
            discount: 22,
            rating: 4,
        },
        {
            id: 4,
            name: 'Poha Chivda',
            image: chivdaImage,
            price: 100.00,
            originalPrice: 130.00,
            discount: 23,
            rating: 4,
        },
        {
            id: 5,
            name: 'Gujarati Farsan',
            image: farsanImage,
            price: 160.00,
            originalPrice: 200.00,
            discount: 20,
            rating: 5,
        },
        {
            id: 6,
            name: 'Spicy Namkeen Mix',
            image: namkeenMixImage,
            price: 130.00,
            originalPrice: 170.00,
            discount: 24,
            rating: 4,
        },
        {
            id: 7,
            name: 'Moong Dal',
            image: moongDalImage,
            price: 110.00,
            originalPrice: 140.00,
            discount: 21,
            rating: 4,
        },
        {
            id: 8,
            name: 'Masala Peanuts',
            image: masalaPeanutsImage,
            price: 90.00,
            originalPrice: 120.00,
            discount: 25,
            rating: 5,
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
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Popular Namkeen</h1>

            <p className="text-gray-600 mb-8">
                Enjoy the best of Indian snacks with our most loved namkeen, bursting with authentic flavors.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {products.map((product) => (
                    <div key={product.id} className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow duration-300">
                        {/* Product Image with Discount Badge */}
                        <div className="relative  p-4">
                            {/* <div className="absolute top-2 left-2 bg-orange-600 text-white font-medium px-2 py-1 rounded-sm">
                                -{product.discount}%
                            </div> */}
                            <img
                                src={product.image}
                                alt={product.name}
                                className="w-full h-48 object-contain mx-auto"
                            />
                        </div>

                        {/* Product Details */}
                        <div className="p-4">
                            {/* Rating */}
                            <div className="mb-2 text-xl">
                                {renderStars(product.rating)}
                            </div>

                            {/* Product Name */}
                            <h3 className="text-lg font-medium text-gray-800 mb-2">
                                {product.name}
                            </h3>

                            {/* Price */}
                            <div className="flex items-center mb-4">
                                <span className="text-lg font-bold text-orange-600 mr-2">₹{product.price.toFixed(2)}</span>
                                <span className="text-gray-500 line-through">₹{product.originalPrice.toFixed(2)}</span>
                            </div>

                            {/* Quantity and Add to Cart */}
                            <div className="flex items-center">
                                <div className="flex items-center border border-gray-300 rounded-md mr-2">
                                    <button
                                        className="px-3 py-1 text-gray-600 hover:bg-gray-100"
                                        onClick={() => updateQuantity(product.id, -1)}
                                    >
                                        −
                                    </button>
                                    <span className="px-3 py-1">{quantities[product.id]}</span>
                                    <button
                                        className="px-3 py-1 text-gray-600 hover:bg-gray-100"
                                        onClick={() => updateQuantity(product.id, 1)}
                                    >
                                        +
                                    </button>
                                </div>
                                <button className="flex-1 bg-orange-600 hover:bg-orange-700 text-white py-2 px-4 rounded-md transition-colors">
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PopularProducts;