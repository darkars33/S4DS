import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <div className='w-screen h-screen flex overflow-x-hidden'>
          <div className='w-screen h-10'></div>
      <h1 className='text-text-color'>Some thing went wrong Back to Home Page</h1>
      <Link to='/'>Home</Link>
    </div>
  )
}

export default Error
