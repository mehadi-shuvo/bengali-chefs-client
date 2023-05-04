import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css'
import { AuthContext } from '../../providers/AuthProvider/AuthProvider';
import toast, { Toaster } from 'react-hot-toast';

const Register = () => {
    const [errorText, setErrorText] = useState('');
    const navigate = useNavigate();
    const {createUser, addNameAndPhoto} = useContext(AuthContext);
    const [name, setName] = useState('');
    const[photo, setPhoto] = useState('')
    const[email, setEmail] = useState('')
    const[password, setPassword] = useState('')
    const handelSubmit = (e)=>{
        e.preventDefault();
        setErrorText('') 
        if(email.length === 0 || password.length === 0){
            setErrorText('Give your email and password');
            return;
        }
        if(password.length<6){
            console.log(email,password)
            setErrorText('Password should be at least 6 characters.');
            return;
        }

        //create user by firebase;

        createUser(email, password)
            .then(result=>{
                const newUser = result.user;
                addNameAndPhoto(newUser, name, photo)
                    .then().catch(error=>{
                        console.log(error.message)
                    });
                    toast('Register successfully!!') 
                    setErrorText('') 
                    navigate('/') 
            })
            .catch(error=>{
                setErrorText(error.message)
            })
    }
    return (
        <div className='md:grid grid-cols-2 gap-5 mx-auto w-4/5'>
            <div className='register-banner mt-10 rounded-lg flex flex-col justify-center items-center'>
                <h4 className='text-center text-6xl font-extrabold text-white '>We will never share your data</h4>
                <p className='mt-5 text-center text-lg font-light text-white'>All food update you will get after register and all offer also</p>
            </div>
            <div className=' bg-gray-500 mt-10 rounded-lg'>
                <Toaster></Toaster>
                <form onSubmit={handelSubmit} className='flex gap-7 flex-col p-7'>
                    <h4 className='text-center text-3xl font-extrabold text-white'>Create Your Account</h4>
                    
                    <input className='p-3 rounded-lg' type="text" 
                    onChange={(e)=>setName(e.target.value)} placeholder='your name' />
                    
                    <input className='p-3 rounded-lg' type="text" 
                    onChange={(e)=>setPhoto(e.target.value)} placeholder='your photo URL' />
                    
                    <input className='p-3 rounded-lg' type="email" 
                    onChange={(e)=>setEmail(e.target.value)} placeholder='your email' />
                    
                    <input className='p-3 rounded-lg' type="password" 
                    onChange={(e)=>setPassword(e.target.value)} placeholder='your password' />
                    {
                        errorText && <p>{errorText}</p>
                    }
                    <button disabled={email&&password ? false: true} className='py-3 rounded-lg bg-red-400 disabled:bg-slate-400 font-semibold text-2xl text-white'>Register</button>
                    <div>
                        <p className='text-center text-lg font-light text-white'>Have an account? <Link to='/login' className='text-red-300 underline'>Login</Link></p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;