const Hero = () => {
  return (
    <div className="w-full relative">
  <div className="inset-0 z-10 flex flex-col justify-center items-center w-full">
    <a href="" className="w-full">
      <picture>
        <source srcSet="/mobile.png" media="(max-width: 450px)" />
        <img
          src="/hero.webp"
          alt="hero"
          className="w-full h-auto object-cover transition-transform duration-300"
        />
      </picture>
    </a>
  </div>
</div>

  );
};

export default Hero;
