const Hero = () => {
  return (
    <div className="w-full relative">
      <div className="inset-0 z-10 flex flex-col justify-center items-center">
        <a href="">
          <img
            src="/hero.webp"
            alt="hero"
            className="max-h-full w-auto object-contain transition-transform duration-300"
          />
        </a>
      </div>
    </div>
  );
};

export default Hero;
