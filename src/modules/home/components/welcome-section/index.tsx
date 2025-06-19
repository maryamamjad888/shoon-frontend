import React from 'react';

const WelcomeSection: React.FC = () => {
  return (
    <section className="w-[90.5%] bg-white py-20 mx-auto">
      <div className="flex flex-col md:items-center md:justify-center xl:flex-row xl:items-start gap-10 welcome">
      
        <div className="md:w-full xl:w-1/2">
        {/*  px-6 */}
          <h2 className=" text-xl md:text-2xl font-serif mb-4">Welcome To Moda In Pelle</h2>
          <p className="font-light text-justify text-[14px] text-gray mb-4 leading-relaxed md:text-sm">
            Founded in 1975, Moda in Pelle has been crafting{' '}
            <a href="#" className="underline hover:opacity-80">
              beautiful shoes
            </a>{' '}
            for over 40 years. We take great pride in combining British sophistication
            with fine Italian quality and gorgeous leathers. We believe in creating
            fashionable footwear that combines affordable luxury, stunning design,
            and complete comfort for our customers.{' '}
            <a href="#" className="underline hover:opacity-80">
              Quality and service
            </a>{' '}
            are paramount to us, alongside creative vision and a determination to continue
            innovating and creating amazing shoes.
          </p>
          <a
            href="#"
            className="text-sm text-black underline"
          >
            Read More
          </a>

          <hr className='border-gray-300 mt-2 ho !w-full hidden sm:block'></hr>          
          <div className="mt-10">
             
            <h3 className="text-xl mb-2 font-como">Find Your Nearest Store</h3>
            <div className="flex border border-gray-300 max-w-[250px] sm:w-[350px] overflow-hidden" >
              <input
                type="text"
                placeholder="e.g. TS18..."
                className="w-full px-4 py-2 focus:outline-none"
              />
              <button
                className="text-black px-4 py-2"
                aria-label="Search store by postcode"
              >
                ✓
              </button>
            </div>
          </div>
        </div>

       
        <div className=" flex !justify-center xl:w-1/2">
          <img
            src="/welcome.webp" 
            alt="Moda In Pelle Store"
            className="lg:!w-[1024px] w-full pic sm:!w-full max-sm:!h-[150px] object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
