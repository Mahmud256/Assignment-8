import React from 'react';

const Banner = () => {
    return (
        <div>
            <div className="h-[100vh] bg-center bg-cover bg-[url('./assets/doctor.jpg')] bg-no-repeat">
                <div className='flex justify-center items-center flex-col h-full'>
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