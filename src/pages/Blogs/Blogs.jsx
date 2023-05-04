import React from 'react';

const Blogs = () => {
    return (
        <div>
            <div className='bg-gradient-to-r from-[rgba(126,144,254,0.05)] from-0% to-[rgba(152,115,255,0.05)] to-100%'>
                <h4 className='text-4xl font-extrabold text-[#1A1919] text-center py-12 mb-8'>Blogs</h4>
            </div>
            <div className='w-4/5 mx-auto mt-9'>
                <div className='text-lg text-[#474747] bg-[#b8b8b8] p-4 rounded-lg mb-4'>
                    <h4 className='font-extrabold text-[#222]'>Differences between uncontrolled and controlled components</h4>
                    <p>Uncontrolled components manage their own state internally, while controlled components receive their state and behavior from an external source like the parent component or a state management library.</p>
                </div>
                <div className='text-lg text-[#474747] bg-[#b8b8b8] p-4 rounded-lg mb-4'>
                    <h4 className='font-extrabold text-[#222]'>How to validate React props using PropTypes?</h4>
                    <p>To validate React props with PropTypes:</p>
                    <ul className='ml-5 list-decimal'>
                        <li>Import PropTypes library.</li>
                        <li>Add a static propTypes object to the component.</li>
                        <li>Define expected prop types and mark them as required.</li>
                        <li>PropTypes will check the props automatically and show a warning in the console if the types don't match.</li>
                    </ul>
                </div>
                <div className='text-lg text-[#474747] bg-[#b8b8b8] p-4 rounded-lg mb-4'>
                    <h4 className='font-extrabold text-[#222]'>The difference between nodejs and express js?
                    </h4>
                    <p>
Node.js is a server-side JavaScript runtime. Express.js is a web application framework built on top of Node.js that simplifies building web applications with features like routing and middleware.</p>
                </div>
                <div className='text-lg text-[#474747] bg-[#b8b8b8] p-4 rounded-lg mb-4'>
                    <h4 className='font-extrabold text-[#222]'>What is a custom hook, and why will you create a custom hook?
                    </h4>
                    <p>
A custom hook is a reusable function that encapsulates common logic and can be shared across multiple components. Developers create custom hooks to abstract away complex logic, reduce code duplication, and improve code organization and maintainability.</p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;