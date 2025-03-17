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
} & ({ link: string; isExternal: boolean; onClick?: never; } | { link?: never; isExternal?: never; onClick: () => void })

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
  isExternal,
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
        <Typography tag="body" overideFont={{ fontWeight: "semi-bold" }}>{text}</Typography>
      </button>
    );
  }

  if (!isExternal) {
    return (
      <a href={link} target={"_self"} className={classNames}>
        <Typography tag="body" overideFont={{ fontWeight: "semi-bold" }}>{text}</Typography>
      </a>
    );
  }

  if (isExternal) {
    return (
      <a target={"_blank"}
        rel="noopener noreferrer" href={link} className={classNames}>
        <Typography overideFont={{ fontWeight: "semi-bold" }} tag="body">{text}</Typography>
      </a>
    );
  };
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

