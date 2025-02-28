"use client";
import React, { useEffect, useRef, useCallback, useState } from "react";
import { createPortal } from "react-dom";
import FocusLock from "react-focus-lock";
import cx from "classnames";

import { useOuterClick } from "@/hooks/useOuterClick";

import CrossIcon from "./cross.svg";

import styles from "./Modal.module.css";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  className?: string;
}

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children, className }) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const [isClosing, setIsClosing] = useState(false);

  const handleClose = useCallback(() => {
    setIsClosing(true);
    setTimeout(onClose, 300);
  }, [onClose]);

  useOuterClick<HTMLDivElement>(modalRef, handleClose);

  const handleEscape = useCallback((event: React.KeyboardEvent) => {
    if (event.key === "Escape") {
      handleClose();
    }
  }, [handleClose]);

  const handleEnterKey = useCallback((event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      (event.target as HTMLElement).click();
    }
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("do-not-scroll");
    } else {
      document.body.classList.remove("do-not-scroll");
    }

    return () => {
      document.body.classList.remove("do-not-scroll");
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return createPortal(
    <FocusLock returnFocus={(suggestedNode: Element) => {
      setTimeout(() => {
        (suggestedNode as HTMLElement)?.focus();
      }, 0);
      return false;
    }}>

      {/* eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions */}
      <div
        className={cx(styles.modalOverlay, "darkBlock")}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        onKeyDown={handleEscape}
        tabIndex={-1}
      >
        <div ref={modalRef} className={cx(styles.modalContent, className, { [styles.fadeOut]: isClosing })}>

          <div
            className={styles.closeButton}
            onClick={(e) => {
              handleClose();

              e.stopPropagation();
            }}
            tabIndex={0}
            onKeyDown={handleEnterKey}
            role="button"
            aria-label="Close modal"
          >
            <CrossIcon />
          </div>

          {children}

          {/** a little hack to trap focus when iframes come into the picture */}
          {/* eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex */}
          <div tabIndex={0} />

        </div>
      </div>
    </FocusLock>,
    document.body,
  );
};

