import { useState, useEffect } from "react";

type Sizes = typeof BREAKPOINTS[keyof typeof BREAKPOINTS][];

export function useMediaQuery(queries: Sizes): boolean {
  const getInitialValue = () => {
    if (typeof window !== "undefined") {
      return queries.some(query => window.matchMedia(query).matches);
    }

    return queries.some(query => query.includes("min-width"));
  };

  const [matches, setMatches] = useState(getInitialValue);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const mediaQueries = queries.map(query => window.matchMedia(query));

    setMatches(mediaQueries.some(mediaQuery => mediaQuery.matches));

    const handleChange = () => {
      setMatches(mediaQueries.some(mediaQuery => mediaQuery.matches));
    };

    mediaQueries.forEach(mediaQuery => {
      mediaQuery.addEventListener("change", handleChange);
    });

    return () => {
      mediaQueries.forEach(mediaQuery => {
        mediaQuery.removeEventListener("change", handleChange);
      });
    };
  }, [queries]);

  return matches;
}


export const BREAKPOINTS = {
  mobile: "(max-width: 640px)",
  tablet: "(min-width: 641px) and (max-width: 1279px)",
  tabletMin: "(min-width: 641px) and (max-width: 899px)",
  tabletMax: "(min-width: 900px) and (max-width: 1279px)",
  desktop: "(min-width: 1280px)",
} as const;
