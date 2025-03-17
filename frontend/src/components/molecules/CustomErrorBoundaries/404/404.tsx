import { root } from "@/utils/isRoot";
import Link from "@/components/molecules/Link/Link";
import Typography from "@/components/atoms/typography/Typography";
import CustomError from "../template/Error";

import styles from "./404.module.css";


const NotFound: React.FC = () => {
  return <CustomError
    title={"Такой страницы нет"}
    errorMessage="Page not found"
    footer={
      <div className={styles.footerContainer}>
        <Typography tag="body">Ничего страшного</Typography>
        <Typography tag="body">Всегда можно <Link to={root} isExternal={false}>вернуться на главную</Link>
        </Typography>
      </div>
    }
  />;
};

export default NotFound;

