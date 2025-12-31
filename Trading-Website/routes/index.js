import { Route, Routes } from "react-router-dom";
import EmployeeTable from "../features/userForm/index";
import ShoppingTable from "../shoppingTable";
import NseTable from "../features/nsetable/nse";
import NseGraphs from "..//features/nsegarph/index";
import BseTable from "../features/bsetable/bse";
import BseGraphs from "../features/bsegraph/bsegraph";
import GmTable from "../features/global market/gm";
import FeedbackForm from "../features/userForm/form";
// RoutesPath component defining application routes
export default function RoutesPath() {
  return (
    <Routes>
      <Route path="/" element={<NseTable />} />
      <Route path="/emp" element={<EmployeeTable />} />
      <Route path="/shopping" element={<ShoppingTable />} />
      <Route path="/NseGraphs" element={<NseGraphs />} />
      <Route path="/bse" element={<BseTable />} />
      <Route path="/BseGraphs" element={<BseGraphs />} />
      <Route path="/globalMarket" element={<GmTable />} />
      <Route path="/feedback" element={<FeedbackForm />} />
    </Routes>
  );
}
