"use client";
import React from "react";
import cx from "classnames";
import { usePathname } from "next/navigation";

import type { NavItemDesktop, NavItemMobile } from "@/configuration/navigation";
import { BREAKPOINTS, useMediaQuery } from "@/hooks/useMediaQuery";
import { DesktopHeader } from "./variants/DesktopHeader";
import { MobileHeader } from "./variants/MobileHeader";
import ClientOnly from "./_components/ClientOnly";
import { isRootPath } from "@/utils/isRoot";

import styles from "./Header.module.css";


interface HeaderProps {
  navItemsDesktop: NavItemDesktop[];
  navItemsMobile: NavItemMobile[];
}

export const Header: React.FC<HeaderProps> = ({ navItemsDesktop, navItemsMobile }) => {
  const isDesktop = useMediaQuery(BREAKPOINTS.desktop);
  const pathname = usePathname();
  const isHomePage = isRootPath(pathname);
  const showDesktopVariant = isDesktop && isHomePage;

  return (
    <header className={cx(styles.headerWrapper)}>
      <ClientOnly>
        {showDesktopVariant && <DesktopHeader navItems={navItemsDesktop} />}
        {!showDesktopVariant && <MobileHeader navItems={navItemsMobile} />}
      </ClientOnly>
    </header>
  );
};
