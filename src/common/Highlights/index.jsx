import styles from './index.module.css'
import { Button, Tile } from '../'
import { Link } from 'react-router-dom'
function Highlights({data}) {
  return (
    <div className={styles.root}>
      {data.map((e,i) => {
        console.log(e)
        return(
          <Link to={e.path} key={i}>
            <Tile data={e} />
          </Link>
        )
      })}
    </div>
  )
}

export default Highlights