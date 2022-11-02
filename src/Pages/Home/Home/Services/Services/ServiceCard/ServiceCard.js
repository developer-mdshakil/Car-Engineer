import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {
    //get data with distructure service objects here
    const { img, title, price } = service;
    return (
        <div className="card w-full p-4 border-stone-300 shadow">
        <figure><img className='w-full rounded-xl h-52' src={img} alt="car!"/></figure>
        <div className="card-body mt-5">
            <h2 className="card-title text-2xl font-bold mb-5">{title}</h2>
            <div className='flex justify-between items-center'>
            <p className='text-xl font-semibold text-red-500 mb-4'>Price: $<span>{price}</span></p>
            <Link className='text-red-500'><FaArrowRight /></Link>
            </div>
            <Link to='/checkOut'><button className='btn bg-orange-600 border-orange-600'>Buy Now</button></Link>
        </div>
        </div>
    );
};

export default ServiceCard;