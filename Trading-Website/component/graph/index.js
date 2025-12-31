import ReactECharts from "echarts-for-react";
import "./index.css";

// ReusableBarChart component definition
const ReusableBarChart = ({ datasets }) => {
  // Function to generate chart options based on provided data
  const getChartOptions = (data) => {
    return {
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "shadow",
        },
      },
      legend: {
        data: Object.keys(data[0]),
      },
      xAxis: {
        type: "category",
        data: data.map((entry) => entry.index),
      },
      yAxis: {
        type: "value",
      },
      series: [
        {
          name: "Current Price",
          type: "bar", // Bar chart type
          data: data.map((entry) => entry.currentPrice),
        },
        {
          name: "Previous Close",
          type: "bar",
          data: data.map((entry) => entry.previousClose),
        },
        {
          name: "Open",
          type: "bar",
          data: data.map((entry) => entry.open),
        },
        {
          name: "% Change",
          type: "bar",
          data: data.map((entry) => parseFloat(entry.percentChange)),
        },
        {
          name: "52 Weeks High",
          type: "bar",
          data: data.map((entry) => entry.fifty_Two_Weeks_high),
        },
        {
          name: "52 Weeks Low",
          type: "bar",
          data: data.map((entry) => entry.fifty_Two_Weeks_low),
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
            <ReactECharts option={getChartOptions(data)} className="chart" />
            <div className="legend">
              {/* Legend items for the chart */}
              <div className="legend1">Current Price</div>
              <div className="legend1">Previous Close</div>
              <div className="legend1">Open</div>
              <div className="legend1">% Change</div>
              <div className="legend1">52 Weeks High</div>
              <div className="legend1">52 Weeks Low</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ReusableBarChart;
