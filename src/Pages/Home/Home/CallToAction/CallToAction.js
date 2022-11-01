import React from 'react';
import { FaCalendarCheck, FaCalendarTimes, FaLockOpen, FaRegMap } from 'react-icons/fa';

const CallToAction = () => {
    return (
        <div className='my-20 bg-black py-24 text-white px-16 rounded-lg'>
            <div className='flex justify-between'>
                <div className='flex items-center'>
                <div>
                    <span className='text-white text-5xl'><FaCalendarTimes /></span>
                </div>
                <div className='ml-5'>
                    <p>We are open monday-friday</p>
                    <h2 className='text-2xl font-bold'>7:00 am - 9:00 pm</h2>
                </div>
                </div>
                <div className='flex items-center'>
                <div>
                    <span className='text-white text-5xl'><FaCalendarCheck /></span>
                </div>
                <div className='ml-5'>
                    <p>Have a question?</p>
                    <h2 className='text-2xl font-bold'>01792031534</h2>
                </div>
                </div>
                <div className='flex items-center'>
                <div>
                    <span className='text-white text-5xl'><FaRegMap /></span>
                </div>
                <div className='ml-5'>
                    <p>Need a repair? our address</p>
                    <h2 className='text-2xl font-bold'>Liza Street, New York</h2>
                </div>
                </div>
            </div>
        </div>
    );
};

export default CallToAction;