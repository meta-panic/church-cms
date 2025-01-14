



import { Hero } from "@/components/organisms/hero/Hero";


import styles from "./page.module.css";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Дом молитвы",
  description: "Церковь Евангельских христиан-баптистов",
  icons: {
    icon: { url: "/favicon.png" },
  },
};


export default async function Home() {
  return (
    <>
      <Hero />

      <section className={styles.section}>
        <div style={{ backgroundColor: "red" }}>section-1</div>
      </section>

      <section className={styles.section}>
        <div style={{ backgroundColor: "red", color: "green" }}>section-2</div>
      </section>
    </>
  );
}
