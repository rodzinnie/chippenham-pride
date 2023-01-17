import { useState } from 'react'
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
  hasError: false,
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
      setUser({ ...user, hasError: true })
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
    } else {
      setUser({ ...user, hasError: true })
    }
  }

  const invalidEmailEntered = (name) => {
    return (
      user.hasError &&
      name === 'email' &&
      user[name] &&
      !isEmailValid(user[name])
    )
  }

  const getMessage = (name) => {
    if (invalidEmailEntered(name)) return 'Please enter a valid email'
    return user.hasError && !user[name] ? 'This field is required' : user[name]
  }

  const getStyle = (name, style) => {
    const invalidEmail = invalidEmailEntered(name)
    const emptyField = user.hasError && !user[name]
    return invalidEmail || emptyField ? `${style} ${styles.error}` : style
  }

  return (
    <form className={styles.root} id='contact' onSubmit={handleSubmit}>
      <input
        className={getStyle('email', styles.input)}
        type='text'
        placeholder='Email'
        name='email'
        onChange={handleChange}
        value={user.email}
      />
      <select
        className={getStyle('reason', styles.select)}
        type='text'
        placeholder='Reason for contact'
        name='reason'
        onChange={handleChange}
        value='Choose an option'
      >
        <option>Choose an option</option>
        <option name='volunteer' value='volunteer'>
          Volunteer with us!
        </option>
        <option name='perform' value='perform'>
          Perform at our Pride 2023
        </option>
      </select>
      <input
        className={getStyle('nick', styles.input)}
        type='text'
        placeholder='Name'
        name='nick'
        onChange={handleChange}
        value={getMessage('nick')}
      />
      <textarea
        rows='14'
        cols='10'
        className={getStyle('content', styles.areaInput)}
        placeholder='Your message'
        name='content'
        onChange={handleChange}
        value={getMessage('content')}
      />
      <div className={styles.buttonParent}>
        <Button type='submit' text='Submit' variant='dark' />
      </div>
    </form>
  )
}

export default Form
