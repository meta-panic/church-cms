import React, { JSX } from "react";
import cx from "classnames";


import TaplinkIcon from "../../../../public/icons/socials/taplink.svg";
import TgIcon from "../../../../public/icons/socials/tg.svg";
import VkIcon from "../../../../public/icons/socials/vk.svg";
import YoutubeIcon from "../../../../public/icons/socials/youtube.svg";
import WhatsupIcon from "../../../../public/icons/socials/whatsup.svg";
import { Socials } from "@/components/types";

import styles from "./Contacts.module.css";


type RenderProp<T> = (props: T) => React.ReactNode;


interface ContactsProps {
  taplink: string;
  telegram: string;
  vk: string;
  youtube: string;
  whatsup: string;
  isWide?: boolean;
  renderIcon: RenderProp<{ defaultIcon: React.JSX.Element, socialName: Socials }>;
}

export const Contacts: React.FC<ContactsProps> = ({ taplink, telegram, vk, youtube, whatsup, renderIcon, isWide }) => {
  const socialLinks: { logo: JSX.Element, link: string, name: Socials }[] = [
    {
      logo: <TgIcon />,
      link: telegram,
      name: "telegram",
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
    {
      logo: <TaplinkIcon />,
      link: taplink,
      name: "taplink",
    },
  ];

  return (
    <span className={cx(styles.socials, { [styles.wide]: !!isWide })}>
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
