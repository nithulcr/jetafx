"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import AnimatedButton from "./AnimatedButton";
import MenuItem from "./MenuItem";
import Image from "next/image";


const navItems = [
  { href: "/", label: "Home" },
  { href: "/AboutUs", label: "About Us" },
  { href: "/Markets", label: "Markets" },
  { href: "/Platform", label: "Platform" },
  {
    href: "",
    label: "Tools",
    children: [
      { href: "/Tools/profit-calculator", label: "Profit Calculator" },
      { href: "/Tools/currency-convertor", label: "Currency Convertor" },
      { href: "/Tools/margin-calculator", label: "Margin Calculator" },
      { href: "/Tools/lot-size-calculator", label: "Lot Size Calculator" },
      { href: "/Tools/pip-calculator", label: "PIP Calculator" },
    ],
  },
  { href: "/Partnership", label: "Partnership" },
  { href: "/blogs", label: "Blog" },
  { href: "/ContactUs", label: "Contact us" },

];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [closing, setClosing] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showToolsSubMenu, setShowToolsSubMenu] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);
    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  const handleClose = () => {
    setClosing(true);
    setTimeout(() => {
      setOpen(false);
      setClosing(false);
      setShowToolsSubMenu(false);
    }, 800);
  };

  useEffect(() => {
    if (open) {
      document.body.classList.add("navbar-open");
    } else {
      document.body.classList.remove("navbar-open");
      setShowToolsSubMenu(false);
    }
    return () => {
      document.body.classList.remove("navbar-open");
    };
  }, [open]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const headerClass =
    "content-center w-full fixed top-0 left-0 z-50 transition-colors duration-300 bg-nav" +
    (scrolled ? " bg-nav-cover" : "");

  const handleToolsClick = () => {
    if (isMobile) {
      setShowToolsSubMenu(true);
    }
  };

  return (
    <header className={headerClass}>
      <div className="max-w-[1460px] z-99 h-[70px] lg:h-[90px] mx-auto flex items-center justify-between px-6 py-3 text-white z-10 relative">
        <div className="text-2xl font-bold">
          <Link href="/">
            <Image
              src="/logo.png"
              alt="logo"
              width={140}
              height={50}
              className="w-[100px] lg:w-[140px]"
            />
          </Link>
        </div>
        <div className="flex items-center gap-8">
          <nav className="hidden lg:flex gap-3">
            {navItems.map((item) => (
              <MenuItem
                key={item.href}
                href={item.href}
                label={item.label}
                active={pathname === item.href}
                // eslint-disable-next-line react/no-children-prop
                children={item.children}
                onClick={item.label === "Tools" ? handleToolsClick : undefined}
              />
            ))}
          </nav>
          <div className="lg:flex gap-4 hidden ">
            <AnimatedButton
              href=""
              label="Log in"
              className="w-fit white-btn"
            />
            <AnimatedButton href="" label="Sign up" className="w-fit" />
          </div>
        </div>
        <button onClick={open ? handleClose : () => setOpen(true)} className="lg:hidden">
          <div className="menu-icon">
            <span></span>
            <span></span>
          </div>
        </button>
      </div>
      <div className={`px-6 py-8 sidebar w-full bg-nav z-40 pt-20
        ${open ? "navbar-open-div" : ""}
        ${closing ? "navbar-closing" : ""}
      `}>
        {!showToolsSubMenu ? (
          <>
            {navItems.map((item) => (
              <MenuItem
                key={item.href}
                href={item.href}
                label={item.label}
                active={pathname === item.href}
                onClick={item.label === "Tools" ? handleToolsClick : undefined}
              />
            ))}
            <div className="flex gap-4 mt-8">
              <AnimatedButton
                href=""
                label="Log in"
                className="w-fit white-btn "
              />
              <AnimatedButton href="" label="Sign up" className="w-fit " />
            </div>
          </>
        ) : (
          <>
            <button
              onClick={() => setShowToolsSubMenu(false)}
              className="block px-2 fw-200 py-2 text-lg text-white hover:bg-gray-700 mb-4"
            >
               Back
            </button>
            {navItems.find(item => item.label === "Tools")?.children?.map((subItem) => (
              <MenuItem
                key={subItem.href}
                href={subItem.href}
                label={subItem.label}
                active={pathname === subItem.href}
              />
            ))}
          </>
        )}
      </div>
    </header>
  );
}
