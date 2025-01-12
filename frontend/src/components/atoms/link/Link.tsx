
import React, { FC, PropsWithChildren } from "react";
import NextLink from "next/link";
import classNames from "classnames";

import styles from "./Link.module.css";
import Typography from "../typography/Typography";
import { TypographyTag } from "@/components/types";

type LinkProps =
  | {
    to: string;
    href?: never;
    target?: string;
  }
  | {
    to?: never;
    href: string;
    target?: string;
  };

const Link: FC<PropsWithChildren<LinkProps> & { tag?: TypographyTag; }> = ({
  to,
  href,
  target,
  children,
  tag = "body",
}) => {
  const classes = classNames(
    styles.link,
    styles[`link--${tag.toLowerCase()}`],
  );
  if (to) {
    // Internal link using next/link
    return (
      <NextLink href={to} target={target || "_self"} >
        <Typography tag={tag || "body"}>
          <span className={classes}>{children}</span>
        </Typography>
      </NextLink>
    );
  }

  if (href) {
    // External link
    return (
      <a href={href} target={target || "_blank"} className={styles.link}>
        <Typography tag={tag || "body"}>
          <span className={classes}>{children}</span>
        </Typography>
      </a>
    );
  }
};

export default Link;