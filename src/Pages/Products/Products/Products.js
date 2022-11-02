import React, { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../ProductsCard/ProductCard';

const Products = () => {
    //set products data here
    const [products, setProducts] = useState([]);

    //load products data on server api here
    useEffect( ()=> {
        fetch('http://localhost:5000/products')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])
    return (
        <div className='my-20'>
            <div className="hero-content text-center">
                <div className="">
                <p className='font-bold text-lg text-orange-600'>Popular Products</p>
                <h1 className="text-5xl font-bold my-5">Browse Our Products</h1>
                <p className="py-6 max-w-lg">the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    products.map(product => <ProductCard
                    key={product._id}
                    product={product}
                    ></ProductCard>)
                }
            </div>
            <div className='text-center mt-12'>
                    <Link><button className='btn bg-transparent border-red-500 text-red-500'>More Products</button></Link>
                </div>
            </div>
    );
};

export default Products;