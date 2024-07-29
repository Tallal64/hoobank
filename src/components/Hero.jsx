import React from 'react'
import styles from '../style';
import { discount, robot } from '../assets'
import GetStarted from './GetStarted'


const Hero = () => {
    return (
        <section id='home' className={`flex flex-col md:flex-row ${styles.paddingY} mb-10`}>

            {/* TEXT-CONTAINER */}
            <div className={`flex flex-1 flex-col justify-center  md:mb-28 -mb-14 px-4 sm:px-16 xl:px-0`}>

                {/* DISCOUNT */}
                <div className='flex items-center bg-discount-gradient rounded-xl py-1 px-4 mb-2 max-w-md'>
                    <img src={discount} alt="discount" className='h-8 w-8' />
                    <p className='text-dimWhite max-w-md my-4 text-base md:text-lg font-poppins'>
                        <span className='text-white'>20%</span> Discount for {""}
                        <span className='text-white'>1 Month</span> Account
                    </p>
                </div>



                <div className='flex'>
                    <h1 className='flex-1 capitalize text-4xl text-center sm:text-start sm:leading-tight ss:text-5xl font-semibold font-poppins'>
                        The next <br />
                        <span className='text-gradient'>generation</span> {" "} <br /> payment method
                    </h1>


                    <div className='ss:flex hidden md:mr-4 mr-0 '>
                        <GetStarted />
                    </div>
                </div>

                <p className='text-center sm:text-start text-dimWhite max-w-md my-8 text-base md:text-lg font-poppins mt-5'>
                    Our team of experts use a metalogy to identify the credit cards to most likely to fit your needs.We examins annual percent rates and percent fees.
                </p>
            </div>


            {/* IMAGE-CONTAINER */}
            <div className={`${styles.flexCenter} flex-1 my-10 md:my-0 relative`}>
                <img src={robot} alt="robot_img" className='w-full h-full relative z-10' />
                <div className='absolute w-[40%] h-[35%] top-0 pink__gradient z-0'></div>
                <div className='absolute w-[60%] h-[40%] top-25 white__gradient z-1'></div>
                <div className='absolute w-[50%] h-[50%] bottom-20 blue__gradient z-0'></div>
            </div>

            <div className='flex justify-center ss:hidden md:mr-4 mr-0'>
                <GetStarted />
            </div>
        </section>
    )
}

export default Hero;