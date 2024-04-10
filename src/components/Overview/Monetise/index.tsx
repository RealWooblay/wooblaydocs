import React from 'react';
import Image from 'next/image';
import Meteors from '../../../../public/SectionImages/BackgroundMeteors.png'
import Social from '../../../../public/SectionImages/socialcommunity.png'

const index: React.FC = () => {

    return (
        <div className='relative h-screen text-white bg-gradient-to-b from-green-950 from-15% to-black flex gap-4 pt-20'>

            <Image
                src={Meteors}
                alt='Meteors'
                width='0'
                height='0'
                className='w-full h-full opacity-10 object-cover z-0 absolute top-0 left-0 skew-y-12'
                priority
            />


            <div className='w-1/3 flex justify-center pt-40 pb-40 pl-10'>
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
                <h1 className='font-bold md:text-5xl'>Monetisation</h1>
                <p className='pt-10 text-xl pr-20'>
                    To assure you time is not only spent building things you love but also getting paid, the platform offer monetisation features such as:
                    <br />
                    <br />
                    <ul className='indent-8'>
                        <li>→ Crowdfunding through token investment</li>
                        <li>→ Sell solutions on the in-platform marketplace</li>
                        <li>→ Partner with the platform for resources and/or mentorship</li>
                        <li>→ Private token that increases in value proportional to project success</li>
                        <li>→ Profits shared via <span className='underline underline-offset-4'><a href='https://www.ibm.com/topics/smart-contracts#:~:text=Smart%20contracts%20are%20typically%20used,when%20predetermined%20conditions%20are%20met.'>
                            smart contracts </a></span> among contributors to DAOs</li>
                    </ul>
                </p>
            </div>


        </div>
    );
};
export default index;