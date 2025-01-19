"use client";
import React, { useEffect, useRef } from "react";

import styles from "./DropdownContent.module.css";

interface DropdownContentProps<T extends { text: string }> {
  items: T[];
  renderItem: RenderProp<T>;
  onItemSelect: (item: T) => void;
}

type RenderProp<T> = (props: T) => React.ReactNode;

function DropdownContent<T extends { text: string }>({ items, renderItem, onItemSelect }: DropdownContentProps<T>) {
  const listRef = useRef<HTMLUListElement | null>(null);
  const firstItemRef = useRef<HTMLLIElement | null>(null);
  const lastItemRef = useRef<HTMLLIElement | null>(null);

  useEffect(() => {
    if (listRef.current) {
      const items = listRef.current.querySelectorAll(`.${styles.dropdownItem}`);
      firstItemRef.current = items[0] as HTMLLIElement;
      lastItemRef.current = items[items.length - 1] as HTMLLIElement;
    }
  }, [items]);

  const handleKeyDown = (event: React.KeyboardEvent) => {
    switch (event.key) {
      case "ArrowDown":
        event.preventDefault();
        if (firstItemRef.current) {
          firstItemRef.current.focus();
        }
        break;
      case "ArrowUp":
        event.preventDefault();
        if (lastItemRef.current) {
          lastItemRef.current.focus();
        }
        break;
      case "Enter":
      case " ":
        event.preventDefault();
        const activeElement = document.activeElement as HTMLLIElement;
        if (activeElement) {
          const selectedItem = items.find(item => item.text === activeElement.textContent);
          if (selectedItem) {
            onItemSelect(selectedItem);
          }
        }
        break;
      case "Escape":
        break;
      default:
        break;
    }
  };

  return (
    <div className={styles.dropdownContainer}>
      <ul
        className={styles.dropdownList}
        role="menu"
        id="dropdown-menu"
        aria-labelledby="dropdown-button"
        ref={listRef}
        onKeyDown={handleKeyDown}
      >

        {items.map((item) => (
          <li
            key={item.text}
            className={styles.dropdownItem}
            role="menuitem"
            onClick={() => onItemSelect(item)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                onItemSelect(item);
              }
            }}
          >
            {renderItem(item)}
          </li>
        ))}

      </ul>
    </div>
  );
};

export default DropdownContent;
