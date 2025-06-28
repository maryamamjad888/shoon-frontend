'use client';
import React from "react";
import FooterDropDowns from "../../components/tab-screen";
import InlineFooterSections from "@modules/layout/components/small-screen";

const TabFooter = () => {
return (
    <>
        {/* Newsletter - Outside and Centered */}
        <div className="w-full hidden md:flex xl:hidden justify-center px-4 mb-10">
            <div className="max-w-md mx-auto w-full text-center">
                <h4 className="text-lg font-como mb-3 text-black">Newsletter Sign Up</h4>
                <div className="flex items-center border border-gray-300 overflow-hidden mb-2 w-full">
                    <input
                        type="email"
                        placeholder="Enter your email address"
                        className="px-3 py-3 w-full focus:outline-none"
                    />
                    <button
                        className="text-black px-4 py-2"
                        aria-label="Subscribe to newsletter"
                    >
                        ✓
                    </button>
                </div>
                <p className="-mt-2 text-xs text-gray">
                    To see how we process your data view our{' '}
                    <a href="#" className="underline">Privacy Policy</a>.
                </p>
                <p className="mt-2 text-xs mt-1 font-light">
                    By entering your email address you are consenting to subscribe to marketing emails and acknowledge that you consent to our Terms and Conditions and Privacy Policy.
                </p>
            </div>
        </div>

        {/* Grid of Links Below */}
        <FooterDropDowns/>
        <InlineFooterSections/>
    </>
)
};

export default TabFooter;