"use client";
import React, { ReactNode, forwardRef, useImperativeHandle, useRef } from "react";
import Carousel from "react-multi-carousel";
import cx from "classnames";

import { BREAKPOINTS, useMediaQuery } from "@/hooks/useMediaQuery";
import useVerticalScrollPrevention from "@/hooks/useVerticalScrollPrevention";
import Typography from "@/components/atoms/typography/Typography";

import "react-multi-carousel/lib/styles.css";
import "./Carousel.css";
import styles from "./Carousel.module.css";


const responsive = {
  desktop: {
    breakpoint: { max: 4000, min: 1280 },
    items: 1,
    paritialVisibilityGutter: 40,
  },
  tabletMax: {
    breakpoint: { max: 1279, min: 900 },
    items: 1,
    paritialVisibilityGutter: 20,
  },
  tabletMin: {
    breakpoint: { max: 899, min: 641 },
    items: 1,
    paritialVisibilityGutter: 40,
  },
  mobile: {
    breakpoint: { max: 640, min: 0 },
    items: 1,
    paritialVisibilityGutter: 20,
  },
};

export interface CarouselWrapperProps {
  children: ReactNode;
  totalItems: number;
}

export interface CarouselRef {
  nextSlide: () => void;
  prevSlide: () => void;
}

const CarouselWrapper = forwardRef<CarouselRef, CarouselWrapperProps>(({ children, totalItems }, ref) => {
  const carouselRef = useRef<Carousel | null>(null);
  const isSmallScreen = useMediaQuery([BREAKPOINTS.mobile]);
  const containerRef = useVerticalScrollPrevention<HTMLDivElement>();

  const nextSlide = () => {
    if (carouselRef.current) {
      carouselRef.current.next(1);
    }
  };

  const goToSlide = (index: number) => {
    if (carouselRef.current) {
      carouselRef.current.goToSlide(index);
    }
  };

  const prevSlide = () => {
    if (carouselRef.current) {
      carouselRef.current.previous(1);
    }
  };

  useImperativeHandle(ref, () => ({
    nextSlide,
    prevSlide,
    goToSlide,
  }));

  return (
    <div ref={containerRef}>
      <Carousel
        arrows={false}
        responsive={responsive}
        ref={carouselRef}
        keyBoardControl
        minimumTouchDrag={20}
        partialVisible={isSmallScreen}
        centerMode={!isSmallScreen}
        customTransition="transform 100ms linear"
        transitionDuration={100}
        swipeable
        showDots={true} renderDotsOutside={true} customDot={<CustomDot totalItems={totalItems} />}
      >
        {children}
      </Carousel>
    </div>

  );
});

CarouselWrapper.displayName = "CarouselWrapper";


export interface SlideProps {
  children: ReactNode;
  onFocus?: () => void;
  className?: string;
}

export const Slide: React.FC<SlideProps> = ({ children, onFocus, className }) => {
  return (
    <div onFocus={onFocus} className={cx(className, styles.card)}>{children}</div>
  );
};


export { CarouselWrapper as Carousel };

const CustomDot = ({
  index,
  active,
  onClick,
}: {
  index?: number,
  active?: boolean,
  totalItems?: number;
  onClick?: () => void
}) => {
  return (
    <button
      type="button"
      className={cx(styles.dot, {
        [styles.active]: active,
      }, "lightBlock")}
      key={index}
      tabIndex={-1}
      aria-label={`Slide ${index ? index + 1 : "unknown"}`}
      aria-current={active ? "true" : "false"}
      onClick={onClick}
    ><div className={styles.line}></div></button>
  );
};
