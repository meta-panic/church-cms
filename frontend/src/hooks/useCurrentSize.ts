import { useState, useEffect } from "react";

export type SizeCategory = "mobile" | "tablet" | "desktop";

const useCurrentSize = (): SizeCategory => {
  const [currentSize, setCurrentSize] = useState<SizeCategory>("mobile");

  useEffect(() => {
    const updateSize = () => {
      const root = document.documentElement;
      const computedStyle = getComputedStyle(root);
      const size = computedStyle.getPropertyValue("--current-size").trim().replace(/"/g, "") as SizeCategory;
      setCurrentSize(size);
    };

    updateSize();
    window.addEventListener("resize", updateSize);

    return () => {
      window.removeEventListener("resize", updateSize);
    };
  }, []);

  return currentSize;
};

export default useCurrentSize;
