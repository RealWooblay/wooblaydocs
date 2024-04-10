import React from 'react';

const TeamPage: React.FC = () => {
    return (
        <div className='relative h-screen text-white flex justify-center items-center gap-8'>
            {/* YouTube Video */}
            <div className='w-1/3 shadow-md shadow-black'>
                <iframe
                    width="100%"
                    height="315"
                    src="https://www.youtube.com/watch?v=X5Ycddg-1yo"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>
            {/* Mission and Backstory */}
            <div className='w-1/3'>
                <div className='bg-gray-800 rounded-lg p-6 mb-8 shadow-md shadow-black'>
                    <h2 className='text-xl font-bold mb-4'>Our Mission</h2>
                    <p className='text-gray-300'>To empower global innovation and collaboration through decentralized autonomous organizations (DAOs), providing a unified platform where creators, developers, and visionaries can seamlessly connect, co-create, and thrive. To make the world a better place.</p>
                </div>
                <div className='bg-gray-800 rounded-lg p-6 shadow-md shadow-black'>
                    <h2 className='text-xl font-bold mb-4'>Our Story</h2>
                    <p className='text-gray-300'>At Wooblay, we believe in the transformative power of decentralized collaboration. Our platform serves as a catalyst for innovation, bringing together individuals and communities from around the world to collaborate on groundbreaking projects, powered by decentralized autonomous organizations (DAOs). With a user-centric approach and cutting-edge technology, we provide a seamless and intuitive environment where ideas come to life, projects flourish, and impact is made. Join us on the journey to reshape the future of collaboration, one decentralized step at a time.</p>
                </div>
            </div>
        </div>
    );
};

export default TeamPage;


