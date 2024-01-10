import { useState } from 'react'

import { Zoom } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'
import blendz from '../assets/images/naroBlends.jpeg'
import jesus from '../assets/images/jesus.jpg'

import img1 from '../assets/images/gallery/img1.jpeg'
import img2 from '../assets/images/gallery/img2.jpeg'
import img3 from '../assets/images/gallery/img3.jpeg'
import img6 from '../assets/images/gallery/img6.jpeg'

const Practice2 = () => {
  const images = [jesus, img1, img2, img3, img6]

  const state1 = 'transition-opacity duration-1000 ease-out opacity-10'
  const state2 = 'transition-opacity duration-1000 ease-out opacity-100'
  const [load, setLoadState] = useState(state1)

  const onLoad = () => {
    setLoadState(state2)
  }

  return (
    <div className='bg-black font-ubuntu'>
      <div className={`${load}`} onLoad={onLoad}>
        <div className='flex justify-center space-x-6 text-slate-400 text-sm opacity-80 mt-2'>
          <div className=''>SignUp</div>
          <div className=''>Merch</div>
        </div>

        <div className='flex justify-center'>
          <div className='md:flex md:justify-center mt-3'>
            <div className=''>
              <img
                alt=''
                src={blendz}
                className='invert object-cover h-3/4 w-96'
              ></img>
            </div>
            <div className='h-96 w-96 mb-3'>
              <Zoom scale={0.7} indicators={true}>
                {images.map((each, index) => (
                  <div key={index} style={{ width: '100%' }}>
                    <img
                      alt=''
                      style={{ objectFit: 'cover', width: '100%' }}
                      src={each}
                      className='rounded-full  max-h-96'
                    />
                  </div>
                ))}
              </Zoom>
            </div>
          </div>
        </div>

        <div className='mt-3'>
          <div className='text-white flex justify-center text-lg'>
            Get lined up. 2641 S State.
          </div>

          <div className='flex justify-center mt-3'>
            <p className='text-white flex justify-center rounded-full bg-slate-600 w-16 h-8 pt-1 font-bold'>
              Book
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Practice2
