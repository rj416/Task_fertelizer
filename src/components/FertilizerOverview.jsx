// src/components/FertilizerOverview.jsx
import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, Legend } from 'recharts';
import Piechart from './Piechart'; // Ensure correct path
import { data } from '../utils/data'; // Ensure correct path

const graphData = [
  { month: 'Jan', requirement: 120, availability: 100 },
  { month: 'Feb', requirement: 150, availability: 130 },
  { month: 'Mar', requirement: 170, availability: 140 },
  { month: 'Apr', requirement: 200, availability: 160 },
  { month: 'May', requirement: 180, availability: 150 },
  // Add more data as needed
];

const COLORS = ['#8884d8', '#82ca9d'];

function FertilizerOverview() {
  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
      <div className="flex flex-col md:flex-row justify-around mb-8">
        <div className="flex-1 mx-2">
          <Piechart
            data={data}
            title="Top 5 Required Products"
            dataKey="requirement_in_mt_"
          />
        </div>
        <div className="flex-1 mx-2">
          <Piechart
            data={data}
            title="Top 5 Available Products"
            dataKey="availability_in_mt_"
          />
        </div>
      </div>
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4 text-center">Fertilizer Requirement & Availability</h2>
        <LineChart width={800} height={400} data={graphData} className="mx-auto">
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="requirement" stroke={COLORS[0]} />
          <Line type="monotone" dataKey="availability" stroke={COLORS[1]} />
        </LineChart>
      </div>
    </div>
  );
}

export default FertilizerOverview;
