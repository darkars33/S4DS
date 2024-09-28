import React from 'react'

const CharterComp = ({logo, background, gap, textColor, title}) => {
          return (
                    <div className={`p-3 grid z-0 ${background} ${gap}`}>
                              <div>
                                        <div className='float-right px-2'>
                                                  <img src={logo} alt='logo' />
                                        </div>
                              </div>
                              <div className='relative bottom-0 p-2'>
                                        <div className='absolute bottom-0'>
                                                  <h1 className={`text-[1.5rem] font-normal ${textColor}`}>{title}</h1>
                                        </div>
                              </div>
                    </div>
          )
}

export default CharterComp
