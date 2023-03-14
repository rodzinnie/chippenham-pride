import { useSelector } from 'react-redux'
import {ArticleSection} from '../../common/'
import styles from './index.module.css'

function Stalls() {
  const stalls = useSelector(state => state.data.stalls)
  return (
    <ArticleSection header={'Stalls'}>
      {stalls.map((e, i) => {
        return <div className={styles.stalls} key={i}>
          <div>{e.stallName} <span className={styles.small}>{e.type}</span></div>
        </div>
      })}
    </ArticleSection>
  )
}

export default Stalls