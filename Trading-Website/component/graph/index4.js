import ReactECharts from "echarts-for-react";
import "./index.css";

// ReusableSBarChart4 component definition
const ReusableSBarChart4 = ({ datasets }) => {
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
        data: data.map((entry) => entry.Symbol),
      },
      yAxis: {
        type: "value",
      },
      series: [
        {
          name: "%Change",
          type: "line",
          data: data.map((entry) => entry.percentChange),
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
            {/* Render the chart with generated options */}
            <div className="legend">
              {/* Legend items for the chart */}
              <div className="legend1">Symbol</div>
              <div className="legend1">Percent Change</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ReusableSBarChart4;
