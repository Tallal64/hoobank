import React from 'react'
import { people01, people02, people03, quotes } from '../assets'
import { feedback } from '../constants'

const Feedback = () => {
    return (
        // <section className='flex justify-between flex-col md:flex-row gap-y-12 md:gap-y-0 sm:grid sm:grid-cols-2 sm:gap-10 '>
        <section className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 '>

            {/* FEEDBACK_1 */}
            <div className='bg-black-gradient hover:bg-black-gradient-2 rounded-lg py-12 px-10 flex flex-col items-center md:items-start gap-y-10 cursor-pointer'>

                <img src={quotes} alt="quotes" className='w-10 h-7' />

                <p className='text-dimWhite max-w-[250px] text-base md:text-start text-center'>
                    Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.
                </p>


                <div className='flex items-center gap-x-2 md:text-start text-center'>
                    <img src={people01} alt="people01" className='w-12 h-12' />

                    <div className=''>
                        <h2 className='text-base'>Herman Jensen</h2>
                        <p className='text-dimWhite text-xs'>Founder & Leader</p>
                    </div>
                </div>
            </div>





            {/* FEEDBACK_2 */}
            <div className='bg-black-gradient hover:bg-black-gradient-2 rounded-lg py-12 px-10 flex flex-col items-center md:items-start gap-y-10 cursor-pointer'>

                <img src={quotes} alt="quotes" className='w-10 h-7' />

                <p className='text-dimWhite max-w-[250px] text-base md:text-start text-center'>
                    Money makes your life easier. If you're lucky to have it, you're lucky.
                </p>


                <div className='flex items-center gap-x-2 mt-6 md:text-start text-center'>
                    <img src={people02} alt="people01" className='w-12 h-12' />

                    <div className=''>
                        <h2 className='text-base'>Steve Mark</h2>
                        <p className='text-dimWhite text-xs'>Founder & Leader</p>
                    </div>
                </div>
            </div>





            {/* FEEDBACK_3 */}
            <div className='bg-black-gradient hover:bg-black-gradient-2 rounded-lg py-12 px-10 flex flex-col items-center md:items-start gap-y-10 cursor-pointer'>

                <img src={quotes} alt="quotes" className='w-10 h-7' />

                <p className='text-dimWhite max-w-[250px] text-base md:text-start text-center'>
                    It is usually people in the money business, finance, and international trade that are really rich.
                </p>


                <div className='flex items-center gap-x-2 md:text-start text-center'>
                    <img src={people03} alt="people01" className='w-12 h-12' />

                    <div className=''>
                        <h2 className='text-base'>Kenn Gallagher</h2>
                        <p className='text-dimWhite text-xs'>Founder & Leader</p>
                    </div>
                </div>
            </div>





            {/* FEEDBACK_4 */}
            <div className='bg-black-gradient hover:bg-black-gradient-2 rounded-lg py-12 px-10 flex flex-col items-center md:items-start gap-y-10 cursor-pointer'>

                <img src={quotes} alt="quotes" className='w-10 h-7' />

                <p className='text-dimWhite max-w-[250px] text-base md:text-start text-center'>
                    Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.
                </p>


                <div className='flex items-center gap-x-2 md:text-start text-center'>
                    <img src={people01} alt="people01" className='w-12 h-12' />

                    <div className=''>
                        <h2 className='text-base'>Herman Jensen</h2>
                        <p className='text-dimWhite text-xs'>Founder & Leader</p>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Feedback