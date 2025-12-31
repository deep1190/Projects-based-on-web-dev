import CustomTable from "../../component/table";
import "../nsetable/nse.css";
import {
  sensexData,
  sensexHeaders,
  bankexHeaders,
  bankexData,
  financial_serviceHeaders,
  financial_serviceData,
  indexData,
  indexHeaders,
} from "../../constants/data";
import ReusableBarChart from "../../component/graph/index";
import ReusableSBarChart4 from "../../component/graph/index4";
// Section component to display table and chart for each data section
const Section = ({ title, headers, data, ChartComponent }) => (
  <div className="section-container">
    <div className="table-container">
      <h2 className="heading2">{title}</h2>
      <hr />
      <CustomTable headers={headers} data={data} />{" "}
    </div>
    <div className="chart-container"></div>
    <ChartComponent datasets={[data]} /> <hr />
  </div>
);

// BseTable component definition
const BseTable = () => {
  return (
    <div className="bse-table">
      <div style={{ textAlign: "center" }}>
        <h1 className="heading1">BSE DATA</h1> {/* Main heading */}
      </div>
      <hr />
      <Section
        title="INDEX DATA"
        headers={indexHeaders}
        data={indexData}
        ChartComponent={ReusableBarChart}
      />
      <Section
        title="GAINERS-BSE-SENSEX"
        headers={sensexHeaders}
        data={sensexData}
        ChartComponent={ReusableSBarChart4}
      />
      <Section
        title="BSE-BANKEX"
        headers={bankexHeaders}
        data={bankexData}
        ChartComponent={ReusableSBarChart4}
      />
      <Section
        title="BSE-FINANCIAL SERVICES Gainers"
        headers={financial_serviceHeaders}
        data={financial_serviceData}
        ChartComponent={ReusableSBarChart4}
      />
    </div>
  );
};

export default BseTable;
