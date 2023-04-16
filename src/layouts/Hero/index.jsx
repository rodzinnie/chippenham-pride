import React from 'react'
import { useNavigate } from 'react-router-dom'
import RollingBar from '../../common/RollingBar/index'
import { Button, GoFundMe, Header } from '../../common'
import styles from './index.module.css'
import arrow from '../../assets/arr.png'

function Hero() {
  const navigateTo = useNavigate()
  const handleClick = () => {
    navigateTo('/volunteer')
  }

  const moveToForm = () => {
    const path = window.location.pathname
    if(path != '/') {
      navigateTo('/')
      setTimeout(() => {
        const element = document.getElementById("walkRegistration");
        element.scrollIntoView({ behavior: "smooth" })
      }, 800)
    } else {
      const element = document.getElementById("walkRegistration");
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className={styles.root}>
      <Header />
      <section className={styles.section}>
        <div className={styles.shoutout}>
          <h1 className={styles.h1}>
            Join Proud Chippenham in celebrating its diversity!
          </h1>
          <p className={styles.date}>17 June 2023</p>
          <p className={styles.start}>Start: 1pm</p>
          <p className={styles.place}>Monkton Park, Chippenham</p>
        </div>
        <div className={styles.button}>
          <Button text={'Volunteer with us!'} variant='light' handleClick={handleClick}/>
        </div>
        <div className={styles.button}>
          <Button text={'Book tickets for the talks'} variant='light' handleClick={() => {window.location.href = "https://www.eventbrite.com/cc/chippenham-pride-trans-in-the-city-speaker-stage-2018999"}}/>
        </div>
        <div className={styles.button}>
          <Button text={'Register for the Walk'} variant='light' handleClick={moveToForm}/>
        </div>
        <RollingBar />
      </section>
    </div>
  )
}

export default Hero
