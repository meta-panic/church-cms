"use client";
import React from "react";

import Section from "@/components/atoms/section/Section";
import Typography from "@/components/atoms/typography/Typography";
import Button from "@/components/atoms/Button/Button";
import { useMediaQuery, BREAKPOINTS } from "@/hooks/useMediaQuery";

import { Maybe, ComponentSharedButton } from "@/types";

import styles from "./MoreInfo.module.css";


interface MoreInfoProps {
  description: string;
  button?: Maybe<ComponentSharedButton>;
}

export const MoreInfo: React.FC<MoreInfoProps> = ({
  button, description,
}) => {
  const isMobile = useMediaQuery([BREAKPOINTS.mobile]);

  return (
    <div className={styles.moreInfoContainer}>

      <Section className={styles.moreInfo}>
        <Typography tag="body">{description}</Typography>
        <div>
          {button &&
            <Button
              link={button.Button_link}
              isExternal
              variant="ghost"
              text={button.Button_text || "Узнать больше"}
              on="onLight"
              size="L"
              wide={isMobile}
              rounded
            />
          }
        </div>
      </Section>

    </div>
  );
};
