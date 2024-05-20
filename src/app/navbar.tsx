"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathName = usePathname();
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== "undefined") {
        if (window.scrollY > lastScrollY) {
          // scroll down
          setShowNavbar(false);
        } else {
          // scroll up
          setShowNavbar(true);
        }
        setLastScrollY(window.scrollY);
      }
    };

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);

      // cleanup function
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, [lastScrollY]);

  return (
    <div
      className={`fixed w-full bg-white border-b-2 border-slate-100 flex justify-center items-center h-[10vh] lg:justify-between lg:px-[120px] xl:justify-between xl:px-[144px] transition-transform duration-300 ${
        showNavbar
          ? "transform translate-y-0 z-50"
          : "transform -translate-y-full"
      }`}
    >
      <div className="flex gap-2 items-center">
        <Image
          src="/wavei.svg"
          alt="logobrand"
          width={40}
          height={53}
          priority={true}
        />
        <p className="font-semibold hidden lg:inline">Overlays</p>
      </div>

      <div className="hidden lg:flex xl:flex">
        <ul className="gap-10 flex text-sm">
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
