"use client";
import React, { ReactNode, forwardRef, useImperativeHandle, useRef } from "react";
import Carousel from "react-multi-carousel";
import cx from "classnames";

import { BREAKPOINTS, useMediaQuery } from "@/hooks/useMediaQuery";
import useVerticalScrollPrevention from "@/hooks/useVerticalScrollPrevention";

import "react-multi-carousel/lib/styles.css";
import styles from "./Carousel.module.css";


const responsive = {
  desktop: {
    breakpoint: { max: 4000, min: 1280 },
    items: 2,
    paritialVisibilityGutter: 40,
  },
  tabletMax: {
    breakpoint: { max: 1279, min: 900 },
    items: 2,
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
}

export interface CarouselRef {
  nextSlide: () => void;
  prevSlide: () => void;
}

const CarouselWrapper = forwardRef<CarouselRef, CarouselWrapperProps>(({ children }, ref) => {
  const carouselRef = useRef<Carousel | null>(null);
  const isSmallScreen = useMediaQuery([BREAKPOINTS.mobile]);
  const containerRef = useVerticalScrollPrevention<HTMLDivElement>();

  const nextSlide = () => {
    if (carouselRef.current) {
      carouselRef.current.next(1);
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
  }));

  return (
    <div ref={containerRef}>
      <Carousel
        arrows={false}
        responsive={responsive}
        ref={carouselRef}
        infinite
        keyBoardControl
        minimumTouchDrag={20}
        partialVisible={isSmallScreen}
        centerMode={!isSmallScreen}
        customTransition="transform 500ms linear"
        transitionDuration={500}
        swipeable
      >
        {children}
      </Carousel>
    </div>

  );
});

CarouselWrapper.displayName = "CarouselWrapper";


export interface SlideProps {
  children: ReactNode;
  className?: string;
}

export const Slide: React.FC<SlideProps> = ({ children, className }) => {
  return (
    <div className={cx(className, styles.card)}>{children}</div>
  );
};


export { CarouselWrapper as Carousel };

