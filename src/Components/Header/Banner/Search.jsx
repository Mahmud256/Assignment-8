import React, { useState } from 'react';

const Search = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleInputChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    onSearch(query); // Call the onSearch function when the input changes
  };

  return (
    <div>
      <div className="input-group justify-center mt-12">
        <input
          type="text"
          placeholder="Search by title...."
          className="input input-bordered"
          value={searchQuery}
          onChange={handleInputChange}
        />
        <button className="btn btn-error normal-case text-[#fff]">
          Search
        </button>
      </div>
    </div>
  );
};

export default Search;
