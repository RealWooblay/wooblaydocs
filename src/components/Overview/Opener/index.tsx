import React from 'react';

const index: React.FC = () => {

    return (
        <div className='relative h-screen text-white flex flex-col justify-center items-center '>
            <video autoPlay muted loop src='/IntroBG.mp4' className='absolute top-0 left-0 w-full h-full object-cover z-0' />
            <div className='z-10 text-center'>
                <h1 className='font-bold text-9xl text-purple-500'>Nocturnal</h1>
                <h2 className='pt-6 font-light text-5xl'>with the future</h2>
            </div>
        </div>
    );
};
export default index;