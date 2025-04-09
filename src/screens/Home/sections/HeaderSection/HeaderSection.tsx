import { ChevronDownIcon, SearchIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "../../../../components/ui/navigation-menu";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../../components/ui/select";

export const HeaderSection = (): JSX.Element => {
  // Navigation menu items data
  const navItems = [
    { name: "Home", active: true },
    { name: "Package", active: false },
    { name: "Destination", active: false },
    { name: "Blog", active: false },
    { name: "Contact", active: false },
  ];

  // SearchIcon filter options
  const searchFilters = [
    { name: "Location", options: ["Bali", "Istanbul", "Rome", "Paris"] },
    { name: "Date", options: ["Today", "Tomorrow", "Next Week", "Next Month"] },
    { name: "People", options: ["1", "2", "3", "4+"] },
  ];

  return (
    <header className="relative w-full h-[862px] bg-transparent">
      <div className="relative h-[862px]">
        {/* Background image container */}
        <div className="relative w-full h-[862px]">
          <div className="absolute w-full h-[860px] top-0.5 left-0 bg-[#c4c4c4]" />
          <img
            className="absolute w-full h-[862px] top-0.5 left-0 blur-[1.25px] object-cover"
            alt="Suitcase travel"
            src="/suitcase-travel-summer-holidays-vacation-travelers-luggage-1.png"
          />

          {/* Dark overlay for navigation */}
          <div className="absolute w-full h-32 top-0 left-0 bg-[#120a0a82]" />
        </div>

        {/* Navigation */}
        <NavigationMenu className="absolute top-[61px] left-[688px]">
          <NavigationMenuList className="flex gap-8">
            {navItems.map((item, index) => (
              <NavigationMenuItem key={index}>
                <div className="flex items-center">
                  <span
                    className={`font-semibold text-lg ${item.active ? "text-white" : "text-[#ffffffcc]"}`}
                  >
                    {item.name}
                  </span>
                  {item.name !== "Home" && item.name !== "Contact" && (
                    <ChevronDownIcon className="w-4 h-2.5 ml-1 text-[#ffffffcc]" />
                  )}
                </div>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* SearchIcon icon */}
        <SearchIcon className="absolute w-[21px] h-[21px] top-16 left-[1593px] text-white" />

        {/* Hero content */}
        <div className="absolute w-[614px] top-64 left-[101px]">
          <h1 className="[text-shadow:0px_4px_4px_#00000040] font-bold text-white text-[90px] tracking-[0] leading-[110px] font-['Poppins',Helvetica]">
            Make in <br />
            your journey.
          </h1>

          <p className="mt-6 font-medium text-[#cfcfcf] text-lg tracking-[0] leading-9 font-['Poppins',Helvetica] w-[440px]">
            Explore the world with what you love beautiful natural beauty.
          </p>

          {/* SearchIcon bar */}
          <div className="mt-24 w-[736px] h-[78px] bg-white rounded-[72px] border border-solid border-[#cacaca] shadow-[0px_20px_35px_#0000004c] flex items-center justify-between px-6">
            <div className="flex gap-16">
              {searchFilters.map((filter, index) => (
                <Select key={index}>
                  <SelectTrigger className="w-auto border-0 shadow-none focus:ring-0 font-['Poppins',Helvetica] font-semibold text-[#9b9b9b] text-lg">
                    <SelectValue placeholder={filter.name} />
                  </SelectTrigger>
                  <SelectContent>
                    {filter.options.map((option, idx) => (
                      <SelectItem key={idx} value={option.toLowerCase()}>
                        {option}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              ))}
            </div>

            <Button className="w-[161px] h-[57px] bg-black rounded-[28.43px] font-['Poppins',Helvetica] font-semibold text-white text-lg">
              Explore now
            </Button>
          </div>

          {/* Popular places */}
          <div className="mt-10 font-['Poppins',Helvetica] text-lg tracking-[0] leading-9 whitespace-nowrap">
            <span className="font-semibold text-[#ebebeb]">
              Popular Place :
            </span>
            <span className="font-semibold text-[#dbdbdb]">&nbsp;</span>
            <span className="font-medium text-[#cfcfcf]">
              Bali, Istanbul, Rome, Paris.
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};
