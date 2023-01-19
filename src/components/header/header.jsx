import React from 'react'
import { SiYourtraveldottv } from 'react-icons/si'
import travel from '../../assets/images/travel.png'
// import travelVideo from '../../assets/videos/hero-video.mp4'
import './header.css'

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
        <div className='flex flex-wrap items-center mt-8'>
            <div className='w-full md:w-5/12 px-4 mr-auto ml-auto'>
                <div className="text-gray-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-gray-100">
                    <SiYourtraveldottv size={36} />
                </div>
                <h3 className='text-3xl mb-2 font-semibold leading-normal'>
                    Trip N Thrill
                </h3>
                <p className='text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700'>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas, possimus reprehenderit. Modi accusamus omnis ab exercitationem molestiae eum, dolorem aperiam necessitatibus quam esse rem id optio, mollitia officiis? Optio, quia!
                </p>
                <p className='text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700'>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas, possimus reprehenderit. Modi accusamus omnis ab exercitationem molestiae eum, dolorem aperiam necessitatibus quam esse rem id optio, mollitia officiis? Optio, quia!
                </p>
            </div>  
            <div className='w-full md:w-4/12 px-4 mr-auto ml-auto'>
                <div className='relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-black'>
                    <img src='https://source.unsplash.com/bMIlyKZHKMY' alt=''  className='w-full align-middle rounded-t-large p-2'/>
                    <blockquote className='relative p-8 mb-4 bg-black '>
                        <h4 className='text-lg font-bold text-white'>Travel✈️  Work🏢 Explore🚀 </h4>
                        <p className="text-md font-light mt-2 text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos doloremque est voluptates!</p>
                    </blockquote>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Header