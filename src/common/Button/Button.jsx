import React from 'react'

import styles from './Button.module.css'

function Button({ text, variant}) {
  return (
    <button>{text}</button>
  )
}

export default Button