"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import styles from "./MenuNav.module.css";
import { useTheme } from "./ThemeProvider";
import { useLocale } from "./LocaleProvider";
import { FormattedMessage } from "react-intl";

export default function MenuNav() {
  const routeur = useRouter(); //import s'il faut utiliser route

  const [theme, setTheme] = useTheme();

  const handleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  const [locale, setLocale] = useLocale();
  const handleLocale = () => {
    if (locale === "fr") {
      setLocale("en");
    } else {
      setLocale("fr");
    }
  };
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <Link href="/">
            <FormattedMessage id="app.header.menu.lien1" />
          </Link>
        </li>
        <li>
          <Link href="/documents">
            <FormattedMessage id="app.header.menu.lien2" />
          </Link>
        </li>
        <li>
          <Link href="/contact">
            <FormattedMessage id="app.header.menu.lien3" />
          </Link>
        </li>
        <li>
          <Link href="/connexion">
            <FormattedMessage id="app.header.menu.lien4" />
          </Link>
        </li>
        <li>
          <Link href="/magasin">
            <FormattedMessage id="app.header.menu.lien5" />
          </Link>
        </li>

        {/* autre methode */}
        {/* <li onClick={() => routeur.push('/')}><FormattedMessage id='app.header.menu.lien1'/></li>
            <li onClick={() => routeur.push('/documents')}><FormattedMessage id='app.header.menu.lien2'/></li>
            <li onClick={() => routeur.push('/contact')}><FormattedMessage id='app.header.menu.lien3'/></li>
            <li onClick={() => routeur.push('/connexion')}><FormattedMessage id='app.header.menu.lien4'/></li> */}
      </ul>

      <label>
        Mode Sombre :
        <input
          type="checkbox"
          checked={theme === "dark"}
          onChange={handleTheme}
        />
      </label>

      <div>
        <label>
          EN : 
          <input
            type="checkbox"
            checked={locale === "en"}
            onChange={handleLocale}
          />
        </label>
      </div>
    </nav>
  );
}
