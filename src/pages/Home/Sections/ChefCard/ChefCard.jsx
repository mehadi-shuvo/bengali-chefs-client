import React, { useEffect, useState } from 'react';
import { FaBeer, FaConciergeBell, FaCrown, FaHeart, FaHourglassHalf } from 'react-icons/fa';
import LazyLoad from 'react-lazy-load';
import { Link } from 'react-router-dom';

const ChefCard = ({ chef }) => {

    const { id,name, experience, number_of_recipe, likes, picture } = chef
    return (
            <div className="card h-full card-compact bg-base-100 shadow-xl">
                <figure>
                    <LazyLoad height='350px' offset={300}>
                    <img className='' src={picture} alt="Shoes" />
                    </LazyLoad>

                </figure>
                <div className="card-body">
                    <h2 className="card-title font-semibold text-slate-900 text-2xl">{name}</h2>
                    <p className='flex items-center gap-3 text-xl font-light text-slate-500'><FaCrown className='text-rose-400'></FaCrown> Experience {experience} year</p>
                    <p className='flex items-center gap-3 text-xl font-light text-slate-500'><FaConciergeBell className='text-rose-400'></FaConciergeBell> Recipes {number_of_recipe}</p>
                    <p className='flex items-center gap-3 text-xl font-light text-slate-500'><FaHeart className='text-rose-400'></FaHeart> Likes {likes}</p>
                    <div className="card-actions justify-start mt-4">
                    <Link to={`/chef/${id}`}><button  className="btn bg-red-500 border-none text-lg font-bold">View Recipes</button></Link>
                    </div>
                </div>
            </div>

    );
};

export default ChefCard;