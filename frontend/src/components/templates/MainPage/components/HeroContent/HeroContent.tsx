"use client";
import cx from "classnames";

import { BREAKPOINTS, useMediaQuery } from "@/hooks/useMediaQuery";
import Typography from "@/components/atoms/typography/Typography";
import Button from "@/components/atoms/Button/Button";

import type { ComponentSharedButton, ComponentSharedRichText, Maybe } from "@/types";

import styles from "./HeroContent.module.css";


interface HeroContentProps {
  description?: Maybe<Array<Maybe<ComponentSharedRichText>>>
  button?: Maybe<ComponentSharedButton>;
}

export const HeroContent: React.FC<HeroContentProps> = ({
  description, button,
}) => {
  const isMobile = useMediaQuery([BREAKPOINTS.mobile]);

  return (
    <div className={cx("darkBlock", styles.heroContainer)}>
      <div className={styles.hero}>
        <div className={styles.text}>
          <Typography tag="H1" overideFont={{ fontFamily: "headlines" }}>
            {"ДОБРО ПОЖАЛОВАТЬ"}
          </Typography>
          <Typography tag="H2">
            {"в дом молитвы"}
          </Typography>
        </div>
        <div className={styles.text}>

        </div>
        <div>
          {description?.map((passage) => {
            if (!passage) {
              return;
            }
            return <div className={styles.text} key={passage?.id}>
              <Typography
                tag="H3"
                overideFont={{ fontWeight: "thin" }}
              >
                {passage.body}
              </Typography>
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
            rounded
          />
        }
      </div>
    </div>);
};
