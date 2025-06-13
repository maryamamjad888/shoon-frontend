import React, { useState } from "react";

const FooterDropdowns = () => {
  const [openSection, setOpenSection] = useState<string | null>(null);

  const sections = [
    {
      title: "Help",
      items: [
        "Contact Us",
        "Delivery",
        "Click & Collect",
        "Make A Return",
        "Security & Privacy",
        "Size Guide",
        "Klarna FAQs",
        "Terms & Conditions",
        "FAQs",
      ],
    },
    {
      title: "Pages",
      items: [
        "Celebrate 50 Years With Moda In Pelle",
        "Serenade of Summer Spring Summer 2025",
        "Shoon",
        "Pink Ribbon",
        "eGift Cards",
        "eGift Card Information",
        "Discount Codes",
        "Healthcare & Key Worker Discount",
        "Student Discount",
        "Our Heritage",
      ],
    },
    {
      title: "More Information",
      items: [
        "Blog",
        "Store Finder",
        "Wholesale",
        "Affiliates & Influencers",
        "Privacy Policy",
        "Careers",
        "Sitemap",
        "Sustainability",
        "Shoe Care Guide",
      ],
    },
  ];

  const toggleSection = (title: string) => {
    setOpenSection(openSection === title ? null : title);
  };

  return (
   <div className="w-full hidden  md:flex lg:hidden !justify-center">
  <div className="w-[500px] flex flex-row !items-center  gap-6">
    {sections.map((section) => (
      <div key={section.title} className="w-[200px] sm:w-1/3">
        <button
          onClick={() => toggleSection(section.title)}
          className="text-lg font-como mb-3 text-black w-full flex  items-center focus:outline-none"
        >
          {section.title}
          
        </button>

        <ul
          className={`overflow-hidden transition-all duration-300 ease-in-out text-gray font-light text-sm space-y-2 ${
            openSection === section.title ? "max-h-[500px]" : "max-h-0"
          }`}
        >
          {section.items.map((item, i) => (
            <li key={i}>
              <a href="#" className="hover:underline block">
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    ))}
  </div>
</div>

  );
};

export default FooterDropdowns;
