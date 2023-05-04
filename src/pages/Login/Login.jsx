import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider/AuthProvider';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import toast, { Toaster } from 'react-hot-toast';

const Login = () => {
    const { login,LoginGoogle,setUser,loginGitHub } = useContext(AuthContext);
    const GoogleProvider = new GoogleAuthProvider();
    const gitHubProvider = new GithubAuthProvider();
    const [errorText, setErrorText] = useState('');
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const location = useLocation();
    const navigate = useNavigate();
    const from = location?.state?.from?.pathname || '/';

    const handelLogin = (event) => {
        event.preventDefault();
        login(email, password)
            .then(result => {
                toast('Logged successfully!!')
                setErrorText('');
                navigate(from)
            })
            .catch(error => {
                setErrorText(error.message);
            })

    }
    const handelGoogle = ()=>{
        LoginGoogle(GoogleProvider)
            .then(result=>{
                setUser(result.user);
                toast('Logged successfully!!')
                navigate(from)
            })
            .catch(error =>{
                setErrorText(error.message);
            })
    }
    const handelGitHub =()=>{
        loginGitHub(gitHubProvider)
            .then(result=>{
                setUser(result.user);
                toast('Logged successfully!!')
                navigate(from)
            })
            .catch(error=>{
                setErrorText(error.message);
            })
    }
    return (
        <div className='w-2/5 mx-auto bg-gray-500 mt-10 rounded-lg'>
            <form onSubmit={handelLogin} className='flex gap-7 flex-col p-7'>
                <h4 className='text-center text-3xl font-extrabold text-white'>Please Login</h4>
                <input className='p-3 rounded-lg' type="email"
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder='your email' />
                <input className='p-3 rounded-lg' type="password"
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder='your password' />

                {
                    errorText && <p>{errorText}</p>
                }
                <button className='py-3 rounded-lg bg-red-400 font-semibold text-2xl text-white'>Login</button>
                <div>
                    <p className='text-center text-lg font-light text-white'>Do not have an account? <Link to='/register' className='text-red-300 underline'>Create account</Link></p>
                </div>
            </form>
            <div className='flex justify-around px-7 mt-7 pb-7'>
                <button onClick={handelGoogle} className='py-3 px-4 bg-slate-900 font-semibold text-xl text-white rounded-lg'>Login with Google</button>
                <button onClick={handelGitHub} className='py-3 px-4 bg-slate-900 font-semibold text-xl text-white rounded-lg'>Login with GitHub</button>
            </div>
            <Toaster></Toaster>
        </div>
    );
};

export default Login;