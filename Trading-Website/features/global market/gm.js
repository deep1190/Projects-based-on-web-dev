import CustomTable from "../../component/table";
import StackedBarChart from "../../component/graph/index5";
import "../nsetable/nse.css";
import {
  liquidityData,
  liquidityHeaders,
  marketChangeData,
  marketChangeHeaders,
  marketData,
  marketHeaders,
} from "../../constants/data";

// Section component to render table and chart with title
const Section = ({ title, headers, data, ChartComponent }) => (
  <div className="section-container">
    <div className="table-container">
      <h2 className="heading2">{title}</h2>
      <hr />
      <CustomTable headers={headers} data={data} />
    </div>
    <div className="chart-container">
      <ChartComponent data={data} />
    </div>
  </div>
);

// GmTable component to display various sections with data and charts
const GmTable = () => {
  return (
    <div className="gm-table">
      <h1 className="heading1">GLOBAL MARKET DATA</h1>
      <hr />
      <Section
        title="GLOBAL INDICATORS"
        headers={marketHeaders}
        data={marketData}
        ChartComponent={StackedBarChart}
      />
      <Section
        title="Money Market and G-Sec - Domestic"
        headers={liquidityHeaders}
        data={liquidityData}
        ChartComponent={StackedBarChart}
      />
      <Section
        title="Equity and Currency Markets - Domestic"
        headers={marketChangeHeaders}
        data={marketChangeData}
        ChartComponent={StackedBarChart}
      />
    </div>
  );
};

export default GmTable;
