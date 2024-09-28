import React, {useEffect} from 'react'
import img from '../../assets/StudentChapter/icon.svg';
import StudentChapterComp from '../../components/StudentChapterComp';

const Data = [
          {
                    id: 1,
                    title: 'Skill and Career Development',
                    description: [
                              {
                                        id: 1,
                                        text: "Organizing events at S4DS Student Chapter will help members develop administrative, technical, managerial and humanitarian skills."
                              },
                              {
                                        id: 2,
                                        text: "Engage in activities that enhance entrepreneurial, leadership, and soft skills."
                              },
                              {
                                        id: 3,
                                        text: "Network with the S4DS team and other Student Chapters to boost project opportunities and placements."
                              }
                    ]
          },
          {
                    id: 2,
                    title: 'Technical Excellence and Support',
                    description: [
                              {
                                        id: 1,
                                        text: "Establish Centers of Excellence and conduct certification programs on disruptive technologies."
                              },
                              {
                                        id: 2,
                                        text: "Receive resources and promotional support for organizing workshops, seminars, and training programs."
                              },
                              {
                                        id: 3,
                                        text: "Organize Faculty Development Programs and Technical Training Programs with S4DS support."
                              }
                    ]
          },
          {
                    id: 3,
                    title: 'Collaboration and Networking',
                    description: [
                              {
                                        id: 1,
                                        text: "Collaborate with other S4DS Student Chapters and form Special Interest Groups."
                              },
                              {
                                        id: 2,
                                        text: "Host or partner in organizing the International Conference on Data Management, Analytics, and Innovation (ICDMAI)."
                              }
                    ]
          },
          {
                    id: 4,
                    title: 'Recognition and Awards',
                    description: [
                              {
                                        id: 1,
                                        text: "Gain recognition from Accreditation bodies through association with respected Technical Professional Body."
                              },
                              {
                                        id: 2,
                                        text: "Become eligible for S4DS annual awards in various categories, recognizing student excellence and contributions."
                              }
                    ]
          }
]

const StudentChapter = () => {
          useEffect(() => {
                    window.scrollTo(0, 0);
                  }, []);
          return (
                    <div className='w-full flex-col items-center'>
                              <div className='py-10  flex flex-col items-center'>
                                        <div className='w-[90%] max-w-[1440px]  md:px-5  mt-36 md:w-[100%]'>
                                                  <h1 className='text-[4.5rem] font-normal'> <span className='bg-brand p-3 px-5 font-normal text-white'>Student Chapters at</span> <br className='md:hidden' /> Society for Data Science</h1>
                                                  <div className='float-right'>
                                                            <p className='w-[30rem] md:w-[100%] text-lg'>Student Chapter can be established at any institution with <span className='text-brand font-normal'>12 Student members</span> and
                                                                      <span className='text-brand font-normal'>{' '}3 Professional members</span>.</p>
                                                  </div>
                                        </div>
                              </div>

                              <div className='py-10 flex flex-col items-center'>
                                        <div className='w-[90%] max-w-[1440px] flex justify-center'>
                                                  <img src={img} alt="img" className='w-[100%]' />
                                        </div>
                              </div>

                              <div className='py-10 flex flex-col items-center'>
                                        <div className='w-[90%] max-w-[1440px]  md:w-[100%]'>
                                                  <h1 className='text-[2.5rem] font-normal'>Benefits</h1>
                                                  <hr className='text-background' />
                                                  <div className='w-[100%] flex justify-end pt-5'>
                                                            <div className='flex md:flex-wrap md:justify-center md:gap-5'>
                                                                      <div className='mt-[30%] md:mt-0 flex flex-col md:gap-5'>
                                                                                <StudentChapterComp Data={Data[0]} />
                                                                                <StudentChapterComp Data={Data[1]} />
                                                                      </div>
                                                                      <div className='flex flex-col md:gap-5'>
                                                                                <StudentChapterComp Data={Data[0]} />
                                                                                <StudentChapterComp Data={Data[1]} />
                                                                      </div>
                                                            </div>
                                                  </div>
                                        </div>
                              </div>
                    </div>
          )
}

export default StudentChapter
