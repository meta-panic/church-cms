"use client";
import React from "react";

import { SideHTBaChristianButton } from "../../organisms/SideHTBaChristianButton/SideHTBaChristianButton";
import { Doctrine } from "./components/Doctrine";
import { Theses } from "./components/Theses";
import { MoreInfo } from "./components/MoreInfo";

import type { Maybe, ComponentContentBlocksInfoBlock, ComponentSharedButton } from "@/types";

import { Hero } from "./components/Hero";


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

      <Hero
        title={hero?.Title || "Во что мы верим"}
        description={hero?.description}
      />

      <SideHTBaChristianButton />

      <Doctrine title={mainSymbol?.Title || "Никео-Цареградский символ веры"} description={mainSymbol?.description} />
      <Theses title={theses?.Title || "Знаменитые 5 тезисов протестантизма:"} theses={theses?.description} />
      <MoreInfo button={findMoreInfoBlock} description={"Тут вы можете найти всю информацию по богословским позициям протестантизма:"} />

    </>
  );
};
