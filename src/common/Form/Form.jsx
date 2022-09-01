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
    dispatch(sendMessageAction(message))
    navigate('/submitmessage')
  }

  const handleCheckbox = () => {
    setChecked(!checked)
  }

  const handleCheckboxChange = () => {
    return ''
  }

  return (
    <form className={styles.root}>
        <input className={styles.input} type="text" placeholder="Email"  onChange={(e) => handleInput(e,setEmail)} value={email}/>
        <select className={styles.select} type="text" placeholder="Reason for contact" onChange={(e) => handleInput(e, setReason)} value={reason}>
          <option value='none'>Choose an option</option>
          <option value='volunteer'>Volunteer with us!</option>
          <option value='perform'>Perform at our Pride 2023</option>
          <option value='sell'>Sell your merch!</option>
        </select>
        <input className={styles.input} type="text" placeholder="Name" onChange={(e) => handleInput(e, setName)} value={name}/>
        <textarea rows='14' cols='10' className={styles.areaInput} placeholder="Your message"  onChange={(e) => handleInput(e, setContent)}>{content}</textarea>
        
        <label htmlFor='newsletter' className={styles.newsletter}>
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