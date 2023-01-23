import React from 'react'
import { SiYourtraveldottv } from 'react-icons/si'
import { MdTravelExplore, MdWork, MdExplore } from 'react-icons/md'
import {FaGooglePlay} from 'react-icons/fa'
import travel from '../../assets/images/travel.png'
// import travelVideo from '../../assets/videos/hero-video.mp4'
import './header.css'
import logo from '../../assets/images/6.svg'

const Header = () => {
  return (
    // <>
    //     <div className='relative pt-16 lg:pb-32 flex content-center items-center justify-center min-h-home-lg' id='home'> 
    //         <video src={travelVideo} autoPlay={true} muted className='top-0 bg-center' ></video>
    //     </div>
    //     <div className="container relative mx-auto">
    //         <div className="items-center flex flex-wrap">
    //             <div className="w-full lg:w-6/12 ml-auto mr-auto px-4 text-center">
    //                 <div className="pr-12">
    //                     <h1 className='text-black font-semibold text-5xl -mt-32'>Welcome to Trip&Thrill</h1>
    //                 </div>
    //             </div>
    //         </div>
    //     </div>
    // </>
    <div>
        <div className='flex flex-wrap items-center mt-8 h-screen'>
            <div className='w-full md:w-5/12 px-4 mr-auto ml-auto'>
                <div className="text-gray-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-gray-100">
                    <SiYourtraveldottv size={36} />
                </div>
                <h3 className='text-3xl mb-2 font-semibold leading-normal'>
                    Your adventure Start's Here!
                </h3>
                <p className='text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700'>
                    TripNTravel is one of the most practical and popular road trip planning apps out there. You can plan your journey right in the app, with all the features built in to serve you.
                </p>
                <p className='text-lg leading-relaxed mt-4 mb-4 text-gray-700 font-bold'>
                    Claim your freedom!
                </p>
                <div className='flex items-center justify-around w-56 gap-4'>

                <button className='w-48 h-12 rounded-sm text-white bg-lime-700 shadow-xl'>
                    Find out how
                </button>
                <div className="text-gray-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 shadow-lg rounded-full bg-gray-100">
                    <FaGooglePlay size={36}  />
                </div>
                </div>
            </div>  
            <div className='w-full md:w-4/12 px-4 mr-auto ml-auto h-2/4'>
                <div className='relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-black'>
                    <img src={logo} alt=''  className='w-full align-middle rounded-t-large p-2 h-96 object-cover'/>
                    <blockquote className='relative p-8 mb-4 bg-black '>
                        <h4 className='text-lg font-bold text-white'>Travel✈️  Work🏢 Explore🚀 </h4>
                        <p className="text-md font-light mt-2 text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos doloremque est voluptates!</p>
                    </blockquote>
                </div>
            </div>
        </div>

        <div className="pb-20 mt-4 bg-gray-100">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap">
                    <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                            <div className="px-4 py-5 flex-auto bg-green-500 rounded-md">
                                <div className="text-black p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red">
                                    <MdTravelExplore size={24} />
                                </div>
                                <h6 className='text-xl font-semibold'>Travel</h6>
                                <p className='mt-2 mb-4 text-gray-600'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis cum explicabo, debitis assumenda, alias et distinctio error similique nemo quae, illo nobis cumque nihil.</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-4/12 px-4 text-center">
                        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                            <div className="px-4 py-5 flex-auto bg-teal-500 rounded-md">
                                <div className="text-black p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red">
                                    <MdWork size={24} />
                                </div>
                                <h6 className='text-xl font-semibold'>Work</h6>
                                <p className='mt-2 mb-4 text-gray-600'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis cum explicabo, debitis assumenda, alias et distinctio error similique nemo quae, illo nobis cumque nihil.</p>
                            </div>
                        </div>
                    </div>
                    <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                            <div className="px-4 py-5 flex-auto bg-fuchsia-200 rounded-md">
                                <div className="text-black p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red">
                                    <MdExplore size={24} />
                                </div>
                                <h6 className='text-xl font-semibold'>Explore</h6>
                                <p className='mt-2 mb-4 text-gray-600'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis cum explicabo, debitis assumenda, alias et distinctio error similique nemo quae, illo nobis cumque nihil.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="relative py-20 bg-black" id="services">
            <div className="bootom-auto top-0 left-0 right-0 w-full absolute overflow-hidden -mt-20 h-20">
                <svg className='absolute bottom-0 overflow-hidden' xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none' version='1.1 ' viewBox='0 0 2560 100' x="0" y="0">
                    <polygon className='text-black fill-current' points='2560 0 2560 100 0 100'>
                    </polygon>
                </svg>
            </div>
            <div className="container mx-auto px-4 bg-black">
                <div className="items-center flex ">
                    <div className="w-full md:w-4/12 ml-auto mr-auto px-4 hidden md:block">
                        <img src='https://iplan.ai/wp-content/uploads/2022/02/destinations.png' alt='...' className='max-w-full rounded-lg shadow-lg ' />
                    </div>
                    <div className="w-full md:5/12  px-4 text-white">
                        <div className="md:pr-12 md:pl-24">
                            <div className="text-black p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                                <MdTravelExplore size={36} />
                            </div>
                            <h3 className='text-3xl font-semibold text-white'>Where is your next trip?</h3>
                            <p className='mt-4 text-lg leading-relaxed text-gray-500'>
                            Tell us what you enjoy the most. Our Artificial Intelligence will curate an itinerary matching all your needs.
                            </p>
                            <div className='mt-2'>
                                <li className='mb-2 text-lg leading-relaxed text-gray-500'>What is the purpose of your trip?</li>
                                <li className='mb-2 text-lg leading-relaxed text-gray-500'>What are your interests?</li>
                                <li className='mb-2 text-lg leading-relaxed text-gray-500'>With who do you go with?</li>
                                <li className='mb-2 text-lg leading-relaxed text-gray-500'>How long do you stay?</li>
                                <li className='text-lg leading-relaxed text-gray-500'>What is your budget?</li>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div> 
  )
}

export default Header