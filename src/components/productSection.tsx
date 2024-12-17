import Image from "next/image";
import React from "react";

const products = [
  { id: 1, name: "Nike Air Max Pulse", price: "₹ 13 995", category: "Men's Shoes", image: "/card1.png" },
  { id: 2, name: "Nike Air Max 97 SE", price: "₹ 16 345", category: "Men's Shoes", image: "/card2.png" },
  { id: 3, name: "Nike Air Max 97 SE", price: "₹ 6 455", category: "Men's Shoes", image: "/card3.png" },
];

export default function ProductSection() {
  return (
    <div>
      <div className="mt-28 mb-12">
        <span className="text-xl font-semibold px-10 lg:px-16">Best Of Air Max</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {products.map((product) => (
          <div key={product.id} className="border rounded-lg p-4 relative">
            <div className="relative w-full h-64 mb-4"> {/* Increased height to 64 */}
              <Image
                src={product.image} // Direct path from 'public'
                alt={product.name}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="text-left mt-2">
              <h2 className="text-lg font-semibold">{product.name}</h2>
              <p>{product.category}</p>
            </div>
            <span className="absolute bottom-4 right-4 bg-white p-1 rounded-md">{product.price}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
