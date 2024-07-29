import React from 'react'
import Btn from './Btn'
import { card } from '../assets'

const CardDeal = () => {
    return (
        <section className='mt-20 font-poppins flex flex-col md:flex-row'>
            <div className='flex flex-col flex-1 justify-center items-start'>
                <h2 className='text-center sm:text-start text-4xl md:text-5xl font-semibold'>
                    Find a better card deal <br className="hidden sm:block" /> in few easy steps.
                </h2>

                <p className='text-center sm:text-start text-dimWhite text-base my-8 max-w-lg'>
                    Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
                    aliquet eget mauris tortor. Aliquet ultrices ac.
                </p>

                <div className='w-full text-center sm:text-start'>
                    <Btn />
                </div>
            </div>


            <div className='flex flex-1 justify-center items-center mt-10 sm:mt-0 md:ml-16 ml-0'>
                <img src={card} alt="card" className='h-full' />
            </div>
        </section>
    )
}

export default CardDeal