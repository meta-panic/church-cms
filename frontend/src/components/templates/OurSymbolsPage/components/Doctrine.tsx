import React from "react";

import Section from "@/components/atoms/section/Section";

import Typography from "@/components/atoms/typography/Typography";
import { Maybe, ComponentSharedRichText } from "@/types";

import styles from "./Doctrine.module.css";
import RichTextRenderer from "@/components/molecules/RichTextRenderer/RichTextRenderer";
import { hasValue } from "@/utils/notMaybe";


interface DoctrineProps {
  title: string;
  description: Maybe<Maybe<ComponentSharedRichText>[]> | undefined;
}

export const Doctrine: React.FC<DoctrineProps> = ({
  title, description,
}) => {

  return (
    <div className={styles.doctrineContainer}>
      <Section className={styles.doctrine}>
        <div>
          <Typography tag="H2">{title}</Typography>
        </div>
        {description?.map((passage) => {
          if (!passage) {
            return;
          }
          return <div className={styles.text} key={passage?.id}>
            {hasValue(description) ? <RichTextRenderer markdownText={passage} /> : null}
          </div>;
        })}
      </Section>
    </div>
  );
};
