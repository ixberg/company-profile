import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="mt-[10vh] pt-12 px-8 xl:px-[144px] flex flex-col w-full gap-10 max-w-[1440px] md:px-[80px] lg:px-[120px]">
      <div className="w-full flex flex-col items-center gap-6">
        <h1 className="font-semibold text-5xl tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl">
          About Us
        </h1>
        <p className="text-center text-sm font-light leading-normal sm:w-[600px]">
          Welcome to Overlays, where your digital aspirations meet infinite
          possibilities. Founded by a passionate team of dreamers and doers, we
          are a full-service digital agency dedicated to crafting bespoke
          websites, intuitive UI/UX designs, and distinctive branding that sets
          you apart in the digital realm. Our journey began with a simple
          belief: in the infinite potential of the digital space to connect,
          communicate, and convert.
        </p>
      </div>
      <div className="rounded-3xl overflow-hidden h-[300px] lg:h-[400px] xl:h-[500px]">
        <Image
          src="https://res.cloudinary.com/dhhnqrf1p/image/upload/v1716245234/about_po7ne3.webp"
          alt="aboutimage"
          width={1728}
          height={1296}
          priority
          className="object-cover w-full h-full"
        ></Image>
      </div>
    </section>
  );
};

export default Hero;
