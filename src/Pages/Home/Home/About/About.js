import React from 'react';
import { Link } from 'react-router-dom';
import person from '../../../../assets/images/about_us/person.jpg';
import parts from '../../../../assets/images/about_us/parts.jpg';

const About = () => {
    return (
        <div className="hero my-20">
        <div className="hero-content flex-col lg:flex-row">
            <div className='w-1/2 relative'>
            <img className='w-4/5 h-full rounded-lg shadow-2xl' src={person} alt=''/>
            <img className='absolute right-5 top-1/2 w-3/5 border-8 rounded-lg shadow-2xl' src={parts} alt=''/>
            </div>
            <div className='w-1/2'>
            <h1 className="text-5xl font-bold">Box Office News!</h1>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            <Link><button className="btn bg-orange-600 border-orange-600">Get More Info</button></Link>
            </div>
        </div>
        </div>
    );
};

export default About;