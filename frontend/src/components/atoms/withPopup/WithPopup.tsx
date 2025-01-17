"use client";
import React, { useState, useRef, useEffect } from "react";
import cx from "classnames";

import styles from "./WithPopup.module.css";


interface WithPopupProps {
  children: React.ReactNode;
  content: React.ReactNode;
  className?: string;
  closeOnClickOutside?: boolean;
  closeOnSelect?: boolean;
  position?: "bottom-left" | "bottom-right" | "bottom-center";
  onClick?: () => void;
}

export const WithPopup: React.FC<WithPopupProps> = ({
  children,
  content,
  closeOnClickOutside = true,
  closeOnSelect = true,
  position = "bottom-left",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!closeOnClickOutside) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [closeOnClickOutside]);

  const handleTriggerClick = () => {
    setIsOpen((prev) => !prev);
  };


  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Escape") {
      setIsOpen(false);
    } else if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      handleTriggerClick();
    }
  };

  return (
    <div
      className={cx(styles.container)}
      ref={containerRef}
    >
      <div
        onClick={handleTriggerClick}
        onKeyDown={handleKeyDown}
        tabIndex={0}
        role="button"
        aria-haspopup="true"
        aria-expanded={isOpen}
        ref={triggerRef}
      >
        {children}
      </div>
      {isOpen && (
        <div
          className={cx(
            styles.content,
            styles[`position-${position}`],
          )}
        >
          {content}
        </div>
      )}
    </div>
  );
};
