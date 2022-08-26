import React, { useState } from 'react'

import styles from './Form.module.css'
import { Button } from '..'

function Form() {
  const [email, setEmail ] = useState('')
  const [reason, setReason ] = useState('')
  const [name, setName ] = useState('')
  const [message, setMessage ] = useState('')

  const handleInput = (e, fun)  => {
    fun(e.target.value)
  }

  return (
    <form className={styles.root}>
        <input className={styles.input} type="text" placeholder="Email"  onChange={(e) => handleInput(e,setEmail)} value={email}/>
        <input className={styles.input} type="text" placeholder="Reason for contact" onChange={(e) => handleInput(e, setReason)} value={reason}/>
        <input className={styles.input} type="text" placeholder="Name" onChange={(e) => handleInput(e, setName)} value={name}/>
        <input className={styles.areaInput} placeholder="Your message"  onChange={(e) => handleInput(e, setMessage)} value={message}/>
        <div className={styles.buttonParent}>
            <Button text="Submit" variant="dark" />
        </div>
    </form>
  )
}

export default Form