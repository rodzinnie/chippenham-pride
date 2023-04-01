import styles from './index.module.css'
import { Button, Tile } from '../'
import { Link } from 'react-router-dom'

function Highlights({data, internalLink = true}) {
  const colors = ['#ff000050', '#ffa50050', '#ffff0050', '#00800050', '#0000ff50', '#4b008250', '#ee82ee50']
  const colorGenerator = (colors, i) => {
    if(i >= colors.length) {
      return i - colors.length
    }
    return i
  }
  return (
    <div className={styles.root}>
      {data.map((e,i) => {
        const col = colorGenerator(colors, i)
        return(
          internalLink ? (<Link to={e.path} key={i} className={styles.link}>
            <Tile data={e} color={colors[col+3]} />
          </Link>) :
          (<a href={e.url} key={i}><Tile data={e} color={colors[col]} carousel={e.carousel} variant={e.variant}/></a>)
        )
      })}
    </div>
  )
}

export default Highlights