import React from 'react'
import { Button } from '../../common';
import styles from './Support.module.css'
import paypal from '../../assets/paypal.png'
import gofundme from '../../assets/gofundme.png'

function Support() {
  
  const handleClick = () => {
    window.location.assign('https://www.gofundme.com/f/chippenham-pride-2023')
  }

  return (
    <div className={styles.root}>
        <div className={styles.left}>
            <div className={styles.shoutout}>Help us support the pride!</div>
            <Button text='Learn more about our spendings' variant='light' />
        </div>
        <div className={styles.right}>
            <Button text='Donate with PayPal' variant='dark' className={styles.button}/>
            <img src={paypal} />
            <Button text='Donate with Go Fund Me' variant='dark'  className={styles.button} handleClick={handleClick}/>
            <img src={gofundme} />
        </div>
    </div>
  )
}

export default Support