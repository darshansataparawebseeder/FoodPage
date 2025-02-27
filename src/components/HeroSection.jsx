import React from 'react';
import { ArrowRight, Truck, ShieldCheck, Package, HeadphonesIcon, ShoppingCart } from 'lucide-react';
import FeatureCard from './FeatureCard';
import heroImage from '../assets/HeroImage.jpg'; // Update with your Namkeen hero image

const HeroSection = () => {
    // Array of feature data
    const features = [
        {
            icon: Truck,
            title: 'Fast Delivery',
            description: 'Across India',
        },
        {
            icon: ShieldCheck,
            title: 'Safe Payment',
            description: '100% Secure Payment',
        },
        {
            icon: ShoppingCart,
            title: 'Minimum Order',
            description: '5 Kg Only',
        },
        {
            icon: HeadphonesIcon,
            title: 'Help Center',
            description: 'Dedicated Support',
        },
        {
            icon: Package,
            title: 'Freshly Packed',
            description: 'Sealed for Maximum Crunchiness',
        },
    ];

    return (
        <>
            {/* Hero Section */}
            <div className="py-8 md:py-12 lg:py-16">
                <div className="bg-orange-50 rounded-md p-4 md:p-8 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
                    {/* Left Content */}
                    <div className="w-full md:w-1/2 mb-6 md:mb-0">
                        <div className="text-orange-600 font-medium text-sm md:text-base lg:text-lg mb-2">WELCOME TO NAMKEEN HUB</div>
                        <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold text-gray-800 leading-tight mb-3 md:mb-4">
                            Authentic<br />Indian Namkeen
                        </h1>
                        <div className="mb-3 md:mb-4">
                            <span className="text-lg md:text-xl lg:text-2xl text-gray-700 font-medium">Sale up to </span>
                            <span className="text-lg md:text-xl lg:text-2xl text-orange-600 font-bold">30% OFF</span>
                        </div>
                        <p className="text-gray-600 text-sm md:text-base mb-4 md:mb-6">Crispy, spicy, and delivered fresh to your door.</p>
                        <button className="bg-orange-600 hover:bg-orange-700 text-white px-4 md:px-6 py-2 md:py-3 rounded flex items-center text-sm md:text-base transition duration-300">
                            Shop Now
                            <ArrowRight className="ml-1 md:ml-2" size={12} md:size={16} lg:size={18} />
                        </button>
                    </div>

                    {/* Right Image */}
                    <div className="w-full md:w-1/2 flex justify-center md:justify-end">
                        <img
                            src={heroImage}
                            alt="Assortment of crispy Indian namkeen snacks"
                            className="max-w-full h-auto w-64 md:w-96 lg:w-[480px]"
                        />
                    </div>
                </div>
            </div>

            {/* Features Section */}
            <div className="py-8 md:py-12 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                        {features.map((feature, index) => (
                            <FeatureCard
                                key={index}
                                icon={feature.icon}
                                title={feature.title}
                                description={feature.description}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default HeroSection;