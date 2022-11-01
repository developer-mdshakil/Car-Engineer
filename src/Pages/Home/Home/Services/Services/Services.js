import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import ServiceCard from './ServiceCard/ServiceCard';

const Services = () => {
    const [services, setServices] = useState([]);

    //load data for my car-engineer-server api
    useEffect( () => {
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data => setServices(data))
    }, [])

    return (
        <div className='mt-40 mb-20'>
            <div className="hero-content text-center">
                <div className="max-w-md">
                <p className='font-bold text-lg text-orange-600'>Service</p>
                <h1 className="text-5xl font-bold my-5">Our Service Area</h1>
                <p className="py-6">the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    services.map(service => <ServiceCard
                    key={service._id}
                    service={service}
                    ></ServiceCard>)
                }
            </div>
            <div className='text-center mt-12'>
                    <Link><button className='btn btn-outline btn-warning'>More Service</button></Link>
                </div>
        </div>
    );
};

export default Services;