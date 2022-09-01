import React, { useRef } from 'react'
import { Button } from '../../common';
import styles from './Support.module.css'
import paypal from '../../assets/paypal.png'
import gofundme from '../../assets/gofundme.png'

function Support() {
  const more = useRef();
  const handleClick = () => {
    window.location.assign('https://www.gofundme.com/f/chippenham-pride-2023')
  }

  const showMore = () => {
    if (more.current.style.display == 'block'){
      more.current.style.display = 'none'
    } else {
      more.current.style.display = 'block'
    }
  }

  return (
    <div className={styles.root}>
        <div className={styles.left}>
            <div className={styles.shoutout}>Help us support the pride!</div>
            <Button text='Learn more about our spendings' variant='light' handleClick={showMore} />
          <div ref={more} className={styles.more}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime omnis recusandae rem neque quis commodi molestiae. Necessitatibus in deserunt minus accusamus veritatis omnis ullam porro rem at aut nam, tenetur recusandae magni amet ab nulla unde sunt quis ut inventore? Atque reprehenderit porro cupiditate earum repellat, saepe numquam iure quam!</div>
        </div>
        <div className={styles.right}>
            <Button text='Donate with PayPal' variant='dark' className={styles.button}/>
            <img src={paypal} />
            <Button text='Donate with Go Fund Me' variant='dark'  className={styles.button} handleClick={handleClick}/>
            <img src={gofundme} />
        </div>
    </div>
  )
}

export default Support