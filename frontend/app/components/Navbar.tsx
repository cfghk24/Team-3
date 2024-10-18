"use client";

import { useState } from "react";
import Link from "next/link";
import PopoverMenu from "./Popover/PopoverMenu";
import PopoverContent from "./Popover/PopoverContent";
import styles from "@/style";
import Image from 'next/image';

const menuItems = [
  {
    label: "About",
    contentTitle: "About SPCA",
    href: "/Links/About",
    contentText: "Learn more about the SPCA, our mission, leadership, and the impact we strive to achieve.",
    buttonTitle: "Learn More",
    buttonUrl: "#",
    rightSectionItems: [
      { title: "Who We Are", description: "An introduction to the SPCA and our mission." },
      { title: "Trustee", description: "Meet the trustees who guide our organization." },
      { title: "Executive Committee", description: "An overview of our governing body and their roles." },
      { title: "Senior Leadership Team", description: "Key leaders driving the SPCA's initiatives." },
      { title: "Our Ambassadors", description: "Introducing the voices of the SPCA and their stories." },
      { title: "Annual Review", description: "A comprehensive report on SPCA's accomplishments." },
    ]
  },
  {
    label: "Services",
    contentTitle: "Services We Offer",
    href: "/Links/Services",
    contentText: "From animal welfare to adoption services, see how we serve the community.",
    buttonTitle: "Explore Services",
    buttonUrl: "#",
    rightSectionItems: [
      { title: "Animal Welfare", description: "Ensuring the well-being of all animals through education and advocacy." },
      { title: "Vet Services", description: "Professional veterinary care for your pets." },
      { title: "Adoption", description: "Help animals find their forever homes." },
      { title: "Outreach", description: "Community programs designed to spread awareness and engage the public." },
      { title: "Others", description: "Additional services and initiatives provided by the SPCA." },
    ]
  },
  {
    label: "Get Involved",
    contentTitle: "Ways to Get Involved",
    href: "/Links/GetInvolved",
    contentText: "Join our cause through donations, volunteering, or attending events.",
    buttonTitle: "Get Involved",
    buttonUrl: "#",
    rightSectionItems: [
      { title: "Make a Donation", description: "Support our work through financial contributions." },
      { title: "Events", description: "Participate in community events hosted by the SPCA." },
      { title: "Membership", description: "Become an SPCA member and enjoy exclusive benefits." },
      { title: "Volunteer", description: "Help out by offering your time as a volunteer." },
      { title: "Online Pet Care Courses", description: "Learn more about pet care through our online courses." },
    ]
  },
  {
    label: "Help & Advice",
    contentTitle: "Help & Advice for Pet Owners",
    href: "/Links/HelpAdvice",
    contentText: "Guidance on pet health, behavior, and more to help you care for your animals.",
    buttonTitle: "Get Advice",
    buttonUrl: "#",
    rightSectionItems: [
      { title: "Preventative Pet Health", description: "Vaccinations, deworming, and other preventative care tips." },
      { title: "Pawprint Magazine", description: "Insights, advice, and stories from SPCA's official magazine." },
      { title: "Which Pet Is For You?", description: "Helping you decide which pet fits your lifestyle." },
      { title: "Post-adoption Support", description: "Resources for after you adopt a pet." },
      { title: "Pet Loss Support", description: "Guidance and support for grieving pet owners." },
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
    <nav className={`fixed flex justify-between items-center top-0 left-0 w-full h-[70px] bg-white tracking-[0.75px] z-50`}>
      <div className={`flex items-center ml-8`}>
        {/* Logo section */}
        <Image 
          alt="Corporate Image"
          src="/image/spcaLogo.png" 
          width={180}
          height={180}
          className="z-10"
        />
      </div>
      <div className="flex items-center">
        {/* Menu items */}
        <ul className="flex items-center mr-32 space-x-12">
          {menuItems.map((item, index) => (
            <PopoverMenu
              key={index}
              className="ml-8"
              labelText={
                <Link href={item.href}>
                  <span className={`${styles.poppinsClass} ${styles.blackMedium} text-md cursor-pointer`}>
                    {item.label}
                  </span>
                </Link>
              }
              setActive={() => handleMouseEnter(index)} // Activate on hover
              isActive={activeItem === index} // Check if active
            />
          ))}
        </ul>
      </div>
      <ul className={`${styles.flexCenter} mr-16 space-x-12 text-[16px] tracking-[0.75px]`}>
        <li className="relative group underline-expand-hover">
          <Link href="#" className={`${styles.blackMedium} ${styles.poppinsClass}`}>Shop</Link>
          <span className="underline-expand bg-third"></span>
        </li>
        <li className="relative group underline-expand-hover">
          <Link href="#" className={`${styles.blackMedium} ${styles.poppinsClass}`}>Contact</Link>
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
