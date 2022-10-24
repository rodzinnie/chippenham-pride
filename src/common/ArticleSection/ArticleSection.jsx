import React from 'react'
import styles from './ArticleSection.module.css'
function ArticleSection({header, children}) {
  return (
  <article className={styles.article}>
    <h1 className={styles.h1}>{header}</h1>
    {children}
  </article>
  )
}

export default ArticleSection