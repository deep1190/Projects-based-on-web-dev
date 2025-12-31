import "./index.css";
import React, { useState } from "react";
import ReactECharts from "echarts-for-react";

const StackedBarChart = ({ data }) => {
  const [showTop3, setShowTop3] = useState(true);

  // Function to generate chart options based on provided data
  const getChartOptions = (data) => {
    // Determine the data to be displayed based on user selection
    const displayData = showTop3
      ? data
          .slice() // Create a copy of the array to avoid mutating the original data
          .sort((a, b) => b.previous_Day - a.previous_Day) // Sort by 'previous_Day' or another relevant metric
          .slice(0, 3) // Get the top 3 entries
      : data;

    return {
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "shadow",
        },
      },
      legend: {
        data: ["Previous Day", "Current Day"],
      },
      grid: {
        left: "3%",
        right: "10%",
        bottom: "3%",
        containLabel: true,
      },
      yAxis: {
        type: "category",
        data: displayData.map((entry) => entry.indicators),
      },
      xAxis: {
        type: "value",
      },
      series: [
        {
          name: "Previous Day",
          type: "bar",
          stack: "stack1",
          data: displayData.map((entry) => entry.previous_Day),
        },
        {
          name: "Current Day",
          type: "bar",
          stack: "stack1",
          data: displayData.map((entry) => entry.current_Day),
        },
      ],
      emphasis: {
        focus: "series",
      },
    };
  };

  return (
    <div className="container">
      <div className="title-container">
        <div className="title">Chart</div>
      </div>
      <div>
        <button className="button1" onClick={() => setShowTop3(!showTop3)}>
          {showTop3 ? "Show All" : "Show Top 3"}
        </button>
      </div>
      <div className="wrapper">
        <ReactECharts option={getChartOptions(data)} className="chart" />
      </div>
    </div>
  );
};

export default StackedBarChart;
