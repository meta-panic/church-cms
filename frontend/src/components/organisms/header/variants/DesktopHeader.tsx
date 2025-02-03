"use client";
import React from "react";

import Typography from "@/components/atoms/typography/Typography";

import cx from "classnames";
import ChurchLogo from "../../../../../public/church-logo.svg";

import { Navigation, DropdownItem, RegularItem } from "../_components/Navigation";
import { Contacts } from "@/components/molecules/Contacts/Contacts";
import { ExistingAnchors, ExistingUrls, NavItemDesktop } from "@/configuration/navigation";
import { useScroll } from "@/hooks/useScroll";

import styles from "./DesktopHeader.module.css";
import { HeaderStyleWrapper } from "../_components/HeaderStyleWrapper";
import { isPresentation } from "./utils";
import { HeaderType } from "./variants";
import { ContactsContext, ContactsContextType } from "../Header";


interface DesktopHeaderProps {
  navItems: NavItemDesktop[];
  handleNavigation: (href: ExistingUrls | ExistingAnchors) => void;
}

export const DesktopHeader: React.FC<DesktopHeaderProps> = ({
  navItems, handleNavigation,
}) => {
  const isPageScrolled = useScroll({ threshold: 38 });
  const headerType = isPageScrolled ? "slim" : "presentation";
  const contacts = React.useContext(ContactsContext) as ContactsContextType;

  return (
    <HeaderStyleWrapper headerType={headerType}>
      <div className={cx(styles.headerContent)}>

        {isPresentation(headerType) && <ChurchLogo className={cx(styles.churchLogo)} />}

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

        <div className={cx(styles.contacts)}>
          {contacts &&
            <Contacts {...contacts}
              renderIcon={({ defaultIcon }) => (<div className={cx(styles.navItem)}>{defaultIcon}</div>)}
            />
          }
        </div>

      </div>
    </HeaderStyleWrapper>
  );
};

const transformNavItems
  = (headerType: HeaderType, navItems: NavItemDesktop[]): (RegularItem | DropdownItem)[] => {
    return navItems.flatMap((item: NavItemDesktop) => {
      if (headerType === "slim" && item.hideOnScroll) {
        return [];
      }
      if (!("innerItems" in item)) {
        return {
          href: item.href!,
          text: item.text,
        } as RegularItem;
      }

      if (headerType === "slim") {
        return item.innerItems.map((i) => {

          return {
            href: i.href!,
            text: i.text,
          } as RegularItem;
        });
      }

      return {
        text: item.text,
        innerItems: item.innerItems.map(innerItem => ({
          href: innerItem.href!,
          text: innerItem.text,
        })),
      } as DropdownItem;
    });
  };
