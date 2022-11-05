import React, { useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import emailjs from '@emailjs/browser'

import styles from './index.module.css'
import { ArticleSection } from '../../common';

function SubmitMessage() {
    const reason = useSelector(state => state.reason)
    const message = useSelector(state => state.message)
    const person = useSelector(state => state.person)
    const form = useRef()
    const navigate = useNavigate()

    useEffect(() => {
        if(!message) {
            setTimeout(() => navigate('/'), 2000)
        }
    })

    const sendEmail = (e) => {
        e.preventDefault();
        console.log(form.current)
        emailjs.sendForm(import.meta.env.VITE_REACT_APP_SERVICE, import.meta.env.VITE_REACT_APP_TEMPLATE, form.current, import.meta.env.VITE_REACT_APP_PUBLIC_KEY)
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          })
          .then(navigate('/message'));
      };

  return (
    <ArticleSection header={'Do you wish to send this message?'} background={true}>{message ?         
    <form ref={form} onSubmit={sendEmail} className={styles.form}>
        <input type='hidden' name='user' value={person.name} />
        <input type='hidden' name='email' value={person.email} />
        <input type='hidden' name='message' value={message} />
        <input type='hidden' name='reason' value={reason} />
        <h1>Thank you, {person.name}</h1>
        <p>you are about to send the following message to the Chippenham Pride Committee. Please check if you are happy with this message.</p>
        <p>{message}</p>
        <input type='submit' value="I'm happy with this message. Send it!" className={styles.button}/>
    </form> 
    : 
    <h1>Please submit your message first</h1>}</ArticleSection>
  )
}

export default SubmitMessage