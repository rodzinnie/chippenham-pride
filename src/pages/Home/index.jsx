import React from 'react'

import styles from './index.module.css'
import { Form, ArticleSection, Button, GoFundMe, Highlights } from '../../common'
import bingo from '../../assets/bingo.mp4'
import {data, other} from './data'

function Home() {
  const handleClick = (e) => {
    window.open('https://sticky.to/go/flow/a90fbb2a-6695-4dc9-882f-649eaf617844', '_blank').focus()
  }

  return (
    <section className={styles.root}>
      <ArticleSection header='Whats&#39;on'>
        <Highlights data={data}/>
      </ArticleSection>
      <ArticleSection  header='Register your attendance!'>
        <div className={styles.form}>
          <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSePajiRdSnX4Xc5Uw8YIVQ83njxqAMfps2iUiSWAKqNkDsiXg/viewform?embedded=true" width="100%" height="500px" frameBorder="0" marginHeight="0" marginWidth="0">Loading…</iframe>
        </div>
        <div className={styles.form}>
        <p className={styles.fiver}>
        Donate £5 and get a range of benefits and a free entry to the official Pride After Party!
        </p>
          <Button text={'Give Pride a fiver!'} handleClick={handleClick} variant='dark'></Button>
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
          <img src={other.map.src} alt={other.map.alt} className={styles.map}></img>
        </div>
      </ArticleSection>

    </section>
  )
}

export default Home
