import React from "react";
import { Button } from "./ui/button";
import Card from "./ui/Card";

const Services: React.FC = () => {
  return (
    <section className="px-8 pt-12 w-full max-w-[1440px] md:px-20 lg:px-[120px] xl:px-[144px]">
      <div className="flex flex-col gap-5 pb-8">
        <h2 className="text-4xl font-normal tracking-tight md:text-5xl lg:text-[60px] xl:text-[90px]">
          Services
        </h2>
        <div className="flex flex-col justify-between items-start gap-5 md:flex-row">
          <p className="text-slate-500 max-w-[300px] sm:max-w-[400px] md:max-w-96 xl:max-w-[500px] xl:text-xl font-light">
            Elevate Your Digital Presence: Expert UI/UX Design & Cutting-Edge
            Web Development
          </p>
          <Button>View All</Button>
        </div>
      </div>
      <div className="flex flex-col gap-4 md:mt-5">
        <div className="flex flex-col sm:flex-row justify-between gap-4 xl:gap-8">
          <div className="basis-2/5">
            <Card
              image="/uiux-image.png"
              title="UIUX Design"
              badge={["UIUX", "Web Design", "Digital Product"]}
            ></Card>
          </div>
          <div className="basis-3/5">
            <Card
              image="/branding-image.png"
              title="Branding"
              badge={["logo", "Brand Identity", "Visual Identity"]}
            ></Card>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row-reverse justify-between gap-4 xl:gap-8">
          <div className="basis-2/5">
            <Card
              image="/illustration-image.png"
              title="Illustration"
              badge={["Procreate", "Adobe Photoshop", "Krita"]}
            ></Card>
          </div>
          <div className="basis-3/5">
            <Card
              image="/web-image.png"
              title="Web Development"
              badge={["Framer", "React", "Next"]}
            ></Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
