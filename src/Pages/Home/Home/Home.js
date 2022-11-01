import React from 'react';
import About from './About/About';
import Banner from './Banner/Banner/Banner';
import Services from './Services/Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Services></Services>
        </div>
    );
};

export default Home;