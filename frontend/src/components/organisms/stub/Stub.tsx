import Image from "next/image";

import Typography from "@/components/atoms/typography/Typography";

import styles from "./Stub.module.css";


const Stub = () => {
  return (
    <div className={styles.stubContainer}>
      <Image
        src="/church-logo.svg"
        alt="Логотип церкви"
        width={208}
        height={96}
        style={{ marginBottom: "1.5rem" }}
      />
      <Typography tag="H1">Скоро здесь будет сайт</Typography>
      <Typography tag="body">Загляните позже за обновлениями</Typography>

      <br />
      <br />
      <Typography tag="body-mini">Местная религиозная организация Церковь Евангельских христиан-баптистов</Typography>
      <Typography tag="body-mini">г. Невинномысск Ставропольского края</Typography>
      <Typography tag="body-mini">ИНН 2631020933 / КПП 263101001</Typography>
    </div>
  );
};

export default Stub;
