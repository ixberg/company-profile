"use client";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper/modules";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      quote: "This is the best service I've ever used. Highly recommended!",
      author: "John Doe",
      title: "CTO Adobe",
      image: "/avatar1.png",
    },
    {
      id: 2,
      quote: "Fantastic experience and excellent support. Five stars!",
      author: "Jane Smith",
      title: "Product Manager at Airbnb",
      image: "/avatar2.png",
    },
    {
      id: 3,
      quote:
        "The UI/UX design is exceptional and the web solutions are cutting-edge.",
      author: "Alice Johnson",
      title: "CEO Tokopaedi",
      image: "/avatar3.png",
    },
    {
      id: 4,
      quote:
        "The UI/UX design is exceptional and the web solutions are cutting-edge.",
      author: "Alice Johnson",
      title: "CEO Tokopaedi",
      image: "/avatar3.png",
    },
  ];

  return (
    <section className="px-8 py-12 w-full max-w-[1440px] md:px-20 lg:px-[120px] xl:px-[144px]">
      <div className="flex flex-col gap-5 pb-8">
        <h2 className="text-4xl font-normal tracking-tight md:text-5xl lg:text-[60px] xl:text-[90px]">
          Testimonials
        </h2>
        <div className="flex flex-col justify-between items-start gap-5 md:flex-row">
          <p className="text-slate-500 max-w-[300px] sm:max-w-[400px] md:max-w-96 xl:max-w-[500px] xl:text-xl font-light">
            Highlights: Exceptional UI/UX Design & Cutting-Edge Web Solutions
          </p>
        </div>
      </div>
      <div className="flex w-full">
        <Swiper
          modules={[Pagination, Navigation, Autoplay]}
          spaceBetween={10}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          speed={1000}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
          }}
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <div className="">
                <div className="bg-slate-100 p-6 rounded-sm flex flex-col gap-4 h-[300px] justify-between">
                  <p className="text-xl font-light text-slate-700">
                    {testimonial.quote}
                  </p>
                  <div className="flex items-center gap-3">
                    <Image
                      src={testimonial.image}
                      alt="image"
                      width={60}
                      height={60}
                    />
                    <div className="flex flex-col">
                      <p className="text-lg font-semibold text-slate-900">
                        {testimonial.author}
                      </p>
                      <p className="text-sm text-slate-500">
                        {testimonial.title}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
