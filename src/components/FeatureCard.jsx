import React from 'react';

const FeatureCard = ({ icon: Icon, title, description }) => {
    return (
        <div className="border border-black rounded-lg p-4 md:p-6 flex items-start">
            <div className="mr-2 md:mr-4 bg-gray-200 w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 justify-center items-center flex rounded-md">
                <Icon size={16} md:size={20} lg:size={28} className="text-green-600" />
            </div>
            <div>
                <h3 className="font-medium text-gray-800 text-sm md:text-base lg:text-lg mb-1">{title}</h3>
                <p className="text-gray-600 text-xs md:text-sm">{description}</p>
            </div>
        </div>
    );
};

export default FeatureCard;