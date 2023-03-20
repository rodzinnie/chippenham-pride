import { useLocation } from 'react-router-dom'
import { useState } from 'react'
// import styles from './index.module.css'
import { ArticleSection, Highlights } from '../../common'
import { useSelector } from 'react-redux'
import { prepareTilesData } from '../../utils'
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
  const data = prepareTilesData(currentObj.data)
  
  return (
    <ArticleSection header={currentObj.type}>
      <Highlights data={data} internalLink={false}/>
    </ArticleSection>
  )
}

export default EventDetailsCategory