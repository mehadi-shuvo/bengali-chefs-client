import React, { useEffect, useState } from 'react';
import { FaBeer, FaConciergeBell, FaCrown, FaHeart, FaHourglassHalf } from 'react-icons/fa';
import { useLoaderData } from 'react-router-dom';
import RecipeCard from './RecipeCard/RecipeCard';

const ChefPage = () => {
    const [recipes, setRecipes] = useState([]);
    useEffect(()=>{
        fetch('https://bengali-chefs-server-mehadi-shuvo.vercel.app/recipes')
            .then(res=> res.json())
            .then(data =>setRecipes(data));
    },[])
    const chef = useLoaderData();
    const {id,name, experience, number_of_recipe, likes, picture,bio } = chef;
    return (
        <div>
            <div className="card mt-20 lg:card-side md:grid grid-cols-2 bg-base-100 lg:w-4/5 mx-auto">
                <figure><img className='w-4/5' src={picture} alt="Album" /></figure>
                <div className="card-body p-0">
                    <h2 className="card-title text-4xl text-slate-900 font-bold ">{name}</h2>
                    <span className='flex mt-4 items-center gap-3 text-xl font-light text-slate-600'>{bio} Amet consectetur adipisicing elit. Doloremque nesciunt sit sequi, qui, eaque ad cupiditate est nulla dolore itaque tempore! Amet exercitationem tempora cumque quasi eveniet at doloremque magni. Eligendi culpa nihil eius aut? Rem eos vel earum, necessitatibus perspiciatis doloribus soluta ipsam repellendus ullam exercitationem, voluptates commodi, itaque sint odio culpa.</span>
                    <span className='flex mt-4 items-center gap-3 text-xl font-light text-slate-500'><FaCrown className=' text-rose-400'></FaCrown> Experience {experience} year</span>
                    <span className='flex mt-2 items-center gap-3 text-xl font-light text-slate-500'><FaConciergeBell className='text-rose-400'></FaConciergeBell> Recipes {number_of_recipe}</span>
                    <span className='flex mt-2 items-center gap-3 text-xl font-light text-slate-500'><FaHeart className='text-rose-400'></FaHeart> Likes {likes}</span>
                </div>
            </div>
            <div className='w-4/5 mx-auto mt-28 grid gap-7'>
                <h3 className='text-center text-4xl text-red-500 font-bold mb-11'>Chef's Best Recipes</h3>
                {
                    recipes.map(recipe => <RecipeCard 
                    key={recipe.id}
                    recipe={recipe}></RecipeCard>)
                }
            </div>
        </div>
    );
};

export default ChefPage;