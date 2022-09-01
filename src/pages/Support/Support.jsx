import React from 'react'
import { Button } from '../../common';
import styles from './Support.module.css'
function Support() {
  return (
    <div className={styles.root}>
        <div className={styles.left}>
            <div className={styles.shoutout}>Help us support the pride!</div>
            <Button text='Learn more about our spendings' />
        </div>
        <div className={styles.right}>
            <Button text='Donate with:' />
            <img></img>
            <Button text='Donate with:' />
            <img></img>
        </div>
    </div>
  )
}

export default Support