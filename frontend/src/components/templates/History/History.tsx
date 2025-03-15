"use client";
import React from "react";

import Section from "@/components/atoms/section/Section";
import RichTextRenderer from "@/components/molecules/RichTextRenderer/RichTextRenderer";
import { hasValue } from "@/utils/notMaybe";
import { GridGallery } from "@/components/organisms/Gallery/GridGallery";
import Typography from "@/components/atoms/typography/Typography";

import type {
  Maybe,
  HistoryContentDynamicZone,
  ComponentSharedRichText,
  ComponentHistoryGallery,
  UploadFile,
} from "@/types";

import styles from "./History.module.css";


interface HistoryProps {
  content?: Maybe<Maybe<HistoryContentDynamicZone>[]>;
}

export const History: React.FC<HistoryProps> = ({
  content,
}) => {
  return (
    <Section className={styles.pageContentWrapper}>
      <div className={styles.pageContent}>
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
              {block?.title && <Typography tag="H3">{block.title}</Typography>}
              <GridGallery images={galleryImages} />
            </div>;
          }

          if (isRichTextBlock(block)) {
            return <div key={block.id} className={styles.passageWrapper}>
              <RichTextRenderer key={block.id} markdownText={block} />
            </div>;
          }

          return null;
        })}
      </div>
    </Section>
  );
};

export function isRichTextBlock(block: HistoryContentDynamicZone): block is ComponentSharedRichText {
  return "body" in (block as ComponentSharedRichText) && typeof (block as ComponentSharedRichText).body === "string";
}

export function isPhotosBlock(block: HistoryContentDynamicZone): block is ComponentHistoryGallery {
  return "photos" in (block as ComponentHistoryGallery) && Array.isArray((block as ComponentHistoryGallery).photos);
}

