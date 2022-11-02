import React from 'react';
import Products from '../../Products/Products/Products';
import Features from '../Features/Features';
import About from './About/About';
import Banner from './Banner/Banner/Banner';
import CallToAction from './CallToAction/CallToAction';
import Services from './Services/Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Services></Services>
            <CallToAction></CallToAction>
            <Products></Products>
            <Features></Features>
        </div>
    );
};

export default Home;