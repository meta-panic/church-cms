import { FC } from "react";
import cx from "classnames";

import { ExistingAnchors } from "@/configuration/navigation";

import styles from "./Section.module.css";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  id?: ExistingAnchors extends `${infer S}#${infer Anchor}` ? Anchor : never;
}

const Section: FC<SectionProps> = ({
  ...props
}) => {
  return (
    <section className={cx(props.className, styles.section)} id={props.id}>
      {props.children}
    </section >
  );
};

export default Section;
