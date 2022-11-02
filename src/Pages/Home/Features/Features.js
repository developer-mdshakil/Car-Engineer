import React from 'react';
import expertTeam from '../../../assets/icons/group.svg';
import person from '../../../assets/icons/person.svg';
import bestEquipment from '../../../assets/icons/Wrench.svg';
import group38 from '../../../assets/icons/Group 38729.svg';
import check from '../../../assets/icons/check.svg';
import delivary from '../../../assets/icons/deliveryt.svg';

const Features = () => {
    return (
        <div className='my-20'>
            <div className="hero-content text-center">
                <div className="max-w-md">
                <p className='font-bold text-lg text-orange-600'>Core Features</p>
                <h1 className="text-5xl font-bold my-5">Why Choose Us</h1>
                <p className="py-6">the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                </div>
            </div>
           <div className='flex justify-center'>
           <div className='shadow w-44 text-center p-6 mr-6 border-stone-300 rounded-lg'>
                <img className='w-16 h-16 mx-auto' src={expertTeam} alt="" />
                <p className='text-lg font-bold'>Expert Team</p>
            </div>
           <div className='shadow w-48 text-center p-6 mr-6 bg-orange-500 text-white border-stone-300 rounded-lg'>
                <img className='w-16 mx-auto' src={group38} alt="" />
                <p className='text-lg font-bold'>Timely Delivery</p>
            </div>
           <div className='shadow w-48 text-center p-6 mr-6 border-stone-300 rounded-lg'>
                <img className='w-16 h-16 mx-auto' src={person} alt="" />
                <p className='text-lg font-bold'>24/7 Support</p>
            </div>
           <div className='shadow w-48 text-center p-6 mr-6 border-stone-300 rounded-lg'>
                <img className='w-16 h-16 mx-auto' src={bestEquipment} alt="" />
                <p className='text-lg font-bold'>Best Equipment</p>
            </div>
           <div className='shadow w-48 text-center p-6 mr-6 border-stone-300 rounded-lg'>
                <img className='w-16 h-16 mx-auto' src={check} alt="" />
                <p className='text-lg font-bold'>100% Guranty</p>
            </div>
           <div className='shadow w-48 text-center p-6 border-stone-300 rounded-lg'>
                <img className='w-16 h-16 mx-auto' src={delivary} alt="" />
                <p className='text-lg font-bold'>Timely Delivery</p>
            </div>
           </div>
        </div>
    );
};

export default Features;