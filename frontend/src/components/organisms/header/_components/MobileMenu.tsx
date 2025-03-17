"use client";
import React from "react";
import cx from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { hasAnchor } from "@/utils/parseUrl";
import Typography from "@/components/atoms/typography/Typography";
import { isRootPath, root } from "@/utils/isRoot";

import { RegularItem } from "../_components/Navigation";

import styles from "./MobileMenu.module.css";

interface MobileMenuProps {
  items: RegularItem[];
  isOpen: boolean;
  onClose: () => void;
  onClick: (item: RegularItem) => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ items, isOpen, onClose, onClick }) => {

  const toMainItem: RegularItem = { href: root, text: "Главная" };
  const menuItems = isRootPath(usePathname()) ? [...items] : [toMainItem, ...items];

  return (
    <div className={cx(styles.mobileMenu, { [styles.open]: isOpen })}>
      <div className={styles.overlay} onClick={onClose} onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onClose();
        }
      }}
        tabIndex={0}
        role="button"
        aria-label="Close menu"
      />

      <nav className={styles.menuContent}>
        <ul className={styles.menuList}>
          {menuItems.map((item) => (
            <li key={item.href}>
              <Link
                onClick={() => onClick(item)}
                key={item.href || item.text}
                href={item.href}
                className={cx(styles.item, styles.menuItem)}
                scroll={!hasAnchor(item.href)}
              >
                <Typography tag="H2" overideFont={{ fontFamily: "headlines", fontWeight: "bold" }}>{item.text}</Typography>
              </Link>
            </li>
          ))}
          <li className={cx(styles.decorativeItem, styles.item)}><Typography tag="H2" overideFont={{ fontWeight: "semi-bold" }}>†</Typography></li>
        </ul>
      </nav>

    </div>
  );
};

export default MobileMenu;
