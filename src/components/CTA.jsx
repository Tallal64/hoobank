import React from 'react'
import Btn from './Btn'

const CTA = () => {
    return (
        <section className='bg-black-gradient-2 flex flex-col md:flex-row justify-between items-center px-12 py-16 md:px-28 sm:py-24 rounded-lg font-poppins mb-20'>
            <div className='text-center md:text-start'>
                <h2 className='text-2xl ss:text-4xl sm:text-5xl  font-semibold'>
                    Let's try our service now!
                </h2>

                <p className='text-dimWhite mt-4 md:mt-6 text-sm ss:text-base'>
                    Everything you need to accenpt card payments <br /> and grow your business anywhere on the planet.
                </p>
            </div>


            <div className='mt-10 md:mt-0'>
                <Btn />
            </div>
        </section>
    )
}

export default CTA