import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.start}>
      <Head>
        <title>Início de jogo</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@300;400;700&display=swap" rel="stylesheet" />
      </Head>
      <Link href='/game'>
        <a className={styles.initGame}>Iniciar game</a>
      </Link>
    </div>
  )
}
