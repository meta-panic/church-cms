import { ReactElement, ReactNode } from "react";
import ReactMarkdown from "react-markdown";

import Link from "@/components/atoms/link/Link";
import Typography from "@/components/atoms/typography/Typography";
import { ComponentSharedRichText } from "@/types";


const RichTextRenderer = ({ markdownText }: { markdownText: ComponentSharedRichText }) => {
  const renderers = {
    a: ({ ...props }) => {
      return (
        <Link to={props.href} isExternal>{props.children}</Link>
      );
    },
    heading: ({ level, children }: { level: number, children: ReactElement }) => {
      const tagMap: Record<number, "H1" | "H2" | "H3"> = {
        1: "H1",
        2: "H2",
        3: "H3",
      };
      const tag = tagMap[level] || "body";
      return <Typography tag={tag}>{children}</Typography>;
    },
    p: (props: { children?: ReactNode | string }) => {
      return <Typography tag="body">{props?.children}</Typography>;
    },
  };

  return (
    <ReactMarkdown components={renderers}>{markdownText.body}</ReactMarkdown>
  );
};

export default RichTextRenderer;
