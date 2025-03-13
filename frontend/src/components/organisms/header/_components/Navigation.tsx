"use client";
import React from "react";
import Link from "next/link";

import { WithPopup } from "@/components/atoms/withPopup/WithPopup";
import DropdownContent from "@/components/molecules/DropdownContent/DropdownContent";
import { hasAnchor } from "@/utils/parseUrl";
import Typography from "@/components/atoms/typography/Typography";

import type { ExistingUrls, ExistingAnchors } from "@/configuration/navigation";

import styles from "./Navigation.module.css";


export interface RegularItem {
  href: ExistingUrls | ExistingAnchors;
  text: string;
}

export interface DropdownItem {
  text: string;
  innerItems: RegularItem[]
}

interface NavigationProps {
  items: (RegularItem | DropdownItem)[];
  renderItem: RenderProp<string>;
  handleNavigation: (href: ExistingUrls | ExistingAnchors) => void;
}

export const Navigation: React.FC<NavigationProps> = ({ renderItem, handleNavigation, items }) => {
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
                      scroll={!hasAnchor(props.href)}
                    >
                      <Typography tag={"body"} overideFont={{ fontFamily: "headlines" }}>{props.text}</Typography>
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
            onClick={() => handleNavigation(item.href)}
            scroll={!hasAnchor(item.href)}
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
