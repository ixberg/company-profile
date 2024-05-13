"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathName = usePathname();
  return (
    <div className="w-full bg-white border-b-2 border-slate-100 flex justify-center items-center h-[10vh] lg:justify-between lg:px-[120px] xl:justify-between xl:px-[144px]">
      <Image
        src="/wavei.svg"
        alt="logobrand"
        width={77}
        height={53}
        priority={true}
      />
      <div className="hidden lg:flex xl:flex">
        <ul className="gap-10 flex">
          <li
            className={`${pathName === "/" ? "text-black" : "text-slate-500"}`}
          >
            <Link href="/">Home</Link>
          </li>
          <li
            className={`${
              pathName === "/about" ? "text-black" : "text-slate-500"
            }`}
          >
            <Link href="/about">About</Link>
          </li>
          <li
            className={`${
              pathName === "/services" ? "text-black" : "text-slate-500"
            }`}
          >
            <Link href="/services">Services</Link>
          </li>
          <li
            className={`${
              pathName === "/works" ? "text-black" : "text-slate-500"
            }`}
          >
            <Link href="/works">Works</Link>
          </li>
          <li
            className={`${
              pathName === "/teams" ? "text-black" : "text-slate-500"
            }`}
          >
            <Link href="/teams">Teams</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
