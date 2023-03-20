import {Button, Carousel} from '../'
import styles from './index.module.css'

function Tile({data, color = '#ee82ee', carousel = true, variant, button = false}) {
  const handleClick = (e) => {
    window.open(data.url, '_blank').focus()
  }
  return (
    <div className={variant ? styles[variant] : styles.root} style={{backgroundColor: color}}>
    {/*TODO this needs to be changed to an image for now.   */}
      {carousel ? <div className={styles.carousel}><Carousel slides={data.slides} timer='3000'/></div> :
      <div className={styles.imageWrapper}>
        <img src={data.img} alt={data.alt} className={styles.image} />
        <div className={styles.button}><Button text={data.button} handleClick={handleClick} variant={'darkSm'}></Button></div>
      </div>}
      {data.title && <h2 className={styles.heading}>{data.title}</h2>}
      <p className={styles.para}>{data.text}</p>
    </div>
  )
}

export default Tile