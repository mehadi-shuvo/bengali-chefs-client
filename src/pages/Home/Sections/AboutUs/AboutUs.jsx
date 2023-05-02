import React from 'react';
import aboutUs from '../../../../assets/aboutUs.jpg'
import './AboutUs.css'

const AboutUs = () => {
    return (
        <div className='w-4/5 mx-auto md:grid grid-cols-2 mt-14 gap-5'>
                        <div>
                <h4 className='text-4xl font-extrabold text-red-500'>About Us</h4>
                <p className='text-lg font-light text-slate-700 mt-3'>We provide Bangladesh's No.1 food and our chefs are too much qualified</p>
                <p className='text-lg font-light text-slate-800 mt-5'>Sed gravida nisl a porta tincidunt. Integer aliquam nisi sit amet magna suscipit, fermentum mattis erat rutrum. Sed suscipit libero lectus, at ullamcorper erat feugiat eu. Nam posuere ultrices nibh ut sagittis. Etiam arcu turpis, elementum ac nulla vel, tristique cursus libero. Fusce feugiat, justo at mattis tincidunt, velit ante congue ante, et lacinia metus ipsum a risus.

                    Vivamus hendrerit porta libero nec imperdiet. Praesent interdum nisl nec facilisis dapibus</p>
                    <button className='py-2 px-4 bg-red-500 text-white mt-7 font-semibold'>Learn More</button>
            </div>
            <div className='about-us w-full '>
                <img className=' w-full' src={aboutUs} alt="" />
            </div>

        </div>
    );
};

export default AboutUs;