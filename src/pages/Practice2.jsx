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
  // const images = [
  //   '../assets/images/gallery/img1.jpeg',
  //   'https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80',
  //   'https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
  // ]
  return (
    <div className='bg-black font-ubuntu'>
      {/* <div className='flex flex-col mt-3'> */}
      <div className=''>
        <div className='flex justify-center space-x-6 text-slate-400 text-sm opacity-80'>
          <div className=''>SignUp</div>
          <div className=''>Merch</div>
          {/* <div className=''>SIGN-UP</div>
          <div className=''>MERCH</div> */}
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
          {/* <div className='text-white flex justify-center'>
            GET LINED UP. FEEL LIKE A KING.
          </div>
          <div className='flex justify-center mt-3'>
            <p className='text-white flex justify-center rounded-full bg-slate-600 w-16'>
              BOOK
            </p>
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default Practice2
