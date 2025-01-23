"use client";
import React, { useCallback } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

import { WithPopup } from "@/components/atoms/withPopup/WithPopup";
import DropdownContent from "@/components/molecules/DropdownContent/DropdownContent";
import type { ExistingUrls, ExistingAncorns } from "@/configuration/navigation";

import styles from "./Navigation.module.css";


export interface RegularItem {
  href: ExistingUrls | ExistingAncorns;
  text: string;
}

export interface DropdownItem {
  text: string;
  innerItems: RegularItem[]
}

interface NavigationProps {
  items: (RegularItem | DropdownItem)[];
  renderItem: RenderProp<string>;
}

export const Navigation: React.FC<NavigationProps> = ({ renderItem, items }) => {
  const router = useRouter();

  const handleNavigation = useCallback((href: ExistingUrls | ExistingAncorns) => {
    if (href.startsWith("#")) {
      // Handle anchor navigation
      const element = document.querySelector(href);
      element?.scrollIntoView({ behavior: "smooth" });
    } else {
      // Handle page navigation
      router.push(href);
    }
  }, [router]);

  return (
    <nav className={styles.navigation}>
      {items.map((item) => {
        if (isDropdownItem(item)) {
          return (<li className={styles.navigationItem} key={item.text}>
            <WithPopup
              content={
                <DropdownContent
                  items={item.innerItems}
                  onItemSelect={(item) => handleNavigation(item.href)}
                  renderItem={(props) => {
                    return (<Link
                      href={props.href}
                      onClick={() => handleNavigation(props.href)}
                      key={props.text}
                      className={styles.navigationItem}
                    >
                      {props.text}
                    </Link>);
                  }} />
              }
            >
              {renderItem(item.text)}
            </WithPopup>
          </li>);
        }
        if (isRegularItem(item)) {
          return (<Link
            key={item.href || item.text}
            href={item.href}
            className={styles.navigationItem}
          >
            {renderItem(item.text)}
          </Link>);
        }
      })}
    </nav >
  );
};

function isRegularItem(item: unknown): item is RegularItem {
  return typeof item === "object" && item !== null && "href" in item && "text" in item;
}
function isDropdownItem(item: unknown): item is DropdownItem {
  return typeof item === "object" && item !== null && "text" in item && "innerItems" in item;
}
type RenderProp<T extends string> = (text: T) => React.ReactNode;
