import React from 'react'

import styles from './index.module.css'

function Button({ text, variant, handleClick, type }) {
  // console.log(handleClick)
  return (
    <button type={type} className={styles[variant]} onClick={handleClick}>
      {text}
    </button>
  )
}

export default Button
