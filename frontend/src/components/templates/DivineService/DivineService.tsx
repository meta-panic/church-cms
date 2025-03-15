"use client";
import React from "react";

import cx from "classnames";

import Section from "@/components/atoms/section/Section";
import RichTextRenderer from "@/components/molecules/RichTextRenderer/RichTextRenderer";
import { hasValue } from "@/utils/notMaybe";
import Typography from "@/components/atoms/typography/Typography";
import { Hero as HeroComponent } from "@/components/organisms/hero/Hero";

import type {
  HistoryContentDynamicZone,
  ComponentSharedRichText,
  ComponentHistoryGallery,
  ComponentServicesBlockHeader,
  ServiceContentDynamicZone,
  Maybe,
  UploadFile,
} from "@/types";
import { VideoContent } from "@/components/organisms/hero/contents/VideoContent/VideoContent";

import styles from "./DivineService.module.css";
import { WhatAndHows } from "./_components/WhatAndHows";
import { MasonryGallery } from "@/components/organisms/Gallery/GridGallery";


interface DivineServiceProps {
  hero: ComponentServicesBlockHeader;
  content?: Maybe<Maybe<ServiceContentDynamicZone>[]>;
}

export const DivineService: React.FC<DivineServiceProps> = ({
  hero, content,
}) => {

  return (
    <div className={styles.heroWrapper}>

      {hero.headerVideo
        ? <HeroComponent
          src={"data:image/jpeg;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mOs6ur9DwAFqQKS6m773wAAAABJRU5ErkJggg=="}
          fullHeight={false}
          content={hero.headerVideo
            ? <VideoContent videoLink={hero.headerVideo}>
              <div className={styles.textWrapper}>
                <Typography tag="H1" overideFont={{ fontFamily: "body-text", fontWeight: "extra-bold" }}>{hero.Title}</Typography>
                <Typography tag="body" overideFont={{ fontWeight: "thin" }}>{hero.shortServiceDescription}</Typography>
              </div>
            </VideoContent>
            : null
          }
          imageStyles={styles.imageStyling} imageAlt={""}
        />
        : <Section>
          <div className={cx(styles.heroContent, styles.pageContent)}>
            <Typography tag="H1">{hero.Title}</Typography>
            <Typography tag="body">{hero.shortServiceDescription}</Typography>
          </div>
        </Section>
      }

      <Section className={styles.bodyWrapper}>
        <div className={cx(styles.pageContent, styles.textBlock)}>
          <WhatAndHows howDoWeDo={hero.howDoWeDo} whatDoWeDo={hero.whatDoWeDo} />
        </div>


        {content && content?.length > 0 && <div className={cx(styles.pageContent, styles.pageBodyContainer)}>
          {content?.map(block => {
            if (!hasValue(block)) {
              return null;
            }

            if (isPhotosBlock(block)) {
              const galleryImages = hasValue(block.photos)
                ? block.photos.filter((photo): photo is UploadFile => hasValue(photo)).map((photo: UploadFile) => ({
                  src: `http://${process.env.NEXT_PUBLIC_BACKEND_URL}${photo.url}`,
                  thumbnail: `http://${process.env.NEXT_PUBLIC_BACKEND_URL}${photo.formats.small.url}`,
                  caption: photo.caption || "",
                  width: photo.width || 300,
                  height: photo.height || 300,
                  alternativeText: hasValue(photo.alternativeText) ? photo.alternativeText : "",
                }))
                : [];

              return <div key={block.id} className={styles.galleryWrapper}>
                {block?.title && <Typography tag="H2">{block.title}</Typography>}
                <MasonryGallery images={galleryImages} />
              </div>;
            }

            if (isRichTextBlock(block)) {
              return <div key={block.id} className={styles.passageWrapper}>
                <RichTextRenderer key={block.id} markdownText={block} />
              </div>;
            }

            return null;
          })}
        </div>}

      </Section>

    </div>
  );
};


export function isRichTextBlock(block: HistoryContentDynamicZone): block is ComponentSharedRichText {
  return "body" in (block as ComponentSharedRichText) && typeof (block as ComponentSharedRichText).body === "string";
}

export function isPhotosBlock(block: HistoryContentDynamicZone): block is ComponentHistoryGallery {
  return "photos" in (block as ComponentHistoryGallery) && Array.isArray((block as ComponentHistoryGallery).photos);
}

