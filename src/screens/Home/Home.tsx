import React from "react";
import { FeaturesSection } from "./sections/FeaturesSection";
import { FooterSection } from "./sections/FooterSection";
import { HeaderSection } from "./sections/HeaderSection";
import { HeroSection } from "./sections/HeroSection";
import { ServicesSection } from "./sections/ServicesSection";
import { TestimonialsSection } from "./sections/TestimonialsSection/TestimonialsSection";

export const Home = (): JSX.Element => {
  return (
    <div className="bg-white flex flex-col items-center justify-center w-full">
      <div className="bg-white w-full max-w-[1512px] relative">
        <header className="w-full">
          <div className="relative">
            <HeaderSection />
            <div className="flex justify-center md:justify-start md:pl-12 py-7">
              <img
                className="h-[82px] w-auto object-contain"
                alt="Logo"
                src="/logo1-1.png"
              />
            </div>
          </div>
        </header>

        <main className="w-full">
          <FeaturesSection />
          <HeroSection />
          <ServicesSection />
          <TestimonialsSection />
        </main>

        <footer className="w-full">
          <FooterSection />
        </footer>
      </div>
    </div>
  );
};
