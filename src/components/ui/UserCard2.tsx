import React from "react";
import Image from "next/image";
import Link from "next/link";

interface cardProps {
  image: string;
  name: string;
}

const UserCard2: React.FC<cardProps> = ({ image, name }) => {
  return (
    <div className="flex flex-col overflow-hidden rounded-2xl h-56 justify-between border-slate-200 border-[1px] xl:h-64">
      <div className="flex overflow-hidden">
        <Image
          src={image}
          alt={name}
          width={100}
          height={100}
          quality={100}
          className="object-cover w-full"
        ></Image>
      </div>
      <div className="flex flex-col p-3 h-24 gap-1 justify-center">
        <p className="text-sm font-semibold">{name}</p>
        <div className="gap-1 flex">
          <Link href="https://linkedin.com" target="_blank">
            <Image
              src="/icon/linkedin-outline.svg"
              alt="linkedin"
              width={24}
              height={24}
            />
          </Link>
          <Link href="https://twitter.com" target="_blank">
            <Image
              src="/icon/twitter-outline.svg"
              alt="twitter"
              width={24}
              height={24}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UserCard2;
