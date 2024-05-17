import React from "react";
import Image from "next/image";
import Link from "next/link";

interface UserCardProps {
  image: string;
  name: string;
  position: string;
  contact: string;
}

const UserCard: React.FC<UserCardProps> = ({
  image,
  name,
  position,
  contact,
}) => {
  return (
    <div className="flex w-full h-[400px] lg:h-[500px]">
      <div className="flex flex-col relative w-full rounded-3xl overflow-hidden group">
        <Image
          src={image}
          alt={name}
          width={350}
          height={350}
          quality={100}
          priority
          className="w-full h-full object-cover"
        />
        <div className="absolute flex p-2 bottom-0 w-full">
          <div className="flex flex-col gap-2 w-full bg-slate-800 p-4 rounded-2xl">
            <div className="flex flex-col gap-1">
              <h2 className="text-white font-semibold text-xl">{name}</h2>
              <p className="text-white font-light text-sm">{position}</p>
            </div>
            <p className="text-white/50 font-light text-xs">{contact}</p>
            <div className="gap-2 hidden group-hover:flex">
              <Link href="https://linkedin.com" target="_blank">
                <Image
                  src="/icon/linkedin.svg"
                  alt="linkedin"
                  width={24}
                  height={24}
                />
              </Link>
              <Link href="https://twitter.com" target="_blank">
                <Image
                  src="/icon/twitter.svg"
                  alt="twitter"
                  width={24}
                  height={24}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
