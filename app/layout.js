
import Header from '@/components/Header';
import Footer from '@/components/Footer'
import Documents from '@/components/Documents';
import Contact from '@/components/Contact';
import Connexion  from '@/components/Connexion';
import { ThemeProvider } from '@/components/ThemeProvider';
import { LocaleProvider } from '@/components/LocaleProvider';
import { Inter } from 'next/font/google';
import './globals.css';
import Accueil  from '@/components/Accueil';
import styles from './layout.module.css'
const inter = Inter({ subsets: ['latin'] });
export const metadata = {
    title: 'biblio-app | Accueil',
    description: 'Site web présentant les fonctionnalités de React et Next.js.',
    openGraph: {
      title: 'biblio-app | Accueil',
      description: 'Site web présentant les fonctionnalités de React et Next.js.',
      images: ['./react.webp']
    }
}
export default function RootLayout({ children }) {

  return (
    <html lang='en'>
      <body className={inter.className+ ' '+styles.body}>
        <LocaleProvider>
          <ThemeProvider>
        <Header />
        <main>
          { children }
        </main>
        <Footer/>
        </ThemeProvider>
        </LocaleProvider>
      </body>

    </html>
  );
}
