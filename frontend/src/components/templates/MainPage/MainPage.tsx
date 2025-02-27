import React from "react";

import { Hero } from "@/components/organisms/hero/Hero";
import Section from "@/components/atoms/section/Section";
import { AboutUs } from "./components/AboutUs";
import { MainHeroContent } from "./components/MainHeroContent";
import { HowToBecomeAChristian } from "./components/HowToBecomeAChristian";
import srcBackgroundHeroImage from "/public/background.jpg";

import type {
  ComponentContentBlocksEvent,
  Global as ContactInfo,
  ComponentContentBlocksInfoBlock,
  Maybe,
} from "@/types";
import { NoEventsStub } from "./components/NoEventsStub";
import serverContext from "@/lib/serverContext";
import { EventsSection } from "./components/EventsSection";

import styles from "./MainPage.module.css";


interface MainPageProps {
  heroData: ComponentContentBlocksInfoBlock;
  aboutUs: ComponentContentBlocksInfoBlock;
  HTBChristian: {
    blockInfo: ComponentContentBlocksInfoBlock,
    phone: string,
    telegram: string,
  };
  events: Maybe<ComponentContentBlocksEvent>[],
  contacts: ContactInfo;
}

export const [getContacts, setContacts] = serverContext<ContactInfo | null>(null);

export const MainPage: React.FC<MainPageProps> = ({
  heroData, aboutUs, HTBChristian, events, contacts,
}) => {
  setContacts(contacts);

  return (
    <>
      <Hero
        src={srcBackgroundHeroImage}
        content={
          <MainHeroContent
            title={heroData.Title || "Добро пожаловать в дом молитвы"}
            description={heroData.description}
            button={heroData.Button} />
        }
      />

      <Section>
        <AboutUs aboutUs={aboutUs} />
      </Section>

      <Section className={styles.howToBecomeAChristianContainer}>
        <HowToBecomeAChristian
          title={HTBChristian.blockInfo.Title || "Как стать христианином?"}
          description={HTBChristian.blockInfo.description}
          button={HTBChristian.blockInfo.Button}
        />
      </Section>

      <Section className={styles.events}>
        {events.length > 0 ? <EventsSection events={events} /> : <NoEventsStub />}
      </Section>

    </>
  );
};
