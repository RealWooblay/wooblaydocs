import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Meteors from '../../../../public/SectionImages/BackgroundMeteors.png'
import Courses from '../../../../public/SectionImages/Courses.png'

const index: React.FC = () => {

    return (
        <div className='relative h-screen text-white bg-gradient-to-b from-blue-950 from-15% to-green-950 flex gap-4 pt-20'>

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
                    Take our web3 focused courses to learn about the world of the future and the opportunities we have now to make it be built right. Learn to code by doing our fictional projects that will be real world applicable with online walkthroughs and explanations. Navigate our supplied resources to take the right courses and obtain true knowledge, all to guide you to be able to craft components and code your dreams to life.
                    <br />
                    <br />
                    <p className='font-extralight'>Get involved <Link href='/' className='underline hover:text-blue-500'>here</Link></p>
                    <p className='font-extralight'>Didnt understand concepts? <Link href='/FAQ' className='underline hover:text-blue-500'>FAQ</Link></p>
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