import {Carousel} from '../'
import styles from './index.module.css'

function Tile({data, color = '#ee82ee'}) {
  return (
    <div className={styles.root} style={{backgroundColor: color}}>
      <div className={styles.carousel}><Carousel slides={data.slides} timer='3000'/></div>
      <h2 className={styles.heading}>{data.title}</h2>
      <p className={styles.para}>{data.text}</p>
    </div>
  )
}

export default Tile