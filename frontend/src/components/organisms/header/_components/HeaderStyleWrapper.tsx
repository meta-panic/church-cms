"use client";
import React from "react";
import cx from "classnames";
import { usePathname } from "next/navigation";

import Section from "@/components/atoms/section/Section";
import { useScroll } from "@/hooks/useScroll";
import { isRootPath } from "@/utils/isRoot";

import type { HeaderType } from "../variants/variants";

import styles from "./HeaderStyleWrapper.module.css";


interface HeaderStyleWrapperProps {
  renderChildren: (headerType: HeaderType) => React.ReactNode;
}

export const HeaderStyleWrapper: React.FC<HeaderStyleWrapperProps> = ({
  renderChildren,
}) => {
  const isPageScrolled = useScroll({ threshold: 38 });
  const headerType = calcHeaderType(isPageScrolled, usePathname());

  return (
    <Section className={
      cx(
        {
          [styles.sticky]: headerType === "slim",
          "darkBlock": headerType === "presentation",
        },
        styles[`${headerType}HeaderWrapper`])
    }>
      {renderChildren(headerType)}
    </Section >
  );
};

function calcHeaderType(isPageScrolled: boolean, pathname: string): HeaderType {
  if (isPageScrolled) {
    return "slim";
  }

  if (!isRootPath(pathname)) {
    return "slim";
  }

  return "presentation";
}
