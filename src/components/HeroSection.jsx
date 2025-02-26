import React from 'react';
import { ArrowRight, Truck, HeadphonesIcon, ShieldCheck, RefreshCw } from 'lucide-react';
import FeatureCard from './FeatureCard';
import heroImage from '../assets/heroImage.png';

const HeroSection = () => {
    // Array of feature data
    const features = [
        {
            icon: Truck,
            title: 'Secures Payments',
            description: 'Free shipping on all your order',
        },
        {
            icon: HeadphonesIcon,
            title: 'Customer Support 24/7',
            description: 'Instant access to Support',
        },
        {
            icon: ShieldCheck,
            title: '100% Secure Payment',
            description: 'We ensure your money is save',
        },
        {
            icon: RefreshCw,
            title: 'Money-Back Guarantee',
            description: '30 Days Money-Back Guarantee',
        },
    ];

    return (
        <>
            {/* Hero Section */}
            <div className="py-8 md:py-12 lg:py-16">
                <div className="bg-gray-100 rounded-md p-4 md:p-8 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
                    {/* Left Content */}
                    <div className="w-full md:w-1/2 mb-6 md:mb-0">
                        <div className="text-green-600 font-medium text-sm md:text-base lg:text-lg mb-2">WELCOME TO GROCERY ECOSTORE</div>
                        <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold text-gray-800 leading-tight mb-3 md:mb-4">
                            Farm-Fresh<br />Organic Goods
                        </h1>
                        <div className="mb-3 md:mb-4">
                            <span className="text-lg md:text-xl lg:text-2xl text-gray-700 font-medium">Sale up to </span>
                            <span className="text-lg md:text-xl lg:text-2xl text-green-600 font-bold">30% OFF</span>
                        </div>
                        <p className="text-gray-600 text-sm md:text-base mb-4 md:mb-6">Free shipping on all your order. we deliver, you enjoy.</p>
                        <button className="bg-green-600 hover:bg-green-700 text-white px-4 md:px-6 py-2 md:py-3 rounded flex items-center text-sm md:text-base transition duration-300">
                            Shop Now
                            <ArrowRight className="ml-1 md:ml-2" size={12} md:size={16} lg:size={18} />
                        </button>
                    </div>

                    {/* Right Image */}
                    <div className="w-full md:w-1/2 flex justify-center md:justify-end">
                        <img
                            src={heroImage}
                            alt="Fresh organic vegetables and fruits in a basket"
                            className="max-w-full h-auto w-64 md:w-96 lg:w-[480px]"
                        />
                    </div>
                </div>
            </div>

            {/* Features Section */}
            <div className="py-8 md:py-12 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
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