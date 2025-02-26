import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import PopularCategories from '../components/PopularCategories';
import FeaturedProducts from '../components/FeaturedProducts';
import PromotionalBanners from '../components/PromotionalBanners';
import PopularProducts from '../components/PopularProducts';
import TestimonialSection from '../components/TestimonialSection';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="px-4 md:px-8 lg:px-12">
        <HeroSection />
        <div className="container mx-auto flex flex-col justify-center">
          <PopularCategories />
          <FeaturedProducts />
          <PromotionalBanners />
          <PopularProducts />
          <TestimonialSection />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;