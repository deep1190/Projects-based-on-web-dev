import ReusableBarChart from "../../component/graph/index";
import ReusableSBarChart from "../../component/graph/index2";
import {
  stocksData,
  gainersData,
  bankData,
  serviceData,
} from "../../constants/data";

// NseGraphs component definition
const NseGraphs = () => {
  return (
    <div>
      <h1 className="heading1" style={{ textAlign: "center" }}>
        {" "}
        NSE DATA GRAPH {/* Main heading */}
      </h1>
      <hr />

      <h2 className="heading2">GRAPHS FOR GAINERS-NSE</h2>
      <ReusableBarChart datasets={[stocksData]} />
      <hr />

      <h2 className="heading2">GRAPHS FOR TOP-10 NIFTY 50</h2>
      <ReusableSBarChart datasets={[gainersData]} />
      <hr />

      <h2 className="heading2">GRAPHS FOR NIFTY BANK</h2>
      <ReusableSBarChart datasets={[bankData]} />
      <hr />

      <h2 className="heading2">GRAPHS FOR NIFTY-FINANCIAL SERVICES</h2>
      <ReusableSBarChart datasets={[serviceData]} />
      <hr />
    </div>
  );
};

export default NseGraphs;
