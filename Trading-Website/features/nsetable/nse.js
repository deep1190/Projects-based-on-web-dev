import CustomTable from "../../component/table";
import "./nse.css";
import {
  stocksData,
  stocksHeaders,
  gainersHeading,
  gainersData,
  bankData,
  serviceData,
} from "../../constants/data";
import ReusableBarChart from "../../component/graph/index";
import ReusableSBarChart from "../../component/graph/index2";

// Section component to render table and chart with title
const Section = ({ title, headers, data, ChartComponent }) => (
  <div className="section-container">
    <div className="table-container">
      <h2 className="heading2">{title}</h2>
      <hr />
      <CustomTable headers={headers} data={data} />
    </div>
    <div className="chart-container">
      <ChartComponent datasets={[data]} />
    </div>
  </div>
);

// NseTable component to display various sections with data and charts
const NseTable = () => {
  return (
    <div className="nse-table">
      <h1 className="heading1">NSE DATA</h1>
      <hr />
      <Section
        title="GAINERS-NSE"
        headers={stocksHeaders}
        data={stocksData}
        ChartComponent={ReusableBarChart}
      />
      <Section
        title="TOP-10 NIFTY 50"
        headers={gainersHeading}
        data={gainersData}
        ChartComponent={ReusableSBarChart}
      />
      <Section
        title="NIFTY BANK"
        headers={gainersHeading}
        data={bankData}
        ChartComponent={ReusableSBarChart}
      />
      <Section
        title="NIFTY-FINANCIAL SERVICES"
        headers={gainersHeading}
        data={serviceData}
        ChartComponent={ReusableSBarChart}
      />
    </div>
  );
};

export default NseTable;
