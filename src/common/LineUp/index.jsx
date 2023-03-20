import { useSelector } from 'react-redux'

import {ArticleSection} from '../'
import styles from './index.module.css'

const LineUp = () => {
  const lineup = useSelector((state) => state.data.lineup)

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

export default LineUp