import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import './Register.css'
import { AuthContext } from '../../providers/AuthProvider/AuthProvider';

const Register = () => {
    const [errorText, setErrorText] = useState('');
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
                    console.log(newUser); 
                    setErrorText('')  
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