import React from "react";

import cx from "classnames";

import Section from "@/components/atoms/section/Section";
import RichTextRenderer from "@/components/molecules/RichTextRenderer/RichTextRenderer";
import Typography from "@/components/atoms/typography/Typography";

import { Maybe, ComponentSharedRichText, ComponentSharedButton } from "@/types";

import styles from "./Hero.module.css";
import Button from "@/components/atoms/Button/Button";
import { BREAKPOINTS, useMediaQuery } from "@/hooks/useMediaQuery";


interface HeroProps {
  title: string;
  description?: Maybe<Array<Maybe<ComponentSharedRichText>>>
  button?: Maybe<ComponentSharedButton>;
}

export const Hero: React.FC<HeroProps> = ({
  title, description, button,
}) => {

  const isMobile = useMediaQuery([BREAKPOINTS.mobile]);

  return (
    <div className={cx("darkBlock", styles.heroContainer)}>
      <Section className={styles.doctrine}>
        <div className={styles.hero}>
          <div className={styles.text}><Typography tag="H1">{title}</Typography></div>
          <div>
            {description?.map((passage) => {
              if (!passage) {
                return;
              }
              return <div className={styles.text} key={passage?.id}>
                <RichTextRenderer key={passage?.id} markdownText={passage} />
                <br />
              </div>;
            })}
          </div>
          {button &&
            <Button
              isExternal={button.isExternal}
              link={button.Button_link}
              variant="ghost"
              text={button.Button_text || "Узнать больше"}
              on="onBrand"
              size="L"
              wide={!!isMobile}
            />
          }
        </div>
      </Section>
    </div>
  );
};
