export const dynamic = "force-static";

import Section from "@/components/atoms/section/Section";

import styles from "./page.module.css";

export default async function Videos() {

  return (
    <div className={styles.pageContent}>
      <Section>
        Видео
      </Section>
    </div>
  );
}

