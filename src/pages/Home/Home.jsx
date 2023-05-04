import React from 'react';
import banner from '../../assets/banner.jpg';
import './Home.css'
import AboutUs from './Sections/AboutUs/AboutUs';
import Comments from './Sections/Comments/Comments';
import { useLoaderData } from 'react-router-dom';
import ChefCard from './Sections/ChefCard/ChefCard';
import { BallTriangle } from 'react-loader-spinner';

const Home = () => {
    const chefs = useLoaderData();
    if(!chefs){
        return <div className='flex justify-center items-center'>
        <BallTriangle
    height={100}
    width={100}
    radius={5}
    color="#4fa94d"
    ariaLabel="ball-triangle-loading"
    wrapperClass={{}}
    wrapperStyle=""
    visible={true}
     ></BallTriangle>
    </div>
    }
    
    
    return (
        <div>
            <div className='banner pb-12 pt-48'>
                <div className='w-4/5 mx-auto text-center'>
                    <h4 className=' text-6xl font-bold text-white'>World class Bengali <br></br><span className='text-red-500'>Chefs and Foods</span><br></br> are here</h4>
                    <p className=' text-base font-light text-white md:px-10 mt-4'>Sed ut perspiciatis unde omnis iste natus totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                    <button className='py-2 px-4 bg-red-500 text-white mt-7 font-semibold'>Learn More</button>

                </div>
            </div>
            <div className='my-10 w-4/5 mx-auto'>
                <h4 className='text-center text-4xl text-red-500 font-bold mb-11'>Our Chefs</h4>
                <div className='grid md:grid-cols-3 gap-4'>
                    {
                        chefs.map(chef => <ChefCard
                            key={chef.id}
                            chef={chef}
                        ></ChefCard>)
                    }
                </div>
            </div>
            <AboutUs></AboutUs>
            <Comments></Comments>
        </div>
    );
};

export default Home;