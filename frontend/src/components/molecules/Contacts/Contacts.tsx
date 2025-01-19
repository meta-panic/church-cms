import React from "react";
import styles from "./Contacts.module.css";

import InstagramIcon from "../../../../public/icons/socials/instagram.svg";
import TgIcon from "../../../../public/icons/socials/tg.svg";
import VkIcon from "../../../../public/icons/socials/vk.svg";
import YoutubeIcon from "../../../../public/icons/socials/youtube.svg";

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
      logo: <TgIcon />,
      link: telegram,
      name: "telegram",
    },
    {
      logo: <InstagramIcon />,
      link: instagram,
      name: "instagram",
    },
    {
      logo: <VkIcon />,
      link: vk,
      name: "vk",
    },
    {
      logo: <YoutubeIcon />,
      link: youtube,
      name: "youtube",
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
