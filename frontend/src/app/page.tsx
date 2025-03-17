//export const dynamic = "force-static";
import { Metadata } from "next";

import Section from "@/components/atoms/section/Section";
import Stub from "@/components/organisms/stub/Stub";

import { favSettings } from "./faviconSettings";

export const metadata: Metadata = {
  title: "Дом молитвы",
  description: "Церковь Евангельских христиан-баптистов",
  icons: favSettings,
};


export default async function App() {
  return (
    <Section>
      <Stub />
    </Section>
  );
}

