import React from 'react';
import banner from '../../assets/banner.jpg';
import './Home.css'
import AboutUs from './Sections/AboutUs/AboutUs';

const Home = () => {
    return (
        <div>
            <div className='banner pb-12 pt-48'>
                <div className='w-4/5 mx-auto text-center'>
                    <h4 className=' text-6xl font-bold text-white'>World class Bengali <br></br><span className='text-red-500'>Chefs and Foods</span><br></br> are here</h4>
                    <p className=' text-base font-light text-white md:px-10 mt-4'>Sed ut perspiciatis unde omnis iste natus totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                    <button className='py-2 px-4 bg-red-500 text-white mt-7 font-semibold'>Learn More</button>

                </div>
            </div>
            <AboutUs></AboutUs>
        </div>
    );
};

export default Home;