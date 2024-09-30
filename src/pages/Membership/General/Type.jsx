import React, {useState, useEffect} from 'react'
import Acad from '../../../assets/Membership/Acad.svg';
import Corporate from '../../../assets/Membership/corporate.svg';
import Student from '../../../assets/Membership/student.svg';


const Type = ({setStep, step}) => {

          const [type, setType] = useState('academic-professional')

          useEffect(() =>{
                    window.scrollTo(0,0)
          },[0,0])

          return (
                    <div className='w-[100%] max-w-[1440px] flex flex-col items-center gap-5'>
                              <div className='text-xl mb:w-[100%] border border-accent-color p-1 px-10 mb:px-0 flex justify-center items-center gap-5'>
                                        <label for="category" className='mb:text-[1rem]'>Membership Category:</label>
                                        <select name="category" className='pr-5 text-center  outline-none font-normal'>
                                                  <option value="general">General</option>
                                                  <option value="saab">Student</option>
                                        </select>
                              </div>
                              <div className='py-3 flex justify-center'>
                                        <h1 className='text-lg text-center'>Membership Type</h1>
                              </div>
                              <div className=' w-[100%] flex justify-center gap-5 mb:flex-col mb:items-center'>
                                        <div onClick={() => setType('academic-professional')} className={`p-3 w-1/6 md:w-[100%] border border-[#FFDAD2] flex flex-col mb:flex-row mb:justify-between items-center gap-7 text-lg cursor-pointer ${type === 'academic-professional' ? 'bg-accent-color': ''}`}>
                                                  <img src={Acad} alt="acad-image" className='backdrop-filter-none' />
                                                  <h1 className='text-center'>Academic <br /> Professional</h1>
                                        </div>
                                        <div onClick={() => setType('corporate-professional')} className={`p-3 w-1/6 md:w-[100%] border border-[#FFDAD2] flex flex-col mb:flex-row mb:justify-between items-center gap-7 text-lg cursor-pointer ${type === 'corporate-professional' ? 'bg-accent-color': ''}`}>
                                                  <img src={Corporate} alt="corporate" />
                                                  <h1 className='text-center'>Corporate <br /> Professional</h1>
                                        </div>
                                        <div onClick={() => setType('student')} className={`p-3 w-1/6 md:w-[100%] border border-[#FFDAD2] flex flex-col mb:flex-row mb:justify-between items-center gap-7 text-lg cursor-pointer ${type === 'student' ? 'bg-accent-color': ''}`}>
                                                  <img src={Student} alt="student" />
                                                  <h1 className='text-center'>Student</h1>
                                        </div>
                              </div>
                              <div className='py-3 flex flex-col gap-4'>
                              <div className='text-xl border border-accent-color p-1 px-5 flex items-center gap-5'>
                                        <select name="category" className='pr-[18rem] mb:pr-[5rem] text-center  outline-none font-normal'>
                                                  <option value="general">General</option>
                                                  <option value="saab">Saab</option>
                                                  <option value="opel">Opel</option>
                                                  <option value="audi">Audi</option>
                                        </select>
                              </div>
                              <div className='text-xl border border-accent-color p-1 px-5 flex items-center gap-5'>
                                        <select name="category" className='pr-[18rem] mb:pr-[5rem] text-center  outline-none font-normal'>
                                                  <option value="general">General</option>
                                                  <option value="saab">Saab</option>
                                                  <option value="opel">Opel</option>
                                                  <option value="audi">Audi</option>
                                        </select>
                              </div>
                              </div>
                              <button className='text-white bg-brand p-2 px-[12rem] mb:px-[5rem] mt-10' onClick={() => setStep(step+1)}>Next</button>
                    </div>
          )
}

export default Type
