import Header from "@/app/navbar";
import Hero from "@/components/Hero";
import Navbar from "@/app/navbarMobile";
import Image from "next/image";
import Services from "@/components/Services";
import Works from "@/components/Works";
import Milestone from "@/components/Milestone";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Hero></Hero>
      <Milestone></Milestone>
      <Services></Services>
      <Works></Works>
    </main>
  );
}
