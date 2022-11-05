import React from 'react'
import styles from './index.module.css'

function TandC() {
  return (
    <div className={styles.root}>
      <h1>Respect, bullying and harassment</h1>
      <p>Everyone will be treated with dignity and respect at Chippenham Pride. Bullying and harassment
          of any kind are in no-one's interest and will not be tolerated; this includes bullying or
          harassment of staff by visitors of Chippenham Pride.
          This policy applies to all Trustees, members, volunteers and staff on and off the premises.
          Bullying and harassment will be treated as disciplinary offences.
          If necessary, authorities will be informed and appropriate action will be undertaken.
        </p>
      <h1>GDPR</h1>
      <ol>
      The Charity will ensure that all personal data that it holds will be:
        <li>Processed lawfully, fairly and in a transparent manner;</li>
        <li>collected for specified, explicit and legitimate purposes and not further processed in a manner that is incompatible with those purposes;</li>
        <li>adequate, relevant and limited to what is necessary;</li>
        <li>accurate and kept up to date;</li>
        <li>kept in a form which permits identification of data subjects for no longer than is necessary;</li>
        <li>processed in a manner that ensures appropriate security of the personal data, including protection against unauthorised or unlawful processing and against accidental loss, destruction or damage.</li>
      </ol>
      <p>People where there is a legal obligation on the Charity to collect, process and share information with a third party - eg: the legal obligations to collect, process and share with HM Revenue &amp; Customs payroll information on employees of the Charity. The information provided will be held, processed and shared with others solely for the purpose meeting the Charity's legal obligations.</p>
    </div>
  )
}

export default TandC