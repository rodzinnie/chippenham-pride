import {ArticleSection} from '../../common'
import styles from './index.module.css'
import { lineup } from './data'

const DetailsNav = () => {
  return (
    <ArticleSection header={'The Lineup!'}>
      <h3 className={styles.subhead}>{lineup[0].place}</h3>
      <ul className={styles.list}>
      {lineup[0].list.map((e, i) => {
          return (
            <li key={i} className={styles.li}>
              <span className={styles.time}>{e.time}</span>
              <span className={styles.artist}> {e.artist}</span>
            </li>
          )
        })}
      </ul>
    </ArticleSection>
  )
}

export default DetailsNav