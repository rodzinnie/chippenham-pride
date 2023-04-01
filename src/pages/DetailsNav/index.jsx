import {ArticleSection, LineUp} from '../../common'
import styles from './index.module.css'

const DetailsNav = () => {
  return (
    <>
      <ArticleSection header={'the event'}>

        <p>Chippenham pride has been a year in the making. The team (made up completely by volunteers) have been busy working on bringing you the best of local entertainment, small business retailers, inspirational speakers and hilarious comedy acts. </p>
        <br />
        <p>It’s our aim to provide Chippenham with not only its first ever pride event but also a family event that welcomes everyone no matter what their gender, sexuality, colour or age. </p>
        <br />
        <ul className={styles.list}>
          We invite you to explore our website where you’ll find more details on:
          <li className={styles.listItem}>The acts, their bios and stage times. </li>
          <li className={styles.listItem}>You’ll see our amazing small business providing you with retail stalls. </li>
          <li className={styles.listItem}>There’s help and information on our well-being tab with links to help you get the support at the touch of a button. </li>
          <li className={styles.listItem}>See the awesome bios of our inspiring speakers and their stage times</li>
          <li className={styles.listItem}>Purchase our unique merchandise ahead of the day</li>
          <li className={styles.listItem}>And see who our awesome sponsors and supporters are</li>
        </ul>
      </ArticleSection>
      <LineUp />
    </>
  )
}

export default DetailsNav