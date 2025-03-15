import { ReactNode } from "react";
import ReactMarkdown from "react-markdown";

import Link from "@/components/molecules/Link/Link";
import Typography from "@/components/atoms/typography/Typography";
import { ComponentSharedRichText } from "@/types";

import styles from "./BlockStyles.module.css";

const RichTextRenderer = ({ markdownText }: { markdownText: ComponentSharedRichText }) => {
  const renderers = {
    a: ({ ...props }) => {
      return (
        <Link to={props.href} isExternal tag={"body"}>{props.children}</Link>
      );
    },
    h1: (props: React.HTMLProps<HTMLHeadingElement>) => { // Updated type
      const { children } = props; // Extract children from props

      return <Typography tag={"H1"}>{children}</Typography>;
    },
    h2: (props: React.HTMLProps<HTMLHeadingElement>) => { // Updated type
      const { children } = props; // Extract children from props

      return <Typography tag={"H2"}>{children}</Typography>;
    },
    h3: (props: React.HTMLProps<HTMLHeadingElement>) => { // Updated type
      const { children } = props; // Extract children from props

      return <Typography tag={"H3"} overideFont={{ fontWeight: "bold" }}>{children}</Typography>;
    },
    p: (props: { children?: ReactNode | string }) => {
      return <Typography tag="body">{props?.children}</Typography>;
    },
    strong: (props: { children?: ReactNode | string }) => {
      return <Typography className={styles.strong} tag="body" overideFont={{ fontWeight: "bold" }}>{props?.children}</Typography>;
    },
    em: (props: { children?: ReactNode | string }) => {
      return <Typography className={styles.em} tag="body" overideFont={{ fontFamily: "body-text" }}>{props?.children}</Typography>;
    },
    blockquote: (props: { children?: ReactNode | string }) => {
      return <div className={styles.blockquoteContainer}><Typography className={styles.blockquote} tag="body">{props?.children}</Typography></div>;
    },
    li: (props: { children?: ReactNode | string }) => {
      return <span className={styles.listItem}><Typography tag="body">{props?.children}</Typography></span>;
    },
  };
  return (
    <ReactMarkdown components={renderers}>{markdownText.body}</ReactMarkdown>
  );
};

export default RichTextRenderer;
