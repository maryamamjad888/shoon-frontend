import React from 'react';

const MiddleBanners = () => {
    return (
        <section>
            <section className="pb-10">
                <div className="w-[90.5%] mx-auto relative">
                    <div className="inset-0 z-10 flex flex-col justify-center items-center">
                        <a href="">
                            <picture>
                                <source srcSet="/mobfull.webp" media="(max-width: 500px)" />
                                <img
                                src="/fullbanner.png"
                                alt="hero"
                                className="max-h-full w-auto object-contain transition-transform duration-300"
                            />
                            </picture>
                            
                        </a>
                    </div>
                </div>

            </section>
            <section className="pb-10">
                <div className="w-[90.5%] mx-auto relative">
                    <div className="inset-0 z-10 flex flex-col justify-center items-center">
                        <a href="">
                            <picture>
                                <source srcSet="/mobhalf1.png" media="(max-width: 500px)" />
                            <img
                                src="/half1.png"
                                alt="hero"
                                className="max-h-full w-auto object-contain transition-transform duration-300"
                            /></picture>
                        </a>
                    </div>
                </div>

            </section>
            {/* <section className="pb-10">
                <div className="w-full relative">
                    <div className="inset-0 z-10 flex flex-col justify-center items-center">
                        <a href="">
                            <picture>
                                <source srcSet="/mobhalf2.png" media="(max-width: 500px)" />
                            <img
                                src="/half2.png"
                                alt="hero"
                                className="max-h-full w-auto object-contain transition-transform duration-300"
                            /></picture>
                        </a>
                    </div>
                </div>

            </section> */}
            <section className="pb-10">
                <div className="w-[90.5%] mx-auto relative">
                    <div className="inset-0 z-10 flex flex-col justify-center items-center">
                        <a href="">
                            <picture>
                                <source srcSet="/mobhalf3.png" media="(max-width: 500px)" />
                            <img
                                src="/sale.png"
                                alt="hero"
                                className="max-h-full w-auto object-contain transition-transform duration-300"
                            /></picture>
                        </a>
                    </div>
                </div>

            </section>

        </section>


    );
};

export default MiddleBanners;
