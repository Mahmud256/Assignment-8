import React, { useEffect, useState } from 'react';
import DonationCard from './DonationCard';

const Donation = () => {
    const [donations, setDonations] = useState([]);
    const [noFound, setNofound] = useState(false);
    const [isSeeAll, setIsSeeAll] = useState(false);

    useEffect(() => {
        const donationItems = JSON.parse(localStorage.getItem('donations'));

        if (donationItems) {
            setDonations(donationItems);
        } else {
            setNofound('No Data Found');
        }
    }, []);

    return (
        <div>
            {noFound ? (
                <p className="h-[80vh] flex justify-center items-center">{noFound}</p>
            ) : (
                <div className='flex justify-center'>
                    <div>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                            {isSeeAll
                                ? donations.map(donation => <DonationCard key={donation.id} donation={donation}></DonationCard>)
                                : donations.slice(0, 4).map(donation => <DonationCard key={donation.id} donation={donation}></DonationCard>)
                            }
                        </div>

                        {donations.length > 4 && (
                            <div className='my-6'>
                                {!isSeeAll && (
                                    <button onClick={() => setIsSeeAll(true)} className='p-2 block rounded-lg mx-auto text-base font-semibold bg-green-500 text-white'>
                                        See All
                                    </button>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Donation;
