"use client";
import React, { useCallback } from "react";
import cx from "classnames";
import { usePathname, useRouter } from "next/navigation";
import { hasAnchor } from "@/utils/parseUrl";

import { isRootPath } from "@/utils/isRoot";

import { BREAKPOINTS, useMediaQuery } from "@/hooks/useMediaQuery";
import { DesktopHeader } from "./variants/DesktopHeader";
import { MobileHeader } from "./variants/MobileHeader";
import ClientOnly from "./_components/ClientOnly";
import useInitialAnchorScroll from "./_components/useInitialAnchorScroll";

import type {
  ExistingAnchors,
  ExistingUrls,
  NavItemDesktop,
  NavItemMobile,
} from "@/configuration/navigation";

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

  const router = useRouter();
  useInitialAnchorScroll();
  const handleNavigation = useCallback((href: ExistingUrls | ExistingAnchors) => {
    if (!hasAnchor(href)) {
      router.push(href);
      return;
    }
    const anchor = href.split("#")[1];

    const element = document.querySelector(`#${anchor}`);
    if (element) {
      requestAnimationFrame(() => {
        element.scrollIntoView({ behavior: "smooth" });
      });

      // Different page: navigate to the new URL
      requestAnimationFrame(() => {
        router.push(href, { scroll: true });
      });
    }
  }, [router]);

  return (
    <header className={cx(styles.headerWrapper)}>
      <ContactsContext.Provider value={contacts}>
        <ClientOnly>
          {showDesktopVariant && <DesktopHeader handleNavigation={handleNavigation} navItems={navItemsDesktop} />}
          {!showDesktopVariant && <MobileHeader handleNavigation={handleNavigation} navItems={navItemsMobile} />}
        </ClientOnly>
      </ContactsContext.Provider>
    </header>
  );
};
