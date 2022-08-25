import React from 'react'

import styles from './Form.module.css'
import { Button } from '..'

function Form() {
  return (
    <form className={styles.root}>
        <input className={styles.input} type="text" placeholder="Email"/>
        <input className={styles.input} type="text" placeholder="Reason for contact"/>
        <input className={styles.input} type="text" placeholder="Name"/>
        <textarea className={styles.input} placeholder="Your message"></textarea>
        <div className={styles.buttonParent}>
            <Button text="Submit" variant="dark" />
        </div>
    </form>
  )
}

export default Form