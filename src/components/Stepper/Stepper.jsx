import React, { useState } from 'react'
import { TiTick } from "react-icons/ti"
import "./stepper.css"

function Stepper() {

    const steps = ["Customer Info", "Shipping Info", "Payment"]
    const [currentStep, setCurrentStep] = useState(1)
    const [complete, setComplete] = useState(false)
    
  return (
    <>
        {/* premier palier */}
        <div className='flex justify-between'>
            {/* Deuxième palier */}
            {steps?.map((step, i) => (
                <div key={i} className={`step-item ${currentStep === i + 1 && "active"} ${(i + 1 < currentStep || complete) && 'complete'}`}>
                
                {/* Troisième palier */}
                    <div className='step'> {
                        (i + 1 < currentStep || complete) ? <TiTick size={24} />  : i + 1
                    } </div>
                    <p className='text-gray-500'> {step} </p>
                </div>
            ))}
        </div>
            {!complete && (
                <div className='flex items-center gap-3'>
                    <button 
                        className='btn'
                        onClick={() => {
                            setCurrentStep((prev) => prev - 1)
                        }}
                    >
                        Prev
                    </button>
                    <button 
                        className='btn'
                        onClick={() => {
                            currentStep === steps.length
                                ? setComplete(true)
                                : setCurrentStep((prev) => prev + 1)
                        }}
                    >
                        {currentStep === steps.length ? 'Finish' : currentStep <= steps.length ? 'Next' : 'Finish'}
                        
                    </button>
                </div>  
            )}
    </>
  )
}

export default Stepper