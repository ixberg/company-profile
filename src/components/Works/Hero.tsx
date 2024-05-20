import React from "react";

const Hero = () => {
  return (
    <section className="mt-[10vh] pt-12 px-8 xl:px-[144px] flex flex-col w-full gap-10 max-w-[1440px] md:px-[80px] lg:px-[120px]">
      <div className="w-full flex flex-col items-center gap-6">
        <h1 className="font-semibold text-5xl tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl">
          Works
        </h1>
        <p className="text-center text-sm font-light leading-normal sm:w-[600px]">
          Where Your Vision Transforms into Exceptional and Innovative Digital
          Products
        </p>
      </div>
      <div></div>
    </section>
  );
};

export default Hero;
