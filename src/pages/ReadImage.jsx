import Tesseract from 'tesseract.js'
import image from '../assets/images/tess.jpg'
// import image from '../assets/images/tesla_card.jpg'
// import image from '../assets/images/IMG_5889.jpg'
import { changeDpiDataUrl } from 'changedpi'
import { useState, useEffect, useRef } from 'react'

const ReadImage = () => {
  const [imageText, setImageText] = useState('')
  Tesseract.recognize(image).then(function (result) {
    // console.log('RESULT TEXT', result.data.text)
    // console.log('RESULT', result)
    setImageText(result.data.text)
  })
  console.log('IMAGE TEXT', imageText)
  return (
    <>
      <div>
        <img src={image} alt='' height={200} width={200} />
        <p className='text-white'>{imageText}</p>
      </div>
    </>
  )
}

export default ReadImage
