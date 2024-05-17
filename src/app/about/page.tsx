import Hero from "@/components/About/Hero";
import Philosophy from "@/components/About/Philosophy";
import Teams from "@/components/About/Teams";
import React from "react";

const About = () => {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Hero />
      <Philosophy />
      <Teams />
    </main>
  );
};

export default About;
