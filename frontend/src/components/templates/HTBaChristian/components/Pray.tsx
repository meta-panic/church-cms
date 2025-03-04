"use client";
import React from "react";
import cx from "classnames";

import Typography from "@/components/atoms/typography/Typography";
import Separator from "@/components/atoms/Separator/Separator";

import styles from "./Pray.module.css";

interface PrayProps {
  title: string;
  prayText: string;
}

export const Pray: React.FC<PrayProps> = ({
  title, prayText,
}) => {
  return (
    <div className={cx(styles.prayContainer)}>

      <div className={cx(styles.text)}>
        <Typography tag="body" bold>{title}</Typography>
        <Typography tag="body">{prayText}</Typography>
      </div>

      <div className={styles.separator}><Separator /></div>

    </div>
  );
};

