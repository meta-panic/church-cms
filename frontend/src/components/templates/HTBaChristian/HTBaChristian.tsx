import React from "react";

import { Hero as HeroComponent } from "@/components/organisms/hero/Hero";
import RichTextRenderer from "@/components/molecules/RichTextRenderer/RichTextRenderer";
import Section from "@/components/atoms/section/Section";
import { Pray } from "./components/Pray";

import type {
  ComponentContentBlocksInfoBlock,
  ComponentHtbachristianBlockPrayExample,
  ComponentSharedEmbeddedVkVideo,
  ComponentSharedRichText,
  HtBaChristianContentDynamicZone,
  Maybe,
} from "@/types";

import srcBackgroundHeroImage from "./Background.jpg";

import styles from "./HTBaChristian.module.css";
import { VideoContent } from "@/components/organisms/hero/contents/VideoContent/VideoContent";
import Typography from "@/components/atoms/typography/Typography";

interface HTBaChristianProps {
  hero: {
    title: ComponentContentBlocksInfoBlock["Title"];
    description: ComponentContentBlocksInfoBlock["description"];
    videoLink: ComponentSharedEmbeddedVkVideo,
  }
  content: Maybe<HtBaChristianContentDynamicZone>[],
}

export const HTBaChristian: React.FC<HTBaChristianProps> = ({
  hero, content,
}) => {

  return (
    <>

      <HeroComponent
        fullHeight={false}
        src={srcBackgroundHeroImage}
        content={<VideoContent {...hero} >
          {TextContentBlock(hero.title, hero.description)}
        </VideoContent>}
        imageStyles={styles.imageStyling}
        imageAlt="Церковь с крестом на крыше на фоне ночного звездного неба"
      />

      <Section className={styles.pageContentWrapper}>
        <div className={styles.pageContent}>
          {content.map(block => {
            if (!block) {
              return null;
            }

            if (isRichTextBlock(block)) {
              return <div key={block.id} className={styles.passage}>
                <RichTextRenderer key={block.id} markdownText={block} />
              </div>;
            }

            if (isPrayExampleBlock(block)) {
              return <Pray key={block.id} title={block.title} prayText={block.prayText} />;
            }
          })}
        </div>

      </Section>

    </>
  );
};



export function isPrayExampleBlock(block: HtBaChristianContentDynamicZone): block is ComponentHtbachristianBlockPrayExample {
  return typeof (block as ComponentHtbachristianBlockPrayExample).prayText === "string" && typeof (block as ComponentHtbachristianBlockPrayExample).title === "string";
}

export function isRichTextBlock(block: HtBaChristianContentDynamicZone): block is ComponentSharedRichText {
  return "body" in (block as ComponentSharedRichText) && typeof (block as ComponentSharedRichText).body === "string";
}

const TextContentBlock = (
  title: ComponentContentBlocksInfoBlock["Title"],
  description: ComponentContentBlocksInfoBlock["description"],
): React.ReactNode => {
  return <div className={styles.textWrapper}>
    <Typography tag="H1" overideFont={{ fontFamily: "body-text", fontWeight: "heavy-bold" }}>{title}</Typography>
    {description?.map(text => {
      if (!text) {
        return;
      }
      return <div key={text?.id}>
        <Typography tag="body" overideFont={{ fontWeight: "semi-bold" }}>
          {text.body}
        </Typography>
      </div>;
    })}
  </div>;
};
