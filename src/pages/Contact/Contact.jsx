import React from 'react'
import { ArticleSection, Form } from '../../common'
import styles from './Contact.module.css'

function Contact() {
  return (
    <ArticleSection className={styles.root} header='Contact us!'>
      <p>We'd love to hear from you whether it is about helping us, supporting us financially or just to tell us your story.</p>
      <Form />
    </ArticleSection>
  )
}

export default Contact