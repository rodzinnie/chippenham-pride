import {ArticleSection} from '../../common/'
import styles from './index.module.css'

import {stalls} from '../data'
function Stalls() {
  return (
    <ArticleSection header={'Stalls'}>
      {stalls.map((e, i) => {
        return <div className={styles.stalls}>
          <div>{e.stallName} <span>{e.type}</span></div>
        </div>
      })}
    </ArticleSection>
  )
}

export default Stalls