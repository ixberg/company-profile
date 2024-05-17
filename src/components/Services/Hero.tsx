import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="mt-[10vh] pt-12 px-8 xl:px-[144px] flex flex-col w-full gap-10 max-w-[1440px] md:px-[80px] lg:px-[120px]">
      <div className="w-full flex flex-col items-center gap-6">
        <h1 className="font-semibold text-5xl tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl">
          Services
        </h1>
        <p className="text-center text-sm font-light leading-normal sm:w-[600px]">
          Elevate Your Digital Presence: Expert UI/UX Design & Cutting-Edge Web
          Development
        </p>
      </div>
      <div className="rounded-3xl overflow-hidden h-[300px] lg:h-[400px] xl:h-[500px]">
        <Image
          src="/assets/about.webp"
          alt="aboutimage"
          width={500}
          height={500}
          priority
          className="object-cover w-full h-full"
        ></Image>
      </div>
    </section>
  );
};

export default Hero;
