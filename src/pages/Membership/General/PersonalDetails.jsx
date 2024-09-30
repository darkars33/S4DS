import React, { useState, useRef, useEffect } from 'react'

const PersonalDetails = ({setStep, step}) => {

          const [passport, setPassport] = useState('');
          const [idProof, setIdProof] = useState('');
          const passportImg = useRef(null);
          const idProofImg = useRef(null);

          const handleChangePassportImg = (e) => {
                    const file = e.target.files[0];
                    setPassport(file.name)
          }
          const handleChangeIdProofImg = (e) => {
                    const file = e.target.files[0];
                    setIdProof(file.name)
          }
          useEffect(() =>{
                    window.scrollTo(0,0)
          },[0,0])

          return (
                    <div className='w-[30%] max-w-[30%] lg:max-w-[60%] lg:w-[50%] md:max-w-[100%] md:w-[100%] flex flex-col gap-5'>
                              <h1 className='text-2xl font-normal'>Personal Details</h1>
                              <div className='w-[100%] flex flex-col gap-5'>

                                        <select name="category" className='p-2 border border-accent-color outline-none'>
                                                  <option value="general">Title</option>
                                                  <option value="saab">Saab</option>
                                        </select>

                                        <input type="text" placeholder='Full Name*' className='w-[100%] border p-2 border-accent-color outline-none' />
                                        <input type="date" placeholder='Date of Birth*' className='w-[100%] border p-2 border-accent-color outline-none' />
                                        <select name="category" className='p-2 border border-accent-color outline-none'>
                                                  <option value="" disabled selected hidden>Gender*</option>
                                                  <option value="male">Male</option>
                                                  <option value="female">Female</option>
                                        </select>

                                        <input type="email" placeholder='Email Id*' className='w-[100%] border p-2 border-accent-color outline-none' />
                                        <input type="number" placeholder='Mobile No.*' className='w-[100%] border p-2 border-accent-color outline-none' />
                                        <div className='flex gap-2'>
                                                  <input type="file" className='hidden' ref={passportImg} onChange={handleChangePassportImg} />
                                                  <input type="file" className='hidden' ref={idProofImg} onChange={handleChangeIdProofImg} />
                                                  <div className='w-1/2 flex flex-col items-center'>
                                                            <label>{passport ? passport : 'Passport sized Photo*'}</label>
                                                            <button className='p-2 w-[100%] bg-accent-color' onClick={() => passportImg.current.click()} >Upload</button>
                                                  </div>
                                                  <div className='w-1/2 flex flex-col items-center'>
                                                            <label>{idProof ? idProof : 'ID Proof (Govt issued)**'}</label>
                                                            <button className='p-2 w-[100%] bg-accent-color' onClick={() => idProofImg.current.click()}>Upload</button>
                                                  </div>
                                        </div>
                                        <select name="category" className='p-2 border border-accent-color outline-none'>
                                                  <option value="" disabled selected hidden>Highest Academic Qualification*</option>
                                                  <option value="male">Male</option>
                                                  <option value="female">Female</option>
                                        </select>
                                        <select name="category" className='p-2 border border-accent-color outline-none'>
                                                  <option value="" disabled selected hidden>Year of Graduation*</option>
                                                  <option value="male">Male</option>
                                                  <option value="female">Female</option>
                                        </select>
                                        <input type="text" placeholder='University/ Institute of Highest Qualification*' className='w-[100%] border p-2 border-accent-color outline-none' />
                                        <input type="text" placeholder='Current Organization/ University/ Institute*' className='w-[100%] border p-2 border-accent-color outline-none' />
                                        <div className='flex gap-2'>

                                                  <button className='p-2 w-[100%] bg-brand text-white' onClick={() =>setStep(step-1)}>Previous</button>
                                                  <button className='p-2 w-[100%] bg-brand text-white' onClick={() => setStep(step+1)}>Next</button>

                                        </div>
                              </div>
                    </div>
          )
}

export default PersonalDetails
