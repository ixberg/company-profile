import Hero from "@/components/Services/Hero";
import Services from "@/components/Services/Services";
import Testimonials from "@/components/Services/Testimonials";
import React from "react";

const page = () => {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Hero />
      <Services />
      <Testimonials />
    </main>
  );
};

export default page;
