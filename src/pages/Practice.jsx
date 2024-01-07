import blendz from '../assets/images/naroBlends.jpeg'

const Practice = () => {
  return (
    <div className='bg-black columns-2 h-screen max-w-screen-md lg:flex justify-between'>
      <div className='h-full '>
        <div className=''>
          <div className='flex justify-center mt-3'>
            <img alt='' src={blendz} className='invert'></img>
          </div>
          {/* <p className='text-white flex justify-center absolute inset-x-0'> */}
          <p className='text-white flex justify-center pt-6'>Book</p>
        </div>
      </div>

      <div className='text-white h-full'>Text TEXT tExT</div>
    </div>
  )
}

export default Practice
