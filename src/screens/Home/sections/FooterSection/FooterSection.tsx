import {
  FacebookIcon,
  InstagramIcon,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
  TwitterIcon,
  YoutubeIcon,
} from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Input } from "../../../../components/ui/input";

export const FooterSection = (): JSX.Element => {
  // Contact information data
  const contactInfo = [
    {
      icon: <MapPinIcon className="w-5 h-5" />,
      text: "732 Despard St, Atlanta",
    },
    { icon: <PhoneIcon className="w-5 h-5" />, text: "+97 888 8888" },
    { icon: <MailIcon className="w-5 h-5" />, text: "info@traveller.com" },
  ];

  // Quick links data
  const quickLinks = ["Home", "About Us", "Tours", "Contact"];

  // Social media data
  const socialMedia = [
    { icon: <FacebookIcon className="w-6 h-6" />, href: "#" },
    { icon: <TwitterIcon className="w-6 h-6" />, href: "#" },
    { icon: <InstagramIcon className="w-6 h-6" />, href: "#" },
    { icon: <YoutubeIcon className="w-6 h-6" />, href: "#" },
  ];

  return (
    <footer className="relative w-full bg-transparent">
      {/* Subscription section with background image */}
      <div className="w-full h-[549px] bg-[url(/unsplash-tejfa7vw5e4.png)] bg-cover bg-center flex flex-col items-center justify-center">
        <div className="flex flex-col items-center gap-6 max-w-[871px] mx-auto">
          <h2 className="font-semibold text-white text-6xl text-center tracking-[0] leading-[70px]">
            Subcribe to get special price
          </h2>

          <p className="font-medium text-[#dfdfdf] text-lg text-center tracking-[0] leading-[34px] max-w-[630px]">
            Dont wanna miss something? subscribe right now and get special
            promotion and monthly newsletter
          </p>

          <div className="relative w-full max-w-[676px] mt-6">
            <Input
              className="h-[69px] pl-6 pr-[160px] rounded-[34.5px] font-medium text-xl"
              placeholder="Type your email here"
            />
            <Button className="absolute right-[7px] top-1/2 transform -translate-y-1/2 h-[55px] w-[146px] bg-black text-[#dfdfdf] rounded-[27.5px] font-medium text-xl">
              Subscribe
            </Button>
          </div>
        </div>
      </div>

      {/* Main footer content */}
      <div className="w-full py-16 px-14 flex flex-wrap justify-between">
        {/* Logo and description */}
        <div className="w-full max-w-[450px]">
          <img
            className="w-[394px] h-[91px] object-cover"
            alt="Logo"
            src="/logo-2.png"
          />
          <p className="mt-6 font-medium text-[#6c6c6c] text-lg tracking-[0] leading-[25px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            pharetra condimentum.
          </p>
        </div>

        {/* Contact information */}
        <Card className="border-none shadow-none bg-transparent">
          <CardContent className="p-0">
            <h3 className="font-semibold text-black text-2xl tracking-[0] leading-[70px]">
              Contact Information
            </h3>
            <ul className="space-y-6">
              {contactInfo.map((item, index) => (
                <li key={index} className="flex items-center gap-2">
                  {item.icon}
                  <span className="font-medium text-[#6c6c6c] text-lg tracking-[0] leading-[34px]">
                    {item.text}
                  </span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Quick links */}
        <Card className="border-none shadow-none bg-transparent">
          <CardContent className="p-0">
            <h3 className="font-semibold text-black text-2xl tracking-[0] leading-[70px]">
              Quick Link
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="font-medium text-[#6c6c6c] text-lg tracking-[0] leading-[34px]"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Social media */}
        <Card className="border-none shadow-none bg-transparent">
          <CardContent className="p-0">
            <h3 className="font-semibold text-black text-2xl tracking-[0] leading-[70px]">
              Follow Us
            </h3>
            <div className="flex gap-4">
              {socialMedia.map((item, index) => (
                <a key={index} href={item.href} className="text-[#6c6c6c]">
                  {item.icon}
                </a>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Copyright section */}
      <div className="w-full h-[120px] bg-black flex items-center justify-center">
        <p className="font-medium text-[#dfdfdf] text-lg text-center tracking-[0] leading-[34px]">
          Copyright © All rights reserved (Website Developed &amp; Managed by{" "}
          <span>creativechroma</span>)
        </p>
      </div>
    </footer>
  );
};
