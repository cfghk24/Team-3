"use client";
import styles from "@/style";
import Link from "next/link";

interface PopoverContentProps {
  isVisible: boolean;
  activeItem: number | null;
  menuItems: Array<{ 
    contentTitle: string; 
    contentText: string; 
    buttonTitle?: string; 
    buttonUrl?: string; 
    rightSectionItems?: Array<{ title: string; description: string }> 
  }>;
  handlePopoverMouseLeave: () => void;
}

const PopoverContent: React.FC<PopoverContentProps> = ({
  isVisible,
  activeItem,
  menuItems,
  handlePopoverMouseLeave,
}) => {
  return (
    <div
      onMouseLeave={handlePopoverMouseLeave}
      className={`popover-panel fixed left-0 right-0 top-[70px] bg-third
        ${isVisible ? 'popover-open' : 'popover-close'}`}
    >
      <div className="flex w-full h-full">
        {/* Left section */}
        <div
          className={`${styles.montserratClass} ${styles.flexStart} w-[35%] h-full flex-col p-12 popover-content
          transition-all duration-500 ease-in-out ${isVisible ? 'content-open' : 'content-close'}`}>
          {activeItem !== null && (
            <>
              <h2 className={`${styles.whiteSemibold} text-3xl tracking-[0.25px] mb-4`}>
                {menuItems[activeItem].contentTitle}
              </h2>
              <p className={`${styles.whiteNormal} text-lg tracking-[0.1px] w-[75%] mb-4`}>
                {menuItems[activeItem].contentText}
              </p>
              {menuItems[activeItem].buttonUrl && menuItems[activeItem].buttonTitle && (
                <Link href={menuItems[activeItem].buttonUrl}>
                  <button className={`${styles.whiteSemibold} text-md tracking-[1.5px] py-3 px-6 rounded-md bg-[#1C3E78]`}>
                    {menuItems[activeItem].buttonTitle}
                  </button>
                </Link>
              )}
            </>
          )}
        </div>

        {/* Right section */}
        <div
          className={`${styles.flexStart} ${styles.montserratClass} flex-col w-[65%] p-12 bg-bg_secondary popover-content
          ${isVisible ? 'content-open' : 'content-close'}`}>
          {activeItem !== null && (
            <div className="grid grid-cols-3 gap-x-10 gap-y-8">
              {menuItems[activeItem].rightSectionItems?.map((item, index) => (
                <div key={index} className="space-y-2">
                  <div className="text-lg tracking-[0.25px] text-secondary_light font-semibold">
                    {item.title}
                    <span className="ml-2 text-secondary_light">
                    </span>
                  </div>
                  <p className="text-sm tracking-[0.1px] text-main_black">{item.description}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PopoverContent;
