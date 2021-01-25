import styles from '../styles/Card.module.scss'
import { useRef } from 'react';

export default function Card({ card }){
  const cardNote = useRef('cardNote');
  const playNote = () => {
    cardNote.current.play()
  }

  return (
    <div onClick={playNote} className={styles.card} style={{ 'backgroundColor': card.color }}>
      <audio ref={cardNote}>
        <source src={card.note} type="audio/mpeg" />
        Your browser does not support the audio tag.
      </audio>
    </div>
  )
}