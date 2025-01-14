"use client";
import React from "react";
import cx from "classnames";

import Typography from "@/components/atoms/typography/Typography";
import BurgerIcon from "@/components/atoms/burgerIcon/BurgerIcon";

import styles from "./BurgerButton.module.css";


interface BurgerButtonProps {
  blockIs: "ligth" | "dark";
  isOpen: boolean;
  onToggle: () => void;
}

export const BurgerButton: React.FC<BurgerButtonProps> = ({ blockIs, isOpen, onToggle }) => {
  return (
    <div className={cx(styles.menuButtonContainer)} onClick={onToggle}>
      <div className={cx(
        styles.menuButtonLabel,
        { [styles.hidden]: isOpen },
      )}>
        <Typography tag="H3" blockIs={blockIs}>МЕНЮ</Typography>
      </div>

      <BurgerIcon
        blockIs={blockIs}
        isOpen={isOpen}
      />
    </div>
  );
};

