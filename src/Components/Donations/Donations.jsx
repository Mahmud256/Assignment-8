// Donations.js
import React from 'react';
import DonationsCard from './DonationsCard';

const Donations = ({ donations, searchQuery }) => {
  // Filter donations based on the search query
  const filteredDonations = searchQuery
    ? donations.filter(donation => {
        // Customize this condition to match your search criteria (in this case, matching titles)
        return donation.title.toLowerCase().includes(searchQuery.toLowerCase());
      })
    : donations;

  return (
    <div className="flex justify-around py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {filteredDonations.map(donation => (
          <DonationsCard key={donation.id} donation={donation} />
        ))}
      </div>
    </div>
  );
};

export default Donations;
