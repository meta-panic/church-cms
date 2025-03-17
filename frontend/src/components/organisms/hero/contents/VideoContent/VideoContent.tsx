"use client";
import React, { useEffect, useState } from "react";
import cx from "classnames";
import { motion } from "framer-motion";

import Typography from "@/components/atoms/typography/Typography";
import { PlayButton } from "@/components/atoms/PlayButton/PlayButton";

import type { ComponentSharedEmbeddedVkVideo } from "@/types";

import styles from "./VideoContent.module.css";


interface VideoContentProps {
  children: React.ReactNode;
  videoLink: ComponentSharedEmbeddedVkVideo,
}

export const VideoContent: React.FC<VideoContentProps> = ({
  children, videoLink,
}) => {
  const [isVideoHidden, setIsVideoHidden] = useState(true);
  const [hasLoadError, setHasLoadError] = useState(false);
  const [correctedSrc, setCorrectedSrc] = useState<string | undefined>(undefined);


  useEffect(() => {
    try {
      const normalizedSrc = ensureAbsoluteUrl(videoLink.embeddedLink);
      if (!normalizedSrc) {
        setHasLoadError(true);
      } else {
        setCorrectedSrc(normalizedSrc);
      }
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error: unknown) {
      if (!hasLoadError) {
        setHasLoadError(true);
      }
    }

  }, [hasLoadError, videoLink.embeddedLink]);

  return (
    <div className={cx("darkBlock", styles.heroContainer)}>
      <div className={cx(styles.page, { [styles.pageExpanded]: !isVideoHidden })}>

        {children}

        <div className={styles.videoWrapper}>
          <div className={cx({ [styles.show]: isVideoHidden, [styles.hide]: !isVideoHidden })}>
            <PlayButton id="play-button" onClick={() => {
              setIsVideoHidden((isVideoHidden) => !isVideoHidden);
            }} />
          </div>

          <motion.div
            initial={{ opacity: 0, display: "none" }}
            animate={{
              opacity: isVideoHidden ? 0 : 1,
              display: isVideoHidden ? "none" : "block",
            }}
            transition={{ duration: 0.35 }}
            className={cx({ [styles.video]: !isVideoHidden && !hasLoadError })}
          >
            {!isVideoHidden && (
              <>
                {!hasLoadError && <div style={{ display: "block" }} className={styles.videoLoader}>
                  <Typography
                    tag="H3"
                    overideFont={{ fontFamily: "body-text", fontWeight: "semi-bold" }}
                  >
                    Загрузка видео...
                  </Typography>
                </div>}

                {correctedSrc && <iframe
                  title="video-popup"
                  width="100%"
                  height="100%"
                  src={`${correctedSrc}&autoplay=0`}
                  allow="encrypted-media; fullscreen; picture-in-picture;"
                  allowFullScreen
                  onError={() => {
                    setHasLoadError(true);
                  }}
                  onLoad={(e) => {
                    const loader = e.currentTarget.previousElementSibling as HTMLElement;
                    if (loader) {
                      loader.style.display = "none";
                    }
                  }}
                />}

                {hasLoadError && (
                  <div className={styles.errorMessage}>
                    <Typography tag="H3" overideFont={{ fontFamily: "body-text", fontWeight: "semi-bold" }}>
                      Видео не загрузилось. Пожалуйста, попробуйте позже.
                    </Typography>
                  </div>
                )}

              </>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

const ensureAbsoluteUrl = (url: string) => {
  try {
    new URL(url);

    return url;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (_error: unknown) {
    if (url.startsWith("//")) {
      return `https:${url}`;
    }
    throw new Error("Wrong URL");
  }
};
