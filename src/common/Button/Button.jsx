import React from 'react'

import styles from './Button.module.css'

function Button({ text, variant}) {
  return (
    <button className={styles[`${variant}`]}>{text}</button>
  )
}

export default Button