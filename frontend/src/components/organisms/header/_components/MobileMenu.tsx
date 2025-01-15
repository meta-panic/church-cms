"use client";
import React from "react";
import cx from "classnames";
import { RegularItem } from "../_components/Navigation";
import styles from "./MobileMenu.module.css"; // Ensure this CSS file is updated

interface MobileMenuProps {
  items: RegularItem[];
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ items, onClose, isOpen }) => {
  return (
    <div className={cx(styles.mobileMenu, { [styles.open]: isOpen })}>
      <div className={styles.overlay} onClick={onClose} />
      <nav className={styles.menuContent}>
        <ul>
          {items.map((item) => (
            <li key={item.href} onClick={onClose}>
              <a href={item.href} className={styles.menuItem}>
                {item.text}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default MobileMenu;
