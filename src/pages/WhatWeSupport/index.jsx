import {useState} from 'react'
import qrEmail from '../../assets/qrEmailToMp.png'
import { ArticleSection } from '../../common';
import {data, email, emailContent} from './data'
import styles from './index.module.css'
function WhatWeSupport() {
  const [currentSlice, setCurrentSlice] = useState(1)
  const handleOnClick = () => {
    if(currentSlice < data.length) setCurrentSlice(currentSlice+1)
  }

  
  return (
    <div>
      <ArticleSection header='Causes We Support'>
          {data.slice(0, currentSlice).map((e, index) => {
            return(
              <>
              <p key={index}>
                {e}
              </p>
              <br />
              </>
            )
          })}
          {currentSlice == data.length ? '': <p className={styles.readMore} onClick={handleOnClick}>read more</p>}
      </ArticleSection>
      <ArticleSection header='How can you help?'>
        <p>{email}
        </p>
        <div className={styles.img} >
        <a href={`mailto:${emailContent.address}?subject=${emailContent.subject}&body=${emailContent.body}`}>Email Link</a>
        </div>
      </ArticleSection>
    </div>
  )
}

export default WhatWeSupport