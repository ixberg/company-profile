import React from "react";

const Testimonials = () => {
  const testimonials = [
    {
      text: "The services provided by Overlays exceeded my expectations. The attention to detail and commitment to delivering results were truly remarkable.",
      imgSrc:
        "https://images.unsplash.com/photo-1567515004624-219c11d31f2e??auto=format&q=75&fit=crop&w=112",
      imgAlt: "Photo by Radu Florin",
      name: "John McCulling",
      position: "CEO / Datadrift",
    },
    {
      text: "Overlays' team consistently delivered outstanding work. Their professionalism and creativity have been instrumental in achieving our branding goals.",
      imgSrc:
        "https://images.unsplash.com/photo-1532073150508-0c1df022bdd1?auto=format&q=75&fit=crop&w=112",
      imgAlt: "Photo by christian ferrer",
      name: "Kate Berg",
      position: "CFO / Dashdash",
    },
    {
      text: "I've been continually impressed by Overlays' ability to understand our needs and translate them into visually stunning designs. Their expertise has been invaluable.",
      imgSrc:
        "https://images.unsplash.com/photo-1463453091185-61582044d556?auto=format&q=75&fit=crop&w=500",
      imgAlt: "Photo by Ayo Ogunseinde",
      name: "Greg Jackson",
      position: "CTO / Uptime",
    },
  ];

  return (
    <div className="bg-white px-8 py-6 pb-20 md:px-20 lg:px-[120px] xl:px-[144px]">
      <div className="mx-auto max-w-screen-xl px-4 md:px-8">
        <h2 className="mb-8 text-center text-2xl font-bold text-gray-800 md:mb-12 lg:text-3xl">
          What others say <br className="sm:hidden" />
          about our services
        </h2>

        <div className="grid gap-y-10 sm:grid-cols-2 sm:gap-y-12 lg:grid-cols-3 lg:divide-x">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-4 sm:px-4 md:gap-6 lg:px-8 justify-between"
            >
              <div className="text-center text-gray-600">
                {testimonial.text}
              </div>

              <div className="flex flex-col items-center gap-2 sm:flex-row md:gap-3">
                <div className="h-12 w-12 overflow-hidden rounded-full bg-gray-100 shadow-lg md:h-14 md:w-14">
                  <img
                    src={testimonial.imgSrc}
                    loading="lazy"
                    alt={testimonial.imgAlt}
                    className="h-full w-full object-cover object-center"
                  />
                </div>

                <div>
                  <div className="text-center text-sm font-bold sm:text-left md:text-base">
                    {testimonial.name}
                  </div>
                  <p className="text-center text-sm text-gray-500 sm:text-left md:text-sm">
                    {testimonial.position}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
