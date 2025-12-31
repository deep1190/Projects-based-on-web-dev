import React from "react";
import ReactECharts from "echarts-for-react";
import "./index.css";

// ReusableSBarChart component definition
const ReusableSBarChart = ({ datasets }) => {
  // Function to generate chart options based on provided data
  const getChartOptions = (data) => {
    return {
      tooltip: {
        trigger: "axis", // Trigger tooltip on axis hover
        axisPointer: {
          type: "shadow", // Shadow effect for the axis pointer
        },
      },
      legend: {
        data: Object.keys(data[0]), // Extract legend labels from the keys of the first data object
      },
      xAxis: {
        type: "category", // Category type for the x-axis
        data: data.map((entry) => entry.SECURITIES), // X-axis data from the SECURITIES field in data
      },
      yAxis: {
        type: "value", // Value type for the y-axis
      },
      series: [
        {
          name: "%Change", // Name for the series
          type: "bar", // Bar chart type
          data: data.map((entry) => entry.percentChange), // Data for %Change
        },
      ],
    };
  };

  return (
    <div>
      {datasets.map((data, index) => (
        <div className="container" key={index}>
          <div className="title">Chart</div>
          <div className="wrapper">
            <ReactECharts option={getChartOptions(data)} />{" "}
            {/* Render the chart with the generated options */}
            <div className="legend">
              {/* Legend items for the chart */}
              <div className="legend1">Securities</div>
              <div className="legend1">Percent Change</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ReusableSBarChart;
