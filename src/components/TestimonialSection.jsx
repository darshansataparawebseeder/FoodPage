import React, { useState } from 'react';
import TestimonialCard from './TestimonialCard';

const TestimonialSection = () => {
    const testimonials = [
        {
            id: 1,
            name: 'Sarah Davis',
            role: 'Customer',
            image: 'https://randomuser.me/api/portraits/men/1.jpg',
            text: 'Lorem ipsum dolor sit amet consectetur. Quisque nam platea suscipit aliquam eget amet arcu bibendum.',
            rating: 5
        },
        {
            id: 2,
            name: 'Jessica Miller',
            role: 'Customer',
            image: 'https://randomuser.me/api/portraits/women/4.jpg',
            text: 'Lorem ipsum dolor sit amet consectetur. Quisque nam platea suscipit aliquam eget amet arcu bibendum.',
            rating: 5
        },
        {
            id: 3,
            name: 'Daniel Smith',
            role: 'Customer',
            image: 'https://randomuser.me/api/portraits/men/3.jpg',
            text: 'Lorem ipsum dolor sit amet consectetur. Quisque nam platea suscipit aliquam eget amet arcu bibendum.',
            rating: 5
        },
        {
            id: 4,
            name: 'Michael Johnson',
            role: 'Customer',
            image: 'https://randomuser.me/api/portraits/men/2.jpg',
            text: 'Lorem ipsum dolor sit amet consectetur. Quisque nam platea suscipit aliquam eget amet arcu bibendum.',
            rating: 5
        },
        {
            id: 5,
            name: 'Emma Wilson',
            role: 'Customer',
            image: 'https://randomuser.me/api/portraits/women/2.jpg',
            text: 'Lorem ipsum dolor sit amet consectetur. Quisque nam platea suscipit aliquam eget amet arcu bibendum.',
            rating: 5
        },
        {
            id: 6,
            name: 'Alex Brown',
            role: 'Customer',
            image: 'https://randomuser.me/api/portraits/men/1.jpg',
            text: 'Lorem ipsum dolor sit amet consectetur. Quisque nam platea suscipit aliquam eget amet arcu bibendum.',
            rating: 5
        }
    ];

    const [activeIndex, setActiveIndex] = useState(0);

    // Get visible testimonials based on screen size and active index
    const getVisibleTestimonials = () => {
        return testimonials.slice(activeIndex, activeIndex + 3);
    };

    const visibleTestimonials = getVisibleTestimonials();

    // Handle pagination
    const handleDotClick = (index) => {
        if (index + 3 <= testimonials.length) {
            setActiveIndex(index);
        }
    };

    // Generate pagination dots
    const generateDots = () => {
        const dots = [];
        for (let i = 0; i <= testimonials.length - 3; i++) {
            dots.push(
                <button
                    key={i}
                    onClick={() => handleDotClick(i)}
                    className={`w-4 h-4 mx-1 rounded-full border border-orange-700 ${i === activeIndex ? 'bg-orange-600' : 'bg-white'}`}
                    aria-label={`Go to slide ${i + 1}`}
                />
            );
        }
        return dots;
    };

    return (
        <div className="max-w-7xl mx-auto px-4 pb-6 py-4">
            {/* Header */}
            <div className="text-left mb-12">
                <h2 className="text-4xl font-bold text-gray-800 mb-4">Client Testimonial</h2>
                <p className="text-gray-600  max-w-2xl ">
                    Lorem ipsum dolor sit amet consectetur. Tortor nunc mauris arcu tristique massa nisi in non ante.
                </p>
            </div>

            {/* Testimonial Cards */}
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-6">
                {visibleTestimonials.map((testimonial) => (
                    <TestimonialCard
                        key={testimonial.id}
                        image={testimonial.image}
                        name={testimonial.name}
                        role={testimonial.role}
                        rating={testimonial.rating}
                        text={testimonial.text}
                    />
                ))}
            </div>

            {/* Pagination Dots */}
            <div className="flex justify-center mt-10">
                {generateDots()}
            </div>
        </div>
    );
};

export default TestimonialSection;