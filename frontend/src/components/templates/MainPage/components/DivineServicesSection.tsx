"use client";
import React, { useCallback, useRef } from "react";
import cx from "classnames";

import { DivineServiceCard } from "@/components/templates/MainPage/components/DivineServiceCard";
import { Carousel, Slide } from "@/components/molecules/Carousel/Carousel";
import Typography from "@/components/atoms/typography/Typography";

import type { PublicServiceRoute } from "@/configuration/navigation";
import type { Service as DivineService } from "@/types";

import ArrowRightIcon from "./arrowRight.svg";
import ArrowLeftIcon from "./arrowLeft.svg";

import styles from "./DivineServicesSection.module.css";


export interface DivineServicesSectionProps {
  divineServices: DivineService[];
}

export const DivineServicesSection: React.FC<DivineServicesSectionProps> = ({
  divineServices,
}) => {
  const carouselRef = useRef<{ nextSlide: () => void; prevSlide: () => void, goToSlide: (index: number) => void; }>(null);

  const handleNextSlide = useCallback(() => {
    carouselRef.current?.nextSlide();
  }, []);

  const handlePrevSlide = useCallback(() => {
    carouselRef.current?.prevSlide();
  }, []);

  const handleGoToSlide = useCallback((index: number) => {
    carouselRef.current?.goToSlide(index);
  }, []);

  return (
    <div className={cx("darkBlock", styles.divineServicesContainer)}>

      <div className={styles.sectionHeader}>
        <Typography tag="H1">Наши служения</Typography>
        <ButtonGroup handleNextSlide={handleNextSlide} handlePrevSlide={handlePrevSlide} />
      </div>

      <Carousel ref={carouselRef} totalItems={divineServices.length}>
        {divineServices.map(({ landingCarouselView, slug }, index) => {
          return <Slide key={landingCarouselView.id} onFocus={() => {
            handleGoToSlide(index);
          }}>
            <DivineServiceCard
              key={landingCarouselView.id}
              href={getSlugPath(slug)}
              title={landingCarouselView.carouselServiceName}
              description={landingCarouselView.carouselServiceDescription}
              image={{
                imageSrc: `http://${process.env.NEXT_PUBLIC_BACKEND_URL}${landingCarouselView.carouselServiceImage.url}`,
                altText: landingCarouselView.carouselServiceImage?.alternativeText || "",
              }}
            />
          </Slide>;
        })}
      </Carousel>

    </div >
  );
};

function getSlugPath(slug: string): PublicServiceRoute {
  const href: PublicServiceRoute = `/public-service/${slug}`;
  return href;
}

const ButtonGroup = (
  { handleNextSlide, handlePrevSlide }: { handlePrevSlide: () => void, handleNextSlide: () => void },
) => {
  return <div className={styles.slideButtonsGroup}>
    <ArrowLeftIcon
      className={styles.icon}
      role="button"
      aria-label="Previous slide"
      onClick={handlePrevSlide}
      tabIndex={0}
      onKeyDown={(e: React.KeyboardEvent) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          handlePrevSlide();
        }
      }}
    />
    <ArrowRightIcon
      className={styles.icon}
      role="button"
      aria-label="Next slide"
      onClick={handleNextSlide}
      tabIndex={0}
      onKeyDown={(e: React.KeyboardEvent) => {
        if (e.key === "Enter" || e.key === " ") {

          e.preventDefault();
          handleNextSlide();
        }
      }}
    />
  </div>;
};
