import React, { FC, JSX } from "react";
import classNames from "classnames";

import styles from "./Typography.module.css";
import { TypographyTag } from "@/components/types";


interface BaseTypographyProps {
  tag: TypographyTag;
  children: React.ReactNode;
  className?: string;
  onDark?: boolean;
}

interface BodyTypographyProps extends BaseTypographyProps {
  tag: "body";
  bold?: boolean;
}

type TypographyProps =
  | BodyTypographyProps
  | (BaseTypographyProps & { tag: Exclude<TypographyTag, "body"> });


const Typography: FC<TypographyProps> = ({
  ...props
}) => {
  const { tag, className, children } = props;
  const tagMap: Record<TypographyTag, keyof JSX.IntrinsicElements> = {
    H1: "h1",
    H2: "h2",
    H3: "h3",
    body: "div",
    ["body-mini"]: "div",
    quote: "blockquote",
    header: "div",
  };

  const Component = tagMap[tag];

  const classes = classNames(
    styles.typography,
    styles[`typography--${tag.toLowerCase()}`],
    {
      [styles["typography--bold"]]: tag === "body" && props?.bold,
    },
    className,
  );

  return (
    <Component
      className={classes}
    >
      {children}
    </Component>
  );

};

export default Typography;
