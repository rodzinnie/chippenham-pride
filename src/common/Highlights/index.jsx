import styles from './index.module.css'
import { Button, Tile } from '../'
import { Link } from 'react-router-dom'
function Highlights({data}) {
  return (
    <div className={styles.root}>
      {data.map((e,i) => {
        return(
          <Link to={e.path} key={i} className={styles.link}>
            <Tile data={e} />
          </Link>
        )
      })}
    </div>
  )
}

export default Highlights