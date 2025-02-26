import React from "react";

import { Hero as HeroComponent } from "@/components/organisms/hero/Hero";
import RichTextRenderer from "@/components/molecules/RichTextRenderer/RichTextRenderer";
import Section from "@/components/atoms/section/Section";
import { HeroContent } from "./components/HeroContent";
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
        src={srcBackgroundHeroImage}
        content={<HeroContent  {...hero} />}
        imageStyles={styles.imageStyling}
      />

      <Section className={styles.pageContentWrapper}>
        <div className={styles.pageContent}>
          {content.map(block => {
            if (!block) {
              return null;
            }

            if (isRichTextBlock(block)) {
              return <div key={block.id} className={styles.passsage}>
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
