import { FC } from "react";
import cx from "classnames";

import { ExistingAnchors } from "@/configuration/navigation";

import styles from "./Section.module.css";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: ExistingAnchors extends `#${infer R}` ? R : never;
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
