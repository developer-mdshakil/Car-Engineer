import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.svg';
import { FaGoogle, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="footer p-10 bg-black text-white">
        <div className='w-64'>
         <img src={logo} alt="" srcset="" />
         <p>Edwin Diaz is a software and web technologies engineer, a life coach trainer who is also a serial .</p>
            <ul className='flex items-center mt-6'>
                <li className='pe-4'><Link><FaGoogle /></Link></li>
                <li className='px-4'><Link><FaTwitter /></Link></li>
                <li className='px-4'><Link><FaInstagram /></Link></li>
                <li className='ps-4'><Link><FaLinkedin /></Link></li>
            </ul>
        </div> 
        <div>
          <span className="text-xl font-semibold mb-10">About</span> 
          <Link className="link link-hover">Home</Link> 
          <Link className="link link-hover">Service</Link> 
          <Link className="link link-hover">Contact</Link>
        </div> 
        <div>
          <span className="text-xl font-semibold mb-10">Company</span> 
          <Link className="link link-hover">Why Car Engineer</Link> 
          <Link className="link link-hover">About</Link>
        </div> 
        <div>
          <span className="text-xl font-semibold mb-10">Support</span> 
          <Link className="link link-hover">Support Center</Link> 
          <Link className="link link-hover">Feedback</Link> 
          <Link className="link link-hover">Accesbility</Link>
        </div>
      </footer>
    );
};

export default Footer;