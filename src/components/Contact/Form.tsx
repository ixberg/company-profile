"use client";
import React, { useState } from "react";
import { ToggleGroup, ToggleGroupItem } from "@radix-ui/react-toggle-group";
import { services, buget } from "@/data/data";
import { Button } from "../ui/button";

const Form = () => {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [selectedBuget, setSelectedBuget] = useState<string>("");

  const handleToggleChange = (value: string[]) => {
    setSelectedServices(value);
  };

  const handleToggleChange2 = (value: string) => {
    setSelectedBuget(value);
  };

  return (
    <section className="px-8 py-8 pb-24 w-full max-w-[1440px] md:px-20 lg:px-[120px] xl:px-[144px] flex flex-col gap-8">
      <div className="w-full bg-slate-100 rounded-2xl p-8">
        <div className="flex flex-col gap-5">
          <h2 className="font-semibold text-xl tracking-tight">
            I&apos;m interested in...
          </h2>
          <ToggleGroup
            type="multiple"
            className="flex gap-3 flex-wrap"
            value={selectedServices}
            onValueChange={handleToggleChange}
          >
            {services.map((service) => (
              <ToggleGroupItem
                key={service.value}
                value={service.value}
                className={`px-4 py-3 rounded-full text-sm xl:text-base xl:py-4  ${
                  selectedServices.includes(service.value)
                    ? "bg-primary text-white hover:bg-primary-800"
                    : "bg-white hover:bg-slate-50"
                }`}
              >
                {service.label}
              </ToggleGroupItem>
            ))}
          </ToggleGroup>
        </div>
      </div>
      <div className="w-full bg-slate-100 rounded-2xl p-8">
        <div className="flex flex-col gap-5">
          <h2 className="font-semibold text-xl tracking-tight">
            Let us know you first
          </h2>
          <div className="flex flex-col gap-5 w-full">
            <div className="flex flex-col gap-4 lg:flex-row">
              <input
                type="text"
                placeholder="First name*"
                className="w-full outline-none py-3 border-b-2 bg-transparent focus:border-slate-500"
              />
              <input
                type="text"
                placeholder="Last name*"
                className="w-full outline-none py-3 border-b-2 bg-transparent focus:border-slate-500"
              />
            </div>
            <input
              type="email"
              placeholder="Email*"
              className="outline-none py-3 border-b-2 bg-transparent focus:border-slate-500 "
            />
            <input
              type="email"
              placeholder="Company name"
              className="outline-none py-3 border-b-2 bg-transparent focus:border-slate-500 "
            />
            <textarea
              placeholder="Type your message*"
              className="outline-none py-3 border-b-2 bg-transparent focus:border-slate-500 h-32"
            />
          </div>
        </div>
      </div>
      <div className="w-full bg-slate-100 rounded-2xl p-8">
        <div className="flex flex-col gap-5">
          <h2 className="font-semibold text-xl tracking-tight">
            Project buget (in USD)
          </h2>
          <ToggleGroup
            type="single"
            className="flex gap-3 flex-wrap"
            value={selectedBuget}
            onValueChange={handleToggleChange2}
          >
            {buget.map((item) => (
              <ToggleGroupItem
                key={item.value}
                value={item.value}
                className={`px-4 py-3 rounded-full text-sm xl:text-base xl:py-4 ${
                  selectedBuget === item.value
                    ? "bg-primary text-white hover:bg-primary-800"
                    : "bg-white hover:bg-slate-50"
                }`}
              >
                {item.label}
              </ToggleGroupItem>
            ))}
          </ToggleGroup>
        </div>
      </div>
      <Button className="w-fit">Send Request</Button>
    </section>
  );
};

export default Form;
