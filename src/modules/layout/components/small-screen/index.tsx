import React from 'react';

interface Section {
  title: string;
  items: string[];
}

// You can also import this from a shared file if you prefer
const sections: Section[] = [
  {
    title: 'Help',
    items: [
      'Contact Us',
      'Delivery',
      'Click & Collect',
      'Make A Return',
      'Security & Privacy',
      'Size Guide',
      'Klarna FAQs',
      'Terms & Conditions',
      'FAQs',
    ],
  },
  {
    title: 'Pages',
    items: [
      'Celebrate 50 Years With Moda In Pelle',
      'Serenade of Summer Spring Summer 2025',
      'Shoon',
      'Pink Ribbon',
      'eGift Cards',
      'eGift Card Information',
      'Discount Codes',
      'Healthcare & Key Worker Discount',
      'Student Discount',
      'Our Heritage',
    ],
  },
  {
    title: 'More Information',
    items: [
      'Blog',
      'Store Finder',
      'Wholesale',
      'Affiliates & Influencers',
      'Privacy Policy',
      'Careers',
      'Sitemap',
      'Sustainability',
      'Shoe Care Guide',
    ],
  },
];

/**
 * Renders footer sections laid out in a row with their items always visible.
 * This component lives in its own file so it won't affect the existing dropdown component.
 */
const InlineFooterSections: React.FC = () => {
  return (
    <div className="w-full hidden lg:flex xl:hidden justify-center lg:-ml-6 px-4 md:px-0">
      <div className="w-full max-w-[1000px] flex flex-wrap lg:flex-nowrap justify-between gap-8 text-center">

        {sections.map((section) => (
          <div key={section.title} className="flex-1">
            <h3 className="text-lg font-semibold text-black mb-4">
              {section.title}
            </h3>
            <ul className="space-y-2 text-sm text-gray-700 font-light">
              {section.items.map((item, idx) => (
                <li key={idx}>
                  <a href="#" className="hover:underline">
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

export default InlineFooterSections;
