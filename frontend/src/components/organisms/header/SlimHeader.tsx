"use client";
import React, { useEffect, useState } from 'react';
import styles from './SlimHeader.module.css';
import Typography from '@/components/atoms/typography/Typography';

import cx from "classnames";

import { Navigation } from './Navigation';
import { Contacts } from '@/components/molecules/Contacts/Contacts';
import Section from '@/components/atoms/section/Section';

export type NavItem = {
  href: string;
  text: string;
};

interface SlimHeaderProps {
  navItems: NavItem[];
  className?: string;
}

export const SlimHeader: React.FC<SlimHeaderProps> = ({ navItems }) => {
  return (
    <div >
      <Section className={styles.slimHeaderWrapper}>
        <div className={styles.slimHeader}>
          <div className={styles.onlyDesktop}>
            <Navigation
              itemsInfo={navItems}
              renderItem={(text) => {
                return <Typography
                  tag="body"
                  className={styles.navigatonItem}
                >
                  {text}
                </Typography>;
              }}
            />
          </div>

          <div className={cx(styles.contacts, styles.onlyDesktop)}>
            <Contacts
              instagram={'https://www.instagram.com/'}
              telegram={''}
              vk={''}
              youtube={''}
              renderIcon={(logo) => {
                return <div className={cx(styles.navigatonItem)}>{logo}</div>;
              }}
            />
          </div>
        </div>
      </Section>
    </div>
  );
};


