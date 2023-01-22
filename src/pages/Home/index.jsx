import React from 'react'

import styles from './index.module.css'
import { Form, ArticleSection, Button, GoFundMe } from '../../common'
import bingo from '../../assets/bingo.mp4'
import map from '../../assets/pridemap.jpg'

function Home() {
  const handleClick = (e) => {
    window.location.assign('https://thelittleboxoffice.com/neeld/event/view/170166')
  }

  return (
    <section className={styles.root}>
      <ArticleSection  header='Register your attendance!'>
        <div className={styles.form}>
          <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSePajiRdSnX4Xc5Uw8YIVQ83njxqAMfps2iUiSWAKqNkDsiXg/viewform?embedded=true" width="80%" height="1050" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
        </div>
      </ArticleSection>
      <ArticleSection header='Donate!' background>
        <p className={styles.donateText}>We organise our Pride pro bono. But we can't fund it 100% ourselves. Please help us to get our Pride up and running. Thanks, see you on our parade!</p>
        <GoFundMe />
      </ArticleSection>
      <ArticleSection header='The Event'>
        <h2 className={styles.subTitle}>The plan</h2>
        <p>We are meeting by The Rose and Crown pub, where we start our march at 1pm. We will walk down the Town Market to get to the main stage in the Monkton Park. </p>
        <h2 className={styles.subTitle}>See the map</h2>
        <div className={styles.mapWrapper}>
          <img src={map} className={styles.map}></img>
        </div>
      </ArticleSection>

    </section>
  )
}

export default Home