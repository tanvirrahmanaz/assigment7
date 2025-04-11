import React from 'react';
import bannerImg from '../assets/Banner-min.jpg';

const HeroSection = () => {
  return (
    <section className="relative w-full h-[80vh] bg-gray-800 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: `url(${bannerImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-purple-900 opacity-70"></div>
      </div>

      {/* Optional Dark Overlay */}
      <div className="absolute inset-0 bg-black opacity-30"></div>

      {/* Content */}
      <div className="relative z-10 container px-10  flex items-center justify-start h-full text-white">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Bid on Unique Items from <br className="hidden md:block" /> Around the World
          </h1>
          <p className="text-lg md:text-xl mb-8 opacity-90">
            Discover rare collectibles, luxury goods, and vintage treasures in our curated auctions.
          </p>
          <a 
            href="/auctions" 
            className="bg-white text-black font-extrabold px-5 py-2 rounded-xl hover:bg-gray-200 transition"
          >
            Explore Auctions
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
