"use client";
import LocalizedClientLink from "@modules/common/components/localized-client-link"

const ProductInfoSection = () => {
    return (
        <div className="product-info-row grid grid-cols-1 md:grid-cols-2 gap-10 bg-white text-center my-6">
            <div className="flex flex-col items-center max-w-xs mx-auto">
                <LocalizedClientLink href="">
                    <div className="flex items-center max-w-md mx-auto text-left">
                        <i className="las la-truck mr-4"></i>
                        <div>
                            <h3 className="text-l font-semibold font-como uppercase">Free UK Delivery</h3>
                            <p className="text-xs mt-1 text-gray font-light">
                                We offer free delivery in the UK, with next day and international delivery also available.
                            </p>
                        </div>
                    </div>
                </LocalizedClientLink>

            </div>

            <div className="flex flex-col items-center max-w-xs mx-auto">
                <LocalizedClientLink href="">
                    <div className="flex items-center max-w-md mx-auto text-left">
                        <i className="las la-mouse mr-4"></i>
                        <div>
                            <h3 className="text-l font-semibold font-como uppercase">Click and Collect</h3>
                            <p className="text-xs mt-1 text-gray font-light">
                                Order online and collect your order from your nearest Moda in Pelle store.
                            </p>
                        </div>
                    </div>
                </LocalizedClientLink>
            </div>

            <div className="flex flex-col items-center max-w-xs mx-auto">
                <LocalizedClientLink href="">
                    <div className="flex items-center max-w-md mx-auto text-left">
                        <img
                            src="/klarna.svg"
                            alt="klarna"
                            className="w-8 h-8 mr-4"
                        />
                        <div>
                            <h3 className="text-l font-semibold font-como uppercase">Buy Now, Pay Later</h3>
                            <p className="text-xs mt-1 text-gray font-light">
                                Experience a better way to shop. Buy now and pay 30 days later.
                            </p>
                        </div>
                    </div>
                </LocalizedClientLink>
            </div>


            <div className="flex flex-col items-center max-w-xs mx-auto">
                <LocalizedClientLink href="">
                    <div className="flex items-center max-w-md mx-auto text-left">
                        {[...Array(4)].map((_, i) => (
                            <i key={i} className="las la-star last-icon "></i>
                        ))}
                        <i className="las la-star-half-alt last-icon mr-4"></i>

                        <div>
                            <h3 className="text-l font-semibold font-como uppercase">4.7 Star rating</h3>
                            <p className="text-xs mt-1 text-gray font-light">
                                On Reviews.co.uk
                            </p>
                        </div>
                    </div>
                </LocalizedClientLink>
            </div>
        </div >
    );
};

export default ProductInfoSection;
