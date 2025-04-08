import React from "react";

export const ServicesSection = (): JSX.Element => {
  return (
    <section className="container mx-auto py-16 flex flex-col items-center">
      <div className="max-w-2xl mx-auto text-center mb-12">
        <h2 className="font-['Poppins',Helvetica] font-semibold text-[#020202] text-6xl mb-6 leading-[70px]">
          Our tour partner
        </h2>

        <p className="font-['Poppins',Helvetica] font-medium text-[#848484] text-lg leading-[34px]">
          There are many variation of passage of lorem ipsum available but the
          majority have suffered alteration
        </p>
      </div>

      <div className="w-full">
        <img
          className="w-full h-auto"
          alt="Logo sponsor"
          src="/logo-sponsor.svg"
        />
      </div>
    </section>
  );
};
