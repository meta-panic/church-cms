"use client";
import React, { useCallback, useEffect, useState } from "react";

import cx from "classnames";

import { NavItemMobile } from "@/configuration/navigation";
import { useScroll } from "@/hooks/useScroll";

import styles from "./MobileHeader.module.css";
import { BurgerButton } from "@/components/molecules/BurgerButton/BurgerButton";
import { isPresentation } from "./utils";
import ChurchLogo from "../../../../../public/church-logo.svg";
import { HeaderStyleWrapper } from "./HeaderStyleWrapper";
import { Navigation, RegularItem } from "../_components/Navigation";
import Typography from "@/components/atoms/typography/Typography";
import { HeaderType } from "./variants";
import { BREAKPOINTS, useMediaQuery } from "@/hooks/useMediaQuery";
import { Contacts } from "@/components/molecules/Contacts/Contacts";
import MobileMenu from "../_components/MobileMenu";


interface MobileHeaderProps {
  navItems: NavItemMobile[];
}

export const MobileHeader: React.FC<MobileHeaderProps> = ({
  navItems,
}) => {
  const isPageScrolled = useScroll({ threshold: 38 });
  const headerType = isPageScrolled ? "slim" : "presentation";
  const isTablet = useMediaQuery(BREAKPOINTS.tablet);
  const showContacts = isTablet && headerType === "slim";
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleToggleMenu = useCallback(() => {
    setIsMobileMenuOpen(prev => !prev);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.classList.add("fullPopupOpen");
    } else {
      document.body.classList.remove("fullPopupOpen");
    }

    return () => {
      document.body.classList.remove("fullPopupOpen");
    };
  }, [isMobileMenuOpen]);

  return (
    <HeaderStyleWrapper headerType={headerType}>
      <div className={cx(styles.headerContent)}>

        {isPresentation(headerType) && <ChurchLogo className={cx(styles.churchLogo)} />}

        {showContacts && <div className={cx(styles.contacts)} >
          <Contacts
            instagram={"https://www.instagram.com/"}
            telegram={""}
            vk={""}
            youtube={""}
            renderIcon={(logo) => (<div className={cx(styles.navItem)}>{logo}</div>)}
          />
        </div>}

        <Navigation
          items={transformNavItems(headerType, navItems)}
          renderItem={(text) => {
            return <Typography
              tag="body"
              className={styles.navItem}
            >
              {text}
            </Typography>;
          }} />

        <div className={
          cx(styles.burgerWrapper, {
            [`lightBlock ${styles.burgerOverlay}`]: isMobileMenuOpen,
          })}>
          <div style={{ zIndex: 101 }}>
            <BurgerButton
              isOpen={isMobileMenuOpen}
              onToggle={handleToggleMenu}
              blockIs={isMobileMenuOpen ? "ligth" : "dark"}
            />
          </div>
          {isMobileMenuOpen && <MobileMenu
            items={navItems}
            onClose={function (): void {
              throw new Error("Function not implemented.");
            }}
            isOpen={isMobileMenuOpen}
          />}

        </div>
      </div>
    </HeaderStyleWrapper>
  );
};


const transformNavItems
  = (headerType: HeaderType, navItems: NavItemMobile[]): (RegularItem)[] => {
    return navItems.flatMap((nav: NavItemMobile) => {
      if (headerType === "presentation") {
        return [];
      }

      if (nav.showInPopup) {
        return [];
      }

      return {
        href: nav.href,
        text: nav.text,
      } as RegularItem;
    });
  };