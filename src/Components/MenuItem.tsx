import { useHoverTransform } from "./useHoverTransform";
import Link from "next/link";
import React, { useState } from "react";

// Type definition for MenuItem props
type MenuItemProps = {
  href: string;
  label: string;
  active: boolean;
  children?: {
    href: string;
    label: string;
  }[];
  onClick?: () => void;
};

const MenuItem: React.FC<MenuItemProps> = ({ href, label, active, children, onClick }) => {
  const { textRef, parentRef } = useHoverTransform();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleMouseEnter = () => {
    if (children) {
      setIsDropdownOpen(true);
    }
  };

  const handleMouseLeave = () => {
    if (children) {
      setIsDropdownOpen(false);
    }
  };

  return (
    <div
      ref={parentRef}
      className="relative px-2 py-1 cursor-pointer"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
    >
      <Link href={href} className={`text-md menu ${active ? "active-menu" : ""}`}>
        <span ref={textRef} className="inline-block transition-transform duration-200 menu-item">
          {label}
        </span>
      </Link>
      {children && isDropdownOpen && (
        <div className="absolute left-0 top-full  w-48 z-50">
          <div className="bg-black shadow-lg rounded-md mt-5 py-4">
          {children.map((childItem) => (
            <Link
              key={childItem.href}
              href={childItem.href}
              className="block px-6 py-2 text-sm text-white hover:bg-[var(--blue)]"
            >
              {childItem.label}
            </Link>
          ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default MenuItem;
