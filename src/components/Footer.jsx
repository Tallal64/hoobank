import React from 'react'
import { facebook, instagram, linkedin, logo, twitter } from '../assets'

const Footer = () => {
    return (
        <section className='font-poppins'>
            <div className='flex justify-between gap-x-28 mb-20 flex-col  md:flex-row'>
                {/* LOGO */}
                <div className='mr-32 flex flex-1 flex-col mb-14 md:mb-0 items-center text-center sm:items-start sm:text-start w-full'>
                    <img src={logo} alt="logo" className='w-[266px] h-[72px] object-contain' />
                    <p className='text-dimWhite mt-3 md:mt-6 ml-4'>
                        A new way to make  th payments <br /> easy, reliable and secure.
                    </p>
                </div>

                {/* LINKS */}
                <div className='ml-6 md:ml-10 flex flex-[1.5] justify-between flex-wrap gap-x-10 gap-y-14 md:gap-x-0 md:gap-y-0'>
                    {/*  */}
                    <div className='flex flex-col gap-y-6'>
                        <h4>
                            Useful links
                        </h4>

                        <ul className='text-dimWhite flex flex-col gap-y-3'>
                            <li className='text-sm'><a href=""> Content</a></li>
                            <li className='text-sm'><a href=""> How it works</a></li>
                            <li className='text-sm'><a href=""> Create</a></li>
                            <li className='text-sm'><a href=""> Explore</a></li>
                            <li className='text-sm'><a href=""> Terms & Services</a></li>
                        </ul >
                    </div >



                    {/*  */}
                    <div className='flex flex-col gap-y-6' >
                        <h4>
                            Community
                        </h4>

                        <ul className='text-dimWhite flex flex-col gap-y-3'>
                            <li className='text-sm'><a href="">Help Center</a></li>
                            <li className='text-sm'><a href="">Partners</a></li>
                            <li className='text-sm'><a href="">Suggestions</a></li>
                            <li className='text-sm'><a href="">Blog</a></li>
                            <li className='text-sm'><a href="">Newsletters</a></li>
                        </ul>
                    </div >



                    {/*  */}
                    <div className='flex flex-col gap-y-6' >
                        <h4>
                            Partner
                        </h4>

                        <ul className='text-dimWhite flex flex-col gap-y-3'>
                            <li className='text-sm'> <a href="">Our Partner</a></li>
                            <li className='text-sm'> <a href="">Become a Partner</a></li>
                        </ul>
                    </div >
                </div >
            </div >










            {/* BOTTOM_FOOTER */}

            <div className='flex justify-between border-t-[1px] border-[#3F3E45] py-10 flex-col md:flex-row gap-y-6 md:gap-y-0'>
                <p>Copyright Ⓒ 2021 Hoobank. <br className='block xs:hidden'/> All right reserved.</p>


                <div className='flex gap-x-10'>
                    <img src={instagram} alt="instagram" className='cursor-pointer' />
                    <img src={facebook} alt="facebook" className='cursor-pointer' />
                    <img src={twitter} alt="twitter" className='cursor-pointer' />
                    <img src={linkedin} alt="linkedin" className='cursor-pointer' />
                </div>
            </div>
        </section >
    )
}

export default Footer