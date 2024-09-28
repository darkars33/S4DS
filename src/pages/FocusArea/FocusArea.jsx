import React, {useEffect} from 'react'
import logo from '../../assets/Charter/Icon.svg';
import { GoTriangleRight } from 'react-icons/go';

const FocusArea = () => {
          useEffect(() => {
                    window.scrollTo(0, 0);
                  }, []);
          return (
                    <div className='w-full flex flex-col items-center overflow-hidden'>
                              <div className='w-[100%] mt-36 flex justify-end md:justify-center'>
                                        <div className='bg-brand w-[90%] max-w-[1440px] md:w-[100%] py-5'>
                                                  <h1 className='p-4 px-10 text-right ml-14 font-normal text-white text-[4.5rem]'>
                                                            Focus Areas of the <br /> Society for Data Science
                                                  </h1>
                                        </div>
                              </div>
                              <div className='w-[90%] max-w-[1440px] pb-10  flex flex-col items-center justify-center'>
                                        <div className='w-[40rem] md:w-[100%] mt-20'>
                                                  <p className='text-lg'>The focus areas provide a comprehensive framework for S4DS activities, ensuring that the organization
                                                            addresses key aspects of data science advancement, from education and research to ethical considerations
                                                            and global collaboration.</p>
                                        </div>
                                        <div className='w-[90%] p-3 mt-20'>
                                                  <div className="join join-vertical w-full">
                                                            <div className="collapse collapse-arrow join-item border-base-300 border">
                                                                      <input type="radio" name="my-accordion-4" defaultChecked className='text-xl' />
                                                                      <div className="collapse-title text-xl font-medium bg-brand text-white flex items-center place-items-center"> <img src={logo} alt="" className='w-[3rem] mr-10' /> Education and Skill Development</div>
                                                                      <div className="collapse-content pt-5 border-[2px] border-accent-color bg-background">
                                                                                <div className="flex">
                                                                                          <GoTriangleRight className="text-brand flex-shrink-0 mt-1" />
                                                                                          <p className="text-justify">
                                                                                                    <span className="font-normal">Academic Programs:</span>
                                                                                                    <br />
                                                                                                    - Collaborate with universities to develop and enhance data science curricula
                                                                                                    <br />
                                                                                                    - Support the creation of new data science degree programs and specializations

                                                                                          </p>
                                                                                </div>
                                                                                <div className="flex">
                                                                                          <GoTriangleRight className="text-brand flex-shrink-0 mt-1" />
                                                                                          <p className="text-justify">
                                                                                                    <span className="font-normal">Academic Programs:</span>
                                                                                                    <br />
                                                                                                    - Collaborate with universities to develop and enhance data science curricula
                                                                                                    <br />
                                                                                                    - Support the creation of new data science degree programs and specializations

                                                                                          </p>
                                                                                </div>
                                                                                <div className="flex">
                                                                                          <GoTriangleRight className="text-brand flex-shrink-0 mt-1" />
                                                                                          <p className="text-justify">
                                                                                                    <span className="font-normal">Academic Programs:</span>
                                                                                                    <br />
                                                                                                    - Collaborate with universities to develop and enhance data science curricula
                                                                                                    <br />
                                                                                                    - Support the creation of new data science degree programs and specializations

                                                                                          </p>
                                                                                </div>

                                                                      </div>
                                                            </div>
                                                            <div className="collapse collapse-arrow join-item border-base-300 border">
                                                                      <input type="radio" name="my-accordion-4" defaultChecked className='text-xl' />
                                                                      <div className="collapse-title text-xl font-medium bg-brand text-white flex items-center place-items-center"> <img src={logo} alt="" className='w-[3rem] mr-10' /> Education and Skill Development</div>
                                                                      <div className="collapse-content pt-5 border-[2px] border-accent-color bg-background">
                                                                                <div className="flex">
                                                                                          <GoTriangleRight className="text-brand flex-shrink-0 mt-1" />
                                                                                          <p className="text-justify">
                                                                                                    <span className="font-normal">Academic Programs:</span>
                                                                                                    <br />
                                                                                                    - Collaborate with universities to develop and enhance data science curricula
                                                                                                    <br />
                                                                                                    - Support the creation of new data science degree programs and specializations

                                                                                          </p>
                                                                                </div>
                                                                                <div className="flex">
                                                                                          <GoTriangleRight className="text-brand flex-shrink-0 mt-1" />
                                                                                          <p className="text-justify">
                                                                                                    <span className="font-normal">Academic Programs:</span>
                                                                                                    <br />
                                                                                                    - Collaborate with universities to develop and enhance data science curricula
                                                                                                    <br />
                                                                                                    - Support the creation of new data science degree programs and specializations

                                                                                          </p>
                                                                                </div>
                                                                                <div className="flex">
                                                                                          <GoTriangleRight className="text-brand flex-shrink-0 mt-1" />
                                                                                          <p className="text-justify">
                                                                                                    <span className="font-normal">Academic Programs:</span>
                                                                                                    <br />
                                                                                                    - Collaborate with universities to develop and enhance data science curricula
                                                                                                    <br />
                                                                                                    - Support the creation of new data science degree programs and specializations

                                                                                          </p>
                                                                                </div>

                                                                      </div>
                                                            </div>
                                                  </div>
                                        </div>
                              </div>
                    </div>
          )
}

export default FocusArea
