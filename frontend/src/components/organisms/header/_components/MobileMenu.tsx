"use client";
import React from "react";
import cx from "classnames";
import Link from "next/link";

import { hasAnchor } from "@/utils/parseUrl";
import { RegularItem } from "../_components/Navigation";
import Typography from "@/components/atoms/typography/Typography";

import styles from "./MobileMenu.module.css";

interface MobileMenuProps {
  items: RegularItem[];
  isOpen: boolean;
  onClose: () => void;
  onClick: (item: RegularItem) => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ items, isOpen, onClose, onClick }) => {
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
        <ul>
          {items.map((item) => (
            <li key={item.href}>
              <Link
                onClick={() => onClick(item)}
                key={item.href || item.text}
                href={item.href}
                className={cx(styles.item, styles.menuItem)}
                scroll={!hasAnchor(item.href)}
              >
                <Typography tag="H2">{item.text}</Typography>
              </Link>
            </li>
          ))}
          <li className={styles.item}><Typography tag="H2">†</Typography></li>
        </ul>
      </nav>

    </div>
  );
};

export default MobileMenu;
