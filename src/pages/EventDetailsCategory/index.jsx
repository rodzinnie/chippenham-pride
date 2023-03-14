import { useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import styles from './index.module.css'
import { ArticleSection, Highlights } from '../../common'
import { useSelector } from 'react-redux'

const EventDetailsCategory = () => {
  const eventDetails = useSelector(state => state.data.eventDetails)
  const path = useLocation()
  const pathname = path.pathname
  const filterArray = (arr) => {
    const array = arr.filter(elem => elem.url == pathname)
    const obj = array[0]
    return obj
  }

  const [currentObj] = useState(filterArray(eventDetails))

  const prepareTilesData = (obj) => {
    const arr = []
    for(let part of obj) {
      arr.push({slides: [{src: part.img, alt: part.name}], title: part.name, text: part.description, url: part.url})
    }
    return arr
  }
  const data = prepareTilesData(currentObj.data)
  
  return (
    <ArticleSection header={currentObj.type}>
      <Highlights data={data} internalLink={false}/>
    </ArticleSection>
  )
}

export default EventDetailsCategory