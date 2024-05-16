"use client";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathName = usePathname();

  return (
    <div className="flex w-screen h-fit justify-center lg:hidden absolute z-50">
      <ul className="flex fixed bottom-5 h-fit rounded-2xl p-2 gap-[6px] backdrop-blur-md bg-[#DEE5E9]/80 shadow-md items-center text-sm">
        <li
          className={`p-[10px] rounded-xl min-w-[42px] ${
            pathName === "/"
              ? "border-[1px] border-primary bg-primary text-white"
              : "border-[1px] border-white bg-white/25"
          }`}
        >
          <Link href="/">
            <Image
              src="/home-ic.svg"
              alt="homeic"
              width={20}
              height={20}
              className={`filter brightness-0 ${
                pathName === "/" ? "invert" : ""
              }`}
            ></Image>
          </Link>
        </li>
        <li
          className={`p-[10px] rounded-xl ${
            pathName === "/about"
              ? "border-[1px] border-primary bg-primary text-white"
              : "border-[1px] border-white bg-white/25"
          }`}
        >
          <Link href="/about">About</Link>
        </li>
        <li
          className={`p-[10px] rounded-xl ${
            pathName === "/works"
              ? "border-[1px] border-primary bg-primary text-white"
              : "border-[1px] border-white bg-white/25"
          }`}
        >
          <Link href="/works">Works</Link>
        </li>
        <li
          className={`p-[10px] rounded-xl ${
            pathName === "/services"
              ? "border-[1px] border-primary bg-primary text-white"
              : "border-[1px] border-white bg-white/25"
          }`}
        >
          <Link href="/services">Services</Link>
        </li>
        <li
          className={`p-[10px] rounded-xl ${
            pathName === "/teams"
              ? "border-[1px] border-primary bg-primary text-white"
              : "border-[1px] border-white bg-white/25"
          }`}
        >
          <Link href="/teams">Teams</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
