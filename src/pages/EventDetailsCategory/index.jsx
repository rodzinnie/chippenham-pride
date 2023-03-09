import { useLocation } from 'react-router-dom'
import { useState } from 'react'

import styles from './index.module.css'
import {eventDetails} from './data.js'
import { ArticleSection } from '../../common'
import { useEffect } from 'react'
const EventDetailsCategory = () => {
  const path = useLocation()
  const pathname = path.pathname
  const filterArray = (arr) => {
    const array = arr.filter(elem => elem.url == pathname)
    const obj = array[0]
    return obj
  }
  const currentObj = filterArray(eventDetails)
  return (
    <ArticleSection header={currentObj.type}>
      {eventDetails.map((e,i) => {
        <div className={styles.wrapper} key={i}>{currentObj.type}</div>
      })}
    </ArticleSection>
  )
}

export default EventDetailsCategory