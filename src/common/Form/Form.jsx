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
  const [checked, setChecked] = useState(true)

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
        newsletter: checked,
    }
    e.preventDefault()
    console.log(email, reason, name, content)
    console.log(e.target)
    dispatch(sendMessageAction(message))
    navigate('/submitmessage')
  }

  const handleCheckbox = () => {
    setChecked(!checked)
  }

  const handleCheckboxChange = () => {
    console.log('checkbox ' + !checked)
  }
  return (
    <form className={styles.root}>
        <input className={styles.input} type="text" placeholder="Email"  onChange={(e) => handleInput(e,setEmail)} value={email}/>
        <select className={styles.input} type="text" placeholder="Reason for contact" onChange={(e) => handleInput(e, setReason)} value={reason}>
          <option value='none'>Choose an option</option>
          <option value='volunteer'>Volunteer with us!</option>
          <option value='perform'>Perform at Chippenham Pride 2023</option>
          <option value='sell'>Sell your merch!</option>
        </select>
        <input className={styles.input} type="text" placeholder="Name" onChange={(e) => handleInput(e, setName)} value={name}/>
        <input className={styles.areaInput} placeholder="Your message"  onChange={(e) => handleInput(e, setContent)} value={content}/>
        
        <label htmlFor='newsletter'>
          <input className={styles.checkbox} placeholder="Your message" type='checkbox' id='newsletter' onClick={handleCheckbox} checked={checked} onChange={handleCheckboxChange}/>
          <p className={styles.label}>I want to receive the newsletter about Chippenham Pride 2023</p>
        </label>
        <div className={styles.buttonParent}>
            <Button text="Submit" variant="dark" handleClick={handleSubmit}/>
        </div>
    </form>
  )
}

export default Form