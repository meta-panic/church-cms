import React, { FC, PropsWithChildren } from "react";
import NextLink from "next/link";
import classNames from "classnames";

import { TypographyTag } from "@/components/types";
import Typography from "@/components/atoms/typography/Typography";

import ExternalIcon from "./ExternalLinkIcon.svg";

import styles from "./Link.module.css";


type LinkProps = {
  to: string;
  target?: string;
  isExternal: boolean;
};

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
      <Typography className={styles.linkTypographyContainer} tag={tag}>
        <NextLink href={to} target={target || "_self"} className={styles.linkContainer}>
          <span className={classes}>{children}</span>
        </NextLink>
      </Typography>

    );
  }

  if (isExternal) {
    return (
      <Typography className={styles.linkTypographyContainer} tag={tag}>
        <a
          href={to}
          target={target || "_blank"}
          rel="noopener noreferrer"
          className={styles.linkContainer}
        >
          <span style={{ whiteSpace: "nowrap" }} className={classes}>
            <span style={{ whiteSpace: "break-spaces" }}>
              {children}
              <span style={{ whiteSpace: "nowrap" }}>
                &nbsp;<ExternalIcon className={styles.externalIcon} />
              </span>
            </span>
          </span>
        </a>
      </Typography>
    );
  }
};

export default Link;
