import React from "react";
import styles from "./BurgerIcon.module.css";
import cx from "classnames";

interface BurgerIconProps {
  isOpen: boolean;
}

const BurgerIcon: React.FC<BurgerIconProps> = ({ isOpen }) => {
  return (
    <div
      className={cx(styles.burger, { [styles.open]: isOpen })}
      aria-label={isOpen ? "Close Menu" : "Open Menu"}
      tabIndex={0}
    >
      <div className={cx(styles["burger-line"], [styles.line1])} />
      <div className={cx(styles["burger-line"], [styles.line2])} />
      <div className={cx(styles["burger-line"], [styles.line3])} />
    </div>
  );
};

export default BurgerIcon;
