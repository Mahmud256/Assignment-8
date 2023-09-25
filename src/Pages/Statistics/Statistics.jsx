import React from 'react';
import { PieChart, Pie, Cell, Legend } from 'recharts';

const Statistics = () => {
    const total = 100;
    const donation = 33;
    const difference = total - donation;

    const data = [
        { name: 'Your Donation', value: donation },
        { name: 'Total Donation', value: difference },
    ];

    const COLORS = ['#00C49F', '#FF444A'];

    return (
        <div>
            <div className='flex justify-center'>
                <PieChart width={400} height={200}>
                    <Pie
                        dataKey="value"
                        isAnimationActive={false}
                        data={data}
                        cx={200}
                        cy={100}
                        outerRadius={60}
                        fill="#8884d8"
                        label
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
