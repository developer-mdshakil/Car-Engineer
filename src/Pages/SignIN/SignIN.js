import React from 'react';
import { FaFacebook, FaGoogle, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import signImg from '../../assets/images/login/login.svg'

const SignIN = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 items-center my-20">
            <div className="w-full">
            <img src={signImg} alt="" />
            </div>
           <div class='card w-full shadow border-stone-400 p-0 lg:p-16'>
           <form>
            <h1 className="text-3xl font-bold text-center">Sign In</h1>
            <div className="card-body">
                <div className="form-control">
                <label className="label">
                    <span className="label-text">Email</span>
                </label>
                <input type="text" name='email' placeholder="Enter your email" className="input input-bordered" />
                </div>
                <div className="form-control">
                <label className="label">
                    <span className="label-text">Password</span>
                </label>
                <input type="text" name='password' placeholder="Enter you password" className="input input-bordered" />
                <label className="label">
                    <Link to="#" className="label-text-alt link link-hover">Forgot password?</Link>
                </label>
                </div>
                <div className="form-control mt-6">
                <button className="btn bg-orange-600 border-orange-600">Sign In</button>
                <p className='text-center font-medium my-8'>Or Sign In with</p>
                <ul className='flex justify-center items-center mb-12'>
                    <li className='w-12 h-12 rounded-full bg-base-200 flex items-center justify-center mr-4'><Link to=''><FaFacebook/></Link></li>
                    <li className='w-12 h-12 rounded-full bg-base-200 flex items-center justify-center mr-4'><Link to=''><FaLinkedin/></Link></li>
                    <li className='w-12 h-12 rounded-full bg-base-200 flex items-center justify-center'><Link to=''><FaGoogle/></Link></li>
                </ul>
                <p className='text-center'>Have an account?<Link to='/signup' className='text-red-500 font-medium'>Sign Up</Link></p>
                </div>
            </div>
            </form>
           </div>
        </div>
    );
};

export default SignIN;