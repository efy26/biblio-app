'use client'
import styles from './Footer.module.css'
import { useTheme } from './ThemeProvider'
export default function Header() {
    const [theme, setTheme] = useTheme()
return <footer className={styles.header+ ' '+(theme === 'light' ? styles.light : styles.dark)}>
        <div className={styles.nav}>
            <div>
                @Fait maison | Gatineau, Canada
            </div>
            <div>
                Développé par mr_efy
            </div>
        </div>
    </footer>
}