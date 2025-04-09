import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const HeroSection = (): JSX.Element => {
  // Service card data for mapping
  const serviceCards = [
    {
      id: 1,
      title: "Best Service",
      description:
        "our service is reliable and convenient, our service is quality.",
      iconSrc: "/icon-1.png",
      iconAlt: "Best Service Icon",
    },
    {
      id: 2,
      title: "Price Guarantee",
      description:
        "our service is reliable and convenient, our service is quality.",
      iconSrc: "/icon.png",
      iconAlt: "Price Guarantee Icon",
    },
    {
      id: 3,
      title: "Handpicked Hotels",
      description:
        "our service is reliable and convenient, our service is quality.",
      iconSrc: "/frame-1.svg",
      iconAlt: "Handpicked Hotels Icon",
    },
  ];

  return (
    <section className="relative w-full py-16 overflow-hidden">
      <div className="relative w-full">
        {/* Background Image */}
        <img
          className="w-full h-[641px] object-cover blur-[2.1px]"
          alt="Travel background"
          src="/unsplash-okvxy9tg3ky.png"
        />

        {/* Section Title */}
        <div className="absolute top-14 left-1/2 transform -translate-x-1/2 text-center">
          <h2 className="font-bold text-6xl text-white mb-4">Why choose Us?</h2>
          <p className="font-medium text-lg text-white leading-9">
            our services have been trusted by world travelers.
          </p>
        </div>

        {/* Navigation Controls */}
        <div className="absolute top-[191px] left-1/2 transform -translate-x-1/2 w-full max-w-[1372px] flex justify-between">
          <Button
            variant="outline"
            size="icon"
            className="h-[66px] w-[69px] bg-white rounded-[10px] border-[#e7e7e7] shadow-[0px_8px_50px_#0000001a]"
          >
            <ChevronLeftIcon className="h-7 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="h-[66px] w-[69px] bg-white rounded-[10px] border-[#e7e7e7] shadow-[0px_8px_50px_#0000001a]"
          >
            <ChevronRightIcon className="h-7 w-4" />
          </Button>
        </div>

        {/* Service Cards Container */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-[1372px] flex justify-center gap-8 mb-8">
          {serviceCards.map((card, index) => (
            <Card
              key={card.id}
              className="w-[330px] h-[433px] bg-white rounded-[10px] shadow-[0px_8px_60px_#00000026] relative"
            >
              <CardContent className="p-0">
                {/* Icon Container */}
                <div
                  className={`w-24 h-[97px] mt-11 ml-[19px] ${index !== 2 ? "bg-black rounded-[10px] flex items-center justify-center" : ""}`}
                >
                  {index === 2 ? (
                    <div className="w-24 h-[97px] bg-[url(/frame-1.svg)] bg-[100%_100%]" />
                  ) : (
                    <img
                      className={
                        index === 0 ? "w-[65px] h-16" : "w-[58px] h-[59px]"
                      }
                      alt={card.iconAlt}
                      src={card.iconSrc}
                    />
                  )}
                </div>

                {/* Card Content */}
                <div className="ml-[19px] mt-[66px]">
                  <h3 className="font-semibold text-2xl text-black mb-5">
                    {card.title}
                  </h3>
                  <p className="font-medium text-lg text-[#848484] w-[289px] mb-[90px]">
                    {card.description}
                  </p>
                  <div className="flex items-center">
                    <span className="font-medium text-lg text-black">
                      Leaern more
                    </span>
                    <img
                      className="w-[30px] h-3 ml-2"
                      alt="Arrow"
                      src="/vector-3-1.svg"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
