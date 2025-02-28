import { RefObject, useCallback, useEffect } from "react";

export const useOuterClick = <T extends HTMLElement>(
  ref: RefObject<T | null>,
  callback: () => void,
) => {
  const handleClick = useCallback(
    (event: MouseEvent) => {
      if (ref?.current && !ref.current.contains(event.target as Node)) {
        callback();
      }
    },
    [ref, callback],
  );

  useEffect(() => {
    if (ref) {
      document.addEventListener("click", handleClick);
    }
    return () => {
      if (ref) {
        document.removeEventListener("click", handleClick);
      }
    };
  }, [ref, handleClick]);
}; 
