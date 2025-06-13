'use client'
import dynamic from "next/dynamic";
import React from 'react';
const Slider = dynamic(() => import("react-slick"), { ssr: false })
 const settings = {
  dots: false,
  infinite: true,
  speed: 1000,
  autoplaySpeed: 2000,
  autoplay: true,
  arrows: false,
  slidesToShow: 2, // default for ≥768
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 700, // below 768px
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};


  const slides = [
  {
    src: "/in2.webp",
    title: "Unlock the Western Trend with Moda i...",
    date: "April 2nd 2025",
  },
  {
    src: "/in1.webp",
    title: "Spring Summer '25: Serenade of the Sun",
    date: "March 3rd 2025",
  },
  {
    src: "/in3.webp",
    title: "Shoe Cleaning and Care Guide",
    date: "February 11th 2025",
  },
  {
    src: "/in4.webp",
    title: "Moda in Pelle’s Picks for Valentine’s Day...",
    date: "February 6th 2025",
  },
];
const InspiredSection = () => {
  return (
    <section className="inspired bg-white py-8">
      <div className="text-center mb-10 section-2">
        <h2 className="text-xl font-bold mb-4">Be Inspired</h2>
      </div>

      <div className="lg:grid grid-cols-1 hidden  grid-cols-4 xl:gap-2 lg:gap-0">
 
        <div className="flex flex-col items-center">
          <img
            src="/in2.webp"
            alt="Look 1"
            className="w-[350px] lg:w-[256px] lg:h-[256px] object-cover h-[350px] xl:w-[450px] xl:h-[450px]"
          />
          <a href="#" className="px-5 mt-6  text-md hover:underline text-center wel-ban ">
            Unlock the Western Trend with Moda i...
          </a>
          <p className="px-5 text-sm text-gray-600 text-center">April 2nd 2025</p>
        </div>

    
        <div className="flex flex-col">
          <img
            src="/in1.webp"
            alt="Look 2"
            className="w-[350px] lg:w-[256px] lg:h-[256px] object-cover h-[350px] xl:w-[450px] xl:h-[450px]"
          />
          <a href="#" className="mt-6 margi text-md hover:underline text-center wel-ban">
            Spring Summer '25: Serenade of the Sun
          </a>
          <p className="text-sm text-gray-600 margi text-center">March 3rd 2025</p>
        </div>


        <div className="flex flex-col">
          <img
            src="/in3.webp"
            alt="Look 3"
            className="w-[350px] lg:w-[256px] lg:h-[256px] object-cover h-[350px] xl:w-[450px] xl:h-[450px]"
          />
          <a href="#" className="mt-6  text-md margi hover:underline text-center wel-ban">
            Shoe Cleaning and Care Guide
          </a>
          <p className="text-sm text-gray-600  margi text-center">February 11th 2025</p>
        </div>


        <div className="flex flex-col">
          <img
            src="/in4.webp"
            alt="Look 4"
            className="w-[350px] lg:w-[256px] lg:h-[256px] object-cover h-[350px] xl:w-[450px] xl:h-[450px]"
          />
          <a href="#" className="mt-6   text-md  hover:underline margi text-center wel-ban">
            Moda in Pelle’s Picks for Valentine’s Day...
          </a>
          <p className="text-sm text-gray-600 margi text-center">February 6th 2025</p>
        </div>
      </div>

      

  <div className="block lg:hidden px-4">
  {/* mobile */}
  <Slider {...settings}>
    {slides.map((item, index) => (
      <div key={index} className="flex flex-col items-center">
        <div className="flex justify-center">
          <img
            src={item.src}
            alt={`Look ${index + 1}`}
            className=" w-[350px] h-[350px] object-cover"
          />
        </div>
        <a href="#" className="mt-4 ml-5 md:ml-2  text-md hover:underline text-center">
          {item.title}
        </a>
        <p className="text-sm text-gray-600 text-center">{item.date}</p>
      </div>
    ))}
  </Slider>
</div>

    </section>

  );

};

export default InspiredSection;
