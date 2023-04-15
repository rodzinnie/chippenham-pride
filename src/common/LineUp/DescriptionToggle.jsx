import {useState} from 'react'

const DescriptionToggle = ({short, long, link}) => {
  const [isShort, setIsShort] = useState(true)
  return (
    <>
      <div dangerouslySetInnerHTML={{__html: isShort ? short : long}}></div>
      <span style={{width: 'fit-content', fontSize: '10px', color:'gray', cursor: 'pointer'}} onClick={() => {setIsShort(prev => !prev)}}>read {isShort ? 'more': 'less'}</span>
      <span style={{width: 'fit-content', padding: '15px 40px'}}><a style={{fontSize: '10px'}} href={link}>go to eventbrite</a></span>
    </>
  )
}

export default DescriptionToggle