import React, { JSX } from "react";
import styles from "./Contacts.module.css";

import InstagramIcon from "../../../../public/icons/socials/instagram.svg";
import TgIcon from "../../../../public/icons/socials/tg.svg";
import VkIcon from "../../../../public/icons/socials/vk.svg";
import YoutubeIcon from "../../../../public/icons/socials/youtube.svg";
import WhatsupIcon from "../../../../public/icons/socials/whatsup.svg";
import { Socials } from "@/components/types";


type RenderProp<T> = (props: T) => React.ReactNode;


interface ContactsProps {
  instagram: string;
  telegram: string;
  vk: string;
  youtube: string;
  whatsup: string;
  renderIcon: RenderProp<{ defaultIcon: React.JSX.Element, socialName: Socials }>;
}

export const Contacts: React.FC<ContactsProps> = ({ instagram, telegram, vk, youtube, whatsup, renderIcon }) => {
  const socialLinks: { logo: JSX.Element, link: string, name: Socials }[] = [
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
    {
      logo: <WhatsupIcon />,
      link: whatsup,
      name: "whatsup",
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
          {renderIcon({ defaultIcon: social.logo, socialName: social.name })}
        </a>
      ))}
    </span>
  );
};
