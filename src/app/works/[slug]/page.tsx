"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation"; // Import the necessary hook
import { projects } from "@/data/data";
import Image from "next/image";
import Link from "next/link";
import Card from "@/components/ui/Card";

type Project = {
  title: string;
  image: string;
  description: string;
  badge: string[];
  badgeType: string;
  slug: string;
  owner: string;
  releaseDate: string;
  services: string[];
  duration: string;
  budget: string;
  previewLink: string;
  background: string;
  detailProject: string;
};

const WorkDetail: React.FC = () => {
  const pathname = usePathname();
  const [work, setWork] = useState<Project | null>(null);

  useEffect(() => {
    const slug = pathname?.split("/").pop();
    if (slug) {
      const project = projects.find((project) => project.slug === slug);
      if (project) {
        setWork(project);
      } else {
        setWork(null);
      }
    }
  }, [pathname]);

  if (!work) return <div>Work not found</div>;

  return (
    <main className="flex min-h-screen flex-col items-center">
      <section className="mt-[10vh] pt-12 pb-36 px-8 xl:px-[144px] flex flex-col w-full gap-10 md:gap-20 max-w-[1440px] md:px-[80px] lg:px-[120px]">
        <h1 className="font-semibold text-5xl tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-center">
          {work.title}
        </h1>
        <div className="flex flex-col gap-8 md:flex-row md:gap-12">
          <div className="w-full h-fit flex flex-col gap-5 p-8 bg-primary rounded-3xl md:w-[400px] xl:basis-2/5 justify-between xl:h-fit md:sticky overflow-auto top-20">
            <div className="pb-5 border-white/50 border-b-[1px] w-full">
              <h2 className="font-semibold tracking-tight text-white text-2xl xl:text-3xl">
                Project Detail
              </h2>
            </div>
            <div className="flex flex-col gap-4 xl:gap-5">
              <div className="flex justify-between text-white text-sm xl:text-lg">
                <p className="font-medium">Owner</p>
                <p className="font-light text-right">{work.owner}</p>
              </div>
              <div className="flex justify-between text-white text-sm xl:text-lg">
                <p className="font-medium">Release</p>
                <p className="font-light text-right">{work.releaseDate}</p>
              </div>
              <div className="flex justify-between text-white text-sm xl:text-lg">
                <p className="font-medium">Services</p>
                <p className="font-light text-right">
                  {work.services.join(", ")}
                </p>
              </div>
              <div className="flex justify-between text-white text-sm xl:text-lg">
                <p className="font-medium">Duration</p>
                <p className="font-light text-right">{work.duration}</p>
              </div>
              <div className="flex justify-between text-white text-sm xl:text-lg">
                <p className="font-medium">Butget</p>
                <p className="font-light text-right">{work.budget}</p>
              </div>
              <div className="flex justify-between text-white text-sm xl:text-lg">
                <p className="font-medium">Preview Link</p>
                <p className="font-light text-right">{work.previewLink}</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full gap-8 xl:basis-3/5">
            <div className="w-full h-[300px] overflow-hidden rounded-3xl md:h-[337px] xl:h-[409px]">
              <Image
                src={work.image}
                alt={work.title}
                width={300}
                height={300}
                priority
                className="object-cover w-full h-full xl"
              ></Image>
            </div>
            <div className="flex flex-col gap-4">
              <h2 className="font-semibold text-3xl tracking-tighter">
                Project Background
              </h2>
              <p>{work.background}</p>
            </div>
            <div className="flex flex-col gap-4">
              <h2 className="font-semibold text-3xl tracking-tighter">
                Project Detail
              </h2>
              <p>{work.detailProject}</p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-1 md:grid-cols-2 lg:gap-10 md:mt-20">
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
      </section>
    </main>

    // <div className="work-detail">
    //   <h1>{work.title}</h1>
    //   <img src={work.image} alt={work.title} />
    //   <p>{work.description}</p>
    //   <ul>
    //     {work.badge.map((badge, index) => (
    //       <li key={index}>{badge}</li>
    //     ))}
    //   </ul>
    //   <p>
    //     <strong>Release Date:</strong> {work.releaseDate}
    //   </p>
    //   <p>
    //     <strong>Services:</strong> {work.services.join(", ")}
    //   </p>
    //   <p>
    //     <strong>Duration:</strong> {work.duration}
    //   </p>
    //   <p>
    //     <strong>Budget:</strong> {work.budget}
    //   </p>
    //   <a href={work.previewLink}>{work.previewLink}</a>
    //   <p>
    //     <strong>Background:</strong> {work.background}
    //   </p>
    //   <p>
    //     <strong>Detail Project:</strong> {work.detailProject}
    //   </p>
    // </div>
  );
};

export default WorkDetail;
