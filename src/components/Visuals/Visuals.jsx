import Graph from "../Graph/Graph";
import Table from "../Table/Table";
import "./Visuals.css";

const Visuals = () => {
  return (
    <div className="homepage__sales">
      <Graph />
      <Table />
    </div>
  );
};

export default Visuals;
