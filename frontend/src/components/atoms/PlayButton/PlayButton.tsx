import React from "react";
import styles from "./PlayButton.module.css";

interface PlayButtonProps {
  id: string;
  onClick?: () => void;
}

export const PlayButton: React.FC<PlayButtonProps> = ({ id, onClick }) => {
  return (
    <button id={id} className={styles.playButton} onClick={onClick}>
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 5V19L19 12L8 5Z" fill="currentColor" />
      </svg>
    </button>
  );
}; 
