import styles from './index.module.css'
import { Button, Tile } from '../'
import { Link } from 'react-router-dom'
function Highlights({data, link = true}) {
  return (
    <div className={styles.root}>
      {data.map((e,i) => {
        return(
          link ? (<Link to={e.path} key={i} className={styles.link}>
            <Tile data={e} />
          </Link>) :
          (<Tile data={e} key={i} />)
        )
      })}
    </div>
  )
}

export default Highlights