import React from 'react'
import styles from '../style'
import stats from '../style'

const Stats = () => {
    return (
        <section className='flex justify-center items-center flex-wrap flex-row font-poppins sm:mb-20 mb-6'>
            <div className='flex flex-1 flex-row justify-start items-center m-3'>
                <h4 className='mr-2 text-3xl font-semibold leading-10 xs:text-5xl xs:leading-[43px]'>230+</h4>
                <p className='text-gradient font-normal text-base ml-3 leading-[21px] xs:leading-[26px] xs:text-[20px]'>TRUSTED BY COMPANY</p>
            </div>

            <div className='flex flex-1 flex-row justify-start items-center m-3'>
                <h4 className='mr-2 text-3xl font-semibold leading-10 xs:text-5xl xs:leading-[43px]'>$230M+</h4>
                <p className='text-gradient font-normal text-base ml-3 leading-[21px] xs:leading-[26px] xs:text-[20px]'>TRANSACTION</p>
            </div>

            <div className='flex flex-1 flex-row justify-start items-center m-3'>
                <h4 className='mr-2 text-3xl font-semibold leading-10 xs:text-5xl xs:leading-[43px]'>3800+</h4>
                <p className='text-gradient font-normal text-base ml-3 leading-[21px] xs:leading-[26px] xs:text-[20px]'>USER ACTIVE</p>
            </div>
        </section>
    )
}

export default Stats