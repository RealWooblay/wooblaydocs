import React from 'react';
import { FaAngleDoubleDown } from 'react-icons/fa';

const index: React.FC = () => {

    return (
        <div className='relative h-screen text-white flex flex-col text-center'>
            <video autoPlay muted loop src='/IntroBG.mp4' className='absolute top-0 left-0 w-full h-full object-cover z-0' />
            <div className='z-10 pt-56'>
                <h1 className='font-bold text-purple-600 text-6xl sm:text-9xl'>Nocturnal</h1>
                <h2 className='pt-6 font-light text-4xl sm:text-5xl'>innovate collaborate, revolutionise</h2>
            </div>
            <FaAngleDoubleDown size={45} className='z-20 animate-bounce absolute bottom-2' />
        </div>
    );
};
export default index;