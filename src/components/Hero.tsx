import React from "react";
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";

const Hero: React.FC = () => {
  return (
    <section className="mt-[10vh] pt-12 px-8 xl:px-[144px] flex flex-col w-full gap-10 max-w-[1440px] md:px-[80px] lg:px-[120px]">
      <div className="flex items-center gap-3 ml-[34px]">
        <div className="flex">
          <div className="flex">
            {[1, 2, 3].map((index) => (
              <Image
                key={index}
                src={`/avatar${index}.png`}
                alt={`avatar${index}`}
                width={60}
                height={60}
                className="ml-[-34px]"
              />
            ))}
          </div>
          <div className="flex justify-center bg-primary w-[60px] h-[60px] items-center rounded-full border-white border-[3px] ml-[-34px]">
            <p className="text-white">3M+</p>
          </div>
        </div>
        <div className="flex flex-col">
          <p className="font-bold text-[18px]">Best Digital</p>
          <p className="font-normal text-[18px]">Services</p>
        </div>
      </div>
      <div className="relative">
        <h1 className="font-bold tracking-tighter leading-none text-responsive">
          <span className="text-primary">One</span> of the most important pieces
          of <span className="text-primary">the great</span> product experience{" "}
          <span className="text-primary">is you</span> <span></span>
        </h1>
      </div>
      <div className="flex flex-col gap-y-8 md:flex-row md:item-center md:gap-4 xl:mt-8">
        <p className="w-[320px] text-sm md:w-96 xl:text-xl xl:w-[500px]">
          Established in 2012, Overlays stands as a premier strategic branding
          and design agency.
        </p>
        <div className="flex">
          <Link href="/contact">
            <Button className="w-fit" size="lg">
              Start a project?
            </Button>
          </Link>
          <div className="hidden md:flex">
            <div className="h-14 w-14 bg-primary-900 rounded-full"></div>
            <div className="h-14 w-14 bg-primary-950 rounded-full"></div>
          </div>
        </div>
      </div>
      <div className="flex items-center h-72 justify-center relative rounded-3xl overflow-hidden xl:mt-8 xl:h-[720px]">
        <video
          src="https://res.cloudinary.com/dhhnqrf1p/video/upload/v1716246444/Digital_Grapes_jsid0v.mp4"
          autoPlay
          loop
          muted
          className="object-cover w-full transition-transform transform hover:scale-110"
          style={{ width: "100%", height: "100%" }}
        ></video>
      </div>
    </section>
  );
};

export default Hero;
