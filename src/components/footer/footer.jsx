import React from 'react'
import {AiFillFacebook, AiOutlineInstagram, AiOutlineGithub, AiOutlineTwitter, AiFillYoutube} from 'react-icons/ai'
const Footer = () => {
  return (
    <div className='relative pt-8 pb-6'>
        <div className='conatiner mx-auto px-4'>
            <div className='flex flex-wrap'>
                <div className='w-full lg:w-6/12 px-4 mb-8'>
                    <h4 className='text-3xl font-semibold'> Lets keep in Touch!</h4>
                    <h5 className='text-lg mb-2 text-gray-700'>You can Find Us On This Platform</h5>
                    <p>Welcome to our tour and travel website. We offer personalized travel experiences for all types of travelers. From luxury to budget-friendly trips. Let's plan your next adventure together!.</p>
                    <div className='mt-6 '>
                        <button className='bg-white text-blue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none mr-2'>
                            <AiFillFacebook className='inline' size={20} />
                        </button>
                        <button className='bg-white text-red-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none mr-2'>
                            <AiOutlineInstagram className='inline' size={20} />
                        </button>
                        <button className='bg-white text-blue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none mr-2'>
                            <AiOutlineTwitter className='inline' size={20} />
                        </button>
                        <button className='bg-white text-black-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none mr-2'>
                            <AiOutlineGithub className='inline' size={20} />
                        </button>
                        <button className='bg-white text-red-700 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none mr-2'>
                            <AiFillYoutube className='inline' size={20} />
                        </button>
                    </div>
                </div>
                <div className='w-full lg:w-6/12 px-4'>
                <div className="flex flex-wrap mb-6">
                    <div className='w-full lg:w-4/12 px-4 ml-auto mb-6'>
                        <span className='block uppercase text-red-600 text-lg font-bold mb-4'>Our Company</span>
                        <ul className='list-unstyled'>
                            <li>
                                <a className='text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm' href='https://www.tripnthrill.com'>About Us</a>
                            </li>
                            <li>
                                <a className='text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm' href='https://www.tripnthrill.com'>Careers</a>
                            </li>
                            <li>
                                <a className='text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm' href='https://www.tripnthrill.com'>Blogs</a>
                            </li>
                            <li>
                                <a className='text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm' href='https://www.tripnthrill.com'>Our Partners</a>
                            </li>
                            <li>
                                <a className='text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm' href='https://www.tripnthrill.com'>Our Locations</a>
                            </li>
                            <li>
                                <a className='text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm' href='https://www.tripnthrill.com'>Contact Us</a>
                            </li>
                        </ul>
                    </div>
                    <div className='w-full lg:w-4/12 px-4 ml-auto mb-6'>
                        <span className='block uppercase text-green-600 text-lg font-bold mb-4'>Products</span>
                        <ul className='list-unstyled'>
                            <li>
                                <a className='text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm' href='https://www.tripnthrill.com'>How it works?</a>
                            </li>
                            <li>
                                <a className='text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm' href='https://www.tripnthrill.com'>Privacy Policy</a>
                            </li>
                            <li>
                                <a className='text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm' href='https://www.tripnthrill.com'>Terms of use</a>
                            </li>
                            <li>
                                <a className='text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm' href='https://www.tripnthrill.com'>Cookie Policy</a>
                            </li>
                        </ul>
                    </div>
                    <div className='w-full lg:w-4/12 px-4 ml-auto'>
                        <span className='block uppercase text-blue-500 text-lg font-bold mb-4'>Top Cities</span>
                        <ul>
                            <li>
                                <a href='https://www.tripnthrill.com' className='text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm'>Bangalore</a>
                            </li>
                            <li>
                                <a className='text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm' href='https://www.tripnthrill.com'>Hyderabad</a>
                            </li>
                            <li>
                                <a className='text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm' href='https://www.tripnthrill.com'>Mumbai</a>
                            </li>
                            <li>
                                <a className='text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm' href='https://www.tripnthrill.com'>Pune</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            </div>
            <hr className='my-6 border-gray-400'/>
            <div className='flex flex-wrap items-center md:justify-between justify-center'>
                <div className='w-full md:w-4/12 px-4 mx-auto text-center'>
                    <div className='text-sm text-gray-600 font-semibold py-1'>Copyright 2023 Trip&Thrill</div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Footer