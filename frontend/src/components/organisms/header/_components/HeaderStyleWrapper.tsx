"use client";
import React, { JSX } from "react";

import cx from "classnames";
import Section from "@/components/atoms/section/Section";
import styles from "./HeaderStyleWrapper.module.css";
import { HeaderType } from "../variants/variants";


interface HeaderStyleWrapperProps {
  headerType: HeaderType;
  children: JSX.Element;
}

export const HeaderStyleWrapper: React.FC<HeaderStyleWrapperProps> =
  ({ headerType, children }) => (
    <Section className={
      cx(
        {
          [styles.sticky]: headerType === "slim",
          "darkBlock": headerType === "presentation",
        },
        styles[`${headerType}HeaderWrapper`])
    }>
      {children}
    </Section >
  );
