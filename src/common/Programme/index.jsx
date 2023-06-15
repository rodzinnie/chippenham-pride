import React, {useEffect, useRef, useState} from 'react'
import { ArticleSection } from '../'
import prog from '../../assets/pride_programme.pdf' 
import map from '../../assets/Map.pdf' 

const index = () => {
  const [windowSize, setWindowSize] = useState(
    window.innerWidth
  );
  const [ imgWidth, setImgWidth ] = useState('280px')

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize(window.innerWidth);
    };

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  useEffect(() => {
    console.log(windowSize)
    let deviceWidth = windowSize
    if( deviceWidth > 500 && deviceWidth <= 1200) {
      setImgWidth('450px')
    } else if (deviceWidth <= 500) {
      setImgWidth('280px')
    } else {
      setImgWidth('600px')
    }
  }, [windowSize])

  return (
    <ArticleSection header={'the Programme'}>
      <img
        src="https://i.postimg.cc/Bbyv9jCM/IMG-1677.jpg"
        alt="Pride programme"
        style={{ display: "block", width: imgWidth}}
      />
      <p style={{ width: "fit-content", margin: "40px auto" }}>
        <a href={prog} download>
          Download Programme
        </a>
      </p>
      <p style={{ width: "fit-content", margin: "40px auto" }}>
        <a href={map} download>
          Download Map
        </a>
      </p>
      </ArticleSection>
  )
}

export default index