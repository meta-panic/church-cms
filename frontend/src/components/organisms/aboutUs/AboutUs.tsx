import Typography from "@/components/atoms/typography/Typography";
import Separator from "@/components/atoms/Separator/Separator";
import { ComponentContentBlocksInfoBlock } from "@/types";

import styles from "./AboutUs.module.css";


interface AboutUsProps {
  aboutUs: ComponentContentBlocksInfoBlock;
}

export const AboutUs: React.FC<AboutUsProps> = ({ aboutUs }) => {
  if (!aboutUs.description || !Array.isArray(aboutUs.description)) {
    return;
  }

  const lastElement = aboutUs.description[aboutUs.description.length - 1];
  const allButLast = aboutUs.description.slice(0, -1);

  return (
    <div className={styles.aboutUsContainer}>
      <div>
        <Typography tag="H1">{aboutUs.Title}</Typography>
      </div>
      <div className={styles.descriptionPassages}>
        {allButLast.map((description) => {
          return <div key={description?.id}><Typography tag="body">{description?.body}</Typography></div>;
        })}

        <div key="separator" className={styles.separator}>
          <Separator />
        </div>

        <div key={lastElement?.id}>
          <Typography tag="body">
            {lastElement?.body}
          </Typography>

        </div>
      </div>
    </div>

  );
};

