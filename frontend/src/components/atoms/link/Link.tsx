import React, { FC, PropsWithChildren } from "react";
import NextLink from "next/link";
import classNames from "classnames";

import { TypographyTag } from "@/components/types";

import styles from "./Link.module.css";


type LinkProps = {
  to: string;
  target?: string;
  isExternal: boolean;
}

const Link: FC<PropsWithChildren<LinkProps> & { tag?: TypographyTag; }> = ({
  to,
  isExternal,
  target,
  children,
  tag = "body",
}) => {
  const classes = classNames(
    styles.link,
    styles[`link--${tag.toLowerCase()}`],
  );
  if (!isExternal) {
    return (
      <NextLink href={to} target={target || "_self"} >
        <span className={classes}>{children}</span>
      </NextLink>
    );
  }

  if (isExternal) {
    return (
      <a
        href={to}
        target={target || "_blank"}
        rel="noopener noreferrer"
      >
        <span className={classes}>{children}</span>
      </a>
    );
  }
};

export default Link;
