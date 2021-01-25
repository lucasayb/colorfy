import Head from 'next/head'
import Card from '../components/Card';
import styles from '../styles/Game.module.scss'

export default function Game() {
  const cards = [
    { color: "#00a8ff", note: "/piano_notes/37_a.mp3" },
    { color: "#9c88ff", note: "/piano_notes/38_b.mp3" },
    { color: "#fbc531", note: "/piano_notes/39_bb.mp3" },
    { color: "#4cd137", note: "/piano_notes/40_c.mp3" },
    { color: "#487eb0", note: "/piano_notes/41_c.mp3" },
    { color: "#e84118", note: "/piano_notes/42_d.mp3" },
    { color: "#8c7ae6", note: "/piano_notes/43_e.mp3" },
    { color: "#7f8fa6", note: "/piano_notes/44_eb.mp3" },
    { color: "#192a56", note: "/piano_notes/45_f.mp3" },
    { color: "#2f3640", note: "/piano_notes/46_f.mp3" },
    { color: "#c23616", note: "/piano_notes/47_g.mp3" },
    { color: "#273c75", note: "/piano_notes/48_g.mp3" },
  ]

  return (
    <div className={styles.colorBoard}>
      <Head>
        <title>Colorfy</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@300;400;700&display=swap" rel="stylesheet" />
      </Head>
      {cards.map((card, key) => <Card key={key} card={card} />)}
    </div>
  )
}
