import { useEffect } from "react";


const handlePageLoad = () => {
  const hash = window.location.hash;
  if (!hash) {
    return;
  }

  const element = document.querySelector(hash);
  if (!element) {
    return;
  }

  requestAnimationFrame(() => {
    element.scrollIntoView({ behavior: "smooth" });
  });
};

const useInitialAnchorScroll = () => {
  useEffect(() => {
    if (document.readyState === "complete") {
      handlePageLoad();
    } else {
      window.addEventListener("load", handlePageLoad);
    }

    return () => {
      window.removeEventListener("load", handlePageLoad);
    };
  }, []);
};

export default useInitialAnchorScroll;

