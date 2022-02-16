import React, { PureComponent } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Graphed = () => {
  const data = [
    {
      name: "2008",
      uv: 4000,
      obesity: 220975,
      amt: 2400,
    },
    {
      name: "2010",
      uv: 3000,
      obesity: 350464,
      amt: 2210,
    },
    {
      name: "2012",
      uv: 2000,
      obesity: 339667,
      amt: 2290,
    },
    {
      name: "2014",
      uv: 2780,
      obesity: 401587,
      amt: 2000,
    },
    {
      name: "2016",
      uv: 1890,
      obesity: 523758,
      amt: 2181,
    },
    {
      name: "2018",
      uv: 2390,
      obesity: 606789,
      amt: 2500,
    },
    {
      name: "2020",
      uv: 3490,
      obesity: 739180,
      amt: 2100,
    },
  ];
  return (
    <ResponsiveContainer width="60%" height="40%">
      <LineChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="obesity"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default Graphed;
