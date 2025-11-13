'use client'
import Image from "next/image";
import Logo from "@/public/react.webp";
import styles from "./Header.module.css";
import MenuNav from "./MenuNav"
import { useTheme } from "./ThemeProvider";
export default function Header({setPage}) {
  const [theme, setTheme] = useTheme();
  return (
    <header className={styles.header+ ' '+(theme === 'light' ? styles.light : styles.dark)}>
      <div className={styles.title}>
        <Image src={Logo} alt="Logo React" width={40} />
        <h1>Biblio-app</h1>
      </div>
        <MenuNav setPage = {setPage}/>
      
    </header>
  );
}
