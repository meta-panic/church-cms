"use client";
import React from 'react';
import cx from 'classnames';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

import styles from './Navigation.module.css';
import { NavItem } from './PresentationHeader';


type RenderProp<T extends string> = (text: T) => React.ReactNode;


interface NavigationProps {
  renderItem: RenderProp<string>;
  itemsInfo: NavItem[];
}

export const Navigation: React.FC<NavigationProps> = ({ renderItem, itemsInfo }) => {
  const pathname = usePathname();

  return (
    <nav className={styles.navigation}>
      {itemsInfo.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={cx(
            styles.navItem,
            pathname === item.href ? "font-bold mr-4" : "text-blue-500 mr-4",
          )}
        >
          {renderItem(item.text)}
        </Link>
      ))}
    </nav>
  );
};
