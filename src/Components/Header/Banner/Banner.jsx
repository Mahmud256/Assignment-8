import React from 'react';

const Banner = () => {
    return (
        <div>
            <div className="relative h-[100vh] bg-center bg-no-repeat">
                <div className="absolute bg-cover inset-0 bg-[url('./assets/doctor.jpg')] backdrop-blur-md opacity-10 bg-no-repeat"></div>
                <div className='relative flex justify-center items-center flex-col h-full'>
                    <h2 className="text-3xl lg:text-5xl font-bold text-center">I Grow By Helping People In Need</h2>
                    <div className="form-control">
                        <div className="input-group justify-center mt-12">
                            <input type="text" placeholder="Search here...." className="input input-bordered" />
                            <button className="btn btn-error normal-case text-[#fff]">
                                Search
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
