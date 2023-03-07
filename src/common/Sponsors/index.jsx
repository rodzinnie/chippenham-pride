import styles from './index.module.css'
import { ArticleSection } from '../'

function Sponsors({data, header}) {
  return (
    <ArticleSection header={header}>
      <div className={styles.sponsors}>
      {data.map((e, i) => {
        return(<a target='_blank' href={e.url} key={i}><img src={e.src} alt={e.alt} className={styles.sponsorImg} /></a>)
      })}
      </div>
    </ArticleSection>
  )
}

export default Sponsors