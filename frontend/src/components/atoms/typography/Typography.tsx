import React, { FC, JSX } from "react";
import classNames from "classnames";

import { FontFamily, FontWeightType, TagStyle, TypographyTag } from "@/components/types";

import styles from "./Typography.module.css";


export interface BaseTypographyProps {
  tag: TypographyTag;
  children: React.ReactNode;
  className?: string;
  overideFont?: {
    fontFamily?: FontFamily;
    fontWeight?: FontWeightType;
  }
}

type TypographyProps = BaseTypographyProps;
const Typography: FC<TypographyProps> = ({
  ...props
}) => {
  const { tag, className, overideFont } = props;
  const tagMap: Record<TypographyTag, keyof JSX.IntrinsicElements> = {
    H1: "h1",
    H2: "h2",
    H3: "h3",
    body: "div",
    ["body-mini"]: "div",
  };

  const defaultFont = tagMapStyle[tag];

  const fontStyle = { ...defaultFont, ...overideFont };

  const classes = classNames(
    styles.typography,
    styles[`typography--${tag.toLowerCase()}`],
    styles[`font--${fontStyle.fontFamily}`],
    styles[`typography--${fontStyle.fontWeight}`],
    className,
  );

  const Tag = tagMap[tag];
  const Component = (props: TypographyProps) => (<Tag className={classes}>{props.children}</Tag >);

  return <Component {...props} />;
};

export default Typography;


const tagMapStyle: Record<TypographyTag, TagStyle> = {
  H1: {
    fontFamily: "headlines",
    fontWeight: "heavy-bold",
  },
  H2: {
    fontFamily: "body-text",
    fontWeight: "extra-bold",
  },
  H3: {
    fontFamily: "headlines",
    fontWeight: "bold",
  },
  body: {
    fontFamily: "body-text",
    fontWeight: "regular",
  },
  ["body-mini"]: {
    fontFamily: "body-text",
    fontWeight: "regular",
  },
};
