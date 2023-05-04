import React, { useState } from 'react';
import { FaRegStar, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';
import toast, { Toaster } from 'react-hot-toast';
import LazyLoad from 'react-lazy-load';

const RecipeCard = ({ recipe }) => {
    const [isDisable, setIsDisable] = useState(false)
    const { name, ingredients, method, rating, picture } = recipe
    const fiveIngredients = ingredients.slice(0, 5);
    const HandelNotify = () => {
        toast('Added to favourite!!')
        setIsDisable(true);
    }; 
    return (
        <div className="card lg:card-side md:grid grid-cols-2 bg-base-100 shadow-xl">
            
            <div className="card-body">
                <h2 className="card-title text-2xl text-slate-900 font-bold ">{name}</h2>
                <div className=' mt-4 text-xl font-light text-slate-600'>
                    <p className='font-bold'>Ingredients: </p>
                    <ul className='list-decimal ml-5'>
                        {
                            fiveIngredients.map(ingr => <li>{ingr}</li>)
                        }
                    </ul>
                </div>
                <div className='mt-4 text-xl font-light text-slate-600'>
                    <p className='font-bold'>Cooking Method: </p>
                    <p >{method}</p>
                </div>
                <div className="card-actions justify-between items-center mt-3">
                <button disabled={isDisable} onClick={HandelNotify} className="btn bg-red-500 border-none text-lg font-bold">Favourite</button>
                    <span className='text-red-400'>
                        <span className='mr-3'>{rating}</span>
                        <Rating
                        placeholderRating={rating}
                        emptySymbol={<FaRegStar></FaRegStar>}
                        placeholderSymbol={<FaStar></FaStar>}
                        fullSymbol={<FaStar></FaStar>}
                    />
                    </span>
                    
                </div>
                <Toaster />
            </div>
            <figure>
                <img className='h-full' src={picture} alt="Album" />

            </figure>
        </div>
    );
};

export default RecipeCard;