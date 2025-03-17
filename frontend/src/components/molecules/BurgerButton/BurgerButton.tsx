"use client";
import React from "react";
import cx from "classnames";

import BurgerIcon from "@/components/atoms/burgerIcon/BurgerIcon";
import MenuTextIcon from "./MenuTextIcon.svg";

import styles from "./BurgerButton.module.css";


interface BurgerButtonProps {
  isOpen: boolean;
  onToggle?: () => void;
  hideTitle?: boolean;
}

export const BurgerButton: React.FC<BurgerButtonProps> = ({ isOpen, onToggle, hideTitle = false }) => {
  return (
    <div
      role="button"
      onKeyDown={(e) => {
        if (!onToggle) {
          return;
        }
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onToggle();
        }
      }}
      tabIndex={0}
      className={cx(styles.menuButtonContainer)}
      onClick={onToggle}
    >
      <div className={cx(
        styles.menuButtonLabel,
        { [styles.hidden]: isOpen },
      )}>
        {!hideTitle &&
          <div className={styles.menuTextContainer}>
            <MenuTextIcon />
          </div>
        }
      </div>

      <BurgerIcon isOpen={isOpen} />
    </div>
  );
};
