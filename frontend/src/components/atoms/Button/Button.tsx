import React from "react";
import cx from "classnames";

import Typography from "../typography/Typography";

import styles from "./Button.module.css";


interface ButtonProps {
  link: string;
  text: string;
  variant: "text" | "ghost";
  on: "onBrand" | "onLight";
  size: "L" | "M";
  isActive?: boolean;
  rounded?: boolean;
  wide?: boolean;
}

const Button: React.FC<ButtonProps> = ({ link, text, isActive, wide, variant = "onBrand", size = "M", on, rounded = false }) => {
  const classNames = cx(
    styles.button,
    styles[`${variant}Variant`],
    styles[on],
    styles[size],
    {
      [styles.rounded]: rounded,
      [styles.active]: isActive,
      [styles.wide]: wide,
    },
  );

  return (
    <a href={link} className={classNames}>
      <Typography tag="body">{text}</Typography>
    </a>
  );
};

export default Button;
