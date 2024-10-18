"use client";

import { useRef } from "react";
import cn from "classnames";

interface PopoverMenuProps {
  className?: string;
  labelText: React.ReactNode;
  setActive: () => void;
  isActive: boolean;
}

const PopoverMenu: React.FC<PopoverMenuProps> = ({
  className,
  labelText,
  setActive,
  isActive,
}) => {
  const triggerRef = useRef<HTMLButtonElement | null>(null);

  return (
    <div
      onMouseEnter={setActive}
      className={cn("relative group", className)}
    >
      <button ref={triggerRef} className="popover-trigger underline-expand-hover outline-none z-20">
        {labelText}
        <span className="underline-expand bg-third"></span>
      </button>
    </div>
  );
};

export default PopoverMenu;
