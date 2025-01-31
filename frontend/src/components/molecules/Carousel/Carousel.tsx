"use client";
import React, { ReactNode, forwardRef, useEffect, useImperativeHandle, useRef } from "react";
import Carousel from "react-multi-carousel";
import cx from "classnames";

import "react-multi-carousel/lib/styles.css";
import styles from "./Carousel.module.css";
import { BREAKPOINTS, useMediaQuery } from "@/hooks/useMediaQuery";

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

  const containerRef = useRef<null | HTMLDivElement>(null);


  useEffect(() => {
    const current = containerRef.current;
    if (containerRef.current) {
      containerRef.current.addEventListener("touchstart", touchStart);
      containerRef.current.addEventListener("touchmove", preventTouch, {
        passive: false,
      });
    }

    return () => {
      if (current) {
        current?.removeEventListener("touchstart", touchStart);
        // https://github.com/akiran/react-slick/issues/1240#issuecomment-502099787
        // @ts-expect-error it is some hack from github issues, I am too afraid to change something
        current?.removeEventListener("touchmove", preventTouch, {
          passive: false,
        });
      }
    };
  });

  return (
    <div ref={containerRef} key={Math.random()}>
      11
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



let firstClientX: number = 0;
let clientX: number = 0;
const preventTouch = (e: TouchEvent) => {
  const minValue = 5; // threshold

  clientX = e.touches[0].clientX - firstClientX;

  // Vertical scrolling does not work when you start swiping horizontally.
  if (Math.abs(clientX) > minValue) {
    e.preventDefault();
    e.returnValue = false;

    return false;
  }
};

const touchStart = (e: TouchEvent) => {
  firstClientX = e.touches[0].clientX;
};
