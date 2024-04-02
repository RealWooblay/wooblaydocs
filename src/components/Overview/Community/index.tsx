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
                    Help businesses level up their operations by offering your homemade software tools, solve issues in code or sell your knowledge and components to earn easy money utilising your talents in technology. At Nocturnal you can sell your creations from tools to components or put a bounty on an issue you cant solve or a component you need. How easy is that!
                    <br />
                    <br />
                    Test out upcoming or finished projects and be paid to do it. Simple as that!
                    <br />
                    <br />
                    <p className='font-extralight'>Get involved <Link href='/' className='underline hover:text-blue-500'>here</Link></p>
                    <p className='font-extralight'>Didnt understand concepts? <Link href='/FAQ' className='underline hover:text-blue-500'>FAQ</Link></p>

                </p>
            </div>

        </div>
    );
};
export default index;