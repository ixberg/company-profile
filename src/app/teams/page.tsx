import Hero from "@/components/Teams/Hero";
import UserList from "@/components/Teams/UserList";
import React from "react";

const page = () => {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Hero />
      <UserList></UserList>
    </main>
  );
};

export default page;
