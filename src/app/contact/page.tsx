import Form from "@/components/Contact/Form";
import Hero from "@/components/Contact/Hero";
import React from "react";

const Contact = () => {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Hero />
      <Form></Form>
    </main>
  );
};

export default Contact;
