import React from 'react'
import { GoTriangleRight } from 'react-icons/go';
import logo from '../assets/StudentChapter/Icon2.svg';

const StudentChapterComp = ({ Data }) => {
          return (
                    <div className='p-3 border-[2px] border-brand max-w-[25rem] flex flex-col gap-10'>
                              <div className='flex justify-end'>
                                        <img src={logo} alt="logo" className='md:w-[4rem]' />
                              </div>
                              <div className='flex flex-col gap-3'>
                                        <h1 className='text-2xl md:text-xl px-3 font-normal text-brand'>{Data.title}</h1>
                                        {Data.description.map((desc) => (
                                                  <div className="flex">
                                                            <GoTriangleRight className="text-brand flex-shrink-0 mt-1" />
                                                            <p className="text-justify md:text-sm">
                                                                      {desc.text}
                                                            </p>
                                                  </div>
                                        ))}
                              </div>
                    </div>
          )
}

export default StudentChapterComp
