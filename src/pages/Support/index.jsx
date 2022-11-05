import React, { useRef } from 'react'
import { ArticleSection, Button } from '../../common';
import styles from './index.module.css'
import gofundme from '../../assets/gofundme.png'


function Support() {
  const more = useRef();
  const handleClick = () => {
    window.location.assign('https://www.gofundme.com/f/chippenham-pride-2023')
  }

  const handleClickPP = () => {
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
    <ArticleSection className={styles.root} header='Help us support the pride!'>
        <div className={styles.left}>
            <div className={styles.shoutout}></div>
            <p className={styles.p}>Our cause is simple: promote equality in our beautiful town. Without YOUR support, we wouldn't be able to make it!</p>
            <Button text='Learn more about our spendings' variant='light' handleClick={showMore} />
          <div ref={more} className={styles.more}>Chippenham Pride is a pro-bono charity. We have a policy of total transparency. If you want to know more about our spendings, please contact Bryan via our contact form.</div>
        </div>
        <div className={styles.right}>
            <Button text='Donate with Go Fund Me' variant='dark'  className={styles.button} handleClick={handleClick}/>
            <img className={styles.img} src={gofundme} />
        </div>
    </ArticleSection>
  )
}

export default Support