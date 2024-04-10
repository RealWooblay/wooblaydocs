import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Meteors from '../../../../public/SectionImages/BackgroundMeteors.png'
import Courses from '../../../../public/SectionImages/Courses.png'

const index: React.FC = () => {

    return (
        <div className='relative h-screen text-white bg-gradient-to-b from-purple-950 from-15% to-green-950 flex gap-4 pt-20'>

            <Image
                src={Meteors}
                alt='Meteors'
                width='0'
                height='0'
                className='w-full h-full pb-96 opacity-10 object-cover z-0 absolute top-0 left-0 skew-y-12'
                priority
            />


            <div className='w-2/3 pt-40 md:pl-24 z-10'>
                <p className='text-blue-500 font-bold pb-11'>innovate collaborate, revolutionise</p>
                <h1 className='font-bold md:text-5xl'>Project Development</h1>
                <p className='pt-10 text-xl pr-20'>
                    A DAO can't function without effective cooperation, to support this, we provide project management tools to allow contributors to
                    be aware of project development and communicate with team members. In the future, we will leverage AI to enhance collaboration through quality control and mentorship,
                    and we will implement collaborative development tools such as simulated modelling envrionments for engineering and algorithms.
                    <br />
                    <br />
                    <ul className='indent-8'>
                        <li>→ Team chat</li>
                        <li>→ Organised voting system</li>
                        <li>→ Project updates, alerts and milestone tracker</li>
                        <li>→ Proof of work space to measure activity among contributors</li>
                        <li>→ Personalised Dashboard displaying project performance, analytics and information</li>
                    </ul>
                </p>
            </div>

            <div className='w-1/3 flex justify-center pt-40 pb-40 pr-10'>
                <Image
                    src={Courses}
                    alt='CoursesImage'
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