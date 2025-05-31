import React from 'react';

const InspiredSection = () => {
  return (
    <section className="inspired bg-white py-8">
      <div className="text-center mb-10 section-2">
        <h2 className="text-xl font-bold mb-4">Be Inspired</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
 
        <div className="flex flex-col">
          <img
            src="/in2.webp"
            alt="Look 1"
            className="w-full object-cover h-[350px]"
          />
          <a href="#" className="px-5 mt-6 text-md hover:underline">
            Unlock the Western Trend with Moda i...
          </a>
          <p className="px-5 text-sm text-gray-600">April 2nd 2025</p>
        </div>

    
        <div className="flex flex-col">
          <img
            src="/in1.webp"
            alt="Look 2"
            className="w-full object-cover h-[350px]"
          />
          <a href="#" className="mt-6 text-md hover:underline">
            Spring Summer '25: Serenade of the Sun
          </a>
          <p className="text-sm text-gray-600">March 3rd 2025</p>
        </div>


        <div className="flex flex-col">
          <img
            src="/in3.webp"
            alt="Look 3"
            className="w-full object-cover h-[350px]"
          />
          <a href="#" className="mt-6 text-md hover:underline">
            Shoe Cleaning and Care Guide
          </a>
          <p className="text-sm text-gray-600">February 11th 2025</p>
        </div>


        <div className="flex flex-col">
          <img
            src="/in4.webp"
            alt="Look 4"
            className="w-full object-cover h-[350px]"
          />
          <a href="#" className="mt-6 text-md  hover:underline">
            Moda in Pelle’s Picks for Valentine’s Day...
          </a>
          <p className="text-sm text-gray-600">February 6th 2025</p>
        </div>
      </div>
    </section>
  );
};

export default InspiredSection;
