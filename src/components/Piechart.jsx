import React from 'react';
import { PieChart, Pie, Cell, Tooltip } from 'recharts';
import { getPieData } from '../utils/data'; // Make sure the path to getPieData is correct

const COLORS = ['#4A90E2', '#50E3C2', '#B5A5F9', '#FF6F61', '#F5A623'];


const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx, cy, midAngle, innerRadius, outerRadius, percent, index
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? 'start' : 'end'}
      dominantBaseline="central"
      className="text-sm"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

function Piechart({ data, title, dataKey }) {
  const chartData = getPieData(data, dataKey);

  return (
    <div className="flex flex-col items-center p-4 bg-white shadow-lg rounded-lg">
      <h3 className="text-lg font-bold mb-4">{title}</h3>
      <PieChart width={500} height={500}>
        <Pie
          data={chartData}
          cx="50%"
          cy="50%"
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={170}
          dataKey="value"
        >
          {chartData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </div>
  );
}

export default Piechart;
