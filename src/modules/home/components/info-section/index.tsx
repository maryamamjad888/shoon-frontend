"use client";
import LocalizedClientLink from "@modules/common/components/localized-client-link"

const InfoSection = () => {
    return (
        <div className="info-row grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 text-center items-start gap-10 py-12 px-4 md:px-20 bg-white">
            <div className="flex flex-col items-center max-w-xs">
            <LocalizedClientLink
                    href=""
                >
                <i className="las la-truck mb-3"></i>
                <h3 className="text-md sm:text-2xl font-semibold">Free UK Delivery</h3>
                <p className="text-[12px] sm:text-sm mt-2 text-justify text-gray-700">
                    We offer free delivery in the UK, with next day and international delivery also available.
                </p>
                </LocalizedClientLink>
            </div>

            <div className="flex flex-col items-center sm:-mt-5 max-sm:mt-4 max-sm:-ml-4 max-w-xs">
                <LocalizedClientLink
                    href=""
                >
                    <svg viewBox="0 0 58 29"
                        fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <rect x="0.5" y="0.5" rx="3.5" fill="#" stroke="#"></rect> <path fillRule="evenodd" clipRule="evenodd" d="M7.41299 25.7963H5V15H7.41299V25.7963ZM13.4398 15H11.0784C11.0784 16.9868 10.1885 18.8104 8.63709 20.0034L7.70155 20.7226L11.3264 25.7967H14.3068L10.9714 21.1277C12.5525 19.5116 13.4398 17.3373 13.4398 15ZM17.289 25.7933H15.0102V15.0021H17.289V25.7933ZM24.1766 18.3286V18.8061C23.5616 18.3754 22.8192 18.1223 22.0185 18.1223C19.8993 18.1223 18.1815 19.8857 18.1815 22.0611C18.1815 24.2365 19.8993 26 22.0185 26C22.8192 26 23.5616 25.7469 24.1766 25.3163V25.7933H26.3539V18.3286H24.1766ZM24.1694 22.0611C24.1694 23.1218 23.2861 23.9818 22.1966 23.9818C21.1071 23.9818 20.2238 23.1218 20.2238 22.0611C20.2238 21.0004 21.1071 20.1407 22.1966 20.1407C23.2861 20.1407 24.1694 21.0004 24.1694 22.0611ZM47.1454 18.8061V18.3286H49.3226V25.7933H47.1454V25.3163C46.5304 25.7469 45.788 26 44.9872 26C42.868 26 41.1502 24.2365 41.1502 22.0611C41.1502 19.8857 42.868 18.1223 44.9872 18.1223C45.788 18.1223 46.5304 18.3754 47.1454 18.8061ZM45.1654 23.9818C46.255 23.9818 47.1381 23.1218 47.1381 22.0611C47.1381 21.0004 46.255 20.1407 45.1654 20.1407C44.0758 20.1407 43.1926 21.0004 43.1926 22.0611C43.1926 23.1218 44.0758 23.9818 45.1654 23.9818ZM50.2675 24.5482C50.2675 23.7736 50.8792 23.1457 51.6337 23.1457C52.3882 23.1457 53 23.7736 53 24.5482C53 25.3227 52.3882 25.9507 51.6337 25.9507C50.8792 25.9507 50.2675 25.3227 50.2675 24.5482ZM37.2814 18.1278C36.4117 18.1278 35.5887 18.405 35.0384 19.1697V18.329H32.8706V25.7933H35.065V21.8706C35.065 20.7354 35.8065 20.1796 36.6993 20.1796C37.6562 20.1796 38.2063 20.7663 38.2063 21.8551V25.7933H40.3809V21.0463C40.3809 19.3092 39.0354 18.1278 37.2814 18.1278ZM29.7219 18.3287V19.3009C30.1583 18.7177 30.9715 18.3291 31.8557 18.3291V20.5013L31.8487 20.501L31.8435 20.5008L31.8379 20.5005L31.8298 20.5003C30.9684 20.5003 29.7269 21.1323 29.7269 22.3082V25.7933H27.4928V18.3287H29.7219Z" fill="#17120F"></path> </g></svg>
                    <h3 className="text-md sm:text-2xl font-semibold mt-3">Buy Now, Pay Later</h3>
                    <p className="text-[12px] sm:text-sm mt-2 text-justify text-gray-700">
                        Experience a better way to shop. Buy now and pay 30 days later.
                    </p>
                    <p className="text-[8px] sm:text-xs mt-1  text-justify text-gray-500">
                        18+, T&amp;C apply, credit subject to status,<br className="max-sm:hidden"/>
                        klarna.com/uk/terms-and-conditions
                    </p>
                </LocalizedClientLink>
            </div>

            <div className="flex flex-col items-center max-w-xs">
            <LocalizedClientLink
                    href=""
                >
                <i className="las la-mouse mb-3"></i>
                <h3 className="text-md sm:text-2xl font-semibold">Click and Collect</h3>
                <p className="text-[12px] sm:text-sm mt-2 text-justify text-gray-700">
                    Order online and collect your order from your nearest Moda in Pelle store.
                </p>
                </LocalizedClientLink>


            </div>

            <div className="flex flex-col max-sm:mt-8 sm:mt-5 items-center max-w-xs">
            <LocalizedClientLink
                    href=""
                >
                <div>
                    {[...Array(4)].map((_, i) => (
                        <i key={i} className="las la-star last-icon mb-3 lg:!text-[30px] md:!text-[24px] max-sm:!text-[22px]"></i>
                    ))}
                    <i className="las la-star-half-alt last-icon mb03 lg:!text-[30px]  md:!text-[24px] max-sm:!text-[22px]"></i>
                </div>

                <h3 className="text-md sm:text-2xl font-semibold">Reviews</h3>
                <p className="text-[12px] sm:text-smmt-2 text-justify text-gray-700">
                    93% of reviewers recommend Moda in Pelle, giving an average rating of 4.7/5 stars.
                </p>
                </LocalizedClientLink>
            </div>
        </div>
    );
};

export default InfoSection;
