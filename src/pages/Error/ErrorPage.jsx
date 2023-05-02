import React from 'react';
import './EroorPage.css'
import { Link } from 'react-router-dom';


const ErrorPage = () => {
    return (
        <div className='errorPage-bg flex flex-col justify-center items-center'>
           <h5 className='text-center text-9xl font-extrabold text-white '>404</h5>
           <p className='text-center text-4xl font-light text-white'>oops !!! page not found</p>
           <Link to='/' className='py-2 px-5 mt-5 rounded-lg bg-white font-semibold text-2xl text-red-500'>Go back home</Link>
        </div>
    );
};

export default ErrorPage;