import ReusableSBarChart4 from "../../component/graph/index4";
import {
  sensexData,
  bankexData,
  financial_serviceData,
} from "../../constants/data";

// BseGraphs component definition
const BseGraphs = () => {
  return (
    <div>
      <div style={{ textAlign: "center" }}>
        <h1 className="heading1">BSE DATA GRAPH</h1> {/* Main heading */}
        <hr />
      </div>

      <h2 className="heading2">GRAPHS FOR GAINERS-BSE-SENSEX</h2>
      <ReusableSBarChart4 datasets={[sensexData]} />
      <hr />

      <h2 className="heading2">GRAPHS FOR BSE-BANKEX</h2>
      <ReusableSBarChart4 datasets={[bankexData]} />
      <hr />

      <h2 className="heading2">GRAPHS FOR BSE- FINANCIAL SERVICES GAINERS</h2>
      <ReusableSBarChart4 datasets={[financial_serviceData]} />
      <hr />
    </div>
  );
};

export default BseGraphs;
