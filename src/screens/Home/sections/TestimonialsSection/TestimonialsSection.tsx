import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../../../components/ui/carousel";

export const TestimonialsSection = (): JSX.Element => {
  // Testimonial data for mapping
  const testimonials = [
    {
      id: 1,
      name: "Sara Jay",
      role: "Treveller",
      image: "/mask-group-2.png",
      rating: 5,
      text: "Before we define any approach, we need to deline the brands overall goal. We  then need to dive.",
    },
    {
      id: 2,
      name: "Cristian Daniel",
      role: "Treveller",
      image: "/mask-group-1.png",
      rating: 5,
      text: "Before we define any approach, we need to deline the brands overall goal. We  then need to dive.",
    },
    {
      id: 3,
      name: "Kausar Hasan",
      role: "Treveller",
      image: "/mask-group.png",
      rating: 5,
      text: "Before we define any approach, we need to deline the brands overall goal. We  then need to dive.",
    },
    {
      id: 4,
      name: "Unknown",
      role: "",
      image: "",
      rating: 3,
      text: "Before we define any approach, we need to deline the brands overall goal. We  then need to dive.",
    },
  ];

  return (
    <section className="relative w-full py-16 my-8">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <h3 className="font-medium text-3xl text-[#616161] tracking-[4.20px] leading-[70px]">
            TESTIMONIAL
          </h3>
          <h2 className="font-semibold text-6xl text-[#020202] leading-[70px] mb-4">
            What our client say
          </h2>
          <p className="font-medium text-lg text-[#616161] leading-10">
            Create&nbsp;&nbsp;a visual identity for your company and a overall
            brand
          </p>
        </div>

        {/* Testimonials Carousel */}
        <Carousel className="w-full">
          <CarouselContent>
            {testimonials.map((testimonial) => (
              <CarouselItem
                key={testimonial.id}
                className="md:basis-1/3 lg:basis-1/4"
              >
                <div className="relative">
                  {testimonial.image && (
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[130px] h-[130px] rounded-full overflow-hidden">
                      <div
                        className="w-full h-full bg-cover bg-center"
                        style={{ backgroundImage: `url(${testimonial.image})` }}
                      />
                    </div>
                  )}

                  <Card className="rounded-[10px] shadow-[0px_20px_60px_#0000001a] mt-16">
                    <CardContent className="pt-16 pb-8 px-12">
                      <div className="text-center mb-8">
                        <h4 className="font-semibold text-2xl text-black leading-[70px]">
                          {testimonial.name}
                        </h4>
                        {testimonial.role && (
                          <p className="font-medium text-lg text-[#848484] leading-[70px] -mt-4">
                            {testimonial.role}
                          </p>
                        )}
                      </div>

                      <div>
                        <div className="flex mb-4">
                          {[...Array(5)].map((_, i) => (
                            <img
                              key={i}
                              className={`w-5 h-[19px] ${i < testimonial.rating ? "opacity-100" : "opacity-40"}`}
                              alt="Star"
                              src="/star-2.svg"
                            />
                          ))}
                        </div>
                        <p className="font-medium text-lg text-[#848484] leading-7">
                          {testimonial.text}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <div className="flex justify-end mt-8 gap-4">
            <CarouselPrevious className="relative static h-[79px] w-[73px] rounded-[10px] border-[#e7e7e7] shadow-[0px_8px_50px_#0000001a]" />
            <CarouselNext className="relative static h-[79px] w-[73px] rounded-[10px] border-[#e7e7e7] shadow-[0px_8px_50px_#0000001a]" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};
