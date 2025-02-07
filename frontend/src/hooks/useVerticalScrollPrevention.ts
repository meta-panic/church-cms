import { useCallback, useEffect, useRef } from "react";


const useVerticalScrollPrevention = <T extends HTMLElement>() => {
  const containerRef = useRef<T | null>(null);

  let firstClientX: number = 0;
  let clientX: number = 0;

  const preventTouch = useCallback((e: TouchEvent) => {
    const minValue = 5; // threshold
    // eslint-disable-next-line react-hooks/exhaustive-deps
    clientX = e.touches[0].clientX - firstClientX;

    if (Math.abs(clientX) > minValue) {
      e.preventDefault();
      e.returnValue = false;
      return false;
    }
  }, []);

  const touchStart = useCallback((e: TouchEvent) => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    firstClientX = e.touches[0].clientX;
  }, []);

  useEffect(() => {
    const current = containerRef.current;
    if (current) {
      current.addEventListener("touchstart", touchStart);
      current.addEventListener("touchmove", preventTouch, { passive: false });
    }

    return () => {
      if (current) {
        current.removeEventListener("touchstart", touchStart);
        // https://github.com/akiran/react-slick/issues/1240#issuecomment-502099787
        // @ts-expect-error it is some hack from github issues, I am too afraid to change something
        current.removeEventListener("touchmove", preventTouch, { passive: false });
      }
    };
  }, [preventTouch, touchStart]);

  return containerRef;
};

export default useVerticalScrollPrevention;
