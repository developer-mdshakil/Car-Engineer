import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { FaFacebook, FaGoogle, FaLinkedin } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import signImg from '../../assets/images/login/login.svg'
import { AuthContext } from '../../AuthProvider/AuthProvider';

const SignIN = () => {
    const { LogInUser } = useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()

    const from = location.state?.from?.pathname || '/'

    //set error if error
    const [error, setError] = useState('');

    //login user with email and password here
    const signInUserHandler = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        LogInUser(email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
            setError('')
            navigate(from, {replace: true})
            alert('sign in successfull')
            form.reset();
        }).catch(error => {
            console.error(error)
            setError(error.message)
        })
    }
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 items-center my-20">
            <div className="w-full">
            <img src={signImg} alt="" />
            </div>
           <div className='card w-full shadow border-stone-400 p-0 lg:p-16'>
           <form onSubmit={signInUserHandler}>
            <h1 className="text-3xl font-bold text-center">Sign In</h1>
            <div className="card-body">
                <div className="form-control">
                <label className="label">
                    <span className="label-text">Email</span>
                </label>
                <input type="email" name='email' placeholder="Enter your email" className="input input-bordered" />
                </div>
                <div className="form-control">
                <label className="label">
                    <span className="label-text">Password</span>
                </label>
                <input type="password" name='password' placeholder="Enter you password" className="input input-bordered" />
                <label className="label">
                    <Link to="#" className="label-text-alt link link-hover">Forgot password?</Link>
                </label>
                </div>
                <div className="form-control mt-6">
                <button className="btn bg-orange-600 border-orange-600">Sign In</button>
                <p className='text-red-500'>{error}</p>
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