import React from "react";

const Philosophy = () => {
  return (
    <section className="px-8 py-12 w-full max-w-[1440px] md:px-20 lg:px-[120px] xl:px-[144px] xl:pt-28">
      <div className="flex flex-col gap-5 pb-8">
        <h2 className="text-4xl font-normal tracking-tight md:text-5xl lg:text-[60px] xl:text-[90px]">
          Our Philosophy
        </h2>
        <div className="flex flex-col justify-between items-start gap-5 md:flex-row">
          <p className="text-slate-500 max-w-[300px] sm:max-w-[400px] md:max-w-96 xl:max-w-[500px] xl:text-xl font-light">
            Our team has decades of experience, delivering tailored, top-notch
            solutions.
          </p>
        </div>
      </div>
      <div></div>
    </section>
  );
};

export default Philosophy;
