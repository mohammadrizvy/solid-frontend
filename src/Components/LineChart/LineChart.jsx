import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const monthlyData = {
  'January': [
    { date: '01', sell: 1000, buy: 500 },
    { date: '02', sell: 1200, buy: 700 },
    { date: '03', sell: 900, buy: 300 },
    // More days...
  ],
  'February': [
    { date: '01', sell: 1100, buy: 600 },
    { date: '02', sell: 1300, buy: 800 },
    { date: '03', sell: 1400, buy: 900 },
    // More days...
  ],
  'March': [
    { date: '01', sell: 1200, buy: 700 },
    { date: '02', sell: 1000, buy: 500 },
    { date: '03', sell: 1300, buy: 600 },
    // More days...
  ],
  'April': [
    { date: '01', sell: 1300, buy: 800 },
    { date: '02', sell: 1400, buy: 900 },
    { date: '03', sell: 1500, buy: 1000 },
    // More days...
  ],
  'May': [
    { date: '01', sell: 1400, buy: 900 },
    { date: '02', sell: 1200, buy: 700 },
    { date: '03', sell: 1600, buy: 1100 },
    // More days...
  ],
  'June': [
    { date: '01', sell: 1100, buy: 600 },
    { date: '02', sell: 1000, buy: 500 },
    { date: '03', sell: 1300, buy: 800 },
    // More days...
  ],
  'July': [
    { date: '01', sell: 1700, buy: 1200 },
    { date: '02', sell: 1600, buy: 1100 },
    { date: '03', sell: 1800, buy: 1300 },
    // More days...
  ],
 'August': [
  { date: '01', sell: 1500, buy: 1000 },
  { date: '02', sell: 1700, buy: 1200 },
  { date: '03', sell: 1600, buy: 1100 },
  { date: '04', sell: 1800, buy: 1300 },
  { date: '05', sell: 1900, buy: 1400 },
  { date: '06', sell: 2000, buy: 1500 },
  { date: '07', sell: 100, buy: 1600 },
  { date: '08', sell: 2200, buy: 8800 },
  { date: '09', sell: 2300, buy: 1800 },
  { date: '10', sell: 2400, buy: 1900 },
  { date: '11', sell: 2500, buy: 2000 },
  { date: '12', sell: 2600, buy: 2100 },
  { date: '13', sell: 2700, buy: 2200 },
  { date: '14', sell: 2800, buy: 2300 },
  { date: '15', sell: 2900, buy: 2400 },
  { date: '16', sell: 1000, buy: 2500 },
  { date: '17', sell: 3100, buy: 2600 },
  { date: '18', sell: 3200, buy: 3700 },
  { date: '19', sell: 300, buy: 800 },
  { date: '20', sell: 3400, buy: 2900 },
  { date: '21', sell: 3500, buy: 3000 },
  { date: '22', sell: 3600, buy: 3100 },
  { date: '23', sell: 3700, buy: 3200 },
  { date: '24', sell: 300, buy: 3300 },
  { date: '25', sell: 3900, buy: 3400 },
  { date: '26', sell: 4000, buy: 3500 },
  { date: '27', sell: 4100, buy: 3600 },
  { date: '28', sell: 4200, buy: 3700 },
  { date: '29', sell: 4300, buy: 3800 },
  { date: '30', sell: 4400, buy: 3900 },
  { date: '31', sell: 4500, buy: 4000 },
],

  'September': [
    { date: '01', sell: 1300, buy: 900 },
    { date: '02', sell: 1500, buy: 1000 },
    { date: '03', sell: 1400, buy: 900 },
    // More days...
  ],
  'October': [
    { date: '01', sell: 1200, buy: 800 },
    { date: '02', sell: 1100, buy: 700 },
    { date: '03', sell: 1300, buy: 900 },
    // More days...
  ],
  'November': [
    { date: '01', sell: 1400, buy: 1000 },
    { date: '02', sell: 1300, buy: 900 },
    { date: '03', sell: 1500, buy: 1100 },
    // More days...
  ],
  'December': [
    { date: '01', sell: 1500, buy: 900 },
    { date: '02', sell: 1700, buy: 1100 },
    { date: '03', sell: 1600, buy: 1200 },
    // More days...
  ],
};


const CustomLineChart = () => {
  // Get the current month name
  const currentMonth = new Date().toLocaleString('default', { month: 'long' });

  // Set the initial state to the current month
  const [selectedMonth, setSelectedMonth] = useState(currentMonth);

  const handleMonthChange = (event) => {
    setSelectedMonth(event.target.value);
  };

  return (
    <div>
      <div className="mb-4">
        <label htmlFor="month-select" className="mr-2">Select Month:</label>
        <select id="month-select" value={selectedMonth} onChange={handleMonthChange} className="select select-bordered">
          {Object.keys(monthlyData).map((month) => (
            <option key={month} value={month}>{month}</option>
          ))}
        </select>
      </div>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart
          data={monthlyData[selectedMonth]}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="sell" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="buy" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CustomLineChart;
