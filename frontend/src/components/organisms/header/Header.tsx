"use client";
import React, { useEffect, useState } from "react";
import styles from "./Header.module.css";

import cx from "classnames";
import { usePathname } from "next/navigation";
import { PresentationHeader } from "./PresentationHeader";
import { NavItem, SlimHeader } from "./SlimHeader";

interface HeaderProps {
  className?: string;
  navItems: NavItem[]
}



export const Header: React.FC<HeaderProps> = ({ navItems }) => {
  const [isPageScrolled, setIsPageScrolled] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", windowScroll);
    }
    window.scrollTo(0, 0);
  }, []);

  function windowScroll() {
    setIsPageScrolled(document.body.scrollTop >= 38 || document.documentElement.scrollTop >= 38);
  }
  const pathname = usePathname();

  return (
    <header className={cx(styles.headerWrapper, { [styles.sticky]: isPageScrolled })}>
      {isPageScrolled || pathname !== "/"
        ? <SlimHeader navItems={navItems} />
        : <PresentationHeader navItems={navItems} />
      }
    </header >
  );
};
