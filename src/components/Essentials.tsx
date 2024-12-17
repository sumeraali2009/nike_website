import Image from 'next/image';
import React from 'react';

const Essentials = () => {
  return (
    <div>
      <div className="mt-28 mb-12">
        <span className="text-xl font-semibold px-10 lg:px-16">The Essentials</span>
      </div>

      <div className="flex justify-evenly items-center mb-16 md:mb-28 flex-wrap">
        <div className="relative w-96 h-[400px] overflow-hidden">
          <Image
            className="hover:scale-105 duration-300"
            src="/card11.png"
            alt="Men's Shoes"
            layout="fill"
            objectFit="cover"
          />
          <h3 className="text-lg font-medium text-center mt-2">Men&apos;s Shoes</h3>
        </div>

        <div className="relative w-96 h-[400px] overflow-hidden my-7 md:my-0">
          <Image
            className="hover:scale-105 duration-300"
            src="/card12.png"
            alt="Women's Shoes"
            layout="fill"
            objectFit="cover"
          />
          <h3 className="text-lg font-medium text-center mt-2">Women&apos;s Shoes</h3>
        </div>

        <div className="relative w-96 h-[400px] overflow-hidden mb-14 md:mb-0">
          <Image
            className="hover:scale-105 duration-300"
            src="/card13.png"
            alt="Kid's Shoes"
            layout="fill"
            objectFit="cover"
          />
          <h3 className="text-lg font-medium text-center mt-2">Kid&apos;s Shoes</h3>
        </div>
      </div>

      <div className="flex justify-evenly flex-wrap px-36 pb-20 items-center">
        <div>
          <span className="font-semibold pl-3">Icons</span> <br /> <br />
          <ul className="ess-ul">
            <li>Air Force 1</li>
            <li>Huarache</li>
            <li>Air Max 90</li>
            <li>Air Max 95</li>
          </ul>
        </div>
        <div>
          <span className="font-semibold pl-3">Shoes</span> <br /> <br />
          <ul className="ess-ul">
            <li>All Shoes</li>
            <li>Custom Shoes</li>
            <li>Jordan Shoes</li>
            <li>Running Shoes</li>
          </ul>
        </div>
        <div>
          <span className="font-semibold pl-3">Clothing</span> <br /> <br />
          <ul className="ess-ul">
            <li>All Clothing</li>
            <li>Modest Clothing</li>
            <li>Hoodies &amp; Pullovers</li>
            <li>Shirts &amp; Tops</li>
          </ul>
        </div>
        <div>
          <span className="font-semibold pl-3">Kids&apos;</span> <br /> <br />
          <ul className="ess-ul">
            <li>Infant &amp; Toddler Shoes</li>
            <li>Kids&apos; Shoes</li>
            <li>Kids&apos; Jordan Shoes</li>
            <li>Kids&apos; Basketball Shoes</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Essentials;
