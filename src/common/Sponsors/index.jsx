import styles from './index.module.css'
function Sponsors({data}) {
  return (
    <section className={styles.sponsors}>
      {data.map((e, i) => {
        return(<a target='_blank' href={e.url}><img src={e.src} alt={e.alt} className={styles.sponsorImg} /></a>)
      })}
    </section>
  )
}

export default Sponsors