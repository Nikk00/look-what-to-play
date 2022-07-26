import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import Logo from '/public/logo-nl.png'

export default function Footer(){
    return(
        <footer className={styles.footer}>
        <a
          href="https://nicolasluza.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src={Logo} alt="Logo" width={32} height={28} />
          </span>
        </a>
        <a
          href="https://www.freetogame.com/api-doc"
          target="_blank"
          rel="noopener noreferrer"
        >
          API by Freetogame
        </a>
      </footer>
    )
}