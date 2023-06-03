import React from 'react'
import { useLocation } from 'react-router-dom'
import { ArticleSection, Form } from '../../common'
import styles from './index.module.css'
import {data} from '../../data'

function Contact() {
  const volunteerPath = useLocation().pathname == '/volunteer' ? true : false


  return (
    <ArticleSection className={styles.root} header='Contact us!'>
      {volunteerPath ? <p dangerouslySetInnerHTML={{__html: data.volunteer.volunteerBlurb}}></p> :
      <p>We'd love to hear from you whether it is about helping us, supporting us financially or just to tell us your story.</p>}
      <Form preselect={volunteerPath}/>
    </ArticleSection>
  )
}

export default Contact