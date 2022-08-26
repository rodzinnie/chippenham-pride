import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function SubmitMessage() {
    const message = useSelector(state => state.message)
    const navigate = useNavigate()

    useEffect(() => {
        if(!message) {
            console.log(message)
            navigate('/')
        }
    })
  return (
    <div>{message}</div>
  )
}

export default SubmitMessage