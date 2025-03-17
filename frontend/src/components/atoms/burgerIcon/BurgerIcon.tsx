import React from "react";

import cx from "classnames";

import styles from "./BurgerIcon.module.css";


interface BurgerIconProps {
  isOpen: boolean;
}

const BurgerIcon: React.FC<BurgerIconProps> = ({ isOpen }) => {
  return (
    <div
      className={cx(styles.burger, { [styles.open]: isOpen })}
      aria-label={isOpen ? "Close Menu" : "Open Menu"}
      tabIndex={-1}
      role="button"
    >
      <div className={cx(styles["burger-line"], [styles.line1])} />
      <div className={cx(styles["burger-line"], [styles.line2])} />
      <div className={cx(styles["burger-line"], [styles.line3])} />
    </div>
  );
};

export default BurgerIcon;
