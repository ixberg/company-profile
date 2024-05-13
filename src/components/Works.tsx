import React from "react";
import { Button } from "./ui/button";
import Card from "./ui/Card";

const Works = () => {
  return (
    <section className="px-8 py-12 w-full max-w-[1440px] md:px-20 lg:px-[120px] xl:px-[144px] xl:mt-10">
      <div className="flex flex-col gap-5 pb-8">
        <h2 className="text-4xl font-semibold tracking-tight md:text-5xl lg:text-[80px] xl:text-[100px]">
          Selected Work
        </h2>
        <div className="flex flex-col justify-between items-start gap-5 md:flex-row">
          <p className="text-slate-500 max-w-[300px] sm:max-w-[400px] md:max-w-96 xl:max-w-[500px] xl:text-xl font-light">
            Showcase of Excellence: Premier UI/UX Design & Innovative Web
            Solutions
          </p>
          <Button>View All</Button>
        </div>
        <div className="flex flex-col gap-4 md:flex-row xl:gap-8">
          <Card
            image="/work2-image.png"
            title="Not Real"
            badge={["Illustration"]}
          ></Card>
          <Card
            image="/work1-image.png"
            title="Arca Film"
            badge={["Web Development"]}
          ></Card>
        </div>
      </div>
    </section>
  );
};

export default Works;
