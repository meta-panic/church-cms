import Section from "@/components/atoms/section/Section";

import styles from "./page.module.css";


interface PageProps {
  params: Promise<{ slug: string }>;
}

const Page = async ({ params }: PageProps) => {
  const { slug } = await params;

  return <div className={styles.pageContent}>
    <Section>
      <div>Cтраница для {slug} служение</div>
    </Section>
  </div>;
};

export default Page;
