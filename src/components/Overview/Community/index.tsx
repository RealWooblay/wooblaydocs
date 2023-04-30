import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Meteors from 'public\\SectionImages\\BackgroundMeteors.png'
import Social from 'public\\SectionImages\\socialcommunity.png'

const index: React.FC = () => {

    return (
        <div className='relative h-screen text-white bg-gradient-to-b from-purple-950 from-15% to-blue-950 flex gap-4 pt-20'>

            <Image
                src={Meteors}
                alt='Meteors'
                width='0'
                height='0'
                className='w-full h-full opacity-10 object-cover z-0 absolute top-0 left-0 skew-y-12'
                priority
            />


            <div className='w-1/3 flex justify-center pt-40 pb-40'>
                <Image
                    src={Social}
                    alt='CommunityImage'
                    width='500'
                    height='100'
                    className=''
                    priority
                />
            </div>


            <div className='w-2/3 pt-40 md:pl-24 z-10'>
                <p className='text-blue-500 font-bold pb-11'>innovate collaborate, revolutionise</p>
                <h1 className='font-bold md:text-5xl'>Community</h1>
                <p className='pt-10 text-xl pr-20'>
                    Follow upcoming projects or your favourite software engineers and friends. Build your social, entrepreneurial or professional profile, share your funny jokes, media and meet others with simlar interests. Stay up to date with relevant news and literature and learn new things about technology past, present and future. Join the Nocturnal community and show off your talents and portfolio, and be apart of the tech community.
                    <br />
                    <br />
                    We offer video editing services of media that you send us to make projects awaken and allow investment while scrolling to let you contribute and support your favourite projects and creators. We pay you to test prototypes or betas of projects or components so you can make money from home while being apart of something revolutionary.
                    <br />
                    <br />
                    <p className='font-extralight'>Find out more at out <Link href='/' className='underline hover:text-blue-500'>Whitepaper</Link></p>
                    <p className='font-extralight'>Didnt understand concepts? <Link href='/FAQ' className='underline hover:text-blue-500'>FAQ</Link></p>
                </p>
            </div>


        </div>
    );
};
export default index;