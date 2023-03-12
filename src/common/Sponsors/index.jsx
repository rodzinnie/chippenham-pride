import styles from './index.module.css'
import { ArticleSection } from '../'

function Sponsors({data, header}) {
  const platinum = data.filter((e) => e.level == 0)
  const gold = data.filter((e) => e.level == 1)
  const other = data.filter((e) => e.level > 1)
  return (
    <ArticleSection header={header}>
      <div className={styles.sponsors}>
      {platinum.map((e, i) => {
        return(<a target='_blank' href={e.url} key={i}><img src={e.src} alt={e.alt} className={styles.sponsorImg} /></a>)
      })}
      </div>
      <span className={styles.goldTitle}>Other Sponsors</span>
      <div className={styles.sponsors}>
      {gold.map((e, i) => {
        return(<a target='_blank' href={e.url} key={i} className={styles.wrapper}><img src={e.src} alt={e.alt} className={styles.sponsorImgGold} /></a>)
      })}
      </div>
      <div className={styles.sponsors}>
      {other.map((e, i) => {
        return(<a target='_blank' href={e.url} key={i} className={styles.wrapper}><img src={e.src} alt={e.alt} className={styles.sponsorImgGold} /></a>)
      })}
      </div>
    </ArticleSection>
  )
}

export default Sponsors