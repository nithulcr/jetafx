import { useHoverTransform } from "./useHoverTransform";
import Link from "next/link";
import React from "react";

// Type definition for MenuItem props
type MenuItemProps = {
  href: string;
  label: string;
  active: boolean;
};

const MenuItem: React.FC<MenuItemProps> = ({ href, label, active }) => {
  const { textRef, parentRef } = useHoverTransform();

  return (
    <div ref={parentRef} className="relative  px-2 py-1 cursor-pointer">
      <Link href={href} className={`text-md menu ${active ? "active-menu" : ""}`}>
        <span ref={textRef} className="inline-block transition-transform duration-200">{label}</span>
      </Link>
    </div>
  );
};

export default MenuItem;
