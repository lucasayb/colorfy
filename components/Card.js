import styles from '../styles/Card.module.scss'

export default function Card({ color }){
  return (
    <div className={styles.card} style={{ 'backgroundColor': color }}>

    </div>
  )
}