import {useState} from 'react'

const DescriptionToggle = ({short, long}) => {
  const [isShort, setIsShort] = useState(true)
  return (
    <>
      <div dangerouslySetInnerHTML={{__html: isShort ? short : long}}></div>
      <div style={{width: 'fit-content', margin: 'auto', fontSize: '10px', color:'gray', cursor: 'pointer'}} onClick={() => {setIsShort(prev => !prev)}}>read {isShort ? 'more': 'less'}</div>
    </>
  )
}

export default DescriptionToggle