import React from 'react';
import pic1 from '../../../../assets/p1.jpg'
import pic2 from '../../../../assets/p2.jpg'
import pic3 from '../../../../assets/p3.jpg'
import pic4 from '../../../../assets/p4.jpg'


const Comments = () => {
    return (
        <div className='mt-14'>
            <h1 className='text-center text-4xl text-red-500 font-bold mb-11'>Our Clint Comments</h1>
            <div className="carousel w-4/5 mx-auto">
                <div id="item1" className="carousel-item w-full">
                    <div className="card bg-slate-400 mx-2">
                        <figure className="px-10 pt-10">
                            <img src={pic1} alt="Shoes" className="mask mask-squircle h-24" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Tamim Tamu</h2>
                            <p>Thank you for the amazing meal! Looking forward to visiting again soon!</p>
                        </div>
                    </div>
                    <div className="card bg-slate-400 mx-2">
                        <figure className="px-10 pt-10">
                            <img src={pic2} alt="Shoes" className="mask mask-squircle h-24" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Humaira Akter</h2>
                            <p>Thank you for the amazing meal! Looking forward to visiting again soon!</p>
                        </div>
                    </div>
                    <div className="card bg-slate-400 mx-2">
                        <figure className="px-10 pt-10">
                            <img src={pic3} alt="Shoes" className="mask mask-squircle h-24" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Rafi Rock</h2>
                            <p>Thank you for the amazing meal! Looking forward to visiting again soon!</p>
                        </div>
                    </div>
                </div>
                <div id="item2" className="carousel-item w-full">
                    <div className="card bg-slate-400 mx-2">
                        <figure className="px-10 pt-10">
                            <img src={pic4} alt="Shoes" className="mask mask-squircle h-24" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Chirli Chok</h2>
                            <p>Thank you for the amazing meal! Looking forward to visiting again soon!</p>
                        </div>
                    </div>
                    <div className="card bg-slate-400 mx-2">
                        <figure className="px-10 pt-10">
                            <img src={pic3} alt="Shoes" className="mask mask-squircle h-24" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Rafi Rock</h2>
                            <p>Thank you for the amazing meal! Looking forward to visiting again soon!</p>
                        </div>
                    </div>
                    <div className="card bg-slate-400 mx-2">
                        <figure className="px-10 pt-10">
                            <img src={pic2} alt="Shoes" className="mask mask-squircle h-24" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Humaira Akter</h2>
                            <p>Thank you for the amazing meal! Looking forward to visiting again soon!</p>
                        </div>
                    </div>
                </div>
                <div id="item3" className="carousel-item w-full">
                    <div className="card bg-slate-400 mx-2">
                        <figure className="px-10 pt-10">
                            <img src={pic3} alt="Shoes" className="mask mask-squircle h-24" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Rafi Rock</h2>
                            <p>Thank you for the amazing meal! Looking forward to visiting again soon!</p>
                        </div>
                    </div>
                    <div className="card bg-slate-400 mx-2">
                        <figure className="px-10 pt-10">
                            <img src={pic1} alt="Shoes" className="mask mask-squircle h-24" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Tamim Tamu</h2>
                            <p>Thank you for the amazing meal! Looking forward to visiting again soon!</p>
                        </div>
                    </div>
                    <div className="card bg-slate-400 mx-2">
                        <figure className="px-10 pt-10">
                            <img src={pic2} alt="Shoes" className="mask mask-squircle h-24" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Humaira Akter</h2>
                            <p>Thank you for the amazing meal! Looking forward to visiting again soon!</p>
                        </div>
                    </div>
                </div>
                <div id="item4" className="carousel-item w-full">
                    <div className="card bg-slate-400 mx-2">
                        <figure className="px-10 pt-10">
                            <img src={pic4} alt="Shoes" className="mask mask-squircle h-24" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Chirli Chok</h2>
                            <p>Thank you for the amazing meal! Looking forward to visiting again soon!</p>
                        </div>
                    </div>
                    <div className="card bg-slate-400 mx-2">
                        <figure className="px-10 pt-10">
                            <img src={pic2} alt="Shoes" className="mask mask-squircle h-24" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Humaira Akter</h2>
                            <p>Thank you for the amazing meal! Looking forward to visiting again soon!</p>
                        </div>
                    </div>
                    <div className="card bg-slate-400 mx-2">
                        <figure className="px-10 pt-10">
                            <img src={pic3} alt="Shoes" className="mask mask-squircle h-24" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Rafi Rock</h2>
                            <p>Thank you for the amazing meal! Looking forward to visiting again soon!</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-center w-full py-2 gap-2">
                <a href="#item1" className="btn btn-xs">1</a>
                <a href="#item2" className="btn btn-xs">2</a>
                <a href="#item3" className="btn btn-xs">3</a>
                <a href="#item4" className="btn btn-xs">4</a>
            </div>
        </div>
    );
};

export default Comments;