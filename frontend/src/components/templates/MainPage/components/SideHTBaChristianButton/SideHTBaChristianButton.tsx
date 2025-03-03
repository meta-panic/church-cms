"use client";
import cx from "classnames";
import { useAnimation, motion } from "motion/react";
import { useCallback, useEffect } from "react";
import { useRouter } from "next/navigation";

import Typography from "@/components/atoms/typography/Typography";
import { getCssVars } from "@/utils/CssVars";

import { ExistingUrls } from "@/configuration/navigation";

import styles from "./SideHTBaChristianButton.module.css";


interface SideHTBaChristianButtonProps {
  text: string;
}

export const SideHTBaChristianButton: React.FC<SideHTBaChristianButtonProps> =
  ({ text }) => {
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
          hidden: { opacity: 0, top: "100%" },
          visible: { opacity: 1, top: "60%" },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ stiffness: 250, damping: 12, mass: 1, duration: 0.3 }}
        className={cx(styles.container)}
        onClick={handleNavigation}
      >
        <Typography tag="body-mini">{text}</Typography>
      </motion.div>
    );
  };
