"use client";
import React, { useState } from "react";
import cx from "classnames";

import Typography from "@/components/atoms/typography/Typography";
import RichTextRenderer from "@/components/molecules/RichTextRenderer/RichTextRenderer";
import { PlayButton } from "@/components/atoms/PlayButton/PlayButton";

import type {
  ComponentContentBlocksInfoBlock,
  ComponentSharedEmbeddedVkVideo,
} from "@/types";

import styles from "./HeroContent.module.css";


interface heroContentProps {
  title: ComponentContentBlocksInfoBlock["Title"];
  description: ComponentContentBlocksInfoBlock["description"];
  videoLink: ComponentSharedEmbeddedVkVideo,
}

export const HeroContent: React.FC<heroContentProps> = ({
  title, description, videoLink,
}) => {
  const [isVideoHidden, setIsVideoHidden] = useState(true);

  return (
    <div className={cx("darkBlock", styles.heroContainer)}>
      <div className={cx(styles.page, { [styles.pageExpanded]: !isVideoHidden })}>
        <div className={styles.textWrapper}>
          <Typography tag="H1">{title}</Typography>
          {description?.map(text => {
            if (!text) {
              return;
            }
            return <div key={text?.id}><RichTextRenderer key={text?.id} markdownText={text} /><br /></div>;
          })}
        </div>

        <div className={styles.videoWrapper}>
          <div className={cx({ [styles.show]: isVideoHidden, [styles.hide]: !isVideoHidden })}>
            <PlayButton id="play-button" onClick={() => {
              setIsVideoHidden((isVideoHidden) => !isVideoHidden);
            }} />
          </div>

          <div style={{ animationDelay: "0.35s" }} className={cx(styles.video, { [styles.show]: !isVideoHidden, [styles.hide]: isVideoHidden })}>
            <iframe
              title="video-popup"
              width="100%"
              height="100%"
              src={`${videoLink.embeddedLink}&autoplay=0`}
              allow="encrypted-media; fullscreen; picture-in-picture;"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </div>
  );
};

