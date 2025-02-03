"use client";
import React from "react";

import cx from "classnames";

import { ExistingAnchors, ExistingUrls, NavItemMobile } from "@/configuration/navigation";
import { useScroll } from "@/hooks/useScroll";

import styles from "./MobileHeader.module.css";
import { BurgerButton } from "@/components/molecules/BurgerButton/BurgerButton";
import { isPresentation } from "./utils";
import ChurchLogo from "../../../../../public/church-logo.svg";
import { HeaderStyleWrapper } from "../_components/HeaderStyleWrapper";
import { Navigation, RegularItem } from "../_components/Navigation";
import Typography from "@/components/atoms/typography/Typography";
import { HeaderType } from "./variants";
import { BREAKPOINTS, useMediaQuery } from "@/hooks/useMediaQuery";
import { Contacts } from "@/components/molecules/Contacts/Contacts";
import WithMobileMenu from "../_components/WithMobileMenu";
import { ContactsContext, ContactsContextType } from "../Header";


interface MobileHeaderProps {
  navItems: NavItemMobile[];
  handleNavigation: (href: ExistingUrls | ExistingAnchors) => void;
}

export const MobileHeader: React.FC<MobileHeaderProps> = ({
  navItems, handleNavigation,
}) => {
  const isPageScrolled = useScroll({ threshold: 38 });
  const headerType = isPageScrolled ? "slim" : "presentation";
  const isTablet = useMediaQuery([BREAKPOINTS.tablet]);
  const showContacts = isTablet && headerType === "slim";
  const contacts = React.useContext(ContactsContext) as ContactsContextType;


  return (
    <HeaderStyleWrapper headerType={headerType}>
      <div className={cx(styles.headerContent)}>

        {isPresentation(headerType) && <ChurchLogo className={cx(styles.churchLogo)} />}

        {showContacts && <div className={cx(styles.contacts)}>
          {contacts && <Contacts {...contacts}
            renderIcon={({ defaultIcon }) => (<div className={cx(styles.navItem)}>{defaultIcon}</div>)}
          />
          }
        </div>}

        <Navigation
          items={transformNavItems(headerType, navItems)}
          handleNavigation={handleNavigation}
          renderItem={(text) => {
            return <Typography
              tag="body"
              className={styles.navItem}
            >
              {text}
            </Typography>;
          }} />

        <WithMobileMenu
          items={navItems}
          handleNavigation={handleNavigation}
          renderButtonComponent={({ isOpen }) => {
            return (
              <div className={
                cx(styles.burgerWrapper, {
                  [`lightBlock ${styles.burgerOverlay}`]: isOpen,
                })}>
                <BurgerButton
                  isOpen={isOpen}
                  onToggle={() => { }}
                />
              </div>
            );
          }}
        />

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
