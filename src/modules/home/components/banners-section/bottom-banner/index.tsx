import React from 'react';

const BottomBanners = () => {
    return (
        <section className="bg-white pt-12">
            <div className="text-center  -mt-14 mb-5 sm:mb-10 section-2">
                <h2 className="!text-xl sm:text-3xl md:text-4xl font-bold sm:mb-4">#MyModaShoes</h2>
                <p className="!text-[16px] text-gray-600 uppercase tracking-wide sm:text-base">
                    Be inspired by our favorite style icons
                </p>
            </div>

            <section>
                <div className="w-full relative">
                    <div className="inset-0 z-10 flex flex-col justify-center items-center">
                        <a href="">
                            <picture>
                                <source srcSet="/mobmoda.png" media="(max-width: 500px)" />
                               <img
                                src="/moda.png"
                                alt="hero"
                                className="max-h-full !object-fill !w-full sm:w-auto sm:object-contain transition-transform duration-300"
                            /> 
                            </picture>   
                        </a>
                    </div>
                </div>

            </section>
            <section className="px-10 pt-10">
                <div className="w-full relative">
                    <div className="inset-0 z-10 flex flex-col justify-center items-center">
                        <a href="">
                            <picture>
                                <source srcSet="/modmoda2.png" media="(max-width: 500px)" />
                            <img
                                src="/moda2.png"
                                alt="hero"
                                className="max-h-full w-auto object-contain transition-transform duration-300"
                            />
                            </picture>
                        </a>
                    </div>
                </div>

            </section>

        </section>


    );
};

export default BottomBanners;
