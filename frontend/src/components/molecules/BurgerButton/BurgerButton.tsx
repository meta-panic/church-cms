"use client";
import React from "react";
import cx from "classnames";

import Typography from "@/components/atoms/typography/Typography";
import BurgerIcon from "@/components/atoms/burgerIcon/BurgerIcon";

import styles from "./BurgerButton.module.css";


interface BurgerButtonProps {
  isOpen: boolean;
  onToggle?: () => void;
}

export const BurgerButton: React.FC<BurgerButtonProps> = ({ isOpen, onToggle }) => {
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
        <Typography tag="H3">МЕНЮ</Typography>
      </div>

      <BurgerIcon isOpen={isOpen} />
    </div>
  );
};

