import React from 'react'
import { Outlet } from 'react-router-dom'
import { ArticleSection } from '../../common'

const Details = () => {
  return (
    <ArticleSection>
      <Outlet />
    </ArticleSection>
  )
}

export default Details