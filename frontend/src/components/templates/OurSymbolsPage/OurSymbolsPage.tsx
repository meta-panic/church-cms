import React from "react";

import { Hero as HeroComponent } from "@/components/organisms/hero/Hero";
import { HeroContent } from "../../organisms/hero/components/HeroContent";
import { Doctrine } from "./components/Doctrine";
import { Theses } from "./components/Theses";
import { MoreInfo } from "./components/MoreInfo";

import type { Maybe, ComponentContentBlocksInfoBlock, ComponentSharedButton } from "@/types";

import srcBackgroundHeroImage from "./MilkyWay.png";


interface OurSymbolsPageProps {
  hero: Maybe<ComponentContentBlocksInfoBlock> | undefined;
  mainSymbol: Maybe<ComponentContentBlocksInfoBlock> | undefined;
  theses: Maybe<ComponentContentBlocksInfoBlock> | undefined;
  findMoreInfoBlock: Maybe<ComponentSharedButton> | undefined;
}

export const OurSymbolsPage: React.FC<OurSymbolsPageProps> = ({
  hero, mainSymbol, theses, findMoreInfoBlock,
}) => {

  return (
    <>

      <HeroComponent
        fullHeight={true}
        src={srcBackgroundHeroImage}
        imageAlt="Ночное звездное небо"
        content={hero && <HeroContent
          title={hero.Title || "Во что мы верим"}
          description={hero?.description}
        />}
      />

      <Doctrine title={mainSymbol?.Title || "Никео-Цареградский символ веры"} description={mainSymbol?.description} />
      <Theses title={theses?.Title || "Знаменитые 5 тезисов протестантизма:"} theses={theses?.description} />
      <MoreInfo button={findMoreInfoBlock} description={"Тут вы можете найти всю информацию по богословским позициям протестантизма:"} />

    </>
  );
};
