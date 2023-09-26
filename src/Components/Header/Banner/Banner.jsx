import React from 'react';
import Search from './Search';

const Banner = () => {
    return (
        <div>
            <div className="relative h-[100vh] bg-center bg-no-repeat">
                <div className="absolute bg-cover inset-0 bg-[url('./assets/doctor.jpg')] backdrop-blur-md opacity-10 bg-no-repeat"></div>
                <div className='relative flex justify-center items-center flex-col h-full'>
                    <h2 className="text-3xl lg:text-5xl font-bold text-center">I Grow By Helping People In Need</h2>
                    <div className="form-control">
                        <Search></Search>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
