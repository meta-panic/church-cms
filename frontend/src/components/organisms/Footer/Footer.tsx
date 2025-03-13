"use client";
import React from "react";
import cx from "classnames";
import { usePathname } from "next/navigation";

import { Contacts } from "@/components/molecules/Contacts/Contacts";
import Link from "@/components/molecules/Link/Link";
import { isRootPath } from "@/utils/isRoot";
import Section from "@/components/atoms/section/Section";
import Separator from "@/components/atoms/Separator/Separator";
import Typography from "@/components/atoms/typography/Typography";
import { hasValue } from "@/utils/notMaybe";

import type { ComponentSharedAddress, ComponentSharedRichText, ComponentSharedSchedule, Maybe } from "@/types";

import ChurchLogo from "/public/church-logo.svg";
import styles from "./Footer.module.css";


interface FooterProps {
  contacts?: {
    taplink: string;
    telegram: string;
    vk: string;
    youtube: string;
    whatsup: string;
  };
  madeByLink?: string;
  primalBuilding?: ComponentSharedAddress;
  phone?: string;
  email?: string;
  serviceSchedule?: Maybe<ComponentSharedSchedule>[];
  footerNote?: Maybe<ComponentSharedRichText>[];
}

export const Footer: React.FC<FooterProps> = (
  { contacts, primalBuilding, phone, email, serviceSchedule, footerNote, madeByLink },
) => {

  const hasServiceSchedule = !!(serviceSchedule && serviceSchedule.length > 0 && hasValue(serviceSchedule));

  return (
    <footer id="contacts" className={cx("darkBlock", styles.footerContainer)}>
      <Section>
        <div className={styles.footer}>

          <div className={cx(styles.socialsContainer)}>
            {contacts &&
              <Contacts isWide {...contacts} renderIcon={({ defaultIcon }) => (<div className={cx(styles.socialIcon)}>{defaultIcon}</div>)} />
            }
          </div>

          <div className={cx(styles.churchInfoContainer)}>
            <div className={cx(styles.block)}>
              {
                hasServiceSchedule
                  ? <div className={styles.schedule}>
                    <Typography tag="body">Богослужения:</Typography>
                    <Typography tag="body">{serviceSchedule.map(s => s?.dayAndTime)}</Typography>
                  </div>
                  : null
              }
              {phone ? <Typography tag="body">Тел | {phone}</Typography> : null}
              {email ? <Typography tag="body">Почта | {email}</Typography> : null}
            </div>

            <div className={cx(styles.block)}>
              <ChurchLogo className={cx(styles.churchLogo)} />
              {primalBuilding && <div className={cx(styles.address)} >
                <Typography tag="body">г. {primalBuilding.city}</Typography>
                <Typography tag="body">ул. {primalBuilding.street} {primalBuilding.building}</Typography>
              </div>}
            </div>

          </div>


          <div key="separator" className={styles.separator}>
            <Separator />
          </div>

          {
            <div className={cx(styles.registrationContainer)}>
              {footerNote &&
                <div>{footerNote.map(note => <Typography key={note?.id} tag="body-mini">{note?.body}</Typography>)}
                </div>
              }
              {madeByLink && <Typography className={styles.websiteCredits} tag="body-mini">
                Сделано с 💕 by <Link isExternal tag="body-mini" to={madeByLink}>@paniculas</Link>
              </Typography>}
            </div>
          }

          {isRootPath(usePathname()) &&
            <div className={cx(styles.creditsContainer)}>
              <Typography tag="body-mini">
                Фото: <Link isExternal tag="body-mini" to={"https://commons.wikimedia.org/wiki/File:New_Finland_Church_From_Distance.jpg"}>New Finland Church From Distance</Link>, автор Powerbump, лицензия CC BY-SA 4.0
              </Typography>
            </div>
          }
        </div>

      </Section>
    </footer>
  );
};
