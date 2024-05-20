import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <section className="mt-[10vh] pt-12 px-8 xl:px-[144px] flex flex-col w-full gap-10 max-w-[1440px] md:px-[80px] lg:px-[120px]">
      <div className="w-full flex flex-col items-center gap-6 lg:pt-20">
        <h1 className="font-normal text-4xl tracking-tight lg:text-6xl xl:text-7xl text-center">
          We&apos;d love to hear from you. <br className="hidden md:inline" />{" "}
          Tell us all the things.
        </h1>
        <p className="text-center text-sm font-light leading-normal sm:w-[600px]">
          Fill in the form, or, if you prefer,{" "}
          <span>
            <Link href="#" className="underline font-normal text-primary">
              send us an email.
            </Link>
          </span>
        </p>
      </div>
    </section>
  );
};

export default Hero;
