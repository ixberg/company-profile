import React from "react";
import Hero from "@/components/Works/Hero";
import WorkList from "@/components/Works/WorkList";

const page = () => {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Hero />
      <WorkList />
    </main>
  );
};

export default page;
