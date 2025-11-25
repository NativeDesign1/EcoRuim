import React from "react";
import { PhoneIcon, MailIcon, ClockIcon } from "lucide-react";

const contactInfo = [
  {
    icon: PhoneIcon,
    text: "+32 486 9732 50",
  },
  {
    icon: MailIcon,
    text: "info@ecoruim.be",
  },
  {
    icon: ClockIcon,
    text: "24/7 beschikbaar",
  },
];

export const TopbarSection = () => {
  return (
    <header className="w-full bg-[#eeeeee82]">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center justify-between gap-4 py-3 lg:py-5">
          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <a href={`tel:${contactInfo[0].text.replace(/\s/g, '')}`} className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <PhoneIcon className="w-4 h-4 text-[#2678d1]" />
              <span className="text-[#0c3065] text-xs sm:text-sm font-medium whitespace-nowrap">
                {contactInfo[0].text}
              </span>
            </a>

            <a href={`mailto:${contactInfo[1].text}`} className="hidden md:flex items-center gap-2 hover:opacity-80 transition-opacity">
              <MailIcon className="w-4 h-4 text-[#2678d1]" />
              <span className="text-[#0c3065] text-xs sm:text-sm font-medium">
                {contactInfo[1].text}
              </span>
            </a>
          </div>

          <div className="flex items-center gap-2">
            <ClockIcon className="w-4 h-4 text-[#2678d1]" />
            <span className="text-[#0c3065] text-xs sm:text-sm font-medium whitespace-nowrap">
              {contactInfo[2].text}
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};
