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
      <ArticleSection  header='Comedy Drag Bingo!'>
        <div className={styles.eventCard}>
          <video className={styles.eventMedia} autoPlay muted loop>
            <source src={bingo} type='video/mp4' className={styles.video}/>
          </video>
          <div className={styles.overlay}>
            <div className={styles.eventCardButton}>
              <Button text='Get Tickets' variant='light' handleClick={handleClick}></Button>
            </div>
          </div>
        </div>
        <div className={styles.eventInfo}>
          <h2 className={styles.subTitle}>Drag Bingo for Chippenham Pride</h2>
          <p className={styles.cardInfo}><b>When: </b>15th of Januray 2023</p>
          <p className={styles.cardInfo}><b>Where: </b>The Neeld</p>
          <p className={styles.cardInfo}><b>Info: </b>After selling out all over the UK, Charlie Hides is bringing his shiny balls to Chippenham. An outrageously fun event hosted by Internationally Famous Drag Queen Charlie Hides. With stand-up comedy, games and prizes to be one!
            Guaranteed good time, snatch up your tickets fast for eyes down!. “Dame Charlie Hides, you are one fierce queen”- Ru Paul. “Outrageously talented” – Attitude Magazine. <br></br>Fundraising raffle and auction for Chippenham Pride 2023.<br></br>
            <b>Food included by Boston Burger.</b><br></br>
            Bingo sheets included in price.<br></br>
            <b>Tickets £35.</b> <br ></br>
            Over 18s only. <br></br>Duration: 4 hours. <br></br><span className={styles.smallPrint}>Please contact the venue for any access requirements.  Seating will be unreserved, cabaret style with a maximum of 8 people per table.Tickets are also available through our Box Office on 01249 446699, or at the Town Hall.Tickets are non-refundable unless this event is cancelled or postponed</span>
          </p>
        </div>
      </ArticleSection>
      <ArticleSection header='Donate!' background>
        <p className={styles.donateText}>We do our Pride pro bono. But we can't fund it 100% ourselves. Please help us to get our Pride up and running. Thanks, see you on our parade!</p>
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