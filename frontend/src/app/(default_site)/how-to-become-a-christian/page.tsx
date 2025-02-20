export const dynamic = "force-static";

import Section from "@/components/atoms/section/Section";

import styles from "./page.module.css";

export default async function App() {
  return (
    <div className={styles.pageContent}>
      <Section>
        Как стать христианином?
      </Section>
    </div>
  );
}

