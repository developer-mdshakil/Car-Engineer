import React from 'react';
import { FaArrowRight, FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
    const { _id, img, title, price } = product;
    return (
        <div className="card w-full p-4 border-stone-300 shadow">
        <figure><img className='w-full rounded-xl h-52' src={img} alt="car-parts!"/></figure>
        <div className="card-body text-center mt-0">
        <ul className='mx-auto flex'>
                <li className='text-orange-400'><FaStar /></li>
                <li className='text-orange-400'><FaStar /></li>
                <li className='text-orange-400'><FaStar /></li>
            </ul>
            <h2 className="text-2xl font-bold">{title}</h2>
            <p className='text-xl font-semibold text-red-500 mb-0'>Price: $<span>{price}</span></p>
            <Link to={`/checkout/${_id}`}><button className='btn bg-orange-600 border-orange-600'>Checkout</button></Link>
            <Link className='text-red-500'><FaArrowRight /></Link>
        </div>
        </div>
    );
};

export default ProductCard;