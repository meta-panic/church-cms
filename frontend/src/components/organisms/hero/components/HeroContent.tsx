"use client";
import cx from "classnames";

import { BREAKPOINTS, useMediaQuery } from "@/hooks/useMediaQuery";
import Typography from "@/components/atoms/typography/Typography";
import { ComponentSharedButton, ComponentSharedRichText, Maybe } from "@/types";
import Button from "@/components/atoms/Button/Button";
import RichTextRenderer from "@/components/molecules/RichTextRenderer/RichTextRenderer";

import styles from "./HeroContent.module.css";


interface HeroContentProps {
  title: string;
  description?: Maybe<Array<Maybe<ComponentSharedRichText>>>
  button?: Maybe<ComponentSharedButton>;
}

export const HeroContent: React.FC<HeroContentProps> = ({
  title, description, button,
}) => {
  const isMobile = useMediaQuery([BREAKPOINTS.mobile]);

  return (
    <>
      <div className={cx("darkBlock", styles.heroContainer)}>
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
      </div>
    </>);
};
