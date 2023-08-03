import { Route, Routes } from "react-router";

import Dashboard from "../pages/Dashboard";
import Instances from "../pages/Instances";

const RoutesMap = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/instances" element={<Instances />} />
      {/* <Route path="/instances/locations" element={<Instances />} />
      <Route path="/instances/types" element={<Instances />} /> */}
    </Routes>
  );
};

export default RoutesMap;
