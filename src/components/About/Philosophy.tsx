import React from "react";
import Image from "next/image";

const Philosophy = () => {
  return (
    <section className="px-8 py-12 w-full max-w-[1440px] md:px-20 lg:px-[120px] xl:px-[144px] xl:pt-28">
      <div className="flex flex-col gap-5 pb-8">
        <h2 className="text-4xl font-normal tracking-tight md:text-5xl lg:text-[60px] xl:text-[90px]">
          Our Philosophy
        </h2>
        <div className="flex flex-col justify-between items-start gap-5 md:flex-row">
          <p className="text-slate-500 max-w-[300px] sm:max-w-[400px] md:max-w-96 xl:max-w-[500px] xl:text-xl font-light">
            We&apos;re an all-in-one platform with a built-in global digital
            workforce
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-12 lg:flex-row">
        <div className="rounded-3xl overflow-hidden h-[300px] lg:h-[500px] lg:basis-1/2">
          <Image
            src="/assets/philosophy.png"
            alt="phimage"
            width={551}
            height={720}
            className="object-cover h-full w-full"
          ></Image>
        </div>
        <div className="flex flex-col gap-8 basis-1/2">
          <p className="font-light">
            At Overlays, we operate on the principle that every brand has a
            unique story waiting to be told. We believe in pushing the
            boundaries of creativity and technology to narrate your story in the
            most compelling way. Our approach is holistic and human-centric,
            focusing on creating experiences that resonate with your audience
            and drive engagement. We&apos;re not just about making things look
            pretty; we&apos;re about creating digital solutions that work.
          </p>
          <div className="flex flex-col gap-2">
            <p className="font-bold text-4xl">
              Our <span className="text-yellow-500 text-5xl">1st</span> decade
            </p>
            <p className="text-sm text-slate-500">
              Founded in 2012, Overlays excels in strategic branding and design.
            </p>
          </div>
          <div className="flex flex-wrap gap-10 lg:w-96 xl:gap-x-20">
            <div className="flex flex-col gap-2 w-32">
              <p className="font-semibold text-4xl">150+</p>
              <p className="text-sm text-slate-500">Project Completed</p>
            </div>
            <div className="flex flex-col gap-2 w-32">
              <p className="font-semibold text-4xl">620+</p>
              <p className="text-sm text-slate-500">Client</p>
            </div>
            <div className="flex flex-col gap-2 w-32">
              <p className="font-semibold text-4xl">12+</p>
              <p className="text-sm text-slate-500 text-nowrap">
                Years of experience
              </p>
            </div>
            <div className="flex flex-col gap-2 w-32">
              <p className="font-semibold text-4xl">20+</p>
              <p className="text-sm text-slate-500">Members</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
