import {ArticleSection, LineUp} from '../../common'
import styles from './index.module.css'
import {data} from '../../data'
const DetailsNav = () => {
  return (
    <>
      <ArticleSection header={'the event'}>
        <div className={styles.list} dangerouslySetInnerHTML={{__html: data.eventDetailTexts.list}}></div>
      </ArticleSection>
      <LineUp />
    </>
  )
}

export default DetailsNav