// SearchPage.js (Parent Component)
import React, { useState } from 'react';
import Search from './Search';
import Donations from './Donations';

const SearchPage = ({ initialDonations }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [donations, setDonations] = useState(initialDonations);

  // Function to update the search query and filter donations
  const handleSearch = (query) => {
    setSearchQuery(query);
  };
  console.log(setDonations);

  return (
    <div>
      <Search onSearch={handleSearch} />
      <Donations donations={donations} searchQuery={searchQuery} />
    </div>
  );
};

export default SearchPage;
