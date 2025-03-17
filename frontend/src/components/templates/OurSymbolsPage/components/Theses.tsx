import React from "react";
import cx from "classnames";

import Section from "@/components/atoms/section/Section";

import Typography from "@/components/atoms/typography/Typography";
import { Maybe, ComponentSharedRichText } from "@/types";

import RichTextRenderer from "@/components/molecules/RichTextRenderer/RichTextRenderer";
import { hasValue } from "@/utils/notMaybe";

import styles from "./Theses.module.css";


interface ThesesProps {
  title: string;
  theses: Maybe<Maybe<ComponentSharedRichText>[]> | undefined;
}

export const Theses: React.FC<ThesesProps> = ({
  title, theses,
}) => {

  return (
    <div className={cx("darkBlock", styles.thesesContainer)}>

      <Section className={styles.theses}>
        <Typography tag="H2">{title}</Typography>
        {theses?.map((passage) => {
          if (!passage) {
            return;
          }
          return <div className={styles.text} key={passage?.id}>
            {hasValue(passage) ? <RichTextRenderer markdownText={passage} /> : null}
          </div>;
        })}
      </Section>

    </div>
  );
};
