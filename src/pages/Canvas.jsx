import { useState, useRef } from 'react'
import preprocessImage from './preprocess'
import Tesseract from 'tesseract.js'
import { changeDpiDataUrl } from 'changedpi'

import './App.css'

function Canvas() {
  const [image, setImage] = useState('')
  const [text, setText] = useState('')
  const canvasRef = useRef(null)
  const imageRef = useRef(null)

  const handleChange = (event) => {
    setImage(URL.createObjectURL(event.target.files[0]))
  }

  const handleClick = () => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')

    ctx.drawImage(imageRef.current, 0, 0)
    ctx.putImageData(preprocessImage(canvas), 0, 0)
    const dataUrl = canvas.toDataURL('image/jpeg')
    const data300 = changeDpiDataUrl(dataUrl, 100)

    Tesseract.recognize(data300, 'eng', {
      logger: (m) => console.log(m),
    })
      .catch((err) => {
        console.error(err)
      })
      .then((result) => {
        // Get Confidence score
        let confidence = result.data.confidence
        console.log(confidence)
        // Get full output
        let text = result.data.text

        setText(text)
      })
  }
  //   Tesseract.recognize(data300).then(function (result) {
  //     // console.log('RESULT TEXT', result.data.text)
  //     // console.log('RESULT', result)
  //     setText(result.data.text)
  //   })
  // }
  // console.log('IMAGE TEXT', text)

  return (
    <div className='zApp'>
      <main className='zApp-main'>
        <h3>Actual image uploaded</h3>
        <img src={image} className='zApp-logo' alt='logo' ref={imageRef} />
        <h3>Canvas</h3>
        {/* <canvas ref={canvasRef}></canvas> */}
        <canvas ref={canvasRef} width={2000} height={1500}></canvas>
        <h3>Extracted text</h3>
        <div className='pin-box'>
          <p> {text} </p>
        </div>
        <input type='file' onChange={handleChange} />
        <button onClick={handleClick} style={{ height: 50 }}>
          Convert to text
        </button>
      </main>
    </div>
  )
}

export default Canvas
