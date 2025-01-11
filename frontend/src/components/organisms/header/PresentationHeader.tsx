"use client";
import React from "react";
import styles from "./PresentationHeader.module.css";
import commonStyles from "./Header.module.css";

import Typography from "@/components/atoms/typography/Typography";

import cx from "classnames";
import ChurchLogo from "../../../../public/church-logo.svg";

import { Navigation } from "./Navigation";
import { Contacts } from "@/components/molecules/Contacts/Contacts";
import Section from "@/components/atoms/section/Section";
import { NavItem } from ".";
import BurgerIcon from "@/components/atoms/burgerIcon/BurgerIcon";


interface HeaderProps {
  navItems: NavItem[];
  className?: string;
}

export const PresentationHeader: React.FC<HeaderProps> = ({ navItems }) => {

  const handleMenuToggle = (isOpen: boolean) => {
    console.log("Menu is now", isOpen ? "open" : "closed");
  };
  return (
    <Section>
      <div style={{ position: "relative" }}>
        <div className={styles.presentationHeader}>
          <ChurchLogo className={cx(styles.churchLogo)} />

          <div className={cx(commonStyles.notDesktop, styles.menuButtonContainer)}>
            <Typography tag="H3" blockIs="dark">МЕНЮ</Typography>
            <BurgerIcon blockIs="dark" onClick={handleMenuToggle} />
          </div>

          <div className={commonStyles.onlyDesktop}>
            <Navigation
              itemsInfo={navItems}
              renderItem={(text) => (
                <Typography
                  tag="body"
                  className={styles.navigatonItem}
                  blockIs={"dark"}
                >
                  {text}
                </Typography>
              )}
            />
          </div>

          <div className={cx(styles.contacts, commonStyles.onlyDesktop)}>
            <Contacts
              instagram={"https://www.instagram.com/"}
              telegram={""}
              vk={""}
              youtube={""}
              renderIcon={(logo) => (<div className={cx(styles.navigatonItem)}>{logo}</div>)}
            />
          </div>
        </div>
      </div>
    </Section >
  );
};


