import { FC } from 'react';
import cx from 'classnames';

import styles from './Section.module.css';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
}

const Section: FC<SectionProps> = ({
  ...props
}) => {
  return (
    <div className={cx(props.className, styles.section)}>
      {props.children}
    </div>
  );
};

export default Section;
