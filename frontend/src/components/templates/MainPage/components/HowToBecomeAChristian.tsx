import cx from "classnames";

import { Card } from "@/components/molecules/Card/Card";
import styles from "./HowToBecomeAChristian.module.css";
import { Maybe, ComponentSharedRichText, ComponentSharedButton } from "@/types";
import Typography from "@/components/atoms/typography/Typography";
import Button from "@/components/atoms/Button/Button";


interface HowToBecomeAChristianProps {
  title: string;
  description?: Maybe<Maybe<ComponentSharedRichText>[]>;
  button?: Maybe<ComponentSharedButton>;
}

export const HowToBecomeAChristian: React.FC<HowToBecomeAChristianProps> = ({
  title, description, button,
}) => {
  console.log("title - ", title);
  console.log("description - ", description);
  console.log("button - ", button);

  return (
    <div className={cx("darkBlock", styles.root)}>
      <div className={styles.container}>
        <div className={styles.content}>
          <Typography tag="H1">{title}</Typography>
          {description?.map(text => {
            return <Typography key={text?.id} tag="body">{text?.body}</Typography>;
          })}
          {/* {!!button
            && <Button link={button.Button_link} text={""} variant={"text"} on={"onBrand"} size={"L"} />} */}
        </div>
        <div className={styles.card}>
          <Card />
        </div>
      </div>
    </div>
  );
};
