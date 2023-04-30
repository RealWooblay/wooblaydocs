import React from 'react';
import { FaAngleDoubleRight } from 'react-icons/fa';

const index: React.FC = () => {

    return (
        <div className='relative h-screen text-white flex flex-col justify-center items-center '>
            <video autoPlay muted loop src='/IntroBG.mp4' className='absolute top-0 left-0 w-full h-full object-cover z-0' />
            <div className='z-10 text-center'>
                <h1 className='font-bold text-purple-500 text-6xl sm:text-9xl'>Nocturnal</h1>
                <h2 className='pt-6 font-light text-4xl sm:text-5xl'>with the future</h2>
            </div>
            <FaAngleDoubleRight size={45} className='z-20 animate-bounce absolute right-2' />
        </div>
    );
};
export default index;