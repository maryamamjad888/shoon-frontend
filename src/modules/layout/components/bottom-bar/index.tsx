"use client";

export default function BottomBar() {
  return (
    <div className="bottom-bar text-center relative lg:flex items-center justify-around uppercase py-2 border-b duration-200 bg-white border-ui-border-base hidden ">
      <a href="" className="">
        <i className="fas fa-gift text-2xl mr-2"></i>
        <span className="hover:underline">Cheers to 50 years - shop offers now</span>
      </a>
      <a href="" className="inline-flex items-center">
        <i className="las la-shopping-cart text-xl mr-2"></i>
        <span className="hover:underline">Free UK mainland delivery</span>
      </a>
      <a href="" className="inline-flex items-center">
        <i className="las la-shopping-bag text-xl mr-2"></i>
        <span className="hover:underline">Shop now. Pay over time with Klarna.</span>
      </a>
    </div>
  );
}
