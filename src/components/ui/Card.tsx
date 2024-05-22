import React, { Children, ReactNode } from "react";
import { Badge } from "./badge";
import Image from "next/image";

interface cardProps {
  image: string;
  title: string;
  badge: string[];
  badgeType?: any;
  children?: ReactNode;
}

const Card: React.FC<cardProps> = ({
  image,
  title,
  badge,
  children,
  badgeType,
}) => {
  return (
    <div className="flex flex-col gap-5 w-full h-full group">
      <div className="flex w-full h-[300px] rounded-3xl overflow-hidden">
        <Image
          src={image}
          alt={title}
          width={500}
          height={500}
          quality={100}
          priority
          className="object-cover w-full h-full transition-transform transform group-hover:scale-110"
        />
      </div>
      <div className="flex flex-col gap-2 xl:gap-4">
        <h1 className="font-medium text-3xl xl:text-4xl tracking-tighter text-left">
          {title}
        </h1>
        {children && <div>{children}</div>}
        <div className="flex gap-2 flex-wrap">
          {badge.map((item, index) => (
            <Badge key={index} variant={badgeType}>
              {item}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
