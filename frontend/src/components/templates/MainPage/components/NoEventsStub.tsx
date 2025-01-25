import { JSX } from "react";

import Typography from "@/components/atoms/typography/Typography";
import { Contacts } from "@/components/molecules/Contacts/Contacts";
import { Socials } from "@/components/types";

import { getContacts } from "../MainPage";
import InstagramIcon from "/public/icons/socials/outline/instagram.svg";
import TgIcon from "/public/icons/socials/outline/tg.svg";
import VkIcon from "/public/icons/socials/outline/vk.svg";
import YoutubeIcon from "/public/icons/socials/outline/youtube.svg";
import WhatsupIcon from "/public/icons/socials/outline/whatsup.svg";

import styles from "./NoEventsStub.module.css";


export const NoEventsStub: React.FC = () => {
  const contacts = getContacts();

  return (
    <div className={styles.stubContainer}>
      <div className={styles.title}>
        <Typography tag="H1">Пока нет мероприятий</Typography>
      </div>
      <div className={styles.text}>
        Но всегда можно узнать о будущих событиях в наших соцсетях:
      </div>
      <div className={styles.iconsContainer}>
        {contacts && <Contacts
          instagram={""}  // TODO: add instagram
          telegram={contacts.telegram}
          vk={contacts.vk}
          youtube={contacts.youtube}
          whatsup={""} // TODO: add whatsup
          renderIcon={({ defaultIcon, socialName }) => {
            const icon = getIcon(defaultIcon, socialName);

            return <div>{icon}</div>;
          }}
        />}
      </div>
    </div>
  );
};

function getIcon(defaultIcon: JSX.Element, socialName: Socials): JSX.Element {
  let icon;

  switch (socialName) {
    case "instagram":
      icon = <InstagramIcon />;
      break;
    case "telegram":
      icon = <TgIcon />;
      break;
    case "vk":
      icon = <VkIcon />;
      break;
    case "youtube":
      icon = <YoutubeIcon />;
      break;
    case "whatsup":
      icon = <WhatsupIcon />;
      break;
    default:
      icon = defaultIcon;
  }

  return icon;
}
