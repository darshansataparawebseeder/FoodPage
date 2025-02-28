import React from 'react';
import namkeenBanner1 from '../assets/namkeenBanner1.jpg'; // Large banner image (e.g., assorted namkeen)
import namkeenBanner2 from '../assets/namkeenBanner2.jpg'; // Smaller banner image (e.g., bhujia)
import namkeenBanner3 from '../assets/namkeenBanner3.jpg'; // Smaller banner image (e.g., sev)
import waveBackground from '../assets/wave-background.jpg'; // Assuming you have this

const PromotionalBanners = () => {
    return (
        <div className="container mx-auto px-2 sm:px-4 md:px-6 lg:px-8 py-4 sm:py-6 md:py-8">
            {/* Main flex layout */}
            <div className="flex flex-col lg:flex-row gap-4 lg:gap-6">
                {/* Large banner - Authentic Namkeen */}
                <div
                    className="w-full lg:w-3/5 h-[280px] sm:h-[350px] md:h-[480px] lg:h-[70vh] relative overflow-hidden rounded-lg"
                    style={{
                        backgroundImage: `url(${waveBackground})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundColor: '#C05621', // Orange-brown shade for Namkeen theme
                    }}
                >
                    {/* Content container */}
                    <div className="relative z-20 p-4 sm:p-6 md:p-8 flex flex-col items-center text-center h-[50%] md:h-[50%] lg:h-[50%]">

                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-2 sm:mb-3">Authentic Namkeen</h2>
                        <p className="text-gray-800  text-sm sm:text-base mb-4 sm:mb-6">Crispy snacks delivered fresh to your door</p>
                        <button className="bg-orange-600 hover:bg-orange-700 text-white font-medium py-2 px-4 sm:px-6 md:px-8 rounded-md transition-colors text-sm sm:text-base">
                            Shop Now
                        </button>
                    </div>

                    {/* Product image container */}
                    <div className="absolute bottom-0  left-0 right-0 flex items-center justify-center z-10 h-[50%] md:h-[50%] lg:h-[50%] ">
                        <img
                            src={namkeenBanner1}
                            alt="Assorted Namkeen Platter"
                            className=" lg:pb-2  h-40 rounded-lg sm:h-48 md:h-64 lg:h-60"
                        />
                    </div>
                </div>

                {/* Right column with two smaller banners */}
                <div className="w-full lg:w-1/2 lg:h-[70vh] h-[35vh] flex flex-col gap-4 lg:gap-6">
                    {/* Spicy Deals */}
                    <div
                        className="relative overflow-hidden rounded-lg h-[50%] lg:h-[50%]"
                        style={{
                            backgroundImage: `url(${waveBackground})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backgroundColor: '#C05621',
                        }}
                    >
                        <div className="relative z-10 p-3 sm:p-4 md:p-6 flex flex-col h-full">

                            <h2 className="text-lg sm:text-xl md:text-3xl font-bold text-gray-800  mb-2">Spicy Deals</h2>
                            <button className="bg-orange-600 hover:bg-orange-700 text-white font-medium py-1.5 px-3 sm:px-4 md:px-6 rounded-md transition-colors text-xs sm:text-sm self-start mt-2">
                                Shop Now
                            </button>
                        </div>

                        {/* Product image */}
                        <div className="absolute top-0 right-0 bg-cover w-1/2 h-full flex items-center justify-end">
                            <img
                                src={namkeenBanner2}
                                alt="Spicy Bhujia"
                                className=" lg:pr-5 rounded-lg h-24 sm:h-32 md:h-40"
                            />
                        </div>
                    </div>

                    {/* Crunchy Picks */}
                    <div
                        className="relative overflow-hidden rounded-lg h-[50%] lg:h-[50%]"
                        style={{
                            backgroundImage: `url(${waveBackground})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backgroundColor: '#C05621',
                        }}
                    >
                        <div className="relative z-10 p-3 sm:p-4 md:p-6 flex flex-col h-full">
                            <h2 className="text-lg sm:text-xl md:text-3xl font-bold text-gray-800  mb-4">Crunchy Picks</h2>
                            <button className="bg-orange-600 hover:bg-orange-700 text-white font-medium py-1.5 px-3 sm:px-4 md:px-6 rounded-md transition-colors text-xs sm:text-sm self-start mt-2">
                                Shop Now
                            </button>
                        </div>

                        {/* Product image */}
                        <div className="absolute top-0  right-0 w-1/2 h-full flex items-center justify-end">
                            <img
                                src={namkeenBanner3}
                                alt="Crispy Sev"
                                className=" rounded-lg lg:pr-5 h-24 sm:h-32 md:h-40"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PromotionalBanners;