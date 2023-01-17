import styles from './index.module.css'
import titc from '../../assets/titc.png'
import winemo from '../../assets/winemonkey.png'
import frankie from '../../assets/frankielane.png'
import darkObs from '../../assets/darkobsession.jpg'

function Sponsors() {
  return (
    <div>
      <section className={styles.sponsors}>
      <a href='https://www.transinthecity.co.uk/'><img src={titc} alt="trans in the city" className={styles.sponsorImg} /></a>
      <a href='https://instagram.com/darkobsessiontattoo?igshid=YmMyMTA2M2Y='><img src={darkObs} alt="dark" className={styles.sponsorImg} /> </a>
      <a href=' https://www.winemonkey.co.uk'><img src={winemo} alt="wine monkey logo" className={styles.sponsorImg} /> </a>
      <a href='https://frankielane.co.uk/'><img src={frankie} alt="frankie lane logo" className={styles.sponsorImg} /> </a>
      </section>
    </div>
  )
}

export default Sponsors