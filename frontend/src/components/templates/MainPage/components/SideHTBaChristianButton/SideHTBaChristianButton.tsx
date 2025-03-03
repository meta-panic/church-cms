"use client";
import cx from "classnames";
import { useAnimation, motion } from "motion/react";
import { useCallback, useEffect } from "react";
import { useRouter } from "next/navigation";

import Typography from "@/components/atoms/typography/Typography";
import { getCssVars } from "@/utils/CssVars";

import { ExistingUrls } from "@/configuration/navigation";

import styles from "./SideHTBaChristianButton.module.css";




export const SideHTBaChristianButton: React.FC =
  () => {
    const mainControls = useAnimation();

    const router = useRouter();

    const handleNavigation = useCallback(() => {
      const to: ExistingUrls = "/how-to-become-a-christian";
      router.push(to);
    }, [router]);

    useEffect(() => {
      const debounce = (func: () => void, wait: number) => {
        let timeout: NodeJS.Timeout | null = null;
        return () => {
          if (timeout) clearTimeout(timeout);
          timeout = setTimeout(func, wait);
        };
      };

      const checkScroll = () => {
        const viewportHeight = getCssVars()?.getVarNumber("--header-height--slim", 42) || 42;
        const scrollPosition = window.scrollY;

        if (scrollPosition >= viewportHeight) {
          mainControls.start("visible");
        } else {
          mainControls.start("hidden");
        }
      };

      const debouncedCheckScroll = debounce(checkScroll, 100);
      window.addEventListener("scroll", debouncedCheckScroll);
      return () => window.removeEventListener("scroll", debouncedCheckScroll);
    }, [mainControls]);

    return (
      <motion.div
        variants={{
          hidden: { opacity: 0, bottom: "calc(0% - env(safe-area-inset-bottom))" },
          visible: { opacity: 1, bottom: "calc(10vh + env(safe-area-inset-bottom))" },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ stiffness: 250, damping: 12, mass: 1, duration: 0.3 }}
        className={cx(styles.container)}
        onClick={handleNavigation}
      >
        <Typography tag="body-mini">{"Как стать"}</Typography>
        <Typography tag="body-mini">{"Христианином"}</Typography>
      </motion.div>
    );
  };
