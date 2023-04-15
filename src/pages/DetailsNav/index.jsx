import { useSelector } from 'react-redux'

import {ArticleSection, LineUp} from '../../common'
import styles from './index.module.css'
import {data} from '../../data'
const DetailsNav = () => {
  const lineup = useSelector((state) => state.data.lineup)

  return (
    <>
      <LineUp lineup={lineup}/>
      <ArticleSection header={'the event'}>
        <div className={styles.list} dangerouslySetInnerHTML={{__html: data.eventDetailTexts.list}}></div>
      </ArticleSection>
    </>
  )
}

export default DetailsNav