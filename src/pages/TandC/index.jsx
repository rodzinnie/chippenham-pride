import React from 'react'
import { ArticleSection, Highlights } from '../../common'
import styles from './index.module.css'
import {data} from '../../data'
function TandC() {
  const tiles = data.tsncs
  return (
    <>
    <ArticleSection header='Terms of our Event'>
      <h1 className={styles.h1}>Policies</h1>
      <Highlights data={tiles} internalLink={false}/>
      <h1 className={styles.h1}>Respect, bullying and harassment</h1>
      <p>Everyone will be treated with dignity and respect at Chippenham Pride. Bullying and harassment
          of any kind are in no-one's interest and will not be tolerated; this includes bullying or
          harassment of staff by visitors of Chippenham Pride.
          This policy applies to all Trustees, members, volunteers and staff on and off the premises.
          Bullying and harassment will be treated as disciplinary offences.
          If necessary, authorities will be informed and appropriate action will be undertaken.
      </p>
      <br />
      <p>People where there is a legal obligation on the Charity to collect, process and share information with a third party - eg: the legal obligations to collect, process and share with HM Revenue &amp; Customs payroll information on employees of the Charity. The information provided will be held, processed and shared with others solely for the purpose meeting the Charity's legal obligations.</p>
      </ArticleSection>
    </>
  )
}

export default TandC