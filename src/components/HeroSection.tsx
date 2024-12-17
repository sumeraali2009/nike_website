import Image from 'next/image';
import React from 'react';
import { FaBell } from 'react-icons/fa';

const HeroSection = () => {
  return (
    <section className="relative w-full h-auto bg-gray-50">
      {/* Hero Image */}
      <div className="relative">
        <Image width={1000} height={1000}
          src="heroImage.png" // Replace this with your image
          alt="Product"
          className="w-full h-auto object-cover"
        />
        <div className="absolute top-4 left-4 md:top-8 md:left-8">
          <div className="text-white font-bold text-3xl md:text-5xl uppercase">
            <span className="block">Pulse</span>
          </div>
        </div>
      </div>

      {/* Hero Content */}
      <div className="container mx-auto px-4 py-8 md:py-12 text-center">
        <p className="text-sm md:text-base text-gray-500 mb-2 uppercase">
          First Look
        </p>
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          NIKE AIR MAX PULSE
        </h1>
        <p className="text-gray-600 mb-6 max-w-3xl mx-auto leading-relaxed">
          Extreme comfort. Hyper durable. Max volume. Introducing the Air Max
          Pulse—designed to push you past your limits and help you go to the max.
        </p>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-4">
          <button className="flex items-center gap-2 bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition">
            <FaBell />
            Notify Me
          </button>
          <button className="bg-gray-200 text-black px-6 py-3 rounded-full hover:bg-gray-300 transition">
            Shop Air Max
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
