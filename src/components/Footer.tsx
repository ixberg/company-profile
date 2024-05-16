import React from "react";
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-primary flex flex-col items-center">
      <div className="bg-primary p-8 flex flex-col justify-center items-center gap-8 max-w-[1440px]">
        <div className="flex flex-col gap-8 p-8 items-center">
          <h2 className="text-center text-white font-semibold text-3xl xl:text-4xl lg:max-w-[600px] xl:max-w-[700px]">
            Don’t be surprised at how stunning your project is once you have
            decided
          </h2>
          <Button variant="secondary" className="w-fit">
            Start a Project?
          </Button>
        </div>
        <hr className="bg-white w-full border-[0.2px]" />
        <ul className="flex gap-5 text-white text-xs">
          <li>
            <Link href="https://instagram.com" target="_blank">
              Instagram
            </Link>
          </li>
          <li>
            <Link href="https://linkedin.com" target="_blank">
              Linkedin
            </Link>
          </li>
          <li>
            <Link href="https://instagram.com" target="_blank">
              Twitter
            </Link>
          </li>
          <li>
            <Link href="https://instagram.com" target="_blank">
              Youtube
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
