import React, { useEffect, useState } from 'react';
import { PieChart, Pie, Cell, Legend } from 'recharts';

const Statistics = () => {
    // const total = 100; // Commented out since this variable is not used

    const [donations, setDonations] = useState([]);
    const total = 100; // Moved the total declaration here

    useEffect(() => {
        const donationItems = JSON.parse(localStorage.getItem('donations'));
        if (donationItems) {
            setDonations(donationItems);
        }
    }, []);

    // Calculate donationPercentage based on donations.length and total
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

    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({
        cx,
        cy,
        midAngle,
        innerRadius,
        outerRadius,
        percent,
    }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text
                x={x}
                y={y}
                fill="white"
                textAnchor={x > cx ? "start" : "end"}
                dominantBaseline="central"
            >
                {`${(percent * 100).toFixed(1)}%`}
            </text>
        );
    };

    return (
        <div>
            <div className='flex justify-center text-xl font-medium'>
                <PieChart width={400} height={400}>
                    <Pie
                        data={data}
                        cx={200}
                        cy={200}
                        labelLine={false}
                        label={renderCustomizedLabel}
                        outerRadius={140}
                        fill="#8884d8"
                        dataKey="value"
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
