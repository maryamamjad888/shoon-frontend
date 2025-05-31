import React from 'react';

const WelcomeSection: React.FC = () => {
  return (
    <section className="w-full bg-white py-20">
      <div className="flex flex-col md:flex-row items-start gap-10">
      
        <div className="md:w-1/2 px-6">
          <h2 className="text-2xl font-serif mb-4">Welcome To Moda In Pelle</h2>
          <p className="font-light text-gray mb-4 leading-relaxed text-sm">
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

          
          <div className="mt-10">
            <h3 className="text-xl mb-2 font-como">Find Your Nearest Store</h3>
            <div className="flex border border-gray-300 w-[350px] overflow-hidden" >
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

       
        <div className="md:w-1/2">
          <img
            src="/welcome.webp" 
            alt="Moda In Pelle Store"
            className="w-full h-[350px] object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
