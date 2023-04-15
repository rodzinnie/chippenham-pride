import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import styles from './index.module.css'
import { Button } from '..'
import { sendMessageAction } from '../../actions'
import { isEmailValid } from './utils'
import { data } from '../../data'
const initialUserState = {
  email: '',
  reason: 'Choose an option',
  nick: '',
  content: '',
  hasError: false,
}

function Form({preselect}) {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [user, setUser] = useState(initialUserState)
  const [checked, setChecked] = useState(true)
  useEffect(() => {
    if(preselect) setUser({...user, content: data.volunteer.volunteerMsg})
  }, [])
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
    if (
      user.nick &&
      user.reason !== initialUserState.reason &&
      user.email &&
      user.content
    ) {

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

  const getStyle = (name, style) => {
    if (invalidEmailEntered(name))
      return `${style} ${styles.error} ${styles.invalidEmail}`

    const emptyField = user.hasError && user[name] === initialUserState[name]

    return emptyField ? `${style} ${styles.error}` : style
  }

  return (
    <form className={styles.root} id='contact' onSubmit={handleSubmit}>
      <div className={getStyle('email', styles.inputWrapper)}>
        <input
          className={styles.input}
          type='text'
          placeholder='Email'
          name='email'
          onChange={handleChange}
          value={user.email}
        />
      </div>
      <div className={getStyle('reason', styles.inputWrapper)}>
        <select
          className={styles.select}
          type='text'
          placeholder='Reason for contact'
          name='reason'
          onChange={handleChange}
          defaultValue={preselect ? 'volunteer' : 'Choose an option'}
        >
          <option>Choose an option</option>
          <option name='volunteer' value='volunteer'>
            Volunteer with us!
          </option>
          <option name='perform' value='perform'>
            Perform at our Pride 2023
          </option>
        </select>
      </div>
      <div className={getStyle('nick', styles.inputWrapper)}>
        <input
          className={styles.input}
          type='text'
          placeholder='Name'
          name='nick'
          onChange={handleChange}
          value={user.nick}
        />
      </div>
      <div className={getStyle('content', styles.inputWrapper)}>
        <textarea
          rows='14'
          cols='10'
          className={styles.areaInput}
          placeholder='Your message'
          name='content'
          onChange={handleChange}
          value={user.content}
        />
      </div>
      <div className={styles.buttonParent}>
        <Button type='submit' text='Submit' variant='dark' />
      </div>
    </form>
  )
}

export default Form
