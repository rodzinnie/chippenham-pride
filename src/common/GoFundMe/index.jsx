import React from 'react'

import {Button} from '../'
import styles from './index.module.css'
import gofundme from '../../assets/gofundme.png'


function GoFundMe({noImage, light}) {
  const handleClick = () => {
    window.location.assign('https://www.gofundme.com/f/chippenham-pride-2023')
  }
  return (
    <>        
      <div className={styles.right}>
        {!noImage && <img className={styles.img} src={gofundme} />}
        <Button text='Donate' variant={light ? 'light' : 'dark'}  className={styles.button} handleClick={handleClick}/>
    </div>
  </>
  )
}

export default GoFundMe