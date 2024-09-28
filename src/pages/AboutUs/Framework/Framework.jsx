import React, { useState, useEffect } from 'react'
import logo from '../../../assets/Charter/Icon.svg';

const Framework = () => {
          const [show, setShow] = useState(false)
          useEffect(() => {
                    window.scrollTo(0, 0);
                  }, []);
          return (
                    <div className='w-full flex flex-col items-center overflow-hidden'>
                              <div className='w-[100%] mt-36 pb-10 '>
                                        <div className='bg-brand w-[60%] md:w-[100%] py-5'>
                                                  <h1 className='p-4 px-10 ml-14 font-normal text-white text-[4.5rem]'>
                                                            Framework for the <br /> Society for Data Science
                                                  </h1>
                                        </div>

                              </div>

                              <div className='w-[100%] flex justify-end py-10'>
                                        <div className='w-[60%] md:w-[100%] p-5 bg-brand'></div>

                              </div>

                              <div className='w-[90%] max-w-[1440px] py-10 flex flex-col items-center gap-10'>
                                        <div className='p-3 bg-accent-color2 flex flex-col items-center px-10 gap-4'>
                                                  <img src={logo} alt="logo" className='w-[5rem]' />
                                                  <h1 className='text-white font-normal text-[2rem] uppercase'>Organizational Structure</h1>
                                        </div>
                                        <div className=' w-[100%] mt-10 flex flex-col gap-10'>
                                                  <div className='w-[100%] flex justify-around flex-wrap gap-5'>
                                                            <div
                                                                      className='relative w-[22rem] h-[6rem] p-5 px-10 bg-background flex flex-col justify-center items-center transition-all duration-100 ease-in-out'
                                                                      onMouseEnter={() => setShow(true)}
                                                                      onMouseLeave={() => setShow(false)}
                                                            >
                                                                      <h1 className='text-[1.5rem]'>Executive Leadership</h1>
                                                                      <div
                                                                                className={`absolute p-3 bg-accent-color top-0 left-1 w-[98%] transition-all duration-300 ease-in-out ${show ? 'opacity-100' : 'opacity-0'} ${show ? 'visible' : 'invisible'}`}
                                                                      >
                                                                                <h1 className='text-text-color'>President</h1>
                                                                                <h1 className='text-text-color'>President</h1>
                                                                                <h1 className='text-text-color'>President</h1>
                                                                                <h1 className='text-text-color'>President</h1>
                                                                      </div>
                                                            </div>

                                                            <div className='p-5 px-10 w-[22rem] h-[6rem] bg-background flex flex-col justify-center items-center'>
                                                                      <h1 className='text-[1.5rem]'>Board of Directors</h1>
                                                            </div>
                                                            <div className='p-5 px-10 w-[22rem] h-[6rem] bg-background flex flex-col justify-center items-center'>
                                                                      <h1 className='text-[1.5rem]'>Advisory Board</h1>
                                                            </div>
                                                  </div>
                                                  <div className='w-[100%] flex justify-around gap-5 flex-wrap'>
                                                            <div className='p-5 px-10 w-[22rem] h-[6rem] bg-background flex flex-col justify-center items-center'>
                                                                      <h1 className='text-[1.5rem]'>Standing Committees</h1>
                                                            </div>
                                                            <div className='p-5 px-10 w-[22rem] h-[6rem] bg-background flex flex-col justify-center items-center'>
                                                                      <h1 className='text-[1.5rem]'>Special Interest Groups (SIGs)</h1>
                                                            </div>
                                                  </div>
                                        </div>
                              </div>

                              <div className='w-[90%] max-w-[1440px] py-10 mb-10 flex flex-col items-center gap-10'>
                                        <div className='p-3 bg-brand flex flex-col items-center px-10 gap-4'>
                                                  <img src={logo} alt="logo" className='w-[5rem]' />
                                                  <h1 className='text-white font-normal text-[2rem] uppercase'>Operational Divisions</h1>
                                        </div>
                                        <div className=' w-[100%] mt-10 flex flex-col gap-10'>
                                                  <div className='w-[100%] flex justify-around flex-wrap gap-5'>
                                                            <div
                                                                      className='relative w-[22rem] h-[6rem] p-5 px-10 bg-background flex flex-col justify-center items-center place-items-center transition-all duration-100 ease-in-out '
                                                                      onMouseEnter={() => setShow(true)}
                                                                      onMouseLeave={() => setShow(false)}
                                                            >
                                                                      <h1 className='text-[1.5rem]'>Education and Training</h1>
                                                                      <div
                                                                                className={`absolute p-3 bg-accent-color top-0 left-1 w-[98%] transition-all duration-300 ease-in-out ${show ? 'opacity-100' : 'opacity-0'} ${show ? 'visible' : 'invisible'}`}
                                                                      >
                                                                                <h1 className='text-text-color'>President</h1>
                                                                                <h1 className='text-text-color'>President</h1>
                                                                                <h1 className='text-text-color'>President</h1>
                                                                                <h1 className='text-text-color'>President</h1>
                                                                      </div>
                                                            </div>

                                                            <div className='p-5 px-10 w-[22rem] h-[6rem] bg-background flex place-items-center'>
                                                                      <h1 className='text-[1.5rem]'>Research and Innovation</h1>
                                                            </div>
                                                            <div className='p-5 px-10 w-[22rem] h-[6rem] bg-background flex place-items-center'>
                                                                      <h1 className='text-[1.5rem]'>Industry Partnerships</h1>
                                                            </div>
                                                  </div>
                                                  <div className='w-[100%] flex justify-around flex-wrap gap-5'>
                                                            <div className='p-5 px-10 w-[22rem] h-[6rem] bg-background flex place-items-center'>
                                                                      <h1 className='text-[1.5rem]'>Government and Policy</h1>
                                                            </div>
                                                            <div className='p-5 px-10 w-[22rem] h-[6rem] bg-background flex place-items-center'>
                                                                      <h1 className='text-[1.5rem]'>Community Outreach</h1>
                                                            </div>
                                                            <div className='p-5 px-10 w-[22rem] h-[6rem] bg-background flex justify-center items-center'>
                                                                      <h1 className='text-[1.5rem]'>Publications and Communications</h1>
                                                            </div>
                                                  </div>
                                        </div>
                              </div>

                    </div>
          )
}

export default Framework
