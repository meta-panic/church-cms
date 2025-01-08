"use client";
import React, { useEffect, useState } from 'react';
import styles from './PresentationHeader.module.css';
import Typography from '@/components/atoms/typography/Typography';

import cx from "classnames";
import ChurchLogo from '../../../../public/church-logo.svg';

import { Navigation } from './Navigation';
import { Contacts } from '@/components/molecules/Contacts/Contacts';
import Section from '@/components/atoms/section/Section';
import { NavItem } from '.';


interface HeaderProps {
  navItems: NavItem[];
  className?: string;
}

export const PresentationHeader: React.FC<HeaderProps> = ({ navItems }) => {
  return (
    <Section>
      <div className={styles.presentationHeader}>
        <ChurchLogo className={cx(styles.churchLogo)} />

        <div className={styles.onlyDesktop}>
          <Navigation
            itemsInfo={navItems}
            renderItem={(text) => (<Typography
              tag="body"
              className={styles.navigatonItem}
              isColoredBlock
            >
              {text}
            </Typography>
            )}
          />
        </div>

        <div className={cx(styles.contacts, styles.onlyDesktop)}>
          <Contacts
            instagram={'https://www.instagram.com/'}
            telegram={''}
            vk={''}
            youtube={''}
            renderIcon={(logo) => (<div className={cx(styles.navigatonItem)}>{logo}</div>)}
          />
        </div>
      </div>
    </Section>
  );
};


