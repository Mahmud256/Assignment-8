import React from 'react';

const Search = () => {
    return (
        <div>
            <div className="input-group justify-center mt-12">
                <input type="text" placeholder="Search here...." className="input input-bordered" />
                <button className="btn btn-error normal-case text-[#fff]">
                    Search
                </button>
            </div>
        </div>
    );
};

export default Search;