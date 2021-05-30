import Graph from "../Graph/Graph";
import TableData from "../TableData/TableData";
import "./Visuals.css";

const Visuals = () => {
  return (
    <div className="homepage__sales">
      <Graph />
      <TableData />
    </div>
  );
};

export default Visuals;
