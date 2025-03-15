"use client";
import React from "react";

import Typography from "@/components/atoms/typography/Typography";

import cx from "classnames";
import { usePathname } from "next/navigation";

import { root, isRootPath } from "@/utils/isRoot";
import { Navigation, DropdownItem, RegularItem } from "../_components/Navigation";
import { Contacts } from "@/components/molecules/Contacts/Contacts";
import { ExistingAnchors, ExistingUrls, NavItemDesktop } from "@/configuration/navigation";

import type { HeaderType } from "./variants";

import { ContactsContext, ContactsContextType } from "../Header";
import styles from "./DesktopHeader.module.css";
import { HeaderStyleWrapper } from "../_components/HeaderStyleWrapper";
import { isPresentation } from "./utils";
import ChurchLogo from "../../../../../public/church-logo.svg";


interface DesktopHeaderProps {
  navItems: NavItemDesktop[];
  handleNavigation: (href: ExistingUrls | ExistingAnchors) => void;
}

export const DesktopHeader: React.FC<DesktopHeaderProps> = ({
  navItems, handleNavigation,
}) => {
  const contacts = React.useContext(ContactsContext) as ContactsContextType;

  const isRoot = isRootPath(usePathname());
  return (
    <HeaderStyleWrapper renderChildren={(headerType) => {
      return <div className={cx(styles.headerContent)}>

        {isPresentation(headerType) && <ChurchLogo className={cx(styles.churchLogo)} />}

        <Navigation
          items={transformNavItems(headerType, navItems, isRoot)}
          handleNavigation={handleNavigation}
          renderItem={(text) => {
            return <Typography
              tag="body"
              overideFont={{ fontFamily: "headlines", fontWeight: "semi-bold" }}
              className={styles.navItem}
            >
              {text}
            </Typography>;
          }}
        />

        <div className={cx(styles.contacts)}>
          {contacts &&
            <Contacts {...contacts}
              renderIcon={({ defaultIcon }) => (<div className={cx(styles.navItem)}>{defaultIcon}</div>)}
            />
          }
        </div>

      </div>;
    }}>

    </HeaderStyleWrapper>
  );
};

const transformNavItems
  = (headerType: HeaderType, navItems: NavItemDesktop[], isRoot: boolean): (RegularItem | DropdownItem)[] => {

    const items = navItems.flatMap((item: NavItemDesktop) => {
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

    const toMainItem: RegularItem = { href: root, text: "Главная" };
    const menuItems = isRoot ? [...items] : [toMainItem, ...items];

    return menuItems;
  };
