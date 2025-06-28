import React, { useState } from "react";

const FooterDropdowns = () => {
  const [openSection, setOpenSection] = useState<string | null>(null);

const sections = [
  {
    title: "Help",
    items: [
      { label: "Contact Us", href: "/contact" },
      { label: "Delivery", href: "/delivery" },
      { label: "Click & Collect", href: "/click-and-collect" },
      { label: "Make A Return", href: "/returns" },
      { label: "Security & Privacy", href: "/security-privacy" },
      { label: "Size Guide", href: "/size-guide" },
      { label: "Klarna FAQs", href: "/klarna-faqs" },
      { label: "Terms & Conditions", href: "/terms" },
      { label: "FAQs", href: "/faqs" },
    ],
  },
  {
    title: "Pages",
    items: [
      { label: "Celebrate 50 Years With Moda In Pelle", href: "#" },
      { label: "Serenade of Summer Spring Summer 2025", href: "#" },
      { label: "Shoon", href: "#" },
      { label: "Pink Ribbon", href: "#" },
      { label: "eGift Cards", href: "#" },
      { label: "eGift Card Information", href: "#" },
      { label: "Discount Codes", href: "#" },
      { label: "Healthcare & Key Worker Discount", href: "#" },
      { label: "Student Discount", href: "#" },
      { label: "Our Heritage", href: "#" },
    ],
  },
  {
    title: "More Information",
    items: [
      { label: "Blog", href: "#" },
      { label: "Store Finder", href: "#" },
      { label: "Wholesale", href: "#" },
      { label: "Affiliates & Influencers", href: "#" },
      { label: "Privacy Policy", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Sitemap", href: "#" },
      { label: "Sustainability", href: "#" },
      { label: "Shoe Care Guide", href: "#" },
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
        {section.items.map(({ label, href }, i) => (
          <li key={i}>
            <a
               href={href || "#"}
                className="hover:underline block">
              {label}
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
