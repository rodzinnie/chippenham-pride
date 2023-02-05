import styles from './index.module.css'
import { Tile } from '../'
function Highlights({data}) {
  return (
    <div className={styles.root}>
      {data.map((e,i) => {
        return(
          <Tile data={e} />
        )
      })}
    </div>
  )
}

export default Highlights