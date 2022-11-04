import { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import checkOut from '../../assets/images/checkout/checkout.png';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const CheckOut = () => {
    //get here user informaton with context api
    const {user} = useContext(AuthContext);
    const service = useLoaderData();
    const { title, price, _id } = service;

    //create event hadnler with oder forms here
    const OderPlaceHandler = event => {
        event.preventDefault();
        const form = event.target;
        const firstname = form.firstName.value;
        const lastName = form.LastName.value;
        const name = firstname + lastName;
        const phone = form.phone.value;
        const email = user?.email;
        const message = form.message.value;

        const oder = {
            serviceId: _id,
            serviceName: title,
            servicePrice: price,
            customer: name,
            email: email,
            phone: phone,
            userMessage: message
        }
        fetch('http://localhost:5000/oders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(oder)
        })
        .then(res => res.json())
        .then(data =>{
            if(data.acknowledged){
                alert('your order placed succefull')
                form.reset();
            }
        }).catch(err => console.error(err))
    }
    return (
        <div >
            <div className="w-full text-sm breadcrumbs my-20 relative">
                <img src={checkOut} className='w-full' alt="" />
                <h2 className='text-5xl font-bold text-white absolute top-1/2 left-24'>Check Out</h2>
                <ul className='flex justify-center w-48 py-2 absolute bottom-2 right-1/2 translate-x-1/2 bg-red-500 text-white'>
                    <li><Link className='text-xl font-medium' to='/home'>Home</Link></li> 
                    <li><Link className='text-xl font-medium' to='/checkout'>CheckOut</Link></li> 
                </ul>
                </div>

                <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p className='text-red-500'>Price: ${price}</p>
                    <div className="card-actions justify-end">
                    <button className="btn btn-primary">Remove</button>
                    </div>
                </div>
                </div>

            <form onSubmit={OderPlaceHandler} className='bg-base-300 p-24 my-20 rounded'>
                <div className='grid grid-cols-2 gap-5'>
                <input name='firstName' type="text" placeholder="Type Here First Name" className="input w-full" required/>
                <input name='LastName' type="text" placeholder="Type Here Last Name" className="input w-full" required/>
                <input name='phone' type="number" placeholder="Type Here Your Phone" className="input w-full" required/>
                <input name='email' type="email" defaultValue={user?.email} placeholder="Type Here Your Email" className="input w-full" readOnly/>
                </div>
                <textarea name='message' className="textarea w-full my-6 h-64" placeholder="Text Your Message"></textarea>
                <input type="submit" className='btn w-full bg-orange-600 border-orange-600'  value="Order Confirm" />
            </form>
        </div>
    );
};

export default CheckOut;