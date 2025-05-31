"use client"

import { useState } from 'react'
import { useRouter, usePathname, useSearchParams } from 'next/navigation'
import { Heading, Text, useToggleState } from "@medusajs/ui"



const CheckoutForm = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentStep = searchParams.get('step') || 'checkout';
  const [showEditModal, setShowEditModal] = useState(false);
  const [isNewCustomer, setIsNewCustomer] = useState(true);
  const { state: subscribedToNewsletter, toggle: toggleSubscription } = useToggleState(true);
  const { state: acceptedTerms, toggle: toggleTerms } = useToggleState(false);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [touched, setTouched] = useState({ fullName: false, email: false, address: false });
  const [showModal, setShowModal] = useState(false);
  const isFullNameInvalid = touched.fullName && !fullName.trim();
  const isEmailEmpty = touched.email && !email.trim();
  const isEmailFormatInvalid = touched.email && email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const isEmailInvalid = isEmailEmpty || isEmailFormatInvalid;
  const isAddressInvalid = touched.address && !address.trim();

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    const fullNameValid = fullName.trim();
    const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
    const addressValid = address.trim();

    setTouched({ fullName: true, email: true, address: true });

    if (fullNameValid && emailValid && addressValid && acceptedTerms) {
      router.push(`${pathname}?step=delivery`);
    }
  };

  if (currentStep === 'delivery' || currentStep === 'payment') {
    return (
      <div>
        <div className="w-full border-t border-gray-300 pt-4">
          <div className="flex flex-row gap-8">
            {/* Delivery Address */}
            <div className="pr-0 md:pr-8">
              <h2 className="text-lg font-semibold mb-4 border-b border-gray-300 pb-1">Delivery Address</h2>
              <div className="text-sm text-gray text-light space-y-1 mb-6">
                <div>{fullName}</div>
                <div>{address}</div>
              </div>
              <button
                onClick={() => setShowModal(true)}
                className="bg-gray-900 text-white text-sm px-6 py-2 tracking-widest uppercase"
              >
                Change
              </button>

            </div>

            {/* Billing Address */}
            <div className="pt-4 md:pt-0 md:pl-8">
              <h2 className="text-lg font-semibold mb-4 border-b border-gray-300 pb-1">Billing Address</h2>
              <div className="text-sm text-gray space-y-1 mb-6">
                <div>{fullName}</div>
                <div>{address}</div>
              </div>
              <button className="bg-gray-900 text-white text-sm px-6 py-2 tracking-widest uppercase">Change</button>
            </div>
          </div>

          {/* Continue Button */}
          <div className="flex justify-end mt-6">
            <button className="bg-gray-900 text-white text-sm px-8 py-2 tracking-widest uppercase">
              Continue ›
            </button>
          </div>
        </div>
        {showModal && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white p-6 shadow-lg w-full max-w-md">
              <h2 className="text-md font-semibold mb-4">Edit Delivery Address</h2>
              <div className="flex flex-col gap-4">
            

              <div className="flex gap-6">
              <label className="w-40 pt-2 text-sm font-medium text-gray-700">Your Full Name</label>
                <input
                  type="text"
                  placeholder="Full Name"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                 className="md:w-[350px] border border-gray-300 bg-gray px-3 py-1"
                />
                </div>
                
                <div className="flex gap-6">
                <label className="w-40 pt-2 text-sm font-medium text-gray-700">Address</label>
                <input
                  type="text"
                  placeholder="Address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                   className="md:w-[350px] border border-gray-300 bg-gray px-3 py-1"
                />
                </div>
              </div>

              <div className="flex justify-end gap-4 mt-6">
              <button
                  onClick={() => setShowModal(false)}
                className="bg-gray-900 text-white text-sm px-8 py-2 font-light uppercase"
                >
                  Update
                </button>
                <button
                  onClick={() => setShowModal(false)}
                  className="bg-gray-900 text-white text-sm px-8 py-2 font-light uppercase"
                >
                  Cancel
                </button>
               
              </div>
              </div>
            </div>
          
        )}

      </div>

    );
  }



  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col md:flex-row w-full gap-12 pt-4 border-t border-gray-300">
        <div className="w-full md:w-1/2 border-r border-gray-300 pr-8">
          <div className="pb-1 mb-6 border-b border-gray-300">
            <Heading level="h2" className="text-l font-semibold mb-4">
              New Customers / Guest Checkout
            </Heading>
          </div>
          <div className="flex items-start gap-3 flex-col">
            <div className="flex items-start gap-6 w-full">
              <label className="w-40 pt-2 text-sm font-medium text-gray-700">
                Your Full Name <span className="text-red-500">*</span>
              </label>
              <div className="flex flex-col md:w-[350px]">
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    placeholder="e.g. Jane Smith"
                    className={`w-full px-3 py-2 text-xs placeholder-gray-500 placeholder:italic focus:outline-none ${isFullNameInvalid ? 'border border-red-500' : 'border border-black'
                      }`}
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    onBlur={() => setTouched((prev) => ({ ...prev, fullName: true }))}
                  />
                  <span className="text-red-500 ml-1">*</span>
                  <div
                    className={`rounded-full w-7 h-6 flex items-center justify-center ${isFullNameInvalid ? 'bg-gray-custom' : 'bg-black'
                      }`}
                  >
                    <span
                      className={`text-lg font-bold ${isFullNameInvalid ? 'text-white' : 'text-white'
                        }`}
                    >
                      {isFullNameInvalid ? '!' : '?'}
                    </span>
                  </div>
                </div>
                {isFullNameInvalid && (
                  <p className="text-red-600 text-xs mt-0 border-red-500 py-1 px-2 border-b border-r border-l bg-red-100 md:w-[299px]">
                    Please enter your full name
                  </p>
                )}
              </div>
            </div>

            {/* Email Row */}
            <div className="flex items-start gap-6 w-full">
              <label className="w-40 pt-2 text-sm font-medium text-gray-700">
                Email Address <span className="text-red-500">*</span>
              </label>
              <div className="flex flex-col md:w-[350px]">
                <div className="flex items-center gap-2">
                  <input
                    type="email"
                    placeholder="e.g. email@address.co.uk"
                    className={`w-full px-3 py-2 text-xs placeholder-gray-500 placeholder:italic focus:outline-none ${isEmailInvalid ? 'border border-red-500' : 'border border-black'
                      }`}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onBlur={() => setTouched((prev) => ({ ...prev, email: true }))}
                  />
                  <span className="text-red-500 ml-1">*</span>
                  <div
                    className={`rounded-full w-7 h-6 flex items-center justify-center ${isEmailInvalid ? 'bg-gray-300' : 'bg-black'
                      }`}
                  >
                    <span
                      className={`text-lg font-bold ${isEmailInvalid ? 'text-white' : 'text-white'
                        }`}
                    >
                      {isEmailInvalid ? '!' : '?'}
                    </span>
                  </div>
                </div>
                {isEmailInvalid && (
                  <p className="text-red-600 text-xs mt-0 border-red-500 py-1 px-2 border-b border-r border-l bg-red-100 md:w-[299px]">
                    {isEmailEmpty
                      ? 'Please enter your email address'
                      : 'Please enter a valid email address'}
                  </p>
                )}
              </div>
            </div>

            {/* Billing Address Row */}
            <div className="flex items-start gap-6 w-full">
              <label className="w-40 pt-2 text-sm font-medium text-gray-700">
                Billing Address <span className="text-red-500">*</span>
              </label>
              <div className="flex flex-col md:w-[350px]">
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    placeholder="Start typing your postcode, street or address"
                    className={`w-full px-3 py-2 text-xs placeholder-gray-500 placeholder:italic focus:outline-none ${isAddressInvalid ? 'border border-red-500' : 'border border-black'
                      }`}
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    onBlur={() => setTouched((prev) => ({ ...prev, address: true }))}
                  />
                  <span className="text-red-500 ml-1">*</span>
                  <div
                    className={`rounded-full w-7 h-6 flex items-center justify-center ${isAddressInvalid ? 'bg-gray-300' : 'bg-black'
                      }`}
                  >
                    <span
                      className={`text-lg font-bold ${isAddressInvalid ? 'text-white' : 'text-white'
                        }`}
                    >
                      {isAddressInvalid ? '!' : '?'}
                    </span>
                  </div>
                </div>
                {isAddressInvalid && (
                  <p className="text-red-600 text-xs mt-0 border-red-500 py-1 px-2 border-b border-r border-l bg-red-100 md:w-[299px]">
                    Please enter your billing address
                  </p>
                )}
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4 ml-[184px] mt-6">
            <div className="space-y-2">
              <div className="flex items-start gap-2 w-[300px]">
                <input
                  type="checkbox"
                  id="newsletter"
                  checked={subscribedToNewsletter}
                  onChange={toggleSubscription}
                  className="mt-0"
                />
                <label htmlFor="newsletter" className="text-light mt-1 ml-2">
                  Subscribe to our newsletter to receive exclusive offers, early access and sneak peeks
                </label>
              </div>

              <div className="flex items-start gap-2">
                <input
                  type="checkbox"
                  id="terms"
                  checked={acceptedTerms}
                  onChange={toggleTerms}
                  className="mt-0"
                />
                <label htmlFor="terms" className="text-sm flex gap-1 mt-2 ml-2">
                  I have read and accepted the
                  <a href="#" className="underline">
                    Terms & Conditions
                  </a>
                  <span className="text-red-500 ml-1">*</span>
                </label>
              </div>
              {touched.fullName && touched.email && !acceptedTerms && (
                <p className="text-red-600 text-xs mt-2">
                  Please accept the Terms & Conditions to continue
                </p>
              )}
            </div>

            <button type="submit" className="bg-black text-white py-2 px-4 w-40 font-light">
              Continue
            </button>

            <div className="text-sm text-gray-500 font-light italic md:w-[350px]">
              <p>
                Required <span className="text-red-500 ml-1">*</span>
              </p>
              <p>You will have the opportunity to create an account at the end of the checkout.</p>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2 pl-0 md:pl-4 mt-8 md:mt-0">
          <div className="pb-1 mb-6 border-b border-gray-300">
            <Heading level="h2" className="text-l font-semibold mb-4">
              Returning Customers
            </Heading>
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex gap-6">
              <label className="w-40 pt-2 text-sm font-medium text-gray-700">Email Address</label>
              <input
                type="email"
                className="md:w-[350px] border border-gray-300 bg-gray px-3 py-1"
              />
            </div>

            <div className="flex gap-6">
              <label className="w-40 pt-2 text-sm font-medium text-gray-700">Password</label>
              <input
                type="password"
                className="md:w-[350px] border border-gray-300 bg-gray px-3 py-1"
              />
            </div>
            <div className="flex flex-col gap-4 ml-[184px]">
              <a href="#" className="text-xs underline text-gray-500">
                Reset Password
              </a>

              <button type="button" className="bg-black text-white font-light py-2 px-4 mt-1 w-40">
                LOGIN
              </button>
            </div>

            <div className="bg-gray p-4 mt-4 text-xs font-light border border-gray-300">
              <p>
                If you can't remember your password, click the 'Reset Password' link above. If you
                don't receive an email to reset your password within a few minutes, please check
                your junk or spam folder. If you are still having problems, please contact our
                customer service team via LiveChat or on 0113 2007 310 and they will be more than
                happy to help.
              </p>
            </div>
          </div>
        </div>
      </div>
    </form>

  );
};

export default CheckoutForm;

