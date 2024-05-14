import React from "react";
import Marquee from "react-fast-marquee";
import Image from "next/image";

const Milestone = () => {
  return (
    <section className="pt-10 xl:pt-20 w-full flex flex-col items-center overflow-hidden">
      <div className="flex flex-col gap-8 justify-center items-center -z-10">
        <h5 className="text-slate-500">Trusted by global company</h5>
        <Marquee gradient={true} autoFill={true} pauseOnHover={true} speed={70}>
          <Image
            src="companys-logo/company logo.svg"
            alt="companylogo"
            width={192.5}
            height={60}
            className="mx-6 xl:mx-10"
            style={{ width: "auto", height: "auto" }}
          ></Image>
          <Image
            src="companys-logo/company logo2.svg"
            alt="companylogo"
            width={210}
            height={60}
            className="mx-6 xl:mx-10"
            style={{ width: "auto", height: "auto" }}
          ></Image>
          <Image
            src="companys-logo/company logo3.svg"
            alt="companylogo"
            width={138.75}
            height={60}
            className="mx-6 xl:mx-10"
            style={{ width: "auto", height: "auto" }}
          ></Image>
          <Image
            src="companys-logo/company logo6.svg"
            alt="companylogo"
            width={160}
            height={60}
            className="mx-6 xl:mx-10"
            style={{ width: "auto", height: "auto" }}
          ></Image>
          <Image
            src="companys-logo/company logo5.svg"
            alt="companylogo"
            width={141.25}
            height={60}
            className="mx-6 xl:mx-10"
            style={{ width: "auto", height: "auto" }}
          ></Image>
          <Image
            src="companys-logo/company logo7.svg"
            alt="companylogo"
            width={166.25}
            height={60}
            className="mx-6 xl:mx-10"
            style={{ width: "auto", height: "auto" }}
          ></Image>
        </Marquee>
      </div>
      <div className="flex flex-col gap-8 p-8 w-full md:px-20 md:flex-row md:gap-4 lg:px-[120px] xl:py-20 xl:px-[144px] max-w-[1440px]">
        <div className="flex flex-col gap-4 p-8 bg-slate-100 rounded-3xl">
          <h2 className="font-semibold text-4xl text-primary">
            <span>$</span>399 <span>M+</span>
          </h2>
          <div className="flex flex-col gap-2">
            <h4 className="font-semibold text-lg">Capital Raised</h4>
            <p className="text-sm">
              Total amount of capital raised following collaboration with One
              Week Wonders
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-4 p-8 bg-slate-100 rounded-3xl">
          <h2 className="font-semibold text-4xl text-primary">20</h2>
          <div className="flex flex-col gap-2">
            <h4 className="font-semibold text-lg">Unicorn branded</h4>
            <p className="text-sm">
              Unicorn brands that have gained up to $1B valuations post-branding
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-4 p-8 bg-slate-100 rounded-3xl">
          <h2 className="font-semibold text-4xl text-primary">
            <span>$</span>399 <span>M+</span>
          </h2>
          <div className="flex flex-col gap-2">
            <h4 className="font-semibold text-lg">Capital Raised</h4>
            <p className="text-sm">
              Total amount of capital raised following collaboration with One
              Week Wonders
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Milestone;
