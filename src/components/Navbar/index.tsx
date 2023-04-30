import React from 'react';
import Image from 'next/image';
import Logo from 'public/racoonplacehgolder.png'
import Link from 'next/link';
import { AiOutlineMenu, AiOutlineClose, AiOutlineTwitter, AiOutlineGithub } from 'react-icons/ai';
import { FaDiscord } from 'react-icons/fa';
import { useState } from 'react';


const index: React.FC = () => {

    const [menuOpen, setMenuOpen] = useState(false)

    const handleNav = () => {
        setMenuOpen(!menuOpen)
    }

    return (
        <nav className="absolute w-full h-24 shadow-xl bg-transparent text-white z-50">
            <div className='flex justify-between items-center h-full w-full px-4 2xl:px-16'>

                <div className='z-10 hidden lg:flex'>
                    <ul className='hidden lg:flex '>
                        <Link href='/'>
                            <li className='ml-8 hover:border-b text-xl hover:text-cyan-600'>
                                FAQ
                            </li>
                        </Link>
                        <Link href='/whitepaper'>
                            <li className='ml-8 hover:border-b text-xl hover:text-cyan-600'>
                                Whitepaper
                            </li>
                        </Link>
                        <Link href='/'>
                            <li className='ml-8 hover:border-b text-xl hover:text-cyan-600'>
                                Backstory
                            </li>
                        </Link>
                        <Link href='/'>
                            <li className='ml-8 hover:border-b text-xl hover:text-cyan-600'>
                                Overview
                            </li>
                        </Link>
                    </ul>
                </div>

                <div className='absolute inset-0 flex items-center justify-center z-0'>
                    <Link href='/'>
                        <Image
                            src={Logo}
                            alt='Logo'
                            width='65'
                            height='75'
                            className='cursor-pointer'
                            priority
                        />
                    </Link>
                </div>

                <div className='z-10 hidden lg:flex'>
                    <FaDiscord size={35} className='cursor-pointer ml-10 hover:text-cyan-600' />
                    <AiOutlineGithub size={35} className='cursor-pointer ml-10 hover:text-cyan-600' />
                    <AiOutlineTwitter size={35} className='cursor-pointer ml-10 hover:text-cyan-600' />
                </div>

                <div onClick={handleNav} className='lg:hidden cursor-pointer pl-24 z-10 absolute right-8'>
                    <AiOutlineMenu size={25} />
                </div>
            </div>
            <div className={
                menuOpen
                    ? "fixed left-0 top-0 w-[65%] lg:hidden h-screen bg-[#301934] p-10 ease-in duration-500 z-50"
                    : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
            }
            >
                <div className="flex w-full items-center justify-end">
                    <div onClick={handleNav} className="cursor-pointer">
                        <AiOutlineClose size={25} />
                    </div>
                </div>


                <div className='z-10 flex-col py-4'>
                    <ul>
                        <Link href='/career'>
                            <li className='py-4 cursor-pointer text-xl'>
                                Career
                            </li>
                        </Link>
                        <Link href='/whitepaper'>
                            <li className='py-4 cursor-pointer text-xl'>
                                Whitepaper
                            </li>
                        </Link>
                        <Link href='/backstory'>
                            <li className='py-4 cursor-pointer text-xl'>
                                Backstory
                            </li>
                        </Link>
                        <Link href='/'>
                            <li className='py-4 cursor-pointer text-xl'>
                                Overview
                            </li>
                        </Link>
                    </ul>
                </div>
                <div className='z-10 flex flex-row justify-around pt-10 items-center'>
                    <FaDiscord size={30} className='cursor-pointer' />
                    <AiOutlineGithub size={30} className='cursor-pointer' />
                    <AiOutlineTwitter size={30} className='cursor-pointer' />
                </div>
                <div>
                    <Link href='/'>
                        <Image
                            src={Logo}
                            alt='Logo'
                            width='65'
                            height='75'
                            className='cursor-pointer pt-12 mx-auto'
                            priority
                        />
                    </Link>
                </div>
            </div>
        </nav>
    );
};
export default index;