"use client";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { testimonialsData } from "@/data/testimonial";

const Testimonials = () => {
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
          {testimonialsData.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <div className="h-full">
                <div className="bg-white border-[1px] border-slate-200 p-8 rounded-xl flex flex-col gap-4 h-full justify-between">
                  <div className="flex flex-col gap-2">
                    <p className="text-xl text-slate-700">
                      {testimonial.quote}
                    </p>
                    <p className="text-sm font-light text-slate-700">
                      {testimonial.desc}
                    </p>
                  </div>
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
