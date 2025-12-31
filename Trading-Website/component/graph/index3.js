import ReactECharts from "echarts-for-react";
import "./index.css";

// ReusableBarChart3 component definition
const ReusableBarChart3 = ({ datasets }) => {
  // Function to generate chart options based on provided data
  const getChartOptions = (data) => {
    return {
      tooltip: {
        trigger: "axis", // Display tooltip when hovering over the axis
        axisPointer: {
          type: "shadow", // Use shadow for the axis pointer
        },
      },
      legend: {
        data: Object.keys(data[0]), // Create legend items based on the keys of the first data object
      },
      xAxis: {
        type: "category", // Category type for the x-axis
        data: data.map((entry) => entry.index), // X-axis data from the index field in data
      },
      yAxis: {
        type: "value", // Value type for the y-axis
      },
      series: [
        {
          name: "Current Price", // Series name for Current Price
          type: "bar", // Bar chart type
          data: data.map((entry) => entry.currentPrice), // Data for Current Price
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
            <ReactECharts option={getChartOptions(data)} className="chart" />{" "}
            {/* Render the chart with generated options */}
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

export default ReusableBarChart3;
