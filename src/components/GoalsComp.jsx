import React, { useState } from 'react'
import logo from '../assets/Charter/Icon.svg';

const GoalsComp = ({ title, desc, background, textColor }) => {
  const [show, setShow] = useState(false);
  return (
    <div
      className={`p-10 ${background} w-1/3 lg:w-[18.39rem] md:w-[90%] z-[40] h-[28rem] md:h-auto md:gap-10 flex flex-col justify-between cursor-pointer transition-all duration-500 ease-in-out ${show ? 'shadow-lg' : ''}`}
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      <div className='flex justify-end'>
        <img
          src={logo}
          alt=""
          className={`transition-all duration-500 ease-in-out ${show ? 'w-14' : 'w-[5rem]'}`}
        />
      </div>

      <div>
        {/* Use scale instead of text size for smoother animation */}
        <h1
          className={`transform transition-transform duration-500 text-2xl font-normal ease-in-out ${show ? 'hidden' : 'text-2xl'} ${textColor}`}
        >
          {title}
        </h1>
        <div className="overflow-hidden transition-all duration-500 ease-in-out">
          <h1
            className={`transform transition-transform duration-500 text-2xl font-normal ease-in-out ${show ? 'opacity-100 translate-y-0' : 'opacity-0 h-0 translate-y-10'} ${textColor}`}
          >
            {title}
          </h1>
          <p className={`transition-all duration-500 ease-in-out ${textColor} ${show ? 'opacity-100 translate-y-0' : 'opacity-0 h-0 translate-y-10'}`}>
            {desc}
          </p>
        </div>
        <div className={`hidden md:block ${textColor}`}>
          <p>
            {desc}
          </p>
        </div>
      </div>
    </div>

  )
}

export default GoalsComp
