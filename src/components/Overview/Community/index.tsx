import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Code from '../../../../public/SectionImages/codeBandT.png';

const index: React.FC = () => {

    return (
        <div className='relative h-screen text-white bg-gradient-to-b from-green-950 from-15% to-black flex gap-4 pt-20'>

            <div className='w-1/3 flex justify-center pt-40 pb-40 pl-10'>
                <Image
                    src={Code}
                    alt='BandTImage'
                    width='500'
                    height='100'
                    className=''
                    priority
                />
            </div>

            <div className='w-2/3 pt-40 md:pl-24 z-10'>
                <p className='text-blue-500 font-bold pb-11'>innovate collaborate, revolutionise</p>
                <h1 className='font-bold text-5xl'>Community</h1>
                <p className='pt-10 text-xl pr-20'>
                    A DAO can't function without a solid community, on the platform you can meet people to build and innovate with or discuss and brainstorm topics and ideas.
                    <br />
                    <br />
                    <ul className='indent-8'>
                        <li>→ Purchase innovative solutions off the marketplace</li>
                        <li>→ Discuss ideas & topics to expand</li>
                        <li>→ </li>
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