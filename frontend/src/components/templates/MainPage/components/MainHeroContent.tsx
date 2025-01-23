"use client";
import cx from "classnames";

import { BREAKPOINTS, useMediaQuery } from "@/hooks/useMediaQuery";
import Typography from "@/components/atoms/typography/Typography";
import ClientOnly from "@/components/organisms/header/_components/ClientOnly";
import { ComponentSharedButton, ComponentSharedRichText, Maybe } from "@/types";
import Button from "@/components/atoms/Button/Button";

import styles from "./MainHeroContent.module.css";


interface MainHeroContentProps {
  title: string;
  description: Maybe<ComponentSharedRichText>[];
  button?: Maybe<ComponentSharedButton>;
}

export const MainHeroContent: React.FC<MainHeroContentProps> = ({
  title, description, button,
}) => {
  const isMobile = useMediaQuery(BREAKPOINTS.mobile);

  return (
    <>
      <div className={cx("darkBlock", styles.heroContainer)}>
        <div className={styles.hero}>
          <div className={styles.text}><Typography tag="H1">{title}</Typography></div>
          <div>
            {description?.map((passage) => {
              return <div className={styles.text} key={passage?.id}>
                <Typography tag="body">
                  {passage?.body}
                </Typography>
                <br />
              </div>;
            })}
          </div>
          {button && <ClientOnly>
            <Button
              link="/internal-page"
              variant="ghost"
              text={button.Button_text || "Узнать больше"}
              on="onBrand"
              size="L"
              wide={!!isMobile}
            />
          </ClientOnly>
          }
        </div>
      </div>
    </>);
};
