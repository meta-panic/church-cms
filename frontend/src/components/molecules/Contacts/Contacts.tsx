import React from 'react';
import cx from 'classnames';
import styles from './Contacts.module.css';

import InstagramLogo from '../../../../public/icons/socials/instagram.svg';
import TgLogo from '../../../../public/icons/socials/tg.svg';
import VkLogo from '../../../../public/icons/socials/vk.svg';
import YoutubeLogo from '../../../../public/icons/socials/youtube.svg';

type RenderProp<T> = (text: T) => React.ReactNode;


interface ContactsProps {
  instagram: string;
  telegram: string;
  vk: string;
  youtube: string;
  renderIcon: RenderProp<React.JSX.Element>;
}


export const Contacts: React.FC<ContactsProps> = ({ instagram, telegram, vk, youtube, renderIcon }) => {
  const socialLinks = [
    {
      logo: <TgLogo />,
      link: telegram,
      name: 'telegram',
    },
    {
      logo: <InstagramLogo />,
      link: instagram,
      name: 'instagram',
    },
    {
      logo: <VkLogo />,
      link: vk,
      name: 'vk',
    },
    {
      logo: <YoutubeLogo />,
      link: youtube,
      name: 'youtube',
    },
  ];

  return (
    <span className={styles.socials}>
      {socialLinks.map((social) => (
        <a
          key={social.name}
          href={social.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          {renderIcon(social.logo)}
        </a>
      ))}
    </span>
  );
};
