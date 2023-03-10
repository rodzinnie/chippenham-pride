import styles from './index.module.css'
import { Button, Tile } from '../'
import { Link } from 'react-router-dom'
function Highlights({data, internalLink = true}) {
  return (
    <div className={styles.root}>
      {data.map((e,i) => {
        return(
          internalLink ? (<Link to={e.path} key={i} className={styles.link}>
            <Tile data={e} />
          </Link>) :
          (<a href={e.url} key={i}><Tile data={e} /></a>)
        )
      })}
    </div>
  )
}

export default Highlights