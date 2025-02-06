import cx from "classnames";
import styles from "./Button.module.css";
import Typography from "../typography/Typography";

type ButtonSkeletonProps = {
  size: "L" | "M";
  wide?: boolean;
  rounded?: boolean;
  text: string;
}

const ButtonSkeleton: React.FC<ButtonSkeletonProps> = ({ size, text, wide, rounded }) => {
  const classNames = cx(
    styles.button,
    styles.skeleton,
    styles[size],
    {
      [styles.rounded]: rounded,
      [styles.wide]: wide,
    },
  );

  return <div className={classNames}><Typography tag="body">{text}</Typography></div>;
};

export default ButtonSkeleton;
