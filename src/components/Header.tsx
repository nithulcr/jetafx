"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import AnimatedButton from "./AnimatedButton";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/AboutUs", label: "About Us" },
  { href: "/Forex", label: "Forex" },
  { href: "/Platform", label: "Platform" },
  { href: "/Tools", label: "Tools" },
  { href: "/Partnership", label: "Partnership" },
  { href: "/Blog", label: "Blog" },
  { href: "/ContactUs", label: "Contact Us" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [closing, setClosing] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const handleClose = () => {
    setClosing(true);
    setTimeout(() => {
      setOpen(false);
      setClosing(false);
    }, 800); // 800ms for link hide, then blur animates
  };

  // Toggle class on body when navbar is opened/closed
  useEffect(() => {
    if (open) {
      document.body.classList.add("navbar-open");
    } else {
      document.body.classList.remove("navbar-open");
    }
    return () => {
      document.body.classList.remove("navbar-open");
    };
  }, [open]);

  // Add header scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const headerClass =
    "content-center  w-full fixed top-0 left-0 z-50 transition-colors duration-300 bg-nav" +
    (scrolled ? " bg-nav-cover" : "");

  return (
    <header className={headerClass}>
      <div className="max-w-[1460px] h-[70px] lg:h-[90px] mx-auto flex items-center justify-between px-6 py-3 text-white z-10 relative">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <Link href="/">
            <img
              src="/logo.png"
              alt="Logo"
              width={140}
              height={50}
              className="w-[100px] lg:w-[140px]"
            />
          </Link>
        </div>
        {/* Desktop Menu */}
        <div className="flex items-center gap-8">
          <nav className="hidden lg:flex gap-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`relative text-md menu ${pathname === item.href ? "active-menu" : ""
                  }`}
              >
                {item.label}
              </Link>
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
        {/* Mobile Menu Button */}
        <button onClick={open ? handleClose : () => setOpen(true)} className="lg:hidden">
          <div className="menu-icon">
            <span></span>
            <span></span>
          </div>
        </button>
      </div>
      {/* Mobile Dropdown */}
     
        <div className={`px-6 py-8 sidebar w-full bg-nav z-40
    ${open ? "navbar-open-div" : ""}
    ${closing ? "navbar-closing" : ""}
  `}>
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}

              className={`relative block text-lg my-2 menu ${pathname === item.href ? "active-menu" : ""
                }`}
            >
              {item.label}
            </Link>
          ))}
          <div className="flex gap-4 mt-8">
            <AnimatedButton
              href=""
              label="Log in"
              className="w-fit white-btn"
            />
            <AnimatedButton href="" label="Sign up" className="w-fit" />
          </div>
        </div>
     
    </header>
  );
}
