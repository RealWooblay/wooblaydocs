import React from 'react';
import { AiOutlineGithub, AiOutlineTwitter } from 'react-icons/ai';
import { FaDiscord } from 'react-icons/fa';


const Index: React.FC = () => {

    return (
        <div className='relative h-screen text-white bg-gradient-to-b from-black from-15% to-purple flex items-center justify-center'>
            <div className='container mx-auto px-8'>
                <div className='grid grid-cols-2 gap-10'>
                    <div>
                        {/* Email Form */}
                        <h1 className='text-3xl font-bold mb-4'>Contact Us</h1>
                        <form className='flex flex-col'>
                            <input type='text' placeholder='Your Name' className='bg-transparent border-b border-gray-500 py-2 mb-4 text-white outline-none' />
                            <input type='email' placeholder='Your Email' className='bg-transparent border-b border-gray-500 py-2 mb-4 text-white outline-none' />
                            <textarea placeholder='Your Message' className='bg-transparent border-b border-gray-500 py-2 mb-4 text-white outline-none'></textarea>
                            <button type='submit' className='bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg w-1/2'>Send Message</button>
                        </form>
                    </div>
                    <div>
                        {/* Upcoming Event Card */}
                        <div className='bg-gray-800 p-4 rounded-lg mt-6'>
                            <h2 className='text-xl font-bold mb-2'>Upcoming Event</h2>
                            <p className='text-gray-300'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tempor justo et eros lacinia, vitae luctus nulla fermentum.</p>
                        </div>
                        <div className='flex gap-4 pt-5'>
                            {/* Add your social media icons and links here */}
                            <div className='z-10 hidden lg:flex'>
                                <FaDiscord size={35} className='cursor-pointer hover:text-cyan-600' />
                                <AiOutlineTwitter size={35} className='cursor-pointer ml-10 hover:text-cyan-600' />
                            </div>
                        </div>
                        {/* Survey Link */}
                        <div className='mt-6'>
                            <a href='https://forms.gle/qgWMNHnf5AkDcVJ69' className='text-blue-500 hover:text-blue-600 text-lg font-bold'>Take Our Survey</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Index;
