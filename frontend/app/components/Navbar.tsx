"use client";

import { useState } from "react";
import Link from "next/link";
import PopoverMenu from "./Popover/PopoverMenu";
import PopoverContent from "./Popover/PopoverContent";
import styles from "@/style";

const menuItems = [
    {
      label: "What We Do",
      contentTitle: "Commercial Banking",
      href: "/page",
      contentText: "From startups to legacy brands, you're making your mark. We're here to help.",
      buttonTitle: "Learn More",
      buttonUrl: "#",
      rightSectionItems: [
        { title: "Innovation Economy", description: "Fueling the success of early-stage startups, venture-backed and high-growth companies." },
        { title: "Midsize Businesses", description: "Keep your company growing with custom banking solutions for middle market businesses." },
        { title: "Large Corporations", description: "Innovative banking solutions tailored to corporations and specialized industries." },
        { title: "Commercial Real Estate", description: "Capitalize on opportunities and prepare for challenges throughout the real estate cycle." },
        { title: "Community Impact Banking", description: "When our communities succeed, we all succeed. Local businesses and institutions need capital and expertise." },
        { title: "International Banking", description: "Power your business' global growth and operations at every stage." }
      ]
    },
    {
      label: "Insights",
      contentTitle: "Investment Banking",
      href: "/page",
      contentText: "Strategic advice and creative financial solutions that help clients achieve their financial goals.",
      buttonTitle: "Explore",
      buttonUrl: "#",
      rightSectionItems: [
        { title: "Mergers & Acquisitions", description: "Advising on mergers, acquisitions, and other transformative transactions." },
        { title: "Equity Capital Markets", description: "Providing access to the equity capital markets to help companies grow." },
        { title: "Debt Capital Markets", description: "Offering a broad range of debt financing solutions tailored to our clients’ needs." },
        { title: "Leveraged Finance", description: "Specialized in delivering innovative, bespoke financial solutions to clients." },
        { title: "Restructuring", description: "Helping clients optimize their capital structure and navigate financial challenges." }
      ]
    },
    {
      label: "Our Firm",
      contentTitle: "Asset & Wealth Management",
      href: "/page",
      contentText: "Delivering tailored investment solutions to help clients meet their wealth management objectives.",
      buttonTitle: "Learn More",
      buttonUrl: "#",
      rightSectionItems: [
        { title: "Private Wealth Management", description: "Providing personalized financial strategies for high-net-worth individuals." },
        { title: "Institutional Asset Management", description: "Helping institutions manage portfolios with bespoke asset management strategies." },
        { title: "Real Estate Investment", description: "Maximizing returns through real estate investment strategies." },
        { title: "Alternative Investments", description: "Offering hedge funds, private equity, and other alternative investment products." },
        { title: "Sustainable Investing", description: "Integrating sustainability into investment strategies for long-term growth." }
      ]
    },
    {
      label: "Careers",
      contentTitle: "Global Research & Insights",
      href: "/page",
      contentText: "Providing world-class research and insights to support our clients’ decision-making.",
      buttonTitle: "Explore",
      buttonUrl: "#",
      rightSectionItems: [
        { title: "Equity Research", description: "Delivering deep research and actionable insights on equity markets." },
        { title: "Macro Insights", description: "Exploring global macroeconomic trends and their implications for investors." },
        { title: "Fixed Income Research", description: "Providing in-depth analysis on fixed income instruments and markets." },
        { title: "Quantitative Research", description: "Leveraging advanced data science techniques to uncover market opportunities." },
        { title: "Sector Research", description: "Offering detailed sector-specific research to guide investment strategies." }
      ]
    },
    
  ];
    

const Navbar: React.FC = () => {
  const [activeItem, setActiveItem] = useState<number | null>(null);

  // Handle when the user hovers over a menu item
  const handleMouseEnter = (index: number) => {
    setActiveItem(index);
  };

  // Handle when the user leaves both the menu item and the popover content
  const handleMouseLeave = () => {
    setActiveItem(null);
  };

  const isActive = activeItem !== null;

  return (
    <nav className={`fixed flex justify-between items-center top-0 left-0 w-full h-[70px] bg-secondary tracking-[0.75px] z-50`}>
      <div className={`flex items-center ml-16`}>
        <h2 className={`${styles.whiteMedium} ${styles.montserratClass} text-[26px]`}>Explorer</h2>
        <ul className="flex items-center ml-16">
          {menuItems.map((item, index) => (
            <PopoverMenu
              key={index}
              className="ml-8"
              labelText={<Link href={item.href} className={`${styles.ralewayClass} ${styles.whiteMedium} text-md`}>{item.label}</Link>}
              setActive={() => handleMouseEnter(index)} // Activate on hover
              isActive={activeItem === index} // Check if active
            />
          ))}
        </ul>
      </div>

      <ul className={`${styles.flexCenter} mr-16 space-x-8 text-[16px] tracking-[0.75px]`}>
        <li className="relative group underline-expand-hover">
          <Link href="#" className={`${styles.whiteMedium} ${styles.ralewayClass}`}>Contact Us</Link>
          <span className="underline-expand bg-third"></span>
        </li>
        <li className="relative group underline-expand-hover">
          <Link href="#" className={`${styles.whiteMedium} ${styles.ralewayClass}`}>Login</Link>
          <span className="underline-expand bg-third"></span>
        </li>
      </ul>

      {/* Popover Content Component */}
      <PopoverContent
        isVisible={isActive}
        activeItem={activeItem}
        menuItems={menuItems}
        handlePopoverMouseLeave={handleMouseLeave}
      />
    </nav>
  );
};

export default Navbar;
