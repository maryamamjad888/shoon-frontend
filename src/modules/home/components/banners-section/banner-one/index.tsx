import React from 'react';

const CelebrateSection = () => {
  return (
    <section className="bg-white py-8">
      <div className="text-center mb-10 section-2">
        <h2 className="text-xl md:text-4xl font-bold mb-4">You Save, We Give...</h2>
        <p className="font-light">
         We're donating  <span className="font-bold">5% of or all sales </span> to charity. <span className="underline">Find out more about our Pink Ribbon campaign.</span>
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-2">

        <div className="flex flex-col items-center">
          <img
            src="/bann1.png"
            alt="Look 1"
            className="w-full object-cover h-[650px]"
          />
          <button
            className="w-[270px] mt-8 py-3 font-bold border border-black hover:bg-black hover:text-white transition-colors duration-200 uppercase"
          >
            Shop Sandals
          </button>
        </div>


        <div className="flex flex-col items-center">
          <img
            src="/bann2.png"
            alt="Look 2"
            className="w-full object-cover h-[650px]"
          />
          <button
            className="w-[270px] mt-8 py-3 font-bold border border-black hover:bg-black hover:text-white transition-colors duration-200 uppercase"
          >
            Shop Trainers
          </button>
        </div>


        <div className="flex flex-col items-center">
          <img
            src="/bann3.png"
            alt="Look 3"
            className="w-full object-cover h-[650px]"
          />
          <button
            className="w-[270px] mt-8 py-3 font-bold border border-black hover:bg-black hover:text-white transition-colors duration-200 uppercase"
          >
            Shop Shoes
          </button>
        </div>
        <div className="flex flex-col items-center">
          <img
            src="/bann4.png"
            alt="Look 4"
            className="w-full object-cover h-[650px]"
          />
          <button
            className="w-[270px] mt-8 py-3 font-bold border border-black hover:bg-black hover:text-white transition-colors duration-200 uppercase"
          >
            Shop Bags & Accessories
          </button>
        </div>
      </div>

    </section>


  );
};

export default CelebrateSection;
