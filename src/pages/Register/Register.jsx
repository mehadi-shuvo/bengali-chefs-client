import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './Register.css'
import { AuthContext } from '../../providers/AuthProvider/AuthProvider';

const Register = () => {
    const {user} = useContext(AuthContext)
    return (
        <div className='md:grid grid-cols-2 gap-5 mx-auto w-4/5'>
            <div className='register-banner mt-10 rounded-lg flex flex-col justify-center items-center'>
                <h4 className='text-center text-6xl font-extrabold text-white '>We will never share your data</h4>
                <p className='mt-5 text-center text-lg font-light text-white'>All food update you will get after register and all offer also</p>
            </div>
            <div className=' bg-gray-500 mt-10 rounded-lg'>
                <form className='flex gap-7 flex-col p-7'>
                    <h4 className='text-center text-3xl font-extrabold text-white'>Create Your Account</h4>
                    <input className='p-3 rounded-lg' type="text" name="name" placeholder='your name' />
                    <input className='p-3 rounded-lg' type="text" name="photo" placeholder='your photo URL' />
                    <input className='p-3 rounded-lg' type="email" name="email" placeholder='your email' />
                    <input className='p-3 rounded-lg' type="password" name="password" placeholder='your password' />
                    <button className='py-3 rounded-lg bg-red-400 font-semibold text-2xl text-white'>Login</button>
                    <div>
                        <p className='text-center text-lg font-light text-white'>Have an account? <Link to='/login' className='text-red-300 underline'>Login</Link></p>
                    </div>
                </form>
                <div className='flex justify-around px-7 mt-7 pb-7'>
                    <button className='py-3 px-4 bg-slate-900 font-semibold text-xl text-white rounded-lg'>Register with Google</button>
                    <button className='py-3 px-4 bg-slate-900 font-semibold text-xl text-white rounded-lg'>Register with GitHub</button>
                </div>
            </div>
        </div>
    );
};

export default Register;