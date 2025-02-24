import { ReactNode } from "react";
import ReactMarkdown from "react-markdown";

import Link from "@/components/atoms/link/Link";
import Typography from "@/components/atoms/typography/Typography";
import { ComponentSharedRichText } from "@/types";

import styles from "./BlockStyles.module.css";

const RichTextRenderer = ({ markdownText }: { markdownText: ComponentSharedRichText }) => {
  const renderers = {
    a: ({ ...props }) => {
      return (
        <Link to={props.href} isExternal>{props.children}</Link>
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

      return <Typography tag={"H3"}>{children}</Typography>;
    },
    p: (props: { children?: ReactNode | string }) => {
      return <Typography tag="body">{props?.children}</Typography>;
    },
    blockquote: (props: { children?: ReactNode | string }) => {
      return <div className={styles.blockquoteContainer}><Typography className={styles.blockquote} tag="body">{props?.children}</Typography></div>;
    },
  };
  return (
    <ReactMarkdown components={renderers}>{markdownText.body}</ReactMarkdown>
  );
};

export default RichTextRenderer;
