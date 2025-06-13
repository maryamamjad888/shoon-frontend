import React from 'react';
import { FaFacebookF, FaInstagram, FaPinterestP, FaRegCommentDots, FaXTwitter } from 'react-icons/fa6';
import FooterLinks from '../mobile-footer';
import TabFooter from '../tab-footer';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t text-sm">
      <div className="mx-auto py-3">
        <div className="flex flex-col lg:flex-row justify-center items-center pb-3 border-b">
          <div className="flex space-x-8 text-black text-xl">
            <a href="#" className="hover:bg-blue-600 hover:text-white text-black p-2 rounded-full transition-colors duration-300"><FaFacebookF /></a>
            <a href="#" className="hover:bg-black hover:text-white text-black p-2 rounded-full transition-colors duration-300"><FaXTwitter /></a>
            <a href="#" className="hover:bg-pink-500 hover:text-white text-black p-2 rounded-full transition-colors duration-300"><FaInstagram /></a>
            <a href="#" className="hover:bg-red-600 hover:text-white text-black p-2 rounded-full transition-colors duration-300"><FaPinterestP /></a>
            <a href="#" className="hover:bg-orange-500 hover:text-white text-black p-2 rounded-full transition-colors duration-300"><FaRegCommentDots /></a>
          </div>

    </div>
        <div className="flex !flex-col sm:flex-row justify-center gap-6 border-b py-8">
           <FooterLinks/>
           <TabFooter/>
          <div className="hidden xl:grid grid-cols-2 xl:grid-cols-4 gap-6 w-full px-20">
            {/* Help */}
            <div>
              <h4 className="text-lg mb-3 text-black font-como">Help</h4>
              <ul className="space-y-2 text-gray font-light text-sm">
                {['Contact Us', 'Delivery', 'Click & Collect', 'Make A Return', 'Security & Privacy', 'Size Guide', 'Klarna FAQs', 'Terms & Conditions', 'FAQs'].map((item, i) => (
                  <li key={i}><a href="#" className="hover:underline">{item}</a></li>
                ))}
              </ul>
            </div>
           {/* Pages */}
            <div>
              <h4 className="text-lg font-como mb-3 text-black">Pages</h4>
              <ul className="space-y-2 text-gray font-light text-sm">
                {['Celebrate 50 Years With Moda In Pelle', 'Serenade of Summer Spring Summer 2025', 'Shoon', 'Pink Ribbon', 'eGift Cards', 'eGift Card Information', 'Discount Codes', 'Healthcare & Key Worker Discount', 'Student Discount', 'Our Heritage'].map((item, i) => (
                  <li key={i}><a href="#" className="hover:underline">{item}</a></li>
                ))}
              </ul>
            </div>
           {/* More Information */}
            <div>
              <h4 className="text-lg font-como mb-3 text-black">More Information</h4>
              <ul className="space-y-2 text-gray font-light text-sm">
                {['Blog', 'Store Finder', 'Wholesale', 'Affiliates & Influencers', 'Privacy Policy', 'Careers', 'Sitemap', 'Sustainability', 'Shoe Care Guide'].map((item, i) => (
                  <li key={i}><a href="#" className="hover:underline">{item}</a></li>
                ))}
              </ul>
            </div>
            {/* NewsLetter */}
            <div>
              <h4 className="text-lg font-como mb-3 text-black">Newsletter Sign Up</h4>
              <div className="flex items-center border border-gray-300 overflow-hidden mb-2 w-[320px]">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="px-3 py-3 w-full focus:outline-none"
                />
                <button
                  className="text-black px-4 py-2"
                  aria-label="Search store by postcode"
                >
                  ✓
                </button>
              </div>
              <p className="text-xs text-gray">
                To see how we process your data view our{' '}
                <a href="#" className="underline">Privacy Policy</a>.
              </p>
              <p className="text-xs mt-1 font-light">
                By entering your email address you are consenting to subscribe to marketing emails and acknowledge that you consent to our Terms and Conditions and Privacy Policy.
              </p>
            </div>
          </div>
        </div>
       
     
       


        <div className="text-center text-xs text-gray-500 space-y-4 mt-8">
          <div className="flex flex-col sm:flex-row justify-around gap-4 sm:gap-0">
          <p className="xs text-gray font-light">© 2025 Moda in Pelle. All Rights Reserved.</p>
          <div className="flex justify-center items-center flex-wrap gap-4">
            {[
              '/cards/mastercard.png',
              '/cards/visa.png',
              '/cards/maestro.png',
              '/cards/paypal.png',
              '/cards/amazonpay.png',
              '/cards/amex.png',
              '/cards/klarna.png'
            ].map((src, idx) => (
              <img key={idx} src={src} alt="payment" className="h-6" />
            ))}
            </div>

            <p className="xs text-gray font-light"> <a href="#" className="hover:underline">eCommerce</a>by Visualsoft</p>
          </div>
          <div className="text-center mt-4">
            <img src="/cards/trustlogo.png" alt="image" className="mx-auto" />
          </div>
          <p className="xs text-gray font-light">MIP Online 1975 Ltd T/A Moda in Pelle Registered office 34 Roundhay Road, Leeds, LS7 1AB, Registered in Leeds, England</p>
          <p className="xs text-gray font-light">Company Registration Number 15714502 VAT no. 469466634</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
