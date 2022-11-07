import React from 'react'
import ReactPlayer from 'react-player'

import styles from './index.module.css'
import { Form, ArticleSection, Button, GoFundMe } from '../../common'
import logo from '../../assets/logo.png'
import dragBingo from '../../assets/dragbingo.jpg'
import bingo from '../../assets/bingo.mp4'

function Home() {
  return (
    <section className={styles.root}>
      
      <ArticleSection  header='Comedy Drag Bingo!'>
        <div className={styles.eventCard}>
          <video className={styles.eventInfo} autoPlay muted loop>
            <source src={bingo} type='video/mp4' />
          </video>
          <div className={styles.eventCardButton}>
            {/* <Button text='Get Tickets' variant='light'></Button> */}
          </div>
        </div>
      </ArticleSection>
      <ArticleSection header='Donate!'>
        <p >We do our Pride pro bono. But we can't fund it 100% ourselves. Please help us to get our Pride up and running. Thanks, see you on our parade!</p>
        <GoFundMe />

      </ArticleSection>
    </section>
  )
}

export default Home