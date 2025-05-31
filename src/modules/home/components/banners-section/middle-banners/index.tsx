import React from 'react';

const MiddleBanners = () => {
    return (
        <section>
            <section className="pb-10">
                <div className="w-full relative">
                    <div className="inset-0 z-10 flex flex-col justify-center items-center">
                        <a href="">
                            <img
                                src="/fullbanner.png"
                                alt="hero"
                                className="max-h-full w-auto object-contain transition-transform duration-300"
                            />
                        </a>
                    </div>
                </div>

            </section>
            <section className="pb-10">
                <div className="w-full relative">
                    <div className="inset-0 z-10 flex flex-col justify-center items-center">
                        <a href="">
                            <img
                                src="/half1.png"
                                alt="hero"
                                className="max-h-full w-auto object-contain transition-transform duration-300"
                            />
                        </a>
                    </div>
                </div>

            </section>
            {/* <section className="pb-10">
                <div className="w-full relative">
                    <div className="inset-0 z-10 flex flex-col justify-center items-center">
                        <a href="">
                            <img
                                src="/half2.png"
                                alt="hero"
                                className="max-h-full w-auto object-contain transition-transform duration-300"
                            />
                        </a>
                    </div>
                </div>

            </section> */}
            <section className="pb-10">
                <div className="w-full relative">
                    <div className="inset-0 z-10 flex flex-col justify-center items-center">
                        <a href="">
                            <img
                                src="/sale.png"
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

export default MiddleBanners;
