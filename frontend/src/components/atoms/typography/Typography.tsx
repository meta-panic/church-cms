import React, { FC, JSX } from "react";
import classNames from "classnames";

import { BlockColorProvider } from './ColorBlock/ColorBlock';
import styles from "./Typography.module.css";
import { TypographyTag } from "@/components/types";


interface BaseTypographyProps {
  tag: TypographyTag;
  children: React.ReactNode;
  className?: string;
  isColoredBlock?: boolean;
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
  const { tag, className } = props;
  const tagMap: Record<TypographyTag, keyof JSX.IntrinsicElements> = {
    H1: "h1",
    H2: "h2",
    H3: "h3",
    body: "div",
    ["body-mini"]: "div",
    quote: "blockquote",
    header: "div",
  };


  const classes = classNames(
    styles.typography,
    styles[`typography--${tag.toLowerCase()}`],
    {
      [styles["typography--bold"]]: tag === "body" && props?.bold,
    },
    className,
  );

  const Tag = tagMap[tag];
  const Component = () => (<Tag className={classes}>{props.children}</Tag >);

  if (props.isColoredBlock) {
    return <BlockColorProvider blockColor={"dark"}><Component /></BlockColorProvider>;
  }

  return <Component />;
};

export default Typography;
