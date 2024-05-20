import React from "react";
import { Button } from "./ui/button";
import Card from "./ui/Card";
import { projects } from "@/data/data";
import Link from "next/link";

const Works = () => {
  return (
    <section className="px-8 pt-12 w-full max-w-[1440px] md:px-20 lg:px-[120px] xl:px-[144px] xl:mt-10">
      <div className="flex flex-col gap-5">
        <h2 className="text-4xl font-normal tracking-tight md:text-5xl lg:text-[60px] xl:text-[90px]">
          Selected Work
        </h2>
        <div className="flex flex-col justify-between items-start gap-5 md:flex-row">
          <p className="text-slate-500 max-w-[300px] sm:max-w-[400px] md:max-w-96 xl:max-w-[500px] xl:text-xl font-light">
            Showcase of Excellence: Premier UI/UX Design & Innovative Web
            Solutions
          </p>
          <Link href="/works">
            <Button>View All</Button>
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-1 md:grid-cols-2 lg:gap-10 md:mt-8">
          {projects
            .filter((_, index) => index === 1 || index === 2)
            .map((work) => (
              <Link key={work.slug} href={`/works/${work.slug}`}>
                <Card
                  image={work.image}
                  title={work.title}
                  badge={work.badge}
                  badgeType={work.badgeType}
                />
              </Link>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Works;
