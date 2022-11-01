import React from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './BannerSlider.css'

const BannerSlider = ({ slider }) => {
    const {image, id, prev, next} = slider;
    return (
        <div id={`slide${id}`} className="carousel-item relative w-full">
            <div className='carousel-img h-80'>
            <img src={image} alt="" className="w-full h-full" />
            </div>
            <div className="absolute text-white transform -translate-y-1/2 left-24 top-1/2">
            <h1 className='text-5xl font-bold mb-8'>
                Affordable <br /> 
                Price For Car <br />
                 Servicing</h1>
            <p className='mb-8'>There are many variations of passages of  available, But <br /> the majority have suffered alteration in some form</p>
            <Link><button className="btn bg-orange-600 border-orange-600">Discover More</button></Link>
            <Link><button className="btn btn-outline btn-warning mx-6 text-white">Latest Project</button></Link>
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 right-5 bottom-0">
            <a href={`#slide${prev}`} className="btn btn-circle mx-4"><FaArrowRight /></a> 
            <a href={`#slide${next}`} className="btn btn-circle bg-orange-600 border-orange-600"><FaArrowLeft /></a>
            </div>
        </div> 
    );
};

export default BannerSlider;