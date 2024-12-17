import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import Link from "next/link";

export default function GearUp() {
  return (
    <div className="container mx-auto px-4 mb-[84px]">
      <h2 className="text-2xl font-medium mb-8">Gear Up</h2>
      <div className="grid lg:grid-cols-2 gap-8">
        {/* Men's Section */}
        <div className="space-y-6">
          <div className="flex items-center justify-end gap-2">
            <span className="text-sm font-medium">Shop Men&apos;s</span>
            <Button variant="ghost" size="icon" className="rounded-full bg-gray-100">
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full bg-gray-200">
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {/* Product 1 */}
            <Link href="/products">
              <div className="bg-white shadow-md rounded-lg overflow-hidden">
                <div className="relative aspect-[3/4] bg-gray-100">
                  <Image
                    src="/card5.png"
                    alt="Nike Dri-FIT ADV TechKnit Ultra"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className="p-4 space-y-2">
                  <div className="flex justify-between items-start">
                    <h3 className="font-medium text-sm">Nike Dri-FIT ADV TechKnit Ultra</h3>
                    <span className="text-sm font-medium">₹ 3,895</span>
                  </div>
                  <p className="text-gray-500 text-sm">Men&apos;s Short-Sleeve Running Top</p>
                </div>
              </div>
            </Link>

            {/* Product 2 */}
            <Link href="/products">
              <div className="bg-white shadow-md rounded-lg overflow-hidden">
                <div className="relative aspect-[3/4] bg-gray-100">
                  <Image
                    src="/card6.png"
                    alt="Nike Dri-FIT Challenger"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className="p-4 space-y-2">
                  <div className="flex justify-between items-start">
                    <h3 className="font-medium text-sm">Nike Dri-FIT Challenger</h3>
                    <span className="text-sm font-medium">₹ 2,495</span>
                  </div>
                  <p className="text-gray-500 text-sm">Men&apos;s 2-in-1 Versatile Shorts</p>
                </div>
              </div>
            </Link>
          </div>
        </div>

        {/* Women's Section */}
        <div className="space-y-6">
          <div className="flex items-center justify-end gap-2">
            <span className="text-sm font-medium">Shop Women&apos;s</span>
            <Button variant="ghost" size="icon" className="rounded-full bg-gray-100">
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full bg-gray-200">
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {/* Product 1 */}
            <Link href="/products">
              <div className="bg-white shadow-md rounded-lg overflow-hidden">
                <div className="relative aspect-[3/4] bg-gray-100">
                  <Image
                    src="/card7.png"
                    alt="Nike Dri-FIT ADV Run Division"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className="p-4 space-y-2">
                  <div className="flex justify-between items-start">
                    <h3 className="font-medium text-sm">Nike Dri-FIT ADV Run Division</h3>
                    <span className="text-sm font-medium">₹ 5,295</span>
                  </div>
                  <p className="text-gray-500 text-sm">Women&apos;s Long-Sleeve Running Top</p>
                </div>
              </div>
            </Link>

            {/* Product 2 */}
            <Link href="/products">
              <div className="bg-white shadow-md rounded-lg overflow-hidden">
                <div className="relative aspect-[3/4] bg-gray-100">
                  <Image
                    src="/card8.png"
                    alt="Nike Fast"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className="p-4 space-y-2">
                  <div className="flex justify-between items-start">
                    <h3 className="font-medium text-sm">Nike Fast</h3>
                    <span className="text-sm font-medium">₹ 3,795</span>
                  </div>
                  <p className="text-gray-500 text-sm">Women&apos;s Running Leggings</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
