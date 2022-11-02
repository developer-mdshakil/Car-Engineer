import React from 'react';
import { useContext } from 'react';
import { FaFacebook, FaGoogle, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import signImg from '../../assets/images/login/login.svg'
import { AuthContext } from '../../AuthProvider/AuthProvider';

const SignUP = () => {
    //get share data with context api here
    const { createUser } = useContext(AuthContext);

    const CreateUserHandler = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const confirmPassword = form.ConfrimPassword.value;
        console.log(name, email, confirmPassword)
        createUser(email, confirmPassword)
        .then(result => {
            const user = result.user;
            console.log(user);
            form.reset();
        }).catch(error => console.error(error))
    }
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 items-center my-20">
        <div className="w-full">
        <img src={signImg} alt="" />
        </div>
       <div class='card w-full shadow border-stone-400 p-0 lg:p-16'>
       <form onSubmit={CreateUserHandler}>
        <h1 className="text-3xl font-bold text-center">Sign Up</h1>
        <div className="card-body">
            <div className="form-control">
            <label className="label">
                <span className="label-text text-lg font-semibold">Name</span>
            </label>
            <input type="text" name='name' placeholder="Enter your Name" className="input input-bordered" />
            </div>
            <div className="form-control">
            <label className="label">
                <span className="label-text text-lg font-semibold">Email</span>
            </label>
            <input type="email" name='email' placeholder="Enter your email" className="input input-bordered" />
            </div>
            <div className="form-control">
            <label className="label">
                <span className="label-text text-lg font-semibold">Confirm Password</span>
            </label>
            <input type="text" name='ConfrimPassword' placeholder="Enter you confirm password" className="input input-bordered" />
            </div>
            <div className="form-control mt-6">
            <button className="btn bg-orange-600 border-orange-600">Sign Up</button>
            <p className='text-center font-medium my-8'>Or Sign Up with</p>
            <ul className='flex justify-center items-center mb-12'>
                <li className='w-12 h-12 rounded-full bg-base-200 flex items-center justify-center mr-4'><Link to=''><FaFacebook/></Link></li>
                <li className='w-12 h-12 rounded-full bg-base-200 flex items-center justify-center mr-4'><Link to=''><FaLinkedin/></Link></li>
                <li className='w-12 h-12 rounded-full bg-base-200 flex items-center justify-center'><Link to=''><FaGoogle/></Link></li>
            </ul>
            <p className='text-center'>Already have an account?<Link to='/signin' className='text-red-500 font-medium'>Sign in</Link></p>
            </div>
        </div>
        </form>
       </div>
    </div>
    );
};

export default SignUP;