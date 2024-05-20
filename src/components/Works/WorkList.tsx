import React from "react";
import Link from "next/link";
import Card from "../ui/Card";
import { projects } from "@/data/data";

const WorkList = () => {
  const works = [
    {
      image: "/assets/work1.png",
      title: "Byte",
      badge: ["UIUX Design", "2024"],
      badgeType: "outline",
      slug: "byte",
    },
    {
      image: "/work2-image.png",
      title: "Not Real",
      badge: ["3D Logo", "2024"],
      badgeType: "outline",
      slug: "not-real",
    },
    {
      image: "/work1-image.png",
      title: "Arca Film",
      badge: ["Web Development", "2023"],
      badgeType: "outline",
      slug: "arca-film",
    },
    {
      image: "/assets/work2.png",
      title: "Not Real",
      badge: ["Illustration", "2023"],
      badgeType: "outline",
      slug: "not-real-illustration",
    },
    {
      image: "/assets/work3.png",
      title: "Skull Project",
      badge: ["Web Development", "2023"],
      badgeType: "outline",
      slug: "skull-project",
    },
  ];

  return (
    <section className="px-8 py-8 pb-24 w-full max-w-[1440px] md:px-20 lg:px-[120px] xl:px-[144px]">
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-1 md:grid-cols-2 lg:gap-10 md:mt-8">
        {projects.map((work) => (
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
    </section>
  );
};

export default WorkList;
