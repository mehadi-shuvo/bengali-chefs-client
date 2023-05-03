import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider/AuthProvider';
import { FaBeer, FaUserCircle } from 'react-icons/fa';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const name = user?.displayName;
    const photo = user?.photoURL
    console.log(photo);
    const handelLogOut = () => {
        logOut()
            .then().catch(error => {
                console.log(error);
            })
    }

    return (
        <div className='md:w-4/5 mx-auto'>
            <div className="navbar bg-transparent">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a>Item 1</a></li>
                            <li><a>Item 3</a></li>
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">BengaliChefs</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <NavLink to='/'
                            className={({ isActive, isPending }) => isActive ? "active text-red-500 md:mr-4": isPending ? "pending"
                            : "md:mr-4"
                            }
                        >Home</NavLink>
                        <NavLink to='/tt' className={({ isActive, isPending }) => isActive ? "active text-red-500 md:mr-4": isPending ? "pending"
                            : "md:mr-4"
                            }>Blogs</NavLink>

                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ?
                            <div className='flex justify-center items-center'>
                                {
                                    photo ? <img className='w-10 h-10 rounded-full' title={name} src={photo}></img> : <FaUserCircle title={name}></FaUserCircle>
                                }
                                <Link onClick={handelLogOut} className='ml-3 py-1 px-3 rounded-lg bg-red-400 font-medium text-lg text-white'>Log out</Link>
                            </div>
                            : <Link to='/login' className='py-1 px-3 rounded-lg bg-red-400 font-medium text-lg text-white'>Login</Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Header;