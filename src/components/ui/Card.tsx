import React, { Children, ReactNode } from "react";
import { Badge } from "./badge";
import Image from "next/image";

interface cardProps {
  image: string;
  title: string;
  badge: string[];
  children?: ReactNode;
}

const Card: React.FC<cardProps> = ({ image, title, badge, children }) => {
  return (
    <div className="flex flex-col gap-5 w-full h-full">
      <div className="flex w-full h-[300px] rounded-3xl overflow-hidden">
        <Image
          src={image}
          alt={title}
          width={500}
          height={500}
          quality={100}
          priority
          className="object-cover w-full h-full transition-transform transform hover:scale-110"
        />
      </div>
      <div className="flex flex-col gap-2 xl:gap-4">
        <h1 className="font-medium text-3xl xl:text-4xl tracking-tighter">
          {title}
        </h1>
        <div className="flex gap-2 flex-wrap">
          {badge.map((item, index) => (
            <Badge key={index} variant="secondary">
              {item}
            </Badge>
          ))}
        </div>
      </div>
      <div>{children}</div>
    </div>
  );
};

export default Card;
