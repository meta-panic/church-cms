import cx from "classnames";

import Typography from "@/components/atoms/typography/Typography";
import RichTextRenderer from "@/components/molecules/RichTextRenderer/RichTextRenderer";

import type { Maybe, ComponentSharedRichText } from "@/types";

import styles from "./WhatAndHows.module.css";


interface WhatAndHowsProps {
  whatDoWeDo?: Maybe<Maybe<ComponentSharedRichText>[]>;
  howDoWeDo?: Maybe<Maybe<ComponentSharedRichText>[]>;
}

export const WhatAndHows: React.FC<WhatAndHowsProps> = ({ whatDoWeDo, howDoWeDo }) => {
  return <div className={cx("lightBlock", styles.whatDoWeDoWrapper)}>
    {
      whatDoWeDo && whatDoWeDo.length > 0 ? <div className={styles.passageWrapper}>
        <Typography tag="H3">Чем мы занимаемся?</Typography>

        <div className={styles.passage}>
          {whatDoWeDo?.map((item) => {
            return item && <RichTextRenderer key={item.id} markdownText={item} />;
          })}
        </div>
      </div> : null
    }

    {
      howDoWeDo && howDoWeDo.length > 0 ? <div className={styles.passageWrapper}>
        <Typography tag="H3">Как это происходит?</Typography>

        <div className={styles.passage}>
          {howDoWeDo?.map((item) => {
            return item && <RichTextRenderer key={item.id} markdownText={item} />;
          })}
        </div>
      </div> : null
    }

  </div>;
};
