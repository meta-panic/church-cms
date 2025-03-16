import Typography from "@/components/atoms/typography/Typography";

import styles from "./Error.module.css";


interface CustomErrorProps {
  title: string;
  errorMessage?: string;
  footer?: React.ReactNode;
}

const CustomError: React.FC<CustomErrorProps> = ({
  title,
  errorMessage,
  footer,
}) => {
  return <div className={styles.errorWrapper} data-error-boundary="true">
    <div className={styles.error}>
      <div className={styles.errorTextContainer}>
        <div className={styles.errorText}>
          <Typography tag="H1">{title}</Typography>
          {errorMessage && <Typography className={styles.errorMessage} tag="body">{errorMessage}</Typography>}
        </div>
      </div>

      {footer}
    </div>

  </div >;
};

export default CustomError;

