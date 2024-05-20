"use client";
import React from "react";
import Image from "next/image";
import UserCard2 from "../ui/UserCard2";
import useFetchUsersList from "@/hooks/useUserList";

const UserList = () => {
  const { users, loading, error } = useFetchUsersList();

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error loading users: {error.message}</p>;
  }

  const designerUsers = users.slice(0, 4);
  const businessUsers = users.slice(4, 7);
  const developerUsers = users.slice(7, 14);

  return (
    <section className="px-8 py-8 pb-24 w-full max-w-[1440px] md:px-20 lg:px-[120px] xl:px-[144px] flex flex-col gap-12">
      {/* Designer Section */}
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        <div className="bg-amber-500 h-56 w-full rounded-2xl flex flex-col items-center justify-center gap-2 xl:h-64">
          <div className="p-2 rounded-full bg-white/10">
            <Image
              src="/icon/paint.svg"
              alt="designIc"
              width={24}
              height={24}
            />
          </div>
          <h1 className="text-white font-bold">Designer</h1>
        </div>
        {designerUsers.map((user) => (
          <UserCard2
            key={user.login.uuid}
            image={user.picture.large}
            name={`${user.name.first} ${user.name.last}`}
          />
        ))}
      </div>
      {/* Business and Marketing Section */}
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        <div className=" bg-red-500 h-56 w-full rounded-2xl flex flex-col items-center justify-center gap-2 xl:h-64">
          <div className="p-2 rounded-full bg-white/10">
            <Image
              src="/icon/target.svg"
              alt="designIc"
              width={24}
              height={24}
            />
          </div>
          <h1 className="text-white font-bold text-center">
            Business and <br />
            Marketing
          </h1>
        </div>
        {businessUsers.map((user) => (
          <UserCard2
            key={user.login.uuid}
            image={user.picture.large}
            name={`${user.name.first} ${user.name.last}`}
          />
        ))}
      </div>
      {/* Developer Section */}
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        <div className=" bg-cyan-600 h-56 w-full rounded-2xl flex flex-col items-center justify-center gap-2 xl:h-64">
          <div className="p-2 rounded-full bg-white/10">
            <Image
              src="/icon/developer.svg"
              alt="designIc"
              width={24}
              height={24}
            />
          </div>
          <h1 className="text-white font-bold text-center">Developer</h1>
        </div>
        {developerUsers.map((user) => (
          <UserCard2
            key={user.login.uuid}
            image={user.picture.large}
            name={`${user.name.first} ${user.name.last}`}
          />
        ))}
      </div>
    </section>
  );
};

export default UserList;
