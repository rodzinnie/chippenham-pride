import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { Button } from '../../common'

function SubmitMessage() {
    const message = useSelector(state => state.message)
    const person = useSelector(state => state.person)
    const navigate = useNavigate()

    useEffect(() => {
        if(!message) {
            setTimeout(() => navigate('/'), 2000)
        }
    })

    const handleClick = (e) => {
        e.preventDefault()
        console.log("Your message: " + message)
        console.log('this is now being send to chippenham@pride.com')
    }

  return (
    <div>{message ?         
    <div>
        <h1>Thank you, {person.name}</h1>
        <p>you are about to send the following message to the Chippenham Pride Committee. Please check if you are happy with this message.</p>
        <p>{message}</p>
        <Button text={"I'm happy with this message. Send it!"} handleClick={handleClick}/>
    </div> 
    : 
    <h1>Please submit your message first</h1>}</div>
  )
}

export default SubmitMessage