import Image from "next/image";

import "../styles/reset.css";
import "../styles/colours.css";
import "../styles/semantic.css";
import "../styles/sizes.css";
import "../styles/globals.css";

import Typography from "@/components/atoms/typography/Typography";
import { isDebug } from "@/utils/isDebug";


const Stub = () => {
  return (<div style={{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f4f4f4',
  }}
  >
    <Image
      src="/church-logo.svg"
      alt="Логотип церкви"
      width={208}
      height={96}
      style={{ marginBottom: '1.5rem' }}
    />
    <Typography tag="H1">Скоро здесь будет сайт</Typography>
    <Typography tag="body">Загляните позже за обновлениями</Typography>

    <br />
    <br />
    <Typography tag="body-mini">Местная религиозная организация Церковь Евангельских христиан-баптистов</Typography>
    <Typography tag="body-mini">г. Невинномысск Ставропольского края</Typography>
    <Typography tag="body-mini">ИНН 2631020933 / КПП 263101001</Typography>
  </div >
  );
};

export default async function Home() {
  const isDebugMode = await isDebug();

  if (!isDebugMode) {
    console.log("Debug: Not running in debug mode");
    return <Stub />;
  }

  console.log("Debug: Running in debug mode");
  return (<div>test</div>);
}
