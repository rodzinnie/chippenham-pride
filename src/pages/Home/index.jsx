import React from 'react'

import styles from './index.module.css'
import { ArticleSection, Button, GoFundMe, Highlights, MerchLink } from '../../common'
import {data} from './data'

function Home() {
  const handleClick = (e) => {
    window.open('https://sticky.to/go/flow/a90fbb2a-6695-4dc9-882f-649eaf617844', '_blank').focus()
  }

  return (
    <section className={styles.root}>
      <ArticleSection header='Whats&#39;on'>
        <Highlights data={data}/>
      </ArticleSection>
      <ArticleSection header='Donate!' background>
        <p className={styles.donateText}>We organise our Pride pro bono. But we can't fund it 100% ourselves. Please help us to get our Pride up and running. Thanks, see you on our parade!</p>
        <GoFundMe text='donate'/>
      </ArticleSection>
      <MerchLink />
      {/* <Programme /> */}

    </section>
  )
}

export default Home
