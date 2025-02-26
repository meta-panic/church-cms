import { RefObject, useEffect, useRef } from "react";

export const useFocusFirstElement = (isOpen: boolean, containerRef: RefObject<HTMLDivElement | null>) => {
  const hasFocused = useRef(false);

  useEffect(() => {
    if (isOpen && containerRef.current && !hasFocused.current) {
      const focusableElements = containerRef.current.querySelectorAll(
        "button, [href], input, select, textarea, iframe[tabindex='0'], [tabindex]:not([tabindex=\"-1\"])",
      );

      if (focusableElements.length > 0) {
        (focusableElements[0] as HTMLElement).focus();
        hasFocused.current = true;
      }
    }

    if (!isOpen) {
      hasFocused.current = false;
    }
  }, [isOpen, containerRef]);
};
