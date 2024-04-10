import React from 'react';

const FAQ: React.FC = () => {
    return (
        <div className='relative h-screen text-white flex flex-col items-center justify-center py-10'>
            <h2 className='text-3xl font-bold mb-8'>Frequently Asked Questions</h2>
            <div className='max-w-6xl w-full grid grid-cols-3 gap-8'>
                {/* FAQ Item 1 */}
                <div className='bg-gray-800 rounded-lg p-8 shadow-md shadow-black'>
                    <h3 className='text-xl font-semibold mb-2'>What is Lorem Ipsum?</h3>
                    <p className='text-gray-300'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                </div>
                {/* FAQ Item 2 */}
                <div className='bg-gray-800 rounded-lg p-8 shadow-md shadow-black'>
                    <h3 className='text-xl font-semibold mb-2'>How do I reset my password?</h3>
                    <p className='text-gray-300'>To reset your password, go to the login page and click on the "Forgot Password" link. Follow the instructions to reset your password.</p>
                </div>
                {/* FAQ Item 3 */}
                <div className='bg-gray-800 rounded-lg p-8 shadow-md shadow-black'>
                    <h3 className='text-xl font-semibold mb-2'>Can I cancel my subscription?</h3>
                    <p className='text-gray-300'>Yes, you can cancel your subscription at any time. Simply go to your account settings and select the option to cancel your subscription.</p>
                </div>
                {/* FAQ Item 4 */}
                <div className='bg-gray-800 rounded-lg p-8 shadow-md shadow-black'>
                    <h3 className='text-xl font-semibold mb-2'>Do you offer refunds?</h3>
                    <p className='text-gray-300'>Refunds are available within 30 days of purchase. Please contact our support team for assistance with refunds.</p>
                </div>
                {/* FAQ Item 5 */}
                <div className='bg-gray-800 rounded-lg p-8 shadow-md shadow-black'>
                    <h3 className='text-xl font-semibold mb-2'>How can I contact support?</h3>
                    <p className='text-gray-300'>You can contact our support team by email at support@example.com or by phone at 1-800-123-4567.</p>
                </div>
                {/* FAQ Item 6 */}
                <div className='bg-gray-800 rounded-lg p-8 shadow-md shadow-black'>
                    <h3 className='text-xl font-semibold mb-2'>What are your business hours?</h3>
                    <p className='text-gray-300'>Our business hours are Monday to Friday, 9:00 AM to 5:00 PM.</p>
                </div>
            </div>
            {/* Contact Us Button */}
            <button className='bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-lg mt-8'>Contact Us</button>
        </div>
    );
};

export default FAQ;
