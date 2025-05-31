"use client";
import { FaFacebookF, FaInstagram, FaPinterestP, FaRegCommentDots, FaXTwitter } from 'react-icons/fa6';


const SocialMedia = () => {
    return (
        <div className="flex flex-col lg:flex-row pb-3 mt-6">
        <div className="flex space-x-8 text-black text-xl">
            <a href="#" className="hover:bg-blue-600 hover:text-white text-black p-2 rounded-full transition-colors duration-300"><FaFacebookF /></a>
            <a href="#" className="hover:bg-black hover:text-white text-black p-2 rounded-full transition-colors duration-300"><FaXTwitter /></a>
            <a href="#" className="hover:bg-pink-500 hover:text-white text-black p-2 rounded-full transition-colors duration-300"><FaInstagram /></a>
            <a href="#" className="hover:bg-red-600 hover:text-white text-black p-2 rounded-full transition-colors duration-300"><FaPinterestP /></a>
            <a href="#" className="hover:bg-orange-500 hover:text-white text-black p-2 rounded-full transition-colors duration-300"><FaRegCommentDots /></a>
        </div>
    
    </div>
    );
};

export default SocialMedia;
