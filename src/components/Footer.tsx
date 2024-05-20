import React from "react";
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-primary-950 flex flex-col items-center pb-20 lg:pb-0">
      <div className="flex flex-col p-8 w-full max-w-[1440px] gap-12 md:px-20 lg:px-[120px] xl:px-[144px] lg:pt-16">
        <div className="flex flex-col gap-8 md:flex-row md:justify-between">
          <div className="flex flex-col gap-6 basis-1/2 lg:flex-row">
            <h2 className="font-bold text-white text-2xl">
              Leading the way <br className="md:hidden xl:inline" />
              in digital
            </h2>
            <div className="flex gap-4">
              <div className="bg-white rounded-full p-3 h-fit">
                <Image
                  src="/icon/instagram-outline.svg"
                  alt="instagramIc"
                  width={24}
                  height={24}
                ></Image>
              </div>
              <div className="bg-white rounded-full p-3 h-fit">
                <Image
                  src="/icon/twitter-outline.svg"
                  alt="instagramIc"
                  width={24}
                  height={24}
                ></Image>
              </div>
              <div className="bg-white rounded-full p-3 h-fit">
                <Image
                  src="/icon/linkedin-outline.svg"
                  alt="instagramIc"
                  width={24}
                  height={24}
                ></Image>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-6 basis-1/2 lg:flex-row">
            <h2 className="font-bold text-white text-2xl">
              Join our Newsletter
            </h2>
            <div className="bg-white flex rounded-full overflow-hidden justify-between p-1 h-fit w-full">
              <input
                type="text"
                className="ml-5 outline-none"
                placeholder="Enter your e-mail"
              />
              <Button size="icon">
                <Image
                  src="/icon/arrow-right.svg"
                  alt="arrowIc"
                  width={24}
                  height={24}
                  className="filter brightness-0 invert"
                ></Image>
              </Button>
            </div>
          </div>
        </div>
        <div className="border-white border-b-[0.5px]"></div>
        <div className="flex flex-col gap-8 md:flex-row justify-between">
          <div className="flex flex-col gap-4">
            <h1 className="text-white font-bold text-5xl">Overlays</h1>
            <p className="text-white/50 text-sm font-extralight sm:w-96">
              Agency with incredible design and development expertise. Based in
              Batam, Indonesia.
            </p>
          </div>
          <div className="flex gap-12">
            <div className="flex flex-col gap-3">
              <p className="text-white font-semibold">Contact</p>
              <ul className="flex flex-col text-white/60 text-sm font-extralight gap-2">
                <li>+1 312 45678</li>
                <li>info@overlays.com</li>
                <li>support@overlays.com</li>
                <li>NDP Nongsa Batam No.12</li>
              </ul>
            </div>
            <div className="flex-col gap-3 hidden lg:flex">
              <p className="text-white font-semibold">Navigation</p>
              <ul className="flex flex-col text-white/60 text-sm font-extralight gap-2">
                <li>
                  <Link href="/about">About</Link>
                </li>
                <li>
                  <Link href="/services">Services</Link>
                </li>
                <li>
                  <Link href="/works">Work</Link>
                </li>
                <li>
                  <Link href="/teams">Teams</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-8">
          <div className="border-white/50 border-b-[0.5px]"></div>
          <p className="text-white font-extralight text-xs text-center">
            @2024 overlays - all right reserve
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
