import React, { useEffect, useState } from 'react';
import { PieChart, Pie, Cell, Legend } from 'recharts';

const Statistics = () => {
    const total = 100;
    const [donations, setDonations] = useState([]);

    useEffect(() => {
        const donationItems = JSON.parse(localStorage.getItem('donations'));
        if (donationItems) {
            setDonations(donationItems);
        }
    }, []);

    let donationPercentage = donations.length * 8.34;
    if (donationPercentage > total) {
        donationPercentage = total;
    }

    const difference = total - donationPercentage;

    const data = [
        { name: 'Your Donation', value: donationPercentage },
        { name: 'Total Donation', value: difference },
    ];

    const COLORS = ['#00C49F', '#FF444A'];

    return (
        <div>
            <div className='flex justify-center'>
                <PieChart width={400} height={300}>
                    <Pie
                        dataKey="value"
                        isAnimationActive={true}
                        data={data}
                        cx={200}
                        cy={100}
                        outerRadius={70}
                        fill="#8884d8"
                        
                        label={(entry) =>  `${(entry.percent * 100).toFixed(1)}%`}
                        
                    >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                    <Legend />
                </PieChart>
            </div>
        </div>
    );
};

export default Statistics;
