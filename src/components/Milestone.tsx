import React from "react";
import Marquee from "react-fast-marquee";
import Image from "next/image";

const logoData = [
  { src: "/company-logo1.png", alt: "companylogo1", width: 168, height: 61 },
  { src: "/company-logo2.png", alt: "companylogo2", width: 161, height: 61 },
  { src: "/company-logo3.png", alt: "companylogo3", width: 141.25, height: 60 },
  { src: "/company-logo4.png", alt: "companylogo4", width: 168.75, height: 60 },
  { src: "/company-logo5.png", alt: "companylogo5", width: 138.75, height: 60 },
  { src: "/company-logo7.png", alt: "companylogo7", width: 192.5, height: 60 },
];

const Milestone = () => {
  return (
    <section className="pt-10 xl:pt-20 w-full flex flex-col items-center overflow-hidden">
      <div className="flex flex-col gap-8 justify-center items-center">
        <h1 className="text-slate-500 w-[200px] text-center md:w-full">
          Trusted By Thousands of Brands Worldwide
        </h1>
        <Marquee autoFill gradient>
          {logoData.map((logo, index) => (
            <Image
              key={index}
              src={logo.src}
              alt={logo.alt}
              width={logo.width}
              height={logo.height}
              className="mx-6 xl:mx-10"
              priority
            />
          ))}
        </Marquee>
      </div>
      <div className="flex flex-col justify-between gap-8 p-8 w-full md:px-20 md:flex-row md:gap-4 lg:px-[120px] xl:py-20 xl:px-[144px] max-w-[1440px]">
        <div className="flex flex-col gap-4 p-8 bg-slate-100 rounded-3xl basis-1/3">
          <h2 className="font-semibold text-4xl text-slate-900">
            <span>$</span>399 <span>M+</span>
          </h2>
          <div className="flex flex-col gap-2">
            <h2 className="font-semibold text-lg">Capital Raised</h2>
            <p className="text-sm">
              Total amount of capital raised following collaboration with One
              Week Wonders
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-4 p-8 bg-slate-100 rounded-3xl basis-1/3">
          <h2 className="font-semibold text-4xl text-slate-900">20</h2>
          <div className="flex flex-col gap-2">
            <h4 className="font-semibold text-lg">Unicorn branded</h4>
            <p className="text-sm">
              Unicorn brands that have gained up to $1B valuations post-branding
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-4 p-8 bg-slate-100 rounded-3xl basis-1/3">
          <h2 className="font-semibold text-4xl text-slate-900">
            200 <span>M+</span>
          </h2>
          <div className="flex flex-col gap-2">
            <h4 className="font-semibold text-lg">Acquisitions</h4>
            <p className="text-sm">
              Number of clients who have been acquired following collaboration
              with One Week Wonders
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Milestone;
