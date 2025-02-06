"use client";
import React from "react";
import cx from "classnames";

import { useMediaQuery, BREAKPOINTS } from "@/hooks/useMediaQuery";
import ClientOnly from "@/components/organisms/header/_components/ClientOnly";
import Typography from "../typography/Typography";

import styles from "./Button.module.css";
import ButtonSkeleton from "./ButtonSkeleton";


type ButtonProps = {
  text: string;
  variant: "text" | "ghost" | "default";
  on: "onBrand" | "onLight";
  size: "L" | "M";
  isActive?: boolean;
  rounded?: boolean;
  wide?: boolean;
} & ({ link: string; onClick?: never; } | { link?: never; onClick: () => void })

// Create a client-side only button component
const ButtonContent: React.FC<ButtonProps> = ({
  link,
  text,
  isActive,
  wide,
  variant,
  size,
  on,
  onClick,
  rounded,
}) => {
  const isSmall = useMediaQuery([BREAKPOINTS.mobile, BREAKPOINTS.tabletMin]);

  const classNames = cx(
    styles.button,
    styles[`${variant}Variant`],
    styles[on],
    styles[size],
    {
      [styles.rounded]: rounded,
      [styles.active]: isActive,
      [styles.wide]: wide ?? isSmall,
    },
  );

  if (onClick) {
    return (
      <button onClick={onClick} className={classNames}>
        <Typography tag="body">{text}</Typography>
      </button>
    );
  }

  return (
    <a href={link} className={classNames}>
      <Typography tag="body">{text}</Typography>
    </a>
  );
};

// Main button component that handles client/server rendering
const Button: React.FC<ButtonProps> = (props) => {
  return (
    <ClientOnly fallback={<ButtonSkeleton {...props} />}>
      <ButtonContent {...props} />
    </ClientOnly>
  );
};

export default Button;
