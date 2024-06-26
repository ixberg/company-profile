import React from "react";
import { Button } from "./ui/button";
import Card from "./ui/Card";
import Link from "next/link";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "./ui/drawer";

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
          <Link href="/services">
            <Button>View All</Button>
          </Link>
        </div>
      </div>
      <div className="flex flex-col gap-8 md:mt-5">
        <div className="flex flex-col sm:flex-row justify-between gap-8 xl:gap-8">
          <div className="basis-2/5">
            <Drawer>
              <DrawerTrigger className="w-full">
                <Card
                  image="https://res.cloudinary.com/dhhnqrf1p/image/upload/v1716318839/uiux-image_mtx3rt.webp"
                  title="UIUX Design"
                  badge={["UIUX", "Web Design", "Digital Product"]}
                  badgeType="secondary"
                ></Card>
              </DrawerTrigger>
              <DrawerContent>
                <DrawerHeader>
                  <DrawerTitle>Are you absolutely sure?</DrawerTitle>
                  <DrawerDescription>
                    This action cannot be undone.
                  </DrawerDescription>
                </DrawerHeader>
                <DrawerFooter>
                  <Button>Submit</Button>
                  <DrawerClose>
                    <Button variant="outline">Cancel</Button>
                  </DrawerClose>
                </DrawerFooter>
              </DrawerContent>
            </Drawer>
          </div>
          <div className="basis-3/5">
            <Card
              image="https://res.cloudinary.com/dhhnqrf1p/image/upload/v1716318838/branding-image_jb4d6a.webp"
              title="Branding"
              badge={["logo", "Brand Identity", "Visual Identity"]}
              badgeType="secondary"
            ></Card>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row-reverse justify-between gap-8 xl:gap-8">
          <div className="basis-2/5">
            <Card
              image="https://res.cloudinary.com/dhhnqrf1p/image/upload/v1716318839/illustration-image_lpzcde.webp"
              title="Illustration"
              badge={["Procreate", "Adobe Photoshop", "Krita"]}
              badgeType="secondary"
            ></Card>
          </div>
          <div className="basis-3/5">
            <Card
              image="https://res.cloudinary.com/dhhnqrf1p/image/upload/v1716318840/web-image_nyrhv8.webp"
              title="Web Development"
              badge={["Framer", "React", "Next"]}
              badgeType="secondary"
            ></Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
