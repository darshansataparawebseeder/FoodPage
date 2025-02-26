import React from 'react';
import food1 from '../assets/food1.png';
import food2 from '../assets/food2.png';
import food3 from '../assets/food3.png';
import food4 from '../assets/food4.png';
import food5 from '../assets/food5.png';
import food6 from '../assets/food6.png';

const PopularCategories = () => {
    const categories = [
        {
            name: 'Egg',
            image: food1,
        },
        {
            name: 'Vegetables',
            image: food2,
        },
        {
            name: 'Cooking Oil',
            image: food3,
        },
        {
            name: 'Fruits',
            image: food4,
        },
        {
            name: 'Grains & Pasta',
            image: food5,
        },
        {
            name: 'Fresh Meat',
            image: food6,
        },
    ];

    return (
        <div className="container mx-auto flex flex-col justify-center px-4 sm:px-6 md:px-8 lg:px-10">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-2 sm:mb-3 md:mb-4">Popular Categories</h1>

            <p className="text-gray-600 text-sm sm:text-base mb-4 sm:mb-6 md:mb-8">
                Lorem ipsum dolor sit amet consectetur. Tortor nunc mauris arcu tristique massa nisi in non ante.
            </p>

            <div className="grid grid-cols-2  md:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-3 md:gap-4">
                {categories.map((category, index) => (
                    <div
                        key={index}
                        className="bg-white border border-gray-200 rounded-lg p-2 sm:p-3 md:p-4 flex flex-col items-center hover:shadow-md transition-shadow duration-300"
                    >
                        <div className="bg-gray-100 rounded-lg w-full mb-2 sm:mb-3 md:mb-4 p-2 sm:p-3 md:p-4 flex items-center justify-center">
                            <img
                                src={category.image}
                                alt={category.name}
                                className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 object-contain hover:scale-105 transition-transform duration-300"
                            />
                        </div>
                        <h3 className="text-center font-medium text-gray-800 text-sm sm:text-base md:text-lg">
                            {category.name}
                        </h3>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PopularCategories;