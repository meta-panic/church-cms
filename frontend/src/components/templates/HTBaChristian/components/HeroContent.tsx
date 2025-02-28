"use client";
import React, { useCallback, useState } from "react";
import cx from "classnames";

import Section from "@/components/atoms/section/Section";
import Typography from "@/components/atoms/typography/Typography";
import RichTextRenderer from "@/components/molecules/RichTextRenderer/RichTextRenderer";
import { PlayButton } from "@/components/atoms/PlayButton/PlayButton";
import { Modal } from "@/components/atoms/modal/Modal";

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
  const [isModalOpen, setIsModalOpen] = useState(false);

  const closeModal = useCallback(() => {
    setIsModalOpen(() => {
      return false;
    });
  }, []);

  return (
    <div className={cx("darkBlock", styles.heroContainer)}>
      <div className={styles.page}>

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
          <PlayButton id="play-button" onClick={() => setIsModalOpen((isModalOpen) => !isModalOpen)} />
          {isModalOpen && <Modal isOpen={isModalOpen} onClose={closeModal}>
            <iframe
              title="video-popup"
              width="100%"
              height="90%"
              src={videoLink.embeddedLink}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </Modal>}
        </div>

      </div>
    </div>
  );
};

