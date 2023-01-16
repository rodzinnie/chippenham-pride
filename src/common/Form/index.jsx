import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import styles from './index.module.css'
import { Button } from '..'
import { sendMessageAction } from '../../actions'
import { isEmailValid } from './utils'

const initialUserState = {
  email: '',
  reason: '',
  nick: '',
  content: '',
}

function Form() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [user, setUser] = useState(initialUserState)
  const [checked, setChecked] = useState(true)

  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    setUser({ ...user, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!isEmailValid(user.email)) {
      return null
    }
    if (user.nick && user.reason && user.email && user.content) {
      const message = {
        person: {
          email: user.email,
          name: user.nick,
        },
        message: user.content,
        department: user.reason,
        newsletter: checked,
      }
      setUser(initialUserState)
      dispatch(sendMessageAction(message))
      navigate('/submitmessage')
    }
  }

  return (
    <form className={styles.root} id='contact' onSubmit={handleSubmit}>
      <input
        className={styles.input}
        type='text'
        placeholder='Email'
        name='email'
        onChange={handleChange}
        value={user.email}
        required
      />
      <select
        className={styles.select}
        type='text'
        placeholder='Reason for contact'
        name='reason'
        onChange={handleChange}
        value={user.reason}
        required
      >
        <option value=''>Choose an option</option>
        <option name='volunteer' value='volunteer'>
          Volunteer with us!
        </option>
        <option name='perform' value='perform'>
          Perform at our Pride 2023
        </option>
      </select>
      <input
        className={styles.input}
        type='text'
        placeholder='Name'
        name='nick'
        onChange={handleChange}
        value={user.nick}
        required
      />
      <textarea
        rows='14'
        cols='10'
        className={styles.areaInput}
        placeholder='Your message'
        name='content'
        onChange={handleChange}
        value={user.content}
        required
      />
      <div className={styles.buttonParent}>
        <Button type='submit' text='Submit' variant='dark' />
      </div>
    </form>
  )
}

export default Form
