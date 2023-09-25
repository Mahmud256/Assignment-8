import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import DonateCard from './DonateCard';

const Donate = () => {

    const [donation, setDonation] = useState()

    const {id} = useParams()

    const donate = useLoaderData()

    useEffect(() => {
        const findDonate = donate ?.find((donation) => donation.id === id);
        setDonation(findDonate);
    },[id, donate])


    return (
        <div>
            <DonateCard donation={donation}></DonateCard>
        </div>
    );
};

export default Donate;