import { useState } from 'react'

const Practice = () => {
  const [name, setName] = useState('')
  const [other, setOther] = useState('fancy pants')

  const onSubmit = (e) => {
    e.preventDefault()

    console.log('fuck you')
    console.log(name)
    setOther(name)
  }

  return (
    <div className=''>
      <form onSubmit={onSubmit}>
        <div className=''>
          <label className='form-label text-white'>Name</label>
          <input
            type='text'
            className='form-control text-black'
            id='name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <button type='submit' data-bs-dismiss='modal' className='bg-slate-600'>
          Submit
        </button>
      </form>
      <p className='text-white'>{other}</p>
    </div>
  )
}

export default Practice
