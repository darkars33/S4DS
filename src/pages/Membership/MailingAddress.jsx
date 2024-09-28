import React, {useState, useEffect} from 'react'

const MailingAddress = ({setStep, step}) => {
          const [show, setShow] = useState(false)

          useEffect(() =>{
                    window.scrollTo(0,0)
          },[0,0])

          return (
                    <div className='w-[30%] max-w-[30%] lg:max-w-[60%] lg:w-[50%] md:max-w-[100%] md:w-[100%] flex flex-col gap-5'>
                              <h1 className='text-2xl font-normal'>Mailing Address</h1>
                              <div className='w-[100%] flex flex-col gap-5'>

                                        <input type="text" placeholder='Address*' className='w-[100%] border p-2 border-accent-color outline-none' />
                                        <input type="number" placeholder='Pin Code*' className='w-[100%] border p-2 border-accent-color outline-none' />
                                        <select name="category" className='p-2 border border-accent-color outline-none'>
                                                  <option value="" disabled selected hidden>City*</option>
                                                  <option value="male">Male</option>
                                                  <option value="female">Female</option>
                                        </select>

                                        <select name="category" className='p-2 border border-accent-color outline-none'>
                                                  <option value="" disabled selected hidden>State*</option>
                                                  <option value="male">Male</option>
                                                  <option value="female">Female</option>
                                        </select>

                                        <select name="category" className='p-2 border border-accent-color outline-none'>
                                                  <option value="" disabled selected hidden>Country*</option>
                                                  <option value="male">Male</option>
                                                  <option value="female">Female</option>
                                        </select>

                                        <select name="category" className='p-2 border border-accent-color outline-none'>
                                                  <option value="" disabled selected hidden>Member of S4DS registered Student Chapter</option>
                                                  <option value="male">Male</option>
                                                  <option value="female">Female</option>
                                        </select>

                                        <div className='flex items-center gap-5'>
                                                  <input type="checkbox" className='bg-accent-color' />
                                                  <label className='mb-1'>I confirm to the <span className='font-normal cursor-pointer' onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)} >Code of Ethics Undertaking.</span>
                                                  </label>

                                                  <p className={`absolute p-3 bg-background w-[30rem] right-10 transition duration-600 ease-in-out ${show ? '' : 'hidden'}`}>I affirm that as a S4DS member, I shall abide by the Code of Ethics of the Society for Data Science (S4DS).
                                                            I, further, undertake that I shall uphold the fair name of the Society for Data Science by maintaining high
                                                            standards of integrity and professionalism. I am aware that my breach of the Code of Ethics may lead to
                                                            disciplinary action against me under the Byelaws and rules of the S4DS. I, hereby, confirm that I shall be
                                                            bound by any decision taken by the S4DS in such matters. Further, I hereby convey my consent to
                                                            receive the S4DS publications in soft copy form and any other information about the activities of the
                                                            society by email or by SMS on my Mobile number, from time to time, by the society or the members of
                                                            the society</p>

                                        </div>

                                        <div className='flex gap-2'>

                                                  <button className='p-2 w-[100%] bg-brand text-white' onClick={() =>setStep(step-1)}>Previous</button>
                                                  <button className='p-2 w-[100%] bg-brand text-white' onClick={() =>setStep(step+1)}>Next</button>

                                        </div>
                              </div>
                    </div>
          )
}

export default MailingAddress
