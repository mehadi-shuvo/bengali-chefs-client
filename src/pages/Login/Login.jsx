import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='w-2/5 mx-auto bg-gray-500 mt-10 rounded-lg'>
            <form className='flex gap-7 flex-col p-7'>
                <h4 className='text-center text-3xl font-extrabold text-white'>Please Login</h4>
                <input className='p-3 rounded-lg' type="email" name="email" placeholder='your email' />
                <input className='p-3 rounded-lg' type="password" name="password" placeholder='your password' />
                <button className='py-3 rounded-lg bg-red-400 font-semibold text-2xl text-white'>Login</button>
                <div>
                    <p className='text-center text-lg font-light text-white'>Do not have an account? <Link to='/register' className='text-red-300 underline'>Create account</Link></p>
                </div>
            </form>
            <div className='flex justify-around px-7 mt-7 pb-7'>
                <button className='py-3 px-4 bg-slate-900 font-semibold text-xl text-white rounded-lg'>Login with Google</button>
                <button className='py-3 px-4 bg-slate-900 font-semibold text-xl text-white rounded-lg'>Login with GitHub</button>
            </div>
        </div>
    );
};

export default Login;