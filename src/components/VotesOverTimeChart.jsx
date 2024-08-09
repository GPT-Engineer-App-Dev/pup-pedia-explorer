import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Jan', dogs: 4000, cats: 2400 },
  { name: 'Feb', dogs: 3000, cats: 1398 },
  { name: 'Mar', dogs: 2000, cats: 9800 },
  { name: 'Apr', dogs: 2780, cats: 3908 },
  { name: 'May', dogs: 1890, cats: 4800 },
  { name: 'Jun', dogs: 2390, cats: 3800 },
  { name: 'Jul', dogs: 3490, cats: 4300 },
];

const VotesOverTimeChart = () => {
  return (
    <div className="w-full h-[400px] mt-8">
      <h2 className="text-2xl font-bold text-center mb-4 text-orange-800">Votes Over Time</h2>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#fbd38d" />
          <XAxis dataKey="name" stroke="#dd6b20" />
          <YAxis stroke="#dd6b20" />
          <Tooltip contentStyle={{ backgroundColor: '#fffaf0', borderColor: '#fbd38d' }} />
          <Legend />
          <Line type="monotone" dataKey="dogs" stroke="#9c4221" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="cats" stroke="#805ad5" activeDot={{ r: 8 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default VotesOverTimeChart;