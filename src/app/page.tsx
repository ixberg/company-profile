import Header from "@/app/navbar";
import Hero from "@/components/Hero";
import Navbar from "@/app/navbarMobile";
import Image from "next/image";
import Services from "@/components/Services";
import Works from "@/components/Works";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Hero></Hero>
      <Services></Services>
      <Works></Works>
    </main>
  );
}
