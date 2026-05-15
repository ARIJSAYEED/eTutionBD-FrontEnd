import React from 'react';
import HeroSection from './HeroSection';
import LatestTuition from './LatestTuition';
import LatestTutors from './LatestTutors';
import WhyChooseUs from './WhyChooseUs';

const Home = () => {
    return (
        <div className='space-y-10'>
            <HeroSection></HeroSection>
            <LatestTuition></LatestTuition>
            <LatestTutors></LatestTutors>
            <WhyChooseUs></WhyChooseUs>
        </div>
    );
};

export default Home;