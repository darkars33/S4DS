import React, {useState, useEffect} from 'react'
import Type from './Type'
import PersonalDetails from './PersonalDetails'
import MailingAddress from './MailingAddress'

const StudentRegistration = () => {

  const [step, setStep] = useState(1);

  const component = (() => {
    switch(step) {
      case 1:
        return <Type setStep={setStep} step={step} />;
      case 2:
        return <PersonalDetails setStep={setStep} step={step} />;
      case 3:
        return <MailingAddress setStep={setStep} step={step} />;
      default:
        return <Type setStep={setStep} step={step} />;
    }
  })();

  useEffect(() =>{
    window.scrollTo(0,0)
},[0,0])



  return (
    <div className='w-full flex justify-center'>
      <div className='w-[90%]'>
          <div className='w-[100%] py-5 mt-28'>
          <h1 className="text-[2.5rem] font-normal pb-3 text-center">Become a Member Today!</h1>
          </div>
          <div className='w-[100%] p-5 flex justify-center items-center'>
            <div className={`p-3 w-10 h-10 flex justify-center text-white font-normal ${step === 1 ? 'bg-brand' : 'bg-accent-color'}`}>
              1
            </div>
            <hr className='h-1 bg-accent-color text-accent-color w-[10%]' />
            <div className={`p-3 w-10 h-10 flex justify-center text-white font-normal ${step === 2 ? 'bg-brand' : 'bg-accent-color'}`}>
              2
            </div>
            <hr className='h-1 bg-accent-color text-accent-color w-[10%]' />
            <div className={`p-3 w-10 h-10 flex justify-center text-white font-normal ${step === 3 ? 'bg-brand' : 'bg-accent-color'}`}>
              3
            </div>
          </div>
          <div className='w-[100%] py-5 pb-10 flex justify-center'>
                    {component}
          </div>
      </div>
    </div>
  )
}

export default StudentRegistration
