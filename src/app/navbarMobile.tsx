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
        <Link href="/">
          <li
            className={`p-[10px] rounded-xl min-w-[42px] ${
              pathName === "/"
                ? "border-[1px] border-primary bg-primary text-white"
                : "border-[1px] border-white bg-white/25"
            }`}
          >
            <Image
              src="/icon/home-ic.svg"
              alt="homeic"
              width={20}
              height={20}
              className={`filter brightness-0 ${
                pathName === "/" ? "invert" : ""
              }`}
            ></Image>
          </li>
        </Link>
        <Link href="/about">
          <li
            className={`p-[10px] rounded-xl ${
              pathName === "/about"
                ? "border-[1px] border-primary bg-primary text-white"
                : "border-[1px] border-white bg-white/25"
            }`}
          >
            About
          </li>
        </Link>
        <Link href="/services">
          <li
            className={`p-[10px] rounded-xl ${
              pathName === "/services"
                ? "border-[1px] border-primary bg-primary text-white"
                : "border-[1px] border-white bg-white/25"
            }`}
          >
            Services
          </li>
        </Link>
        <Link href="/works">
          <li
            className={`p-[10px] rounded-xl ${
              pathName === "/works"
                ? "border-[1px] border-primary bg-primary text-white"
                : "border-[1px] border-white bg-white/25"
            }`}
          >
            Works
          </li>
        </Link>
        <Link href="/teams">
          <li
            className={`p-[10px] rounded-xl ${
              pathName === "/teams"
                ? "border-[1px] border-primary bg-primary text-white"
                : "border-[1px] border-white bg-white/25"
            }`}
          >
            Teams
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default Navbar;
