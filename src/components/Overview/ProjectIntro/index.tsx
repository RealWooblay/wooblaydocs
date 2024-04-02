import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Meteors from '../../../../public/SectionImages/BackgroundMeteors.png'
import BlueWorld from '../../../../public/SectionImages/WorldTechProject.png'

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
                <h1 className='font-bold text-5xl'>DAOs & Projects</h1>
                <p className='pt-10 text-lg'>
                    The <span className='text-red-500 font-bold'>mission</span> is to enable innovation and collaboration, through building projects to revolutionise.
                    We developed a platform that brings together a community of innovators to create projects that fast-track evolution in the right direction.
                    <br />
                    <br />
                    By leveraging DAOs we create an ecosystem that provides:
                    <br />
                    <ul className='list-disc'>
                        <li>Decentralised ownership</li>
                        <li>Voting systems giving all contributors a say in decisions</li>
                        <li>Transparency of all transactions and operations occuring</li>
                        <li>Find a network of people to contribute to projects</li>
                        <li>Stake represented digitally to be completely owned by you</li>
                    </ul>
                </p>
            </div>


            <div className='w-1/3 flex justify-center pt-40 pb-40 pr-10'>
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