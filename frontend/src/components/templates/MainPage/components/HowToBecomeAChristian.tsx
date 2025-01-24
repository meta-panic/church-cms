"use client";
import cx from "classnames";

import { Card } from "@/components/molecules/Card/Card";
import { Maybe, ComponentSharedRichText, ComponentSharedButton } from "@/types";
import Typography from "@/components/atoms/typography/Typography";
import Button from "@/components/atoms/Button/Button";
import RichTextRenderer from "@/components/molecules/RichTextRenderer/RichTextRenderer";
import { useMediaQuery, BREAKPOINTS } from "@/hooks/useMediaQuery";
import ClientOnly from "@/components/organisms/header/_components/ClientOnly";
import { isNotMaybe } from "@/utils/notMaybe";
import bibleImageSrc from "./bible.png";

import styles from "./HowToBecomeAChristian.module.css";


interface HowToBecomeAChristianProps {
  title: string;
  description?: Maybe<Maybe<ComponentSharedRichText>[]>;
  button?: Maybe<ComponentSharedButton>;
  phone: string,
  telegram: string,
}

export const HowToBecomeAChristian: React.FC<HowToBecomeAChristianProps> = ({
  title, description, button, phone, telegram,
}) => {
  const isMobile = useMediaQuery(BREAKPOINTS.mobile);

  return (
    <div className={cx("darkBlock", styles.root)}>
      <div className={styles.container}>

        <div className={styles.content}>
          <div className={styles.title}>
            <Typography tag="H1">{title}</Typography>
          </div>
          <div className={styles.passages}>
            {description?.map(text => {
              if (!text) {
                return;
              }
              return <RichTextRenderer key={text?.id} markdownText={text} />;
            })}
          </div>
          {isNotMaybe(button)
            && <ClientOnly>
              <div className={styles.cta}>
                <Button
                  link={button.Button_link}
                  text={button.Button_text}
                  variant="ghost"
                  on="onBrand"
                  size="L"
                  wide={!!isMobile}
                />
              </div>
            </ClientOnly>
          }
        </div>

        <div className={styles.card}>
          <Card
            image={{
              imageSrc: bibleImageSrc,
              altText: "Билию в черной обложке держат руки",
            }}
            phone={phone}
            telegram={telegram}
          />
        </div>

      </div>
    </div>
  );
};
