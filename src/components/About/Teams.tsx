"use client";

import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import UserCard from "../ui/UserCard";
import useFetchUsers from "@/hooks/useUser";

const positions = [
  "Chief Executive Officer",
  "Chief Design Officer",
  "Chief Technology Officer",
];

const photo = [
  "/user-photo/ceo.png",
  "/user-photo/cdo.png",
  "/user-photo/cto.png",
];

const Teams: React.FC = () => {
  const { users, loading, error } = useFetchUsers();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading users: {error.message}</p>;

  return (
    <section className="px-8 py-12 w-full max-w-[1440px] md:px-20 lg:px-[120px] xl:px-[144px]">
      <div className="flex flex-col gap-5 pb-8">
        <h2 className="text-4xl font-normal tracking-tight md:text-5xl lg:text-[60px] xl:text-[90px]">
          Meet The Teams
        </h2>
        <div className="flex flex-col justify-between items-start gap-5 md:flex-row">
          <p className="text-slate-500 max-w-[300px] sm:max-w-[400px] md:max-w-96 xl:max-w-[500px] xl:text-xl font-light">
            Our team has decades of experience, delivering tailored, top-notch
            solutions.
          </p>
          <Link href="/teams">
            <Button>All Members</Button>
          </Link>
        </div>
        <div className="flex flex-col gap-8 sm:flex-row md:flex-row">
          {users.map((user, index) => (
            <UserCard
              key={user.login.uuid}
              image={photo[index % positions.length]}
              name={`${user.name.first} ${user.name.last}`}
              position={positions[index % positions.length]} // Assign positions cyclically
              contact={user.email}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Teams;
