import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const OrderRow = ({ order, removeOrderHandler }) => {
    //get order value here 
    const { _id, serviceId, serviceName, servicePrice } = order;

    const [services, setServices] = useState({});

    //load data by id
    useEffect( ()=>{
        fetch(`http://localhost:5000/services/${serviceId}`)
        .then(res => res.json())
        .then(data => setServices(data))
    }, [serviceId])

    return (
        <tr>
        <th>
        <button onClick={()=> removeOrderHandler(_id)} className="btn btn-circle">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
        </button>
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="rounded w-24 h-24">
                <img src={services.img} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">{serviceName}</div>
            </div>
          </div>
        </td>
        <td>
            <p className='text-red-500'>Price: ${servicePrice}</p>
        </td>
        <td>Purple</td>
        <th>
          <button className="btn btn-ghost btn-xs">details</button>
        </th>
      </tr>
    );
};

export default OrderRow;