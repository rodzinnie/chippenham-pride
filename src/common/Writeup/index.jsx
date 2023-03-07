// index.jsx
import React from 'react'
import ArticleSection from '../ArticleSection'
import styles from './index.module.css'

const Writeup = ({ children }) => {
  return (
    <div className={styles.root}>
      <ArticleSection>
        <p>{children}</p>
      </ArticleSection>
    </div>
  )
}

export default Writeup

