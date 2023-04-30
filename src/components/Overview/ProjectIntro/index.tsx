import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Meteors from 'public\\SectionImages\\BackgroundMeteors.png'
import BlueWorld from 'public\\SectionImages\\WorldTechProject.png'

const index: React.FC = () => {

    return (
        <div className='relative h-screen text-white bg-gradient-to-b from-black from-15% to-purple-950 flex gap-4 pt-20'>

            <Image
                src={Meteors}
                alt='Meteors'
                width='0'
                height='0'
                className='w-full h-full opacity-10 object-cover z-0 absolute top-0 left-0'
                priority
            />

            <div className='w-2/3 pt-40 md:pl-24 z-10'>
                <p className='text-blue-500 font-bold pb-11'>innovate collaborate, revolutionise</p>
                <h1 className='font-bold text-5xl'>Projects</h1>
                <p className='pt-10 text-xl'>
                    Share your idea and watch it awaken or use your talents to build something revolutionary. Projects at Nocturnal mean so much more then just building ideas,
                    they're about changing the world. We aim to make it possible to decentralise the power of control and decisions, we envision a community building technology based projects that make a real
                    difference for the good and level up your knowledge and portfolio. At Nocturnal we have the opportunity to revolutionise, do you want to make a difference?
                    <br />
                    <br />
                    We utilise blockchain and smart contracts so when you contribute your talents you gain a percent ownership scaled by difficulty and quantity submitted and accepted,
                    once the project is complete ownership is spread amongst contributors leaving the intellectual property owner with a fixed majority ownership percentage along with
                    Nocturnal. A project can be initiated by you or the platform and may be sponsored or franchised meaning that we invest and assist in integrating your idea or manage
                    and operate it for you, leaving all contributors a say in future updates, changes and decisions and a passive income through decentralisation.
                    <br />
                    <br />
                    <p className='font-extralight'>Find out more at out <Link href='/' className='underline hover:text-blue-500'>Whitepaper</Link></p>
                    <p className='font-extralight'>Didnt understand concepts? <Link href='/FAQ' className='underline hover:text-blue-500'>FAQ</Link></p>

                </p>
            </div>


            <div className='w-1/3 flex justify-center pt-40 pb-40'>
                <Image
                    src={BlueWorld}
                    alt='ProjectImage'
                    width='500'
                    height='100'
                    className=''
                    priority
                />
            </div>


        </div>
    );
};
export default index;