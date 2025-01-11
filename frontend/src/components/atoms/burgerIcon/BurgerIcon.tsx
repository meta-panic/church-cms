import React, { useState } from "react";
import styles from "./BurgerIcon.module.css";
import cx from "classnames";

interface BurgerIconProps {
  onClick: (isOpen: boolean) => void;
  blockIs?: "ligth" | "dark";
}

const BurgerIcon: React.FC<BurgerIconProps> = ({ onClick, ...props }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
    if (onClick) onClick(!isOpen);
  };

  return (
    <div
      className={cx(styles.burger, { [styles.open]: isOpen, "darkBlock": props.blockIs === "dark" })}
      onClick={toggleMenu}
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
