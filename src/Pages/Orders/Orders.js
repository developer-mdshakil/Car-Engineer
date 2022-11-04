import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import OrderRow from './OrdersRow/OrderRow';

const Orders = () => {
    const { user } = useContext(AuthContext);
    //store specific order by user email
    const [orders, setOrders] = useState([]);

    //load specific data use to user email query
    useEffect( ()=> {
        fetch(`http://localhost:5000/orders?email=${user?.email}`)
        .then(res => res.json())
        .then(data => setOrders(data))
        .catch(err=> console.error(err))
    }, [user?.email])

    const removeOrderHandler = id => {
        const procced =window.confirm('Are you sure?Remove this order')
       if(procced){
        fetch(`http://localhost:5000/orders/${id}`, {
            method: 'DELETE',
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.deletedCount > 0){
                const remainingOrders = orders.filter(odr => odr._id !== id)
                const newOrders = [...remainingOrders];
                setOrders(newOrders);
                alert('Your order remove successful')

            }
        })
        .catch(error => console.log(error))
       }
    }

    return (
        <div className='my-20'>
            <h2 className='text-4xl font-semibold text-blue-600 mb-5'>You have placed {orders.length} orders</h2>
            <div className="overflow-x-auto w-full">
        <table className="table w-full shadow">

                <thead>
                <tr>
                    <th>
                    </th>
                    <th>Name</th>
                    <th>Job</th>
                    <th>Favorite Color</th>
                    <th>Status</th>
                </tr>
                </thead>
                <tbody>
                {
                    orders.map(order => <OrderRow
                    key={order._id}
                    order={order}
                    removeOrderHandler={removeOrderHandler}
                    ></OrderRow>)
                }
            </tbody>    
        </table>
        </div>
        </div>
    );
};

export default Orders;