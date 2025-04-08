import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "../../../../components/ui/carousel";

export const FeaturesSection = (): JSX.Element => {
  // Destination data for carousel
  const destinations = [
    {
      id: 1,
      name: "Bali, Indonesia",
      description:
        "Bali is a beautiful tourist spot and is visited by many travelers.",
      image: "/unsplash-selchr-bgvs.png",
    },
    // Other destinations would be added here
  ];

  return (
    <section className="w-full max-w-[1372px] mx-auto py-16 relative">
      {/* Section Header */}
      <div className="text-center mb-16 max-w-[740px] mx-auto">
        <h2 className="font-semibold text-[#020202] text-6xl leading-[70px] mb-4">
          Explore new worlds with <br />
          exotic natural scenery
        </h2>
        <p className="font-medium text-[#868686] text-lg leading-9">
          Explore the world with what you love beautiful natural beauty.
        </p>
      </div>

      {/* Carousel Navigation */}
      <div className="flex justify-between mb-8">
        <Button
          variant="outline"
          size="icon"
          className="w-[69px] h-[66px] rounded-[10px] border-[#e7e7e7] shadow-[0px_8px_50px_#0000001a]"
        >
          <ChevronLeftIcon className="h-7 w-4" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="w-[69px] h-[66px] rounded-[10px] border-[#e7e7e7] shadow-[0px_8px_50px_#0000001a]"
        >
          <ChevronRightIcon className="h-7 w-4" />
        </Button>
      </div>

      {/* Destinations Carousel */}
      <Carousel className="w-full">
        <CarouselContent>
          {/* Left destination image */}
          <CarouselItem className="basis-1/3">
            <div className="h-[361px] bg-[url(/rectangle-18.png)] bg-cover bg-center rounded-[10px]" />
          </CarouselItem>

          {/* Center featured destination */}
          <CarouselItem className="basis-1/3">
            <div className="relative">
              <Card className="w-full shadow-[0px_20px_35px_#0000001a] rounded-[10px] border-none">
                <div className="relative">
                  <div className="h-[316px] bg-[#c4c4c4] rounded-[10px_10px_0px_0px] overflow-hidden">
                    <img
                      className="w-full h-full object-cover"
                      alt="Bali, Indonesia"
                      src="/unsplash-selchr-bgvs.png"
                    />
                  </div>
                  <div className="absolute bottom-0 right-8">
                    <div className="relative w-[79px] h-[76px] bg-white rounded-[39.5px/38.07px] shadow-[0px_4px_31px_#00000024] flex items-center justify-center">
                      <span className="font-normal text-7xl leading-none">
                        &quot;
                      </span>
                    </div>
                  </div>
                </div>
                <CardContent className="p-3.5">
                  <h3 className="font-semibold text-black text-2xl mb-4">
                    Bali, Indonesia.
                  </h3>
                  <p className="font-medium text-[#555555] text-sm">
                    Bali is a beautiful tourist spot and is visited by many
                    travelers.
                  </p>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>

          {/* Right destination image */}
          <CarouselItem className="basis-1/3">
            <div className="h-[361px] bg-[url(/unsplash-519-90ncads.png)] bg-cover bg-center rounded-[10px]" />
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </section>
  );
};
