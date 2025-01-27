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


export type ContactsContextType = {
  taplink: string;
  telegram: string;
  vk: string;
  youtube: string;
  whatsup: string;
}

export const ContactsContext = React.createContext<ContactsContextType | undefined>(undefined);

interface HeaderProps {
  navItemsDesktop: NavItemDesktop[];
  navItemsMobile: NavItemMobile[];
  contacts?: ContactsContextType;
}

export const Header: React.FC<HeaderProps> = ({ navItemsDesktop, navItemsMobile, contacts }) => {
  const isDesktop = useMediaQuery([BREAKPOINTS.desktop]);
  const pathname = usePathname();
  const isHomePage = isRootPath(pathname);
  const showDesktopVariant = isDesktop && isHomePage;

  return (
    <header className={cx(styles.headerWrapper)}>
      <ContactsContext.Provider value={contacts}>
        <ClientOnly>
          {showDesktopVariant && <DesktopHeader navItems={navItemsDesktop} />}
          {!showDesktopVariant && <MobileHeader navItems={navItemsMobile} />}
        </ClientOnly>
      </ContactsContext.Provider>
    </header>
  );
};
