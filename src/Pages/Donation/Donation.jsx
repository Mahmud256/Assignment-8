import React, { useEffect, useState } from 'react';
//import DonationsCard from '../../Components/Donations/DonationsCard';
import DonationCard from './DonationCard';

const Donation = () => {

    const [donations, setDonations] = useState([])

    const [noFound, setNofound] = useState(false)

    useEffect(() => {
        const donationItems = JSON.parse(localStorage.getItem('donations'));

        if (donationItems) {
            setDonations(donationItems);
        }
        else {
            setNofound('No Data Found');
        }
    }, [])

    return (
        <div>
            {noFound ? <p className="h-[80vh] flex justify-center items-center">{noFound}</p> :

                <div>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                        {donations.map(donation =>  <DonationCard key={donation.id} donation={donation}></DonationCard>)}
                    </div>
                </div>

            }
        </div>
    );
};

export default Donation;