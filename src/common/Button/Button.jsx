import React from 'react'

import styles from './Button.module.css'

function Button({ text, variant, handleClick}) {
  return (
    <button className={styles[variant]} onClick={handleClick}>{text}</button>
  )
}

export default Button