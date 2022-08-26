import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'

import styles from './Form.module.css'
import { Button } from '..'
import { sendMessageAction } from '../../actions'

function Form() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [email, setEmail ] = useState('')
  const [reason, setReason ] = useState('')
  const [name, setName ] = useState('')
  const [content, setContent ] = useState('')

  const handleInput = (e, fun)  => {
    fun(e.target.value)
  }

  const handleSubmit = (e) => {
    const message = {
        person: {
          email: email,
          name: name
        },
        message: content,
        department: reason,
    }
    e.preventDefault()
    console.log(email, reason, name, content)
    console.log(e.target)
    dispatch(sendMessageAction(message))
  }
  return (
    <form className={styles.root}>
        <input className={styles.input} type="text" placeholder="Email"  onChange={(e) => handleInput(e,setEmail)} value={email}/>
        <input className={styles.input} type="text" placeholder="Reason for contact" onChange={(e) => handleInput(e, setReason)} value={reason}/>
        <input className={styles.input} type="text" placeholder="Name" onChange={(e) => handleInput(e, setName)} value={name}/>
        <input className={styles.areaInput} placeholder="Your message"  onChange={(e) => handleInput(e, setContent)} value={content}/>
        <div className={styles.buttonParent}>
            <Button text="Submit" variant="dark" handleClick={handleSubmit}/>
        </div>
    </form>
  )
}

export default Form