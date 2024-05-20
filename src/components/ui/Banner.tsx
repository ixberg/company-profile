import React from "react";
import Image from "next/image";
import { Button } from "./button";
import Link from "next/link";

const Banner = () => {
  return (
    <div className="w-full p-8 pt-36 pb-28 md:px-20 lg:px-[120px] lg:pt-10 xl:px-[144px] max-w-[1440px]">
      <div className="flex w-full items-center h-fit bg-primary rounded-[32px] p-8 relative lg:gap-8 xl:py-1">
        <Image
          src="/assets/image3d.png"
          alt="3dimage"
          width={300}
          height={300}
          quality={100}
          className="absolute top-[-150px] right-1/2 translate-x-1/2 lg:static lg:translate-x-0 lg:top-auto lg:right-auto lg:w-[400px] lg:h-[400px]"
        ></Image>
        <div className="flex flex-col items-center gap-8 pt-24 lg:pt-0 lg:items-start">
          <div className="flex flex-col gap-4">
            <h2 className="text-white font-bold text-3xl xl:w-[600px]">
              Don`t be surprised at how stunning your project is once you have
              decided
            </h2>
            <p className="text-white font-light xl:w-[600px]">
              Submit requests, ideate your next big campaign, manage your design
              priorities, and collaborate with your team in one, centralized
              place.
            </p>
          </div>
          <Link href="/contact">
            <Button variant="secondary">Start a project</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
