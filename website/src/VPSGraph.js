import React, { Component } from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  ResponsiveContainer,
  AreaChart,
  Area,
  Tooltip,
} from "recharts";
import "./style.css";

const VPSGraph = ({ componentName, componentData, graphColor }) => {
  return (
    <div>
      <h1 className="graph-text">{componentName}</h1>
      <AreaChart width={800} height={300} data={componentData}>
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor={graphColor} stopOpacity={0.8} />
            <stop offset="95%" stopColor={graphColor} stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis type="number" domain={[0, 24]} dataKey="hour" />
        <YAxis type="number" domain={[0, 100]} dataKey="Usage" />
        <CartesianGrid strokeDasharray="5 5" />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="Usage"
          stroke="#00000"
          fillOpacity={1}
          fill="url(#colorUv)"
        />
      </AreaChart>
    </div>
  );
};

export default VPSGraph;

/*

      <ResponsiveContainer width="100%" aspect={5}>
        <LineChart
          width={800}
          height={300}
          data={componentData}
          margin={{ top: 5, bottom: 5, left: 0, right: 50 }}
        >
          <Line
            type="monotone"
            dataKey="uv"
            stroke="#17ff64"
            activeDot={true}
            animationEasing={"ease"}
          />
          <CartesianGrid stroke="#ccc" strokeDasharray=" 5 5" />
          <XAxis dataKey="name" />
          <YAxis />
        </LineChart>
      </ResponsiveContainer>

*/
