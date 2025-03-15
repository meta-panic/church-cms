"use client";
import { usePathname } from "next/navigation";

import CustomError from "@/components/molecules/CustomErrorBoundaries/template/Error";
import { isRootPath, root } from "@/utils/isRoot";
import Link from "@/components/molecules/Link/Link";
import Typography from "@/components/atoms/typography/Typography";

import styles from "./DefaultError.module.css";


export default function ErrorBoundary(
  { title, errorMessage }: {
    title?: string;
    errorMessage: string;
  }) {
  return <CustomError
    title={title || "Произошла ошибка"}
    errorMessage={errorMessage}
    footer={
      <div className={styles.footerContainer}>
        <Typography tag="body">Попробуйте обновить страницу</Typography>
        {!isRootPath(usePathname()) && <Typography tag="body">Или <Link to={root} isExternal={false}>вернуться на главную</Link>
        </Typography>}
      </div>
    }
  />;
}
