import React from 'react';
import sev from '../assets/sev.jpg'; // Replace with actual Namkeen images
import mixture from '../assets/mixture.jpeg';
import bhujia from '../assets/bhujia.jpeg';
import chivda from '../assets/chivda.jpeg';
import farsan from '../assets/farsan.jpeg';
import namkeenmix from '../assets/namkeenmix.jpg';

const PopularCategories = () => {
    const categories = [
        {
            name: 'Sev',
            image: sev,
        },
        {
            name: 'Mixture',
            image: mixture,
        },
        {
            name: 'Bhujia',
            image: bhujia,
        },
        {
            name: 'Chivda',
            image: chivda,
        },
        {
            name: 'Farsan',
            image: farsan,
        },
        {
            name: 'Namkeen Mix',
            image: namkeenmix,
        },
    ];

    return (
        <div className="container mx-auto flex flex-col justify-center px-4 sm:px-6 md:px-8 lg:px-10">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-2 sm:mb-3 md:mb-4">Popular Namkeen Categories</h1>

            <p className="text-gray-600 text-sm sm:text-base mb-4 sm:mb-6 md:mb-8">
                Explore our delicious range of authentic Indian namkeen snacks, crafted with tradition and taste in mind.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-3 md:gap-4">
                {categories.map((category, index) => (
                    <div
                        key={index}
                        className="bg-white border border-gray-200 rounded-lg p-2 sm:p-3 md:p-4 flex flex-col items-center hover:shadow-md transition-shadow duration-300"
                    >
                        <div className=" rounded-lg border border-orange-100 w-full mb-2 sm:mb-3 md:mb-4 p-2 sm:p-3 md:p-4 flex items-center justify-center">
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