import React from 'react';

const BottomBanners = () => {
    return (
        <section className="bg-white pt-12">
            <div className="text-center mb-10 section-2">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">#MyModaShoes</h2>
                <p className="text-gray-600 uppercase tracking-wide md:text-base">
                    Be inspired by our favorite style icons
                </p>
            </div>

            <section>
                <div className="w-full relative">
                    <div className="inset-0 z-10 flex flex-col justify-center items-center">
                        <a href="">
                            <img
                                src="/moda.png"
                                alt="hero"
                                className="max-h-full w-auto object-contain transition-transform duration-300"
                            />
                        </a>
                    </div>
                </div>

            </section>
            <section className="px-10 pt-10">
                <div className="w-full relative">
                    <div className="inset-0 z-10 flex flex-col justify-center items-center">
                        <a href="">
                            <img
                                src="/moda2.png"
                                alt="hero"
                                className="max-h-full w-auto object-contain transition-transform duration-300"
                            />
                        </a>
                    </div>
                </div>

            </section>

        </section>


    );
};

export default BottomBanners;
