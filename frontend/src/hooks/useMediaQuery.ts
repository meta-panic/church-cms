import { useState, useEffect } from "react";

export function useMediaQuery(query: string): boolean | null {
  // Default to false/true based on query for SSR
  const getInitialValue = () => {
    // If we're in the browser, check the query
    if (typeof window !== "undefined") {
      return window.matchMedia(query).matches;
    }
    // For SSR, assume desktop if query is for desktop
    return query.includes("min-width");
  };

  const [matches, setMatches] = useState(getInitialValue);

  useEffect(() => {
    // Ensure we're in the browser
    if (typeof window === "undefined") return;

    const mediaQuery = window.matchMedia(query);

    // Initial check
    setMatches(mediaQuery.matches);

    // Create event listener function
    const handleChange = (event: MediaQueryListEvent) => {
      setMatches(event.matches);
    };

    // Modern browsers
    mediaQuery.addEventListener("change", handleChange);

    // Cleanup
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, [query]); // Re-run if query changes

  return matches;
}

export const BREAKPOINTS = {
  mobile: "(max-width: 640px)",
  tablet: "(min-width: 641px) and (max-width: 1279px)",
  desktop: "(min-width: 1280px)",
} as const;
