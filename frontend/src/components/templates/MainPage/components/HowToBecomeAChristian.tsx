import cx from "classnames";

import { Card } from "@/components/molecules/Card/Card";
import { Maybe, ComponentSharedRichText, ComponentSharedButton } from "@/types";
import Typography from "@/components/atoms/typography/Typography";
import Button from "@/components/atoms/Button/Button";
import RichTextRenderer from "@/components/molecules/RichTextRenderer/RichTextRenderer";
import ClientOnly from "@/components/organisms/header/_components/ClientOnly";
import { hasValue } from "@/utils/notMaybe";
import bibleImageSrc from "./bible.png";

import styles from "./HowToBecomeAChristian.module.css";
import { getContacts } from "../MainPage";


interface HowToBecomeAChristianProps {
  title: string;
  description?: Maybe<Maybe<ComponentSharedRichText>[]>;
  button?: Maybe<ComponentSharedButton>;
}

export const HowToBecomeAChristian: React.FC<HowToBecomeAChristianProps> = ({
  title, description, button,
}) => {
  const contacts = getContacts();

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
          {hasValue(button)
            &&
            <div className={styles.cta}>
              <Button
                link={button.Button_link}
                text={button.Button_text}
                variant="ghost"
                on="onBrand"
                size="L"
              />
            </div>
          }
        </div>

        <div className={styles.card}>
          <Card
            image={{
              imageSrc: bibleImageSrc,
              altText: "Билию в черной обложке держат руки",
            }}
            phone={contacts?.phone}
            telegram={contacts?.telegram}
          />
        </div>

      </div>
    </div>
  );
};
