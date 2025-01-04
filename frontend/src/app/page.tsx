import Image from "next/image";
import { Greet } from "./components/greet";

export default function Home() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#f4f4f4',
    }}>
      <Greet></Greet>
      <Image
        src="/church-logo.svg"
        alt="Логотип церкви"
        width={208}
        height={96}
        style={{ marginBottom: '1.5rem' }}
      />
      <h1 style={{
        fontSize: '2.5em',
        textAlign: 'center',
        color: '#333',
        marginBottom: '0.5rem',
      }}>Скоро здесь будет сайт</h1>
      <p style={{
        fontSize: '1.2em',
        textAlign: 'center',
        color: '#555',
      }}>Загляните позже за обновлениями</p>
      <p style={{
        fontSize: '0.8em',
        textAlign: 'center',
        color: '#555',
        marginTop: '2rem',
      }}>
        Местная религиозная организация Церковь Евангельских христиан-баптистов
      </p>
      <p style={{
        fontSize: '0.8em',
        textAlign: 'center',
        color: '#555',
      }}>
        г. Невинномысск Ставропольского края
      </p>
      <p style={{
        fontSize: '0.8em',
        textAlign: 'center',
        color: '#555',
      }}>
        ИНН 2631020933 / КПП 263101001
      </p>
    </div>
  );
}