import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import Card from '../components/Card';

export default function Home() {
  const colors = [
    "#00a8ff",
    "#9c88ff",
    "#fbc531",
    "#4cd137",
    "#487eb0",
    "#e84118",
    "#8c7ae6",
    "#7f8fa6",
    "#192a56",
    "#2f3640",
    "#c23616",
    "#273c75",
  ]

  return (
    <div className={styles.colorBoard}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {colors.map((color, key) => <Card key={key} color={color} />)}
    </div>
  )
}
