import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Zoom } from 'react-slideshow-image'
import { useParallax } from 'react-scroll-parallax'

import 'react-slideshow-image/dist/styles.css'
import blendz from '../assets/images/naroBlends.jpeg'
import jesus from '../assets/images/jesus.jpg'

import img1 from '../assets/images/gallery/img1.jpeg'
import img2 from '../assets/images/gallery/img2.jpeg'
import img3 from '../assets/images/gallery/img3.jpeg'
import img4 from '../assets/images/gallery/img4.jpeg'
import img6 from '../assets/images/gallery/img6.jpeg'
import img7 from '../assets/images/gallery/img7.jpeg'
import img8 from '../assets/images/gallery/img8.jpeg'

import TheMap from '../components/TheMap'

const blendLink =
  'https://booksy.com/en-us/781756_88blendz-studio_barber-shop_37796_salt-lake-city#ba_s=vl_1'

const Practice2 = () => {
  const images = [jesus, img2, img7, img3, img4, img1, img8, img6]

  const state1 = 'transition-opacity duration-1000 ease-out opacity-10'
  const state2 = 'transition-opacity duration-1000 ease-out opacity-100'
  const [load, setLoadState] = useState(state1)

  const mage = useParallax({
    scale: [1.2, 0.8, 'easeInQuad'],
  })

  const moon = useParallax({
    scale: [0.8, 1.2, 'easeInQuad'],
  })

  const onLoad = () => {
    setLoadState(state2)
  }

  return (
    <div className='bg-black font-ubuntu'>
      <div className={`${load}`} onLoad={onLoad}>
        <div className='flex justify-center space-x-6 text-slate-400 text-sm opacity-80 mt-2'>
          <div className='hover:text-slate-300'>
            <Link to='/signuplist'>SignUp</Link>
          </div>
          <div className='hover:text-slate-300'>
            <Link to='/merch'>Merch</Link>
          </div>
        </div>
        <div className='flex justify-center'>
          <div className='md:flex md:justify-center mt-3'>
            <div className='' ref={mage.ref}>
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
          <div
            className='text-white flex justify-center text-2xl'
            ref={moon.ref}
          >
            Get lined up. 2641 S State.
          </div>

          <div className='flex justify-center mt-3'>
            <p className='text-white flex justify-center rounded-full bg-slate-600 w-16 h-8 pt-1 font-bold hover:bg-slate-400 hover:text-black'>
              <Link to={blendLink}>Book</Link>
            </p>
          </div>
          <div>
            <TheMap />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Practice2
